import template from './muwa-facility-menu-index.html.twig';
import './muwa-facility-menu-index.scss';

Shopware.Component.register('muwa-facility-menu-index', {
    template,

    computed: {
        workflowSteps() {
            return ['connections', 'repository', 'backup', 'check', 'restore'];
        },

        sections() {
            return [
                {
                    key: 'backupRepositories',
                    items: ['create', 'paths', 'backup', 'schedule', 'snapshots', 'status'],
                    route: { name: 'muwa.backup.repository.index', params: { tab: 'repositoryList' } }
                },
                {
                    key: 'databaseConnections',
                    items: ['purpose', 'check', 'password', 'delete'],
                    route: { name: 'muwa.backup.repository.index', params: { tab: 'databaseConnectionList' } }
                },
                {
                    key: 's3Connections',
                    items: ['purpose', 'target', 'worker', 'safeguards'],
                    route: { name: 'muwa.backup.repository.index', params: { tab: 's3ConnectionList' } }
                }
            ];
        },

        notes() {
            return ['password', 'worker', 'dashboard', 'cleanup'];
        }
    },

    metaInfo() {
        return {
            title: this.$createTitle()
        };
    }
});

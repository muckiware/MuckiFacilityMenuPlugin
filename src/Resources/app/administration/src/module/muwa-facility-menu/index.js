import './page/muwa-facility-menu-index';

import deDE from './snippet/de-DE.json';
import enGB from './snippet/en-GB.json';

Shopware.Module.register('muwa-facility-menu', {

    type: 'core',
    name: 'muwaFacilityMenu',
    title: 'muwa-facility-menu.general.mainMenuLabel',
    description: 'muwa-facility-menu.general.description',
    color: '#c04d01',
    icon: 'regular-cog',

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },
    routes: {
        index: {
            component: 'muwa-facility-menu-index',
            path: 'index',
            meta: {
                privilege: 'muwa_backup_repository.viewer'
            }
        }
    },
    navigation: [
        {
            id: 'muwa-facility',
            label: 'muwa-facility-menu.general.mainMenuLabel',
            color: '#ff9800',
            icon: 'regular-cog',
            position: 10
        },
        {
            id: 'muwa-facility-menu-index',
            label: 'muwa-facility-menu.navigation.overview',
            color: '#ff9800',
            path: 'muwa.facility.menu.index',
            parent: 'muwa-facility',
            position: 10,
            privilege: 'muwa_backup_repository.viewer'
        },
        {
            id: 'muwa-facility-backup-repository',
            label: 'muwa-facility-menu.navigation.backupRepositories',
            color: '#ff9800',
            path: 'muwa.backup.repository.index',
            parent: 'muwa-facility',
            position: 20,
            privilege: 'muwa_backup_repository.viewer'
        }
    ]
});

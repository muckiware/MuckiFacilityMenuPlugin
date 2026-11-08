import template from './muwa-facility-menu-index.html.twig';

Shopware.Component.register('muwa-facility-menu-index', {
    template,

    metaInfo() {
        return {
            title: this.$createTitle()
        };
    }
});

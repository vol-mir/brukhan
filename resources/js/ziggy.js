const Ziggy = {
    url: 'http:\/\/brukhan.local',
    port: null,
    defaults: {},
    routes: {
        'filament.exports.download': {
            uri: 'filament\/exports\/{export}\/download',
            methods: ['GET', 'HEAD'],
            parameters: ['export'],
            bindings: { export: 'id' },
        },
        'filament.imports.failed-rows.download': {
            uri: 'filament\/imports\/{import}\/failed-rows\/download',
            methods: ['GET', 'HEAD'],
            parameters: ['import'],
            bindings: { import: 'id' },
        },
        'filament.admin.auth.login': {
            uri: 'admin\/login',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.auth.logout': {
            uri: 'admin\/logout',
            methods: ['POST'],
        },
        'filament.admin.pages.dashboard': {
            uri: 'admin',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.blog-posts.index': {
            uri: 'admin\/blog-posts',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.blog-posts.create': {
            uri: 'admin\/blog-posts\/create',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.blog-posts.edit': {
            uri: 'admin\/blog-posts\/{record}\/edit',
            methods: ['GET', 'HEAD'],
            parameters: ['record'],
        },
        'filament.admin.resources.blog-posts.view': {
            uri: 'admin\/blog-posts\/{record}',
            methods: ['GET', 'HEAD'],
            parameters: ['record'],
        },
        'filament.admin.resources.brands.index': {
            uri: 'admin\/brands',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.brands.create': {
            uri: 'admin\/brands\/create',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.brands.edit': {
            uri: 'admin\/brands\/{record}\/edit',
            methods: ['GET', 'HEAD'],
            parameters: ['record'],
        },
        'filament.admin.resources.categories.index': {
            uri: 'admin\/categories',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.categories.create': {
            uri: 'admin\/categories\/create',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.categories.edit': {
            uri: 'admin\/categories\/{record}\/edit',
            methods: ['GET', 'HEAD'],
            parameters: ['record'],
        },
        'filament.admin.resources.contacts.index': {
            uri: 'admin\/contacts',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.contacts.create': {
            uri: 'admin\/contacts\/create',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.contacts.edit': {
            uri: 'admin\/contacts\/{record}\/edit',
            methods: ['GET', 'HEAD'],
            parameters: ['record'],
        },
        'filament.admin.resources.contact-types.index': {
            uri: 'admin\/contact-types',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.contact-types.create': {
            uri: 'admin\/contact-types\/create',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.contact-types.edit': {
            uri: 'admin\/contact-types\/{record}\/edit',
            methods: ['GET', 'HEAD'],
            parameters: ['record'],
        },
        'filament.admin.resources.customers.index': {
            uri: 'admin\/customers',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.customers.create': {
            uri: 'admin\/customers\/create',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.customers.edit': {
            uri: 'admin\/customers\/{record}\/edit',
            methods: ['GET', 'HEAD'],
            parameters: ['record'],
        },
        'filament.admin.resources.leads.index': {
            uri: 'admin\/leads',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.leads.create': {
            uri: 'admin\/leads\/create',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.leads.edit': {
            uri: 'admin\/leads\/{record}\/edit',
            methods: ['GET', 'HEAD'],
            parameters: ['record'],
        },
        'filament.admin.resources.lead-types.index': {
            uri: 'admin\/lead-types',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.lead-types.create': {
            uri: 'admin\/lead-types\/create',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.lead-types.edit': {
            uri: 'admin\/lead-types\/{record}\/edit',
            methods: ['GET', 'HEAD'],
            parameters: ['record'],
        },
        'filament.admin.resources.orders.index': {
            uri: 'admin\/orders',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.orders.create': {
            uri: 'admin\/orders\/create',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.orders.edit': {
            uri: 'admin\/orders\/{record}\/edit',
            methods: ['GET', 'HEAD'],
            parameters: ['record'],
        },
        'filament.admin.resources.pages.index': {
            uri: 'admin\/pages',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.pages.create': {
            uri: 'admin\/pages\/create',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.pages.edit': {
            uri: 'admin\/pages\/{record}\/edit',
            methods: ['GET', 'HEAD'],
            parameters: ['record'],
        },
        'filament.admin.resources.products.index': {
            uri: 'admin\/products',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.products.create': {
            uri: 'admin\/products\/create',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.products.edit': {
            uri: 'admin\/products\/{record}\/edit',
            methods: ['GET', 'HEAD'],
            parameters: ['record'],
        },
        'filament.admin.resources.settings.index': {
            uri: 'admin\/settings',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.social-networks.index': {
            uri: 'admin\/social-networks',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.social-networks.create': {
            uri: 'admin\/social-networks\/create',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.social-networks.edit': {
            uri: 'admin\/social-networks\/{record}\/edit',
            methods: ['GET', 'HEAD'],
            parameters: ['record'],
        },
        'filament.admin.resources.tags.index': {
            uri: 'admin\/tags',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.tags.create': {
            uri: 'admin\/tags\/create',
            methods: ['GET', 'HEAD'],
        },
        'filament.admin.resources.tags.edit': {
            uri: 'admin\/tags\/{record}\/edit',
            methods: ['GET', 'HEAD'],
            parameters: ['record'],
        },
        'livewire.update': { uri: 'livewire\/update', methods: ['POST'] },
        'livewire.upload-file': {
            uri: 'livewire\/upload-file',
            methods: ['POST'],
        },
        'livewire.preview-file': {
            uri: 'livewire\/preview-file\/{filename}',
            methods: ['GET', 'HEAD'],
            parameters: ['filename'],
        },
        'log-viewer.hosts': {
            uri: 'admin\/log-viewer\/api\/hosts',
            methods: ['GET', 'HEAD'],
        },
        'log-viewer.folders': {
            uri: 'admin\/log-viewer\/api\/folders',
            methods: ['GET', 'HEAD'],
        },
        'log-viewer.folders.request-download': {
            uri: 'admin\/log-viewer\/api\/folders\/{folderIdentifier}\/download\/request',
            methods: ['GET', 'HEAD'],
            parameters: ['folderIdentifier'],
        },
        'log-viewer.folders.clear-cache': {
            uri: 'admin\/log-viewer\/api\/folders\/{folderIdentifier}\/clear-cache',
            methods: ['POST'],
            parameters: ['folderIdentifier'],
        },
        'log-viewer.folders.delete': {
            uri: 'admin\/log-viewer\/api\/folders\/{folderIdentifier}',
            methods: ['DELETE'],
            parameters: ['folderIdentifier'],
        },
        'log-viewer.files': {
            uri: 'admin\/log-viewer\/api\/files',
            methods: ['GET', 'HEAD'],
        },
        'log-viewer.files.request-download': {
            uri: 'admin\/log-viewer\/api\/files\/{fileIdentifier}\/download\/request',
            methods: ['GET', 'HEAD'],
            parameters: ['fileIdentifier'],
        },
        'log-viewer.files.clear-cache': {
            uri: 'admin\/log-viewer\/api\/files\/{fileIdentifier}\/clear-cache',
            methods: ['POST'],
            parameters: ['fileIdentifier'],
        },
        'log-viewer.files.delete': {
            uri: 'admin\/log-viewer\/api\/files\/{fileIdentifier}',
            methods: ['DELETE'],
            parameters: ['fileIdentifier'],
        },
        'log-viewer.files.clear-cache-all': {
            uri: 'admin\/log-viewer\/api\/clear-cache-all',
            methods: ['POST'],
        },
        'log-viewer.files.delete-multiple-files': {
            uri: 'admin\/log-viewer\/api\/delete-multiple-files',
            methods: ['POST'],
        },
        'log-viewer.logs': {
            uri: 'admin\/log-viewer\/api\/logs',
            methods: ['GET', 'HEAD'],
        },
        'log-viewer.folders.download': {
            uri: 'admin\/log-viewer\/api\/folders\/{folderIdentifier}\/download',
            methods: ['GET', 'HEAD'],
            parameters: ['folderIdentifier'],
        },
        'log-viewer.files.download': {
            uri: 'admin\/log-viewer\/api\/files\/{fileIdentifier}\/download',
            methods: ['GET', 'HEAD'],
            parameters: ['fileIdentifier'],
        },
        'log-viewer.index': {
            uri: 'admin\/log-viewer\/{view?}',
            methods: ['GET', 'HEAD'],
            wheres: { view: '(.*)' },
            parameters: ['view'],
        },
        home: { uri: '\/', methods: ['GET', 'HEAD'] },
        'about-us': { uri: 'about-us', methods: ['GET', 'HEAD'] },
        contacts: { uri: 'contacts', methods: ['GET', 'HEAD'] },
        faq: { uri: 'faq', methods: ['GET', 'HEAD'] },
        'privacy-policy': { uri: 'privacy-policy', methods: ['GET', 'HEAD'] },
        'terms-condition': { uri: 'terms-condition', methods: ['GET', 'HEAD'] },
        'track-order': { uri: 'track-order', methods: ['GET', 'HEAD'] },
        'show-product': {
            uri: 'product\/{slug}',
            methods: ['GET', 'HEAD'],
            parameters: ['slug'],
        },
        'show-category': {
            uri: 'category\/{slug}',
            methods: ['GET', 'HEAD'],
            parameters: ['slug'],
        },
        'api.v1.common.site-info': {
            uri: 'api\/v1\/site-info',
            methods: ['GET', 'HEAD'],
        },
        'api.v1.common.popular-tags': {
            uri: 'api\/v1\/popular-tags',
            methods: ['GET', 'HEAD'],
        },
        'api.v1.product.tags': {
            uri: 'api\/v1\/products\/tags',
            methods: ['GET', 'HEAD'],
        },
        'api.v1.product.get-product': {
            uri: 'api\/v1\/product\/{slug}',
            methods: ['GET', 'HEAD'],
            wheres: { slug: '[a-zA-Z0-9-]+' },
            parameters: ['slug'],
        },
        'api.v1.product.get-products': {
            uri: 'api\/v1\/products',
            methods: ['GET', 'HEAD'],
        },
    },
};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };

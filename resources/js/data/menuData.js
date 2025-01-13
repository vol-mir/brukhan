import { getImagePath } from '@/utils/imageHelper';

export const getMenuItems = () => [
    {
        type: 'link',
        label: 'Home',
        link: 'home',
    },
    {
        type: 'submenu',
        label: 'Categories',
        path: ['categories'],
        megaMenu: true,
        children: [
            {
                type: 'submenu',
                label: 'Classic Variation',
                path: ['categories', 'classic-variation'],
                children: [
                    { type: 'link', label: 'Left sidebar 3 column', link: '#' },
                    { type: 'link', label: 'Left sidebar 4 column', link: '#' },
                    {
                        type: 'link',
                        label: 'Right sidebar 3 column',
                        link: '#',
                    },
                    {
                        type: 'link',
                        label: 'Right sidebar 4 column',
                        link: '#',
                    },
                    { type: 'link', label: 'Full width 4 column', link: '#' },
                ],
            },
            {
                type: 'submenu',
                label: 'Columns Variation',
                path: ['categories', 'columns-variation'],
                children: [
                    {
                        type: 'link',
                        label: 'Banner left sidebar 3 column',
                        link: '#',
                    },
                    {
                        type: 'link',
                        label: 'Banner left sidebar 4 column',
                        link: '#',
                    },
                    {
                        type: 'link',
                        label: 'Banner right sidebar 3 column',
                        link: '#',
                    },
                    {
                        type: 'link',
                        label: 'Banner right sidebar 4 column',
                        link: '#',
                    },
                    {
                        type: 'link',
                        label: 'Banner Full width 4 column',
                        link: '#',
                    },
                ],
            },
            {
                type: 'submenu',
                label: 'Columns Variation Two',
                path: ['categories', 'columns-variation-two'],
                children: [
                    { type: 'link', label: '3 Columns full width', link: '#' },
                    { type: 'link', label: '4 Columns full width', link: '#' },
                    { type: 'link', label: '5 Columns full width', link: '#' },
                    { type: 'link', label: '6 Columns full width', link: '#' },
                    { type: 'link', label: 'Banner 3 Columns', link: '#' },
                ],
            },
            {
                type: 'submenu',
                label: 'List Variation',
                path: ['categories', 'list-variation'],
                children: [
                    { type: 'link', label: 'Shop left sidebar', link: '#' },
                    { type: 'link', label: 'Shop right sidebar', link: '#' },
                    { type: 'link', label: 'Banner left sidebar', link: '#' },
                    { type: 'link', label: 'Banner right sidebar', link: '#' },
                    { type: 'link', label: 'Full width 2 columns', link: '#' },
                    {
                        type: 'banner',
                        src: getImagePath('menu-banner', '1.jpg'),
                        href: '#',
                    },
                ],
            },
        ],
    },
    {
        type: 'submenu',
        label: 'Products',
        path: ['products'],
        children: [
            {
                type: 'submenu',
                label: 'Product Page',
                path: ['products', 'product-page'],
                children: [
                    { type: 'link', label: 'Product left sidebar', link: '#' },
                    { type: 'link', label: 'Product right sidebar', link: '#' },
                ],
            },
            {
                type: 'submenu',
                label: 'Product 360',
                path: ['products', 'product-360'],
                children: [
                    { type: 'link', label: '360 left sidebar', link: '#' },
                    { type: 'link', label: '360 right sidebar', link: '#' },
                ],
            },
            {
                type: 'submenu',
                label: 'Product vodeo',
                path: ['products', 'product-vodeo'],
                children: [
                    { type: 'link', label: 'vodeo left sidebar', link: '#' },
                    { type: 'link', label: 'vodeo right sidebar', link: '#' },
                ],
            },
            {
                type: 'submenu',
                label: 'Product gallery',
                path: ['products', 'product-gallery'],
                children: [
                    { type: 'link', label: 'gallery left sidebar', link: '#' },
                    { type: 'link', label: 'gallery right sidebar', link: '#' },
                ],
            },
            { type: 'link', label: 'Product full width', link: '#' },
            { type: 'link', label: '360 full width', link: '#' },
            { type: 'link', label: 'Video full width', link: '#' },
            { type: 'link', label: 'Gallery full width', link: '#' },
        ],
    },
    {
        type: 'submenu',
        label: 'Others',
        path: ['others'],
        children: [
            {
                type: 'submenu',
                label: 'Mail Confirmation',
                path: ['others', 'mail-confirmation'],
                children: [
                    { type: 'link', label: 'Mail Confirmation 1', link: '#' },
                    { type: 'link', label: 'Mail Confirmation 2', link: '#' },
                    { type: 'link', label: 'Mail Confirmation 3', link: '#' },
                    { type: 'link', label: 'Mail Confirmation 4', link: '#' },
                    { type: 'link', label: 'Mail Confirmation 5', link: '#' },
                ],
            },
            {
                type: 'submenu',
                label: 'Mail Reset password',
                path: ['others', 'mail-reset-password'],
                children: [
                    { type: 'link', label: 'Reset password 1', link: '#' },
                    { type: 'link', label: 'Reset password 2', link: '#' },
                    { type: 'link', label: 'Reset password 3', link: '#' },
                    { type: 'link', label: 'Reset password 4', link: '#' },
                    { type: 'link', label: 'Reset password 5', link: '#' },
                ],
            },
            {
                type: 'submenu',
                label: 'Mail Promotional',
                path: ['others', 'mail-promotional'],
                children: [
                    { type: 'link', label: 'Offer Mail 1', link: '#' },
                    { type: 'link', label: 'Offer Mail 2', link: '#' },
                    { type: 'link', label: 'Offer Mail 3', link: '#' },
                    { type: 'link', label: 'Offer Mail 4', link: '#' },
                    { type: 'link', label: 'Offer Mail 5', link: '#' },
                    { type: 'link', label: 'Offer Mail 6', link: '#' },
                    { type: 'link', label: 'Offer Mail 7', link: '#' },
                    { type: 'link', label: 'Offer Mail 8', link: '#' },
                ],
            },
            {
                type: 'submenu',
                label: 'Vendor Account Pages',
                path: ['others', 'vendor-account-pages'],
                children: [
                    { type: 'link', label: 'Vendor Dashboard', link: '#' },
                    { type: 'link', label: 'Vendor Profile', link: '#' },
                    { type: 'link', label: 'Vendor Uploads', link: '#' },
                    { type: 'link', label: 'Vendor Settings', link: '#' },
                ],
            },
            {
                type: 'submenu',
                label: 'User Account Pages',
                path: ['others', 'user-account-pages'],
                children: [
                    { type: 'link', label: 'User Profile', link: '#' },
                    { type: 'link', label: 'User History', link: '#' },
                    { type: 'link', label: 'Wishlist', link: '#' },
                    { type: 'link', label: 'Track Order', link: '#' },
                    { type: 'link', label: 'User Invoice', link: '#' },
                ],
            },
            {
                type: 'submenu',
                label: 'Construction Pages',
                path: ['others', 'construction-pages'],
                children: [
                    { type: 'link', label: '404 Error Page', link: '#' },
                    { type: 'link', label: 'Maintenance Page', link: '#' },
                    { type: 'link', label: 'Comming Soon Page', link: '#' },
                ],
            },
            {
                type: 'submenu',
                label: 'Vendor Catalog Pages',
                path: ['others', 'vendor-catalog-pages'],
                children: [
                    { type: 'link', label: 'Catalog Single Vendor', link: '#' },
                    { type: 'link', label: 'Catalog Multi Vendor', link: '#' },
                ],
            },
        ],
    },
    {
        type: 'submenu',
        label: 'Pages',
        path: ['pages'],
        children: [
            { type: 'link', label: 'About Us', link: 'about-us' },
            { type: 'link', label: 'Contact Us', link: 'contacts' },
            { type: 'link', label: 'FAQ', link: 'faq' },
            { type: 'link', label: 'Track Order', link: 'track-order' },
            { type: 'link', label: 'Terms Condition', link: 'terms-condition' },
            { type: 'link', label: 'Privacy Policy', link: 'privacy-policy' },
        ],
    },
    {
        type: 'submenu',
        label: 'Blog',
        path: ['blog'],
        children: [
            { type: 'link', label: 'Blog left sidebar', link: '#' },
            { type: 'link', label: 'Blog right sidebar', link: '#' },
            { type: 'link', label: 'Blog detail left sidebar', link: '#' },
            { type: 'link', label: 'Blog detail right sidebar', link: '#' },
            { type: 'link', label: 'Blog full width', link: '#' },
            { type: 'link', label: 'Blog detail full width', link: '#' },
        ],
    },
    {
        type: 'submenu',
        label: 'Elements',
        path: ['elements'],
        children: [
            { type: 'link', label: 'Products', link: '#' },
            { type: 'link', label: 'Typography', link: '#' },
            { type: 'link', label: 'Titles', link: '#' },
            { type: 'link', label: 'Categories', link: '#' },
            { type: 'link', label: 'Buttons', link: '#' },
            { type: 'link', label: 'Tabs', link: '#' },
            { type: 'link', label: 'Accordions', link: '#' },
            { type: 'link', label: 'Blogs', link: '#' },
        ],
    },
    { type: 'link', label: 'Hot Offers', link: '#' },
];

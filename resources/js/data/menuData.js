import { getImagePath } from '@/utils/imageHelper';

export const getMenuItems = (t) => [
    {
        type: 'link',
        label: t('menu.home'),
        link: '/',
    },
    {
        type: 'submenu',
        label: t('menu.categories'),
        path: ['categories'],
        megaMenu: true,
        children: [
            {
                type: 'submenu',
                label: 'Classic Variation',
                path: ['categories', 'classic-variation'],
                children: [
                    {
                        type: 'link',
                        label: 'Left sidebar 3 column',
                        link: '#',
                    },
                    {
                        type: 'link',
                        label: 'Left sidebar 4 column',
                        link: '#',
                    },
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
                    {
                        type: 'link',
                        label: 'Full width 4 column',
                        link: '#',
                    },
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
                    {
                        type: 'link',
                        label: '3 Columns full width',
                        link: '#',
                    },
                    {
                        type: 'link',
                        label: '4 Columns full width',
                        link: '#',
                    },
                    {
                        type: 'link',
                        label: '5 Columns full width',
                        link: '#',
                    },
                    {
                        type: 'link',
                        label: '6 Columns full width',
                        link: '#',
                    },
                    { type: 'link', label: 'Banner 3 Columns', link: '#' },
                ],
            },
            {
                type: 'submenu',
                label: 'List Variation',
                path: ['categories', 'list-variation'],
                children: [
                    { type: 'link', label: 'Shop left sidebar', link: '#' },
                    {
                        type: 'link',
                        label: 'Shop right sidebar',
                        link: '#',
                    },
                    {
                        type: 'link',
                        label: 'Banner left sidebar',
                        link: '#',
                    },
                    {
                        type: 'link',
                        label: 'Banner right sidebar',
                        link: '#',
                    },
                    {
                        type: 'link',
                        label: 'Full width 2 columns',
                        link: '#',
                    },
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
        type: 'link',
        label: t('menu.about_us'),
        link: 'about-us',
    },
    {
        type: 'submenu',
        label: t('menu.company'),
        path: ['pages'],
        children: [
            {
                type: 'link',
                label: t('menu.about_us'),
                link: 'about-us'
            },
            {
                type: 'link',
                label: t('menu.faq'),
                link: 'faq'
            },
            {
                type: 'link',
                label: t('menu.delivery_information'),
                link: 'track-order'
            },
            {
                type: 'link',
                label: t('menu.contacts'),
                link: 'contacts'
            },
        ],
    },
    {
        type: 'submenu',
        label: t('menu.to_the_client'),
        path: ['pages'],
        children: [
            {
                type: 'link',
                label: t('menu.privacy_policy'),
                link: 'privacy-policy',
            },
            {
                type: 'link',
                label: t('menu.cookie_processing_policy'),
                link: 'terms-condition',
            },
            {
                type: 'link',
                label: t('menu.bank_details'),
                link: 'terms-condition',
            },
        ],
    },
    {
        type: 'link',
        label: t('menu.contacts'),
        link: 'contacts',
    },
];

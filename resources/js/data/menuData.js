const splitCategoriesIntoColumns = (
    categories,
    columns = 4,
    maxPerColumn = 8
) => {
    const result = Array.from({ length: columns }, () => []);
    let columnIndex = 0;

    categories.forEach((category) => {
        if (result[columnIndex].length >= maxPerColumn) {
            columnIndex++;
        }
        result[columnIndex].push(category);
    });

    return result.filter((column) => column.length > 0);
};

export const getMenuItems = (t, categories) => {
    const categoryColumns = splitCategoriesIntoColumns(categories);

    return [
        {
            type: 'link',
            label: t('menu.home'),
            link: 'home',
        },
        {
            type: 'submenu',
            label: t('menu.categories'),
            path: ['categories'],
            megaMenu: true,
            children: categoryColumns.map((column, index) => ({
                type: 'submenu',
                path: [`categories`, `column-${index + 1}`],
                children: column.map((category) => ({
                    type: 'link',
                    label: category.name,
                    link: category.link,
                    slug: category.slug,
                })),
            })),
        },
        {
            type: 'link',
            label: t('menu.about_us'),
            link: 'about-us',
        },
        {
            type: 'submenu',
            label: t('menu.company'),
            path: ['companies'],
            children: [
                {
                    type: 'link',
                    label: t('menu.about_us'),
                    link: 'about-us',
                },
                {
                    type: 'link',
                    label: t('menu.faq'),
                    link: 'faq',
                },
                {
                    type: 'link',
                    label: t('menu.delivery_information'),
                    link: 'track-order',
                },
                {
                    type: 'link',
                    label: t('menu.contacts'),
                    link: 'contacts',
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
                    label: t('menu.policy_cookies'),
                    link: 'policy-cookies',
                },
                {
                    type: 'link',
                    label: t('menu.bank_details'),
                    link: 'bank-details',
                },
            ],
        },
        {
            type: 'link',
            label: t('menu.contacts'),
            link: 'contacts',
        },
    ];
};

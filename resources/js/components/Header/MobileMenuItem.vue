<script>
    import { inject } from 'vue';
    import { Link as InertiaLink } from '@inertiajs/vue3';

    export default {
        name: 'MobileMenuItem',
        components: {
            InertiaLink,
        },
        props: {
            item: {
                type: Object,
                required: true,
            },
            isSubMenuVisible: {
                type: Function,
                required: true,
            },
            toggleSubMenu: {
                type: Function,
                required: true,
            },
        },
        setup() {
            const route = inject('route');

            return {
                route,
            };
        },
        computed: {
            isSubMenu() {
                return this.item.type === 'submenu';
            },
            isLink() {
                return this.item.type === 'link';
            },
            isBanner() {
                return this.item.type === 'banner';
            },
        },
    };
</script>

<template>
    <li
        v-if="item.label"
        :class="{ active: isSubMenu && isSubMenuVisible(item.path) }"
        @click="isSubMenu && toggleSubMenu(item.path, $event)"
    >
        <InertiaLink
            v-if="isLink"
            :href="
                item.slug
                    ? route(item.link, { slug: item.slug })
                    : route(item.link)
            "
        >
            {{ item.label }}
        </InertiaLink>

        <a v-if="isBanner" :href="item.href" class="p-0">
            <img class="img-responsive" :src="item.src" alt="" loading="lazy" />
        </a>

        <span v-if="isSubMenu" class="menu-toggle"></span>
        <a v-if="isSubMenu" href="javascript:void(0)" class="toggle-menu-link">
            {{ item.label }}
        </a>

        <ul
            v-if="isSubMenu"
            v-show="isSubMenuVisible(item.path)"
            class="sub-menu"
            :style="{ display: isSubMenuVisible(item.path) ? 'block' : 'none' }"
        >
            <MobileMenuItem
                v-for="(child, childIndex) in item.children"
                :key="childIndex"
                :item="child"
                :is-sub-menu-visible="isSubMenuVisible"
                :toggle-sub-menu="toggleSubMenu"
            />
        </ul>
    </li>
    <MobileMenuItem
        v-else-if="isSubMenu"
        v-for="(child, childIndex) in item.children"
        :key="childIndex"
        :item="child"
        :is-sub-menu-visible="isSubMenuVisible"
        :toggle-sub-menu="toggleSubMenu"
    />
</template>

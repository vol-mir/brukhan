<script>
    import { Link as InertiaLink } from '@inertiajs/vue3';

    export default {
        name: 'MenuItem',
        components: {
            InertiaLink,
        },
        props: {
            item: {
                type: Object,
                required: true,
            },
            isChild: {
                type: Boolean,
                default: false,
            },
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
        :class="{
            dropdown: isSubMenu && !item.megaMenu,
            'dropdown position-static': isSubMenu && item.megaMenu,
        }"
    >
        <InertiaLink v-if="isLink" :href="item.link">
            {{ item.label }}
        </InertiaLink>

        <a v-if="isBanner" :href="item.link" class="p-0">
            <img class="img-responsive" :src="item.src" alt="" loading="lazy" />
        </a>

        <a v-if="isSubMenu" href="javascript:void(0)">{{ item.label }}</a>
        <ul
            v-if="isSubMenu"
            :class="{
                'sub-menu': isSubMenu && !item.megaMenu,
                'mega-menu d-block': isSubMenu && item.megaMenu,
            }"
        >
            <template v-if="item.megaMenu">
                <li class="d-flex">
                    <ul
                        class="d-block"
                        v-for="(child, index) in item.children"
                        :key="index"
                    >
                        <li class="menu_title">
                            <a href="javascript:void(0)">{{ child.label }}</a>
                        </li>

                        <MenuItem
                            v-for="(subChild, subChildIndex) in child.children"
                            :key="subChildIndex"
                            :item="subChild"
                        />
                    </ul>
                </li>
            </template>

            <template v-else>
                <template v-for="(child, index) in item.children" :key="index">
                    <template v-if="child.type === 'submenu'">
                        <li
                            :class="{
                                'dropdown position-static':
                                    child.type === 'submenu',
                            }"
                        >
                            <a href="javascript:void(0)">
                                {{ child.label }}
                                <i class="ecicon eci-angle-right"></i>
                            </a>
                            <ul class="sub-menu sub-menu-child">
                                <MenuItem
                                    v-for="(
                                        subChild, subChildIndex
                                    ) in child.children"
                                    :key="subChildIndex"
                                    :item="subChild"
                                />
                            </ul>
                        </li>
                    </template>
                    <template v-else>
                        <MenuItem :key="index" :item="child" />
                    </template>
                </template>
            </template>
        </ul>
    </li>
</template>

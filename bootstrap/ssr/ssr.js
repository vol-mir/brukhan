import { useSSRContext, mergeProps, ref, onMounted, onBeforeUnmount, resolveComponent, withCtx, createVNode, inject, createTextVNode, toDisplayString, computed, onUnmounted, watch, openBlock, createBlock, Fragment, renderList, unref, createSSRApp, h } from "vue";
import { Link, usePage, Head, router, createInertiaApp } from "@inertiajs/vue3";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { defineStore, createPinia } from "pinia";
import { useI18n, createI18n } from "vue-i18n";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Thumbs, FreeMode } from "swiper/modules";
import DOMPurify from "dompurify";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { ZiggyVue } from "ziggy-js";
import AOS from "aos";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$z = {
  name: "AppLoader",
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  }
};
function _sfc_ssrRender$y(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.loading) {
    _push(`<div${ssrRenderAttrs(mergeProps({ id: "ec-overlay" }, _attrs))}><span class="loader_img"></span></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/AppLoader.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const AppLoader = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$y]]);
const getImagePath = (folder, name) => new URL(`/resources/images/${folder}/${name}`, import.meta.url).href;
const useSidebarStore = defineStore("sidebar", {
  state: () => ({
    isMobileMenuOpen: false,
    isMobileMenuOpened: false
  }),
  actions: {
    toggleMobileMenu() {
      this.isMobileMenuOpened = !this.$state.isMobileMenuOpen;
      this.isMobileMenuOpen = !this.$state.isMobileMenuOpen;
    },
    openMobileMenu() {
      this.isMobileMenuOpen = true;
      this.isMobileMenuOpened = true;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
    resetMobileMenuOpened() {
      this.isMobileMenuOpened = false;
    }
  }
});
class ApiClient {
  static async get(url, params = {}) {
    try {
      const queryString = new URLSearchParams(params).toString();
      const fullUrl = queryString ? `${url}?${queryString}` : url;
      const response = await fetch(fullUrl);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error in request", error);
      throw error;
    }
  }
}
const useSiteInfoStore = defineStore("siteInfo", {
  state: () => ({
    main_phone: null,
    main_email: null,
    company: null,
    address: null,
    full_name: null,
    description: null,
    bank_details: null,
    social_networks: [],
    brands: [],
    top_categories: [],
    categories: [],
    top_products: [],
    loaded: false,
    loadingPromise: null,
    map: null,
    emails: [],
    phones: []
  }),
  actions: {
    async fetchSiteInfo() {
      if (this.loaded) return;
      if (this.loadingPromise) {
        await this.loadingPromise;
        return;
      }
      try {
        this.loadingPromise = ApiClient.get("/api/v1/site-info").then((response) => {
          this.main_phone = response.main_phone ?? null;
          this.main_email = response.main_email ?? null;
          this.company = response.company ?? null;
          this.address = response.address ?? null;
          this.full_name = response.full_name ?? null;
          this.description = response.description ?? null;
          this.bank_details = response.bank_details ?? null;
          this.social_networks = response.social_networks || [];
          this.brands = response.brands || [];
          this.map = response.map || null;
          this.emails = response.emails || [];
          this.phones = response.phones || [];
          this.top_categories = response.top_categories || [];
          this.categories = response.categories || [];
          this.top_products = response.top_products || [];
          this.loaded = true;
        }).catch((error) => {
          console.error("Error fetching site info:", error);
        }).finally(() => {
          this.loadingPromise = null;
        });
        await this.loadingPromise;
      } catch (error) {
        console.error("Error fetching site info:", error);
      }
    }
  }
});
const _sfc_main$y = {
  name: "HeaderTop",
  setup() {
    const sidebarStore = useSidebarStore();
    const siteInfoStore = useSiteInfoStore();
    const showLanguageDropdown = ref(false);
    const dropdownRef = ref(null);
    const buttonRef = ref(null);
    const getIconPath = (name) => getImagePath("icons", name);
    const toggleDropdown = () => {
      showLanguageDropdown.value = !showLanguageDropdown.value;
    };
    const { locale } = useI18n();
    const activeLanguage = ref(locale.value);
    const changeLanguage = (lang) => {
      if (activeLanguage.value !== lang) {
        activeLanguage.value = lang;
        localStorage.setItem("locale", lang);
        locale.value = lang;
      }
    };
    onMounted(async () => {
      await siteInfoStore.fetchSiteInfo();
      document.addEventListener("click", handleClickOutside);
    });
    const handleClickOutside = (event) => {
      if (dropdownRef.value && !dropdownRef.value.contains(event.target) && buttonRef.value && !buttonRef.value.contains(event.target)) {
        showLanguageDropdown.value = false;
      }
    };
    onBeforeUnmount(() => {
      document.removeEventListener("click", handleClickOutside);
    });
    return {
      sidebarStore,
      getIconPath,
      showLanguageDropdown,
      toggleDropdown,
      changeLanguage,
      locale,
      siteInfoStore,
      dropdownRef,
      buttonRef
    };
  }
};
function _sfc_ssrRender$x(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-top" }, _attrs))} data-v-c22700d5><div class="container" data-v-c22700d5><div class="row align-items-center" data-v-c22700d5><div class="col text-left header-top-left d-none d-lg-block" data-v-c22700d5><div class="header-top-social" data-v-c22700d5><span class="social-text text-upper" data-v-c22700d5>${ssrInterpolate(_ctx.$t("follow_us_on"))}: </span>`);
  if ($setup.siteInfoStore.social_networks) {
    _push(`<ul class="mb-0" data-v-c22700d5><!--[-->`);
    ssrRenderList($setup.siteInfoStore.social_networks, (network) => {
      _push(`<li class="list-inline-item" data-v-c22700d5><a${ssrRenderAttr("href", network.url)}${ssrRenderAttr("aria-label", network.name)} class="${ssrRenderClass("hdr-" + network.slug.toLowerCase())}" target="_blank" rel="noopener noreferrer" data-v-c22700d5><i class="${ssrRenderClass("ecicon eci-" + network.slug)}" data-v-c22700d5></i></a></li>`);
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="col header-top-right d-none d-lg-block" data-v-c22700d5><div class="header-top-lan-curr d-flex justify-content-end" data-v-c22700d5><div class="header-top-lan dropdown" data-v-c22700d5><button class="dropdown-toggle text-upper" aria-haspopup="true"${ssrRenderAttr("aria-expanded", $setup.showLanguageDropdown)} data-v-c22700d5>${ssrInterpolate(_ctx.$t("language"))} <i class="ecicon eci-caret-down" aria-hidden="true" data-v-c22700d5></i></button><template>`);
  if ($setup.showLanguageDropdown) {
    _push(`<ul class="dropdown-menu" data-v-c22700d5><li class="${ssrRenderClass({
      active: _ctx.activeLanguage === "ru"
    })}" data-v-c22700d5><a class="dropdown-item" href="#" data-v-c22700d5>${ssrInterpolate(_ctx.$t("locale.russian"))}</a></li><li class="${ssrRenderClass({
      active: _ctx.activeLanguage === "en"
    })}" data-v-c22700d5><a class="dropdown-item" href="#" data-v-c22700d5>${ssrInterpolate(_ctx.$t("locale.english"))}</a></li></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</template></div></div></div><div class="col d-lg-none" data-v-c22700d5><div class="ec-header-bottons" data-v-c22700d5><a href="javascript:void(0)" class="ec-header-btn ec-side-toggle d-lg-none" data-v-c22700d5><img${ssrRenderAttr("src", $setup.getIconPath("menu.svg"))} class="svg_img header_svg" alt="Menu icon" loading="lazy" data-v-c22700d5></a></div></div></div></div></div>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Header/HeaderTop.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const HeaderTop = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$x], ["__scopeId", "data-v-c22700d5"]]);
const _sfc_main$x = {
  name: "HeaderTop",
  components: {
    InertiaLink: Link
  },
  setup() {
    const getIconPath = (name) => getImagePath("icons", name);
    const getLogoPath = (name) => getImagePath("logo", name);
    return {
      getIconPath,
      getLogoPath
    };
  }
};
function _sfc_ssrRender$w(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InertiaLink = resolveComponent("InertiaLink");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ec-header-bottom d-none d-lg-block" }, _attrs))}><div class="container position-relative"><div class="row"><div class="ec-flex"><div class="align-self-center"><div class="header-logo">`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: _ctx.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", $setup.getLogoPath("logo.png"))} alt="Site Logo" loading="lazy"${_scopeId}><img class="dark-logo"${ssrRenderAttr("src", $setup.getLogoPath("dark-logo.png"))} alt="Site Logo" style="${ssrRenderStyle({ "display": "none" })}" loading="lazy"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: $setup.getLogoPath("logo.png"),
            alt: "Site Logo",
            loading: "lazy"
          }, null, 8, ["src"]),
          createVNode("img", {
            class: "dark-logo",
            src: $setup.getLogoPath("dark-logo.png"),
            alt: "Site Logo",
            style: { "display": "none" },
            loading: "lazy"
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="align-self-center"><div class="header-search"><form class="ec-btn-group-form" action="#"><input class="form-control ec-search-bar"${ssrRenderAttr("placeholder", _ctx.$t("search_products"))} type="text"><button class="submit" type="submit"><img${ssrRenderAttr("src", $setup.getIconPath("search.svg"))} class="svg_img header_svg" alt="Search" loading="lazy"></button></form></div></div><div class="align-self-center"><div class="ec-header-bottons"></div></div></div></div></div></div>`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Header/HeaderBottom.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const HeaderBottom = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$w]]);
const splitCategoriesIntoColumns = (categories, columns = 4, maxPerColumn = 8) => {
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
const getMenuItems = (t, categories) => {
  const categoryColumns = splitCategoriesIntoColumns(categories);
  return [
    {
      type: "link",
      label: t("menu.home"),
      link: "home"
    },
    {
      type: "submenu",
      label: t("menu.categories"),
      path: ["categories"],
      megaMenu: true,
      children: categoryColumns.map((column, index) => ({
        type: "submenu",
        path: [`categories`, `column-${index + 1}`],
        children: column.map((category) => ({
          type: "link",
          label: category.name,
          link: category.link,
          slug: category.slug
        }))
      }))
    },
    {
      type: "link",
      label: t("menu.about_us"),
      link: "about-us"
    },
    {
      type: "submenu",
      label: t("menu.company"),
      path: ["companies"],
      children: [
        {
          type: "link",
          label: t("menu.about_us"),
          link: "about-us"
        },
        {
          type: "link",
          label: t("menu.faq"),
          link: "faq"
        },
        {
          type: "link",
          label: t("menu.delivery"),
          link: "delivery"
        },
        {
          type: "link",
          label: t("menu.contacts"),
          link: "contacts"
        }
      ]
    },
    {
      type: "submenu",
      label: t("menu.to_the_client"),
      path: ["pages"],
      children: [
        {
          type: "link",
          label: t("menu.privacy_policy"),
          link: "privacy-policy"
        },
        {
          type: "link",
          label: t("menu.policy_cookies"),
          link: "policy-cookies"
        },
        {
          type: "link",
          label: t("menu.bank_details"),
          link: "bank-details"
        }
      ]
    },
    {
      type: "link",
      label: t("menu.contacts"),
      link: "contacts"
    }
  ];
};
const _sfc_main$w = {
  name: "MenuItem",
  components: {
    InertiaLink: Link
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    isChild: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const route = inject("route");
    return {
      route
    };
  },
  computed: {
    isSubMenu() {
      return this.item.type === "submenu";
    },
    isLink() {
      return this.item.type === "link";
    },
    isBanner() {
      return this.item.type === "banner";
    }
  }
};
function _sfc_ssrRender$v(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InertiaLink = resolveComponent("InertiaLink");
  const _component_MenuItem = resolveComponent("MenuItem", true);
  _push(`<li${ssrRenderAttrs(mergeProps({
    class: {
      dropdown: $options.isSubMenu && !$props.item.megaMenu,
      "dropdown position-static": $options.isSubMenu && $props.item.megaMenu
    }
  }, _attrs))}>`);
  if ($options.isLink) {
    _push(ssrRenderComponent(_component_InertiaLink, {
      href: $props.item.slug ? $setup.route($props.item.link, { slug: $props.item.slug }) : $setup.route($props.item.link)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate($props.item.label)}`);
        } else {
          return [
            createTextVNode(toDisplayString($props.item.label), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($options.isBanner) {
    _push(`<a${ssrRenderAttr("href", $props.item.link)} class="p-0"><img class="img-responsive"${ssrRenderAttr("src", $props.item.src)} alt="" loading="lazy"></a>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.isSubMenu) {
    _push(`<a href="javascript:void(0)">${ssrInterpolate($props.item.label)}</a>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.isSubMenu) {
    _push(`<ul class="${ssrRenderClass({
      "sub-menu": $options.isSubMenu && !$props.item.megaMenu,
      "mega-menu d-block": $options.isSubMenu && $props.item.megaMenu
    })}">`);
    if ($props.item.megaMenu) {
      _push(`<li class="d-flex"><!--[-->`);
      ssrRenderList($props.item.children, (child, index) => {
        _push(`<ul class="d-block">`);
        if (child.label) {
          _push(`<li class="menu_title"><a href="javascript:void(0)">${ssrInterpolate(child.label)}</a></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(child.children, (subChild, subChildIndex) => {
          _push(ssrRenderComponent(_component_MenuItem, {
            key: subChildIndex,
            item: subChild
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
      });
      _push(`<!--]--></li>`);
    } else {
      _push(`<!--[-->`);
      ssrRenderList($props.item.children, (child, index) => {
        _push(`<!--[-->`);
        if (child.type === "submenu") {
          _push(`<li class="${ssrRenderClass({
            "dropdown position-static": child.type === "submenu"
          })}"><a href="javascript:void(0)">${ssrInterpolate(child.label)} <i class="ecicon eci-angle-right"></i></a><ul class="sub-menu sub-menu-child"><!--[-->`);
          ssrRenderList(child.children, (subChild, subChildIndex) => {
            _push(ssrRenderComponent(_component_MenuItem, {
              key: subChildIndex,
              item: subChild
            }, null, _parent));
          });
          _push(`<!--]--></ul></li>`);
        } else {
          _push(ssrRenderComponent(_component_MenuItem, {
            key: index,
            item: child
          }, null, _parent));
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]-->`);
    }
    _push(`</ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Header/MenuItem.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const MenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$v]]);
const _sfc_main$v = {
  name: "HeaderMainMenu",
  components: {
    MenuItem
  },
  setup() {
    const { t } = useI18n();
    const siteInfoStore = useSiteInfoStore();
    const route = inject("route");
    const isHomePage = ref(false);
    const currentPageUrl = ref(null);
    const getPageData = () => {
      try {
        const page = usePage();
        return page || {};
      } catch {
        return {};
      }
    };
    const normalizeUrl = (url) => {
      if (!url) return "";
      const parsed = new URL(url, window.location.origin);
      return parsed.origin + parsed.pathname.replace(/\/$/, "");
    };
    const categories = ref([]);
    const menuItems = computed(() => getMenuItems(t, categories.value));
    const isScrollingDown = ref(false);
    const isScrolledToTop = ref(true);
    let lastScrollTop = 0;
    const checkIfHomePage = () => {
      const homeRoute = normalizeUrl(route("home"));
      const currentUrl = normalizeUrl(
        currentPageUrl.value || window.location.href
      );
      isHomePage.value = currentUrl === homeRoute;
    };
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      isScrollingDown.value = scrollTop > lastScrollTop;
      isScrolledToTop.value = scrollTop === 0;
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };
    onMounted(async () => {
      window.addEventListener("scroll", onScroll);
      const page = getPageData();
      currentPageUrl.value = (page == null ? void 0 : page.url) || window.location.href;
      checkIfHomePage();
      await siteInfoStore.fetchSiteInfo();
      categories.value = siteInfoStore.categories ?? [];
    });
    onUnmounted(() => window.removeEventListener("scroll", onScroll));
    watch(
      () => getPageData().url,
      (newUrl) => {
        currentPageUrl.value = newUrl;
        checkIfHomePage();
      },
      { immediate: true }
    );
    return {
      menuItems,
      isScrollingDown,
      isScrolledToTop,
      isHomePage
    };
  }
};
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MenuItem = resolveComponent("MenuItem");
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "ec-main-menu-desk",
    class: ["d-none d-lg-block sticky-nav", { menu_fixed: $setup.isScrollingDown || !$setup.isScrolledToTop }]
  }, _attrs))}><div class="container position-relative"><div class="row"><div class="col-md-12 align-self-center"><div class="ec-main-menu"><ul><!--[-->`);
  ssrRenderList($setup.menuItems, (item, index) => {
    _push(ssrRenderComponent(_component_MenuItem, {
      key: index,
      item
    }, null, _parent));
  });
  _push(`<!--]--></ul></div></div></div></div></div>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Header/HeaderMainMenu.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const HeaderMainMenu = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$u]]);
const _sfc_main$u = {
  name: "HeaderResponsiveBottom",
  components: {
    InertiaLink: Link
  },
  setup() {
    const getIconPath = (name) => getImagePath("icons", name);
    const getLogoPath = (name) => getImagePath("logo", name);
    return {
      getIconPath,
      getLogoPath
    };
  }
};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InertiaLink = resolveComponent("InertiaLink");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ec-header-bottom d-lg-none" }, _attrs))}><div class="container position-relative"><div class="row"><div class="col"><div class="header-logo">`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: _ctx.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", $setup.getLogoPath("logo.png"))} alt="Site Logo"${_scopeId}><img class="dark-logo"${ssrRenderAttr("src", $setup.getLogoPath("dark-logo.png"))} alt="Site Logo" style="${ssrRenderStyle({ "display": "none" })}" loading="lazy"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: $setup.getLogoPath("logo.png"),
            alt: "Site Logo"
          }, null, 8, ["src"]),
          createVNode("img", {
            class: "dark-logo",
            src: $setup.getLogoPath("dark-logo.png"),
            alt: "Site Logo",
            style: { "display": "none" },
            loading: "lazy"
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col"><div class="header-search"><form class="ec-btn-group-form" action="#"><input class="form-control ec-search-bar"${ssrRenderAttr("placeholder", _ctx.$t("search_products"))} type="text"><button class="submit" type="submit"><img${ssrRenderAttr("src", $setup.getIconPath("search.svg"))} class="svg_img header_svg" alt="icon" loading="lazy"></button></form></div></div></div></div></div>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Header/HeaderResponsiveBottom.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const HeaderResponsiveBottom = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$t]]);
const _sfc_main$t = {
  name: "MobileMenuItem",
  components: {
    InertiaLink: Link
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    isSubMenuVisible: {
      type: Function,
      required: true
    },
    toggleSubMenu: {
      type: Function,
      required: true
    },
    closeMobileMenu: {
      type: Function,
      required: false
    }
  },
  setup(props) {
    const route = inject("route");
    const handleLinkClick = () => {
      if (typeof props.closeMobileMenu === "function") {
        props.closeMobileMenu();
      }
    };
    return {
      route,
      handleLinkClick
    };
  },
  computed: {
    isSubMenu() {
      return this.item.type === "submenu";
    },
    isLink() {
      return this.item.type === "link";
    },
    isBanner() {
      return this.item.type === "banner";
    }
  }
};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InertiaLink = resolveComponent("InertiaLink");
  const _component_MobileMenuItem = resolveComponent("MobileMenuItem", true);
  if ($props.item.label) {
    _push(`<li${ssrRenderAttrs(mergeProps({
      class: { active: $options.isSubMenu && $props.isSubMenuVisible($props.item.path) }
    }, _attrs))}>`);
    if ($options.isLink) {
      _push(ssrRenderComponent(_component_InertiaLink, {
        href: $props.item.slug ? $setup.route($props.item.link, { slug: $props.item.slug }) : $setup.route($props.item.link),
        onClick: $setup.handleLinkClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate($props.item.label)}`);
          } else {
            return [
              createTextVNode(toDisplayString($props.item.label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    if ($options.isBanner) {
      _push(`<a${ssrRenderAttr("href", $props.item.href)} class="p-0"><img class="img-responsive"${ssrRenderAttr("src", $props.item.src)} alt="" loading="lazy"></a>`);
    } else {
      _push(`<!---->`);
    }
    if ($options.isSubMenu) {
      _push(`<span class="menu-toggle"></span>`);
    } else {
      _push(`<!---->`);
    }
    if ($options.isSubMenu) {
      _push(`<a href="javascript:void(0)" class="toggle-menu-link">${ssrInterpolate($props.item.label)}</a>`);
    } else {
      _push(`<!---->`);
    }
    if ($options.isSubMenu) {
      _push(`<ul style="${ssrRenderStyle([
        $props.isSubMenuVisible($props.item.path) ? null : { display: "none" },
        { display: $props.isSubMenuVisible($props.item.path) ? "block" : "none" }
      ])}" class="sub-menu"><!--[-->`);
      ssrRenderList($props.item.children, (child, childIndex) => {
        _push(ssrRenderComponent(_component_MobileMenuItem, {
          key: childIndex,
          item: child,
          "is-sub-menu-visible": $props.isSubMenuVisible,
          "toggle-sub-menu": $props.toggleSubMenu,
          "close-mobile-menu": $props.closeMobileMenu
        }, null, _parent));
      });
      _push(`<!--]--></ul>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</li>`);
  } else if ($options.isSubMenu) {
    _push(`<!--[-->`);
    ssrRenderList($props.item.children, (child, childIndex) => {
      _push(ssrRenderComponent(_component_MobileMenuItem, {
        key: childIndex,
        item: child,
        "is-sub-menu-visible": $props.isSubMenuVisible,
        "toggle-sub-menu": $props.toggleSubMenu,
        "close-mobile-menu": $props.closeMobileMenu
      }, null, _parent));
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Header/MobileMenuItem.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const MobileMenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$s]]);
const _sfc_main$s = {
  name: "HeaderMobileMenu",
  components: {
    MobileMenuItem
  },
  setup() {
    const sidebarStore = useSidebarStore();
    const mobileMenu = ref(null);
    const showLanguageDropdown = ref(false);
    const activeMenu = ref({});
    const siteInfoStore = useSiteInfoStore();
    const toggleDropdown = () => {
      showLanguageDropdown.value = !showLanguageDropdown.value;
    };
    const { locale } = useI18n();
    const activeLanguage = ref(locale.value);
    const changeLanguage = (lang) => {
      if (activeLanguage.value !== lang) {
        activeLanguage.value = lang;
        localStorage.setItem("locale", lang);
        locale.value = lang;
      }
    };
    const toggleSubMenu = (path, event) => {
      event.stopPropagation();
      if (path && Array.isArray(path)) {
        const fullPath = path.join("/");
        if (event.target.classList.contains("toggle-menu-link") || event.target.classList.contains("menu-toggle")) {
          if (!(fullPath in activeMenu.value)) {
            activeMenu.value[fullPath] = true;
          } else {
            activeMenu.value[fullPath] = !activeMenu.value[fullPath];
          }
          event.preventDefault();
        }
      }
    };
    const isSubMenuVisible = (path) => {
      const fullPath = path.join("/");
      return !!activeMenu.value[fullPath];
    };
    const handleClickOutside = (event) => {
      if (!event.target.closest(".header-top-lan")) {
        showLanguageDropdown.value = false;
      }
      if (!event.target.closest("#ec-mobile-menu")) {
        activeMenu.value = {};
      }
    };
    const closeMenu = (event) => {
      if (sidebarStore.isMobileMenuOpened) {
        sidebarStore.resetMobileMenuOpened();
        return;
      }
      if (sidebarStore.isMobileMenuOpen && mobileMenu.value && !mobileMenu.value.contains(event.target)) {
        sidebarStore.closeMobileMenu();
      }
    };
    onMounted(async () => {
      document.addEventListener("click", closeMenu);
      document.addEventListener("click", handleClickOutside);
      await siteInfoStore.fetchSiteInfo();
      categories.value = siteInfoStore.categories ?? [];
    });
    onBeforeUnmount(() => {
      document.removeEventListener("click", closeMenu);
      document.removeEventListener("click", handleClickOutside);
    });
    const { t } = useI18n();
    const categories = ref([]);
    const menuItems = computed(() => getMenuItems(t, categories.value));
    return {
      sidebarStore,
      mobileMenu,
      closeMenu,
      showLanguageDropdown,
      toggleDropdown,
      changeLanguage,
      locale,
      toggleSubMenu,
      isSubMenuVisible,
      activeMenu,
      menuItems,
      siteInfoStore
    };
  }
};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MobileMenuItem = resolveComponent("MobileMenuItem");
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "ec-mobile-menu",
    class: ["ec-side-cart ec-mobile-menu", { "ec-open": $setup.sidebarStore.isMobileMenuOpen ?? false }],
    ref: "mobileMenu"
  }, _attrs))} data-v-07c6978c><div class="ec-menu-title" data-v-07c6978c><span class="menu_title" data-v-07c6978c>E-Kaufmann</span><button class="ec-close" data-v-07c6978c> × </button></div><div class="ec-menu-inner" data-v-07c6978c><div class="ec-menu-content" data-v-07c6978c><ul data-v-07c6978c><!--[-->`);
  ssrRenderList($setup.menuItems, (item, index) => {
    _push(ssrRenderComponent(_component_MobileMenuItem, {
      key: index,
      item,
      "is-sub-menu-visible": $setup.isSubMenuVisible,
      "toggle-sub-menu": $setup.toggleSubMenu,
      "close-mobile-menu": $setup.sidebarStore.closeMobileMenu
    }, null, _parent));
  });
  _push(`<!--]--></ul></div><div class="header-res-lan-curr" data-v-07c6978c><div class="header-top-lan-curr" data-v-07c6978c><div class="header-top-lan dropdown" data-v-07c6978c><button class="dropdown-toggle text-upper" aria-haspopup="true"${ssrRenderAttr("aria-expanded", $setup.showLanguageDropdown)} data-v-07c6978c>${ssrInterpolate(_ctx.$t("language"))} <i class="ecicon eci-caret-down" aria-hidden="true" data-v-07c6978c></i></button>`);
  if ($setup.showLanguageDropdown) {
    _push(`<ul class="dropdown-menu" data-v-07c6978c><li class="${ssrRenderClass({
      active: _ctx.activeLanguage === "ru"
    })}" data-v-07c6978c><a class="dropdown-item" href="#" data-v-07c6978c>${ssrInterpolate(_ctx.$t("locale.russian"))}</a></li><li class="${ssrRenderClass({
      active: _ctx.activeLanguage === "en"
    })}" data-v-07c6978c><a class="dropdown-item" href="#" data-v-07c6978c>${ssrInterpolate(_ctx.$t("locale.english"))}</a></li></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="header-res-social" data-v-07c6978c><div class="header-top-social" data-v-07c6978c>`);
  if ($setup.siteInfoStore && $setup.siteInfoStore.social_networks) {
    _push(`<ul class="mb-0" data-v-07c6978c><!--[-->`);
    ssrRenderList($setup.siteInfoStore.social_networks || [], (network) => {
      _push(`<li class="list-inline-item" data-v-07c6978c><a class="${ssrRenderClass("hdr-" + network.slug.toLowerCase())}"${ssrRenderAttr("href", network.url)}${ssrRenderAttr("aria-label", network.name)} target="_blank" rel="noopener noreferrer" data-v-07c6978c><i class="${ssrRenderClass("ecicon eci-" + network.slug)}" data-v-07c6978c></i></a></li>`);
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Header/HeaderMobileMenu.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const HeaderMobileMenu = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$r], ["__scopeId", "data-v-07c6978c"]]);
const _sfc_main$r = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "ec-header" }, _attrs))}>`);
      _push(ssrRenderComponent(HeaderTop, null, null, _parent));
      _push(ssrRenderComponent(HeaderBottom, null, null, _parent));
      _push(ssrRenderComponent(HeaderResponsiveBottom, null, null, _parent));
      _push(ssrRenderComponent(HeaderMainMenu, null, null, _parent));
      _push(ssrRenderComponent(HeaderMobileMenu, null, null, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Header/AppHeader.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = {
  name: "SideOverlay",
  setup() {
    const sidebarStore = useSidebarStore();
    return {
      sidebarStore
    };
  },
  computed: {
    overlayStyle() {
      return {
        opacity: this.sidebarStore.isMobileMenuOpen ? 1 : 0,
        pointerEvents: this.sidebarStore.isMobileMenuOpen ? "auto" : "none"
      };
    }
  }
};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "ec-side-cart-overlay",
    style: $options.overlayStyle
  }, _attrs))} data-v-9db8e227></div>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/SideOverlay.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const SideOverlay = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$q], ["__scopeId", "data-v-9db8e227"]]);
const _sfc_main$p = {
  name: "AppFooter",
  components: {
    InertiaLink: Link
  },
  setup() {
    const route = inject("route");
    const sidebarStore = useSidebarStore();
    const siteInfoStore = useSiteInfoStore();
    const getIconPath = (name) => getImagePath("icons", name);
    const getLogoPath = (name) => getImagePath("logo", name);
    onMounted(async () => {
      await siteInfoStore.fetchSiteInfo();
    });
    return {
      route,
      sidebarStore,
      getIconPath,
      getLogoPath,
      siteInfoStore
    };
  },
  data() {
    return {
      activeIndex: null
    };
  },
  computed: {
    currentYear() {
      return (/* @__PURE__ */ new Date()).getFullYear();
    }
  },
  methods: {
    toggleDropdown(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    }
  }
};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InertiaLink = resolveComponent("InertiaLink");
  _push(`<!--[--><footer class="ec-footer section-space-mt" data-v-1e85e613><div class="footer-container" data-v-1e85e613><div class="footer-offer" data-v-1e85e613><div class="container" data-v-1e85e613><div class="row" data-v-1e85e613><div class="text-center footer-off-msg" data-v-1e85e613><span data-v-1e85e613>${ssrInterpolate(_ctx.$t("any_questions"))}</span><a${ssrRenderAttr("href", "tel:" + $setup.siteInfoStore.main_phone)} data-v-1e85e613>${ssrInterpolate($setup.siteInfoStore.main_phone)}</a></div></div></div></div><div class="footer-top section-space-footer-p" data-v-1e85e613><div class="container" data-v-1e85e613><div class="row" data-v-1e85e613><div class="col-sm-12 col-lg-3 ec-footer-contact" data-v-1e85e613><div class="ec-footer-widget" data-v-1e85e613><div class="ec-footer-logo" data-v-1e85e613>`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: $setup.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr(
          "src",
          $setup.getLogoPath("footer-logo.png")
        )}${ssrRenderAttr("alt", $setup.siteInfoStore.full_name)} loading="lazy" data-v-1e85e613${_scopeId}><img class="dark-footer-logo"${ssrRenderAttr("src", $setup.getLogoPath("dark-logo.png"))}${ssrRenderAttr("alt", $setup.siteInfoStore.social_networks)} style="${ssrRenderStyle({ "display": "none" })}" loading="lazy" data-v-1e85e613${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: $setup.getLogoPath("footer-logo.png"),
            alt: $setup.siteInfoStore.full_name,
            loading: "lazy"
          }, null, 8, ["src", "alt"]),
          createVNode("img", {
            class: "dark-footer-logo",
            src: $setup.getLogoPath("dark-logo.png"),
            alt: $setup.siteInfoStore.social_networks,
            style: { "display": "none" },
            loading: "lazy"
          }, null, 8, ["src", "alt"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><h4 class="ec-footer-heading" data-v-1e85e613>${ssrInterpolate(_ctx.$t("contact_us"))} <div class="ec-heading-res" data-v-1e85e613><i class="ecicon eci-angle-down" data-v-1e85e613></i></div></h4><div class="ec-footer-links ec-footer-dropdown" style="${ssrRenderStyle($data.activeIndex === "contacts" ? null : { display: "none" })}" data-v-1e85e613><ul class="align-items-center" data-v-1e85e613><li class="ec-footer-link" data-v-1e85e613>${ssrInterpolate($setup.siteInfoStore.address)}</li><li class="ec-footer-link" data-v-1e85e613><span data-v-1e85e613>${ssrInterpolate(_ctx.$t("call_us"))}: </span><a${ssrRenderAttr(
    "href",
    "tel:" + $setup.siteInfoStore.main_phone
  )} data-v-1e85e613>${ssrInterpolate($setup.siteInfoStore.main_phone)}</a></li><li class="ec-footer-link" data-v-1e85e613><span data-v-1e85e613>${ssrInterpolate(_ctx.$t("email"))}:</span><a${ssrRenderAttr(
    "href",
    "mailto:" + $setup.siteInfoStore.main_email
  )} data-v-1e85e613>${ssrInterpolate($setup.siteInfoStore.main_email)}</a></li></ul></div></div></div><div class="col-sm-12 col-lg-3 ec-footer-info" data-v-1e85e613><div class="ec-footer-widget" data-v-1e85e613><h4 class="ec-footer-heading" data-v-1e85e613>${ssrInterpolate(_ctx.$t("information"))} <div class="ec-heading-res" data-v-1e85e613><i class="ecicon eci-angle-down" data-v-1e85e613></i></div></h4><div class="ec-footer-links ec-footer-dropdown" style="${ssrRenderStyle($data.activeIndex === "information" ? null : { display: "none" })}" data-v-1e85e613><ul class="align-items-center" data-v-1e85e613><li class="ec-footer-link" data-v-1e85e613>`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: $setup.route("about-us")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("page.about_us"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("page.about_us")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-footer-link" data-v-1e85e613>`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: $setup.route("faq")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("page.faq"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("page.faq")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-footer-link" data-v-1e85e613>`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: $setup.route("delivery")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("page.delivery"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("page.delivery")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-footer-link" data-v-1e85e613>`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: $setup.route("contacts")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("page.contact_us"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("page.contact_us")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div><div class="col-sm-12 col-lg-3 ec-footer-service" data-v-1e85e613><div class="ec-footer-widget" data-v-1e85e613><h4 class="ec-footer-heading" data-v-1e85e613>${ssrInterpolate(_ctx.$t("to_the_client"))} <div class="ec-heading-res" data-v-1e85e613><i class="ecicon eci-angle-down" data-v-1e85e613></i></div></h4><div class="ec-footer-links ec-footer-dropdown" style="${ssrRenderStyle($data.activeIndex === "services" ? null : { display: "none" })}" data-v-1e85e613><ul class="align-items-center" data-v-1e85e613><li class="ec-footer-link" data-v-1e85e613>`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: $setup.route("privacy-policy")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t(
          "page.privacy_policy"
        ))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t(
            "page.privacy_policy"
          )), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-footer-link" data-v-1e85e613>`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: $setup.route("policy-cookies")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t(
          "page.policy_cookies"
        ))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t(
            "page.policy_cookies"
          )), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-footer-link" data-v-1e85e613>`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: $setup.route("bank-details")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("page.bank_details"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("page.bank_details")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div><div class="col-sm-12 col-lg-3 ec-footer-news" data-v-1e85e613><div class="ec-footer-widget" data-v-1e85e613><h4 class="ec-footer-heading" data-v-1e85e613>${ssrInterpolate(_ctx.$t("newsletter"))} <div class="ec-heading-res" data-v-1e85e613><i class="ecicon eci-angle-down" data-v-1e85e613></i></div></h4><div class="ec-footer-links ec-footer-dropdown" style="${ssrRenderStyle($data.activeIndex === "newsletter" ? null : { display: "none" })}" data-v-1e85e613><ul class="align-items-center" data-v-1e85e613><li class="ec-footer-link" data-v-1e85e613>${ssrInterpolate(_ctx.$t("special_promos"))}</li></ul><div class="ec-subscribe-form" data-v-1e85e613><form id="ec-newsletter-form" name="ec-newsletter-form" method="post" action="#" data-v-1e85e613><div id="ec_news_signup" class="ec-form" data-v-1e85e613><input class="ec-email" type="email" required=""${ssrRenderAttr(
    "placeholder",
    _ctx.$t(
      "enter_your_email"
    )
  )} name="ec-email" value="" data-v-1e85e613><button id="ec-news-btn" class="button btn-primary" type="submit" name="subscribe" value="" data-v-1e85e613><i class="ecicon eci-paper-plane-o" aria-hidden="true" data-v-1e85e613></i></button></div></form></div></div></div></div></div></div></div><div class="footer-bottom" data-v-1e85e613><div class="container" data-v-1e85e613><div class="row align-items-center" data-v-1e85e613><div class="col text-left footer-bottom-left" data-v-1e85e613><div class="footer-bottom-social" data-v-1e85e613><span class="social-text text-upper" data-v-1e85e613>${ssrInterpolate(_ctx.$t("follow_us_on"))}: </span>`);
  if ($setup.siteInfoStore && $setup.siteInfoStore.social_networks) {
    _push(`<ul class="mb-0" data-v-1e85e613><!--[-->`);
    ssrRenderList($setup.siteInfoStore.social_networks || [], (network) => {
      _push(`<li class="list-inline-item" data-v-1e85e613><a class="${ssrRenderClass(
        "hdr-" + network.slug.toLowerCase()
      )}"${ssrRenderAttr("href", network.url)}${ssrRenderAttr("aria-label", network.name)} target="_blank" rel="noopener noreferrer" data-v-1e85e613><i class="${ssrRenderClass(
        "ecicon eci-" + network.slug
      )}" data-v-1e85e613></i></a></li>`);
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="col text-center footer-copy" data-v-1e85e613><div class="footer-bottom-copy" data-v-1e85e613><div class="ec-copy" data-v-1e85e613> © 2024-${ssrInterpolate($options.currentYear)} `);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: $setup.route("home"),
    class: "site-name text-upper"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($setup.siteInfoStore.full_name)}. `);
      } else {
        return [
          createTextVNode(toDisplayString($setup.siteInfoStore.full_name) + ". ", 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` ${ssrInterpolate(_ctx.$t("all_rights_reserved"))}. </div></div></div></div></div></div></div></footer><div class="ec-nav-toolbar" data-v-1e85e613><div class="container" data-v-1e85e613><div class="ec-nav-panel" data-v-1e85e613><div class="ec-nav-panel-icons" data-v-1e85e613><a href="javascript:void(0)" class="navbar-toggler-btn ec-header-btn ec-side-toggle" data-v-1e85e613><img${ssrRenderAttr("src", $setup.getIconPath("menu.svg"))} class="svg_img header_svg" alt="icon" loading="lazy" data-v-1e85e613></a></div><div class="ec-nav-panel-icons" data-v-1e85e613></div><div class="ec-nav-panel-icons" data-v-1e85e613>`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: $setup.route("home"),
    class: "ec-header-btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", $setup.getIconPath("home.svg"))} class="svg_img header_svg" alt="icon" loading="lazy" data-v-1e85e613${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: $setup.getIconPath("home.svg"),
            class: "svg_img header_svg",
            alt: "icon",
            loading: "lazy"
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div><!--]-->`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/AppFooter.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const AppFooter = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$p], ["__scopeId", "data-v-1e85e613"]]);
const _sfc_main$o = {
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    handleScroll() {
      this.visible = window.scrollY > 200;
    }
  }
};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    id: "scrollUp",
    style: $data.visible ? null : { display: "none" }
  }, _attrs))} data-v-068d078c><i class="ecicon eci-arrow-up" aria-hidden="true" data-v-068d078c></i></a>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ScrollUp.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const ScrollUp = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$o], ["__scopeId", "data-v-068d078c"]]);
const _sfc_main$n = {
  components: {
    InertiaHead: Head,
    AppLoader,
    AppHeader: _sfc_main$r,
    SideOverlay,
    AppFooter,
    ScrollUp
  },
  props: {
    page: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      loading: true
    };
  },
  created() {
    router.on("start", () => {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.loading = true;
    });
    router.on("finish", () => {
      this.timer = setTimeout(() => {
        this.loading = false;
        this.timer = null;
      }, 150);
    });
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 200);
  },
  beforeUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  },
  watch: {
    $route() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InertiaHead = resolveComponent("InertiaHead");
  const _component_AppLoader = resolveComponent("AppLoader");
  const _component_AppHeader = resolveComponent("AppHeader");
  const _component_SideOverlay = resolveComponent("SideOverlay");
  const _component_AppFooter = resolveComponent("AppFooter");
  const _component_ScrollUp = resolveComponent("ScrollUp");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_InertiaHead, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d, _e, _f;
      if (_push2) {
        _push2(`<title${_scopeId}>${ssrInterpolate((_a = $props.page) == null ? void 0 : _a.title)}</title><meta name="description"${ssrRenderAttr("content", (_b = $props.page) == null ? void 0 : _b.description)}${_scopeId}><meta name="keywords"${ssrRenderAttr("content", (_c = $props.page) == null ? void 0 : _c.keywords)}${_scopeId}><meta name="country" content="RU"${_scopeId}><meta name="author" content="Брухан Юрий Игоревич"${_scopeId}><meta name="copyright" content="Brukhan Import"${_scopeId}><meta name="theme-color" content="#23aa08"${_scopeId}><link rel="icon" href="/favicon.ico" type="image/x-icon"${_scopeId}>`);
      } else {
        return [
          createVNode("title", null, toDisplayString((_d = $props.page) == null ? void 0 : _d.title), 1),
          createVNode("meta", {
            name: "description",
            content: (_e = $props.page) == null ? void 0 : _e.description
          }, null, 8, ["content"]),
          createVNode("meta", {
            name: "keywords",
            content: (_f = $props.page) == null ? void 0 : _f.keywords
          }, null, 8, ["content"]),
          createVNode("meta", {
            name: "country",
            content: "RU"
          }),
          createVNode("meta", {
            name: "author",
            content: "Брухан Юрий Игоревич"
          }),
          createVNode("meta", {
            name: "copyright",
            content: "Brukhan Import"
          }),
          createVNode("meta", {
            name: "theme-color",
            content: "#23aa08"
          }),
          createVNode("link", {
            rel: "icon",
            href: "/favicon.ico",
            type: "image/x-icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_AppLoader, { loading: $data.loading }, null, _parent));
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_SideOverlay, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(ssrRenderComponent(_component_ScrollUp, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/LayoutBase.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const Layout$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$n]]);
function useBodyClass(className) {
  onMounted(() => {
    document.body.classList.add(className);
  });
  onBeforeUnmount(() => {
    document.body.classList.remove(className);
  });
}
function useImagePath() {
  const getImagePath2 = (folder, name) => new URL(`/resources/images/${folder}/${name}`, import.meta.url).href;
  return { getImagePath: getImagePath2 };
}
function useSiteInfo() {
  const siteInfoStore = useSiteInfoStore();
  const loadSiteInfo = async () => {
    await siteInfoStore.fetchSiteInfo();
  };
  onMounted(loadSiteInfo);
  return { siteInfoStore };
}
const _sfc_main$m = {
  name: "ListServices",
  setup() {
    return {
      getImagePath
    };
  }
};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "section ec-services-section section-space-p",
    id: "services"
  }, _attrs))} data-v-7dae444e><h2 class="d-none" data-v-7dae444e>Services</h2><div class="container" data-v-7dae444e><div class="row" data-v-7dae444e><div class="ec_ser_content ec_ser_content_1 col-sm-12 col-md-6 col-lg-3" data-aos="zoom-in" data-v-7dae444e><div class="ec_ser_inner" data-v-7dae444e><div class="ec-service-image" data-v-7dae444e><img${ssrRenderAttr("src", $setup.getImagePath("icons", "service_1.svg"))} class="svg_img" alt="" loading="lazy" data-v-7dae444e></div><div class="ec-service-desc" data-v-7dae444e><h2 data-v-7dae444e>${ssrInterpolate(_ctx.$t("free_shipping"))}</h2><p data-v-7dae444e>${ssrInterpolate(_ctx.$t("free_shipping_description"))}</p></div></div></div><div class="ec_ser_content ec_ser_content_2 col-sm-12 col-md-6 col-lg-3" data-aos="zoom-in" data-v-7dae444e><div class="ec_ser_inner" data-v-7dae444e><div class="ec-service-image" data-v-7dae444e><img${ssrRenderAttr("src", $setup.getImagePath("icons", "service_2.svg"))} class="svg_img" alt="" loading="lazy" data-v-7dae444e></div><div class="ec-service-desc" data-v-7dae444e><h2 data-v-7dae444e>${ssrInterpolate(_ctx.$t("support"))}</h2><p data-v-7dae444e>${ssrInterpolate(_ctx.$t("support_description"))}</p></div></div></div><div class="ec_ser_content ec_ser_content_3 col-sm-12 col-md-6 col-lg-3" data-aos="zoom-in" data-v-7dae444e><div class="ec_ser_inner" data-v-7dae444e><div class="ec-service-image" data-v-7dae444e><img${ssrRenderAttr("src", $setup.getImagePath("icons", "service_3.svg"))} class="svg_img" alt="" loading="lazy" data-v-7dae444e></div><div class="ec-service-desc" data-v-7dae444e><h2 data-v-7dae444e>${ssrInterpolate(_ctx.$t("about_return"))}</h2><p data-v-7dae444e>${ssrInterpolate(_ctx.$t("about_return_description"))}</p></div></div></div><div class="ec_ser_content ec_ser_content_4 col-sm-12 col-md-6 col-lg-3" data-aos="zoom-in" data-v-7dae444e><div class="ec_ser_inner" data-v-7dae444e><div class="ec-service-image" data-v-7dae444e><img${ssrRenderAttr("src", $setup.getImagePath("icons", "service_4.svg"))} class="svg_img" alt="" loading="lazy" data-v-7dae444e></div><div class="ec-service-desc" data-v-7dae444e><h2 data-v-7dae444e>${ssrInterpolate(_ctx.$t("payment_secure"))}</h2><p data-v-7dae444e>${ssrInterpolate(_ctx.$t("payment_secure_description"))}</p></div></div></div></div></div></section>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ListServices.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const ListServices = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$m], ["__scopeId", "data-v-7dae444e"]]);
const _sfc_main$l = {
  name: "ProductInner",
  components: {
    InertiaLink: Link
  },
  props: {
    product: {
      type: Object,
      required: true,
      validator(value) {
        const isValid = value && typeof value.name === "string" && value.name.length > 0 && typeof value.slug === "string" && value.slug.length > 0 && typeof value.price === "number" && (value.rating === void 0 || value.rating === null || typeof value.rating === "number") && (value.image_main === void 0 || value.image_main === null || typeof value.image_main === "string") && (value.image_hover === void 0 || value.image_hover === null || typeof value.image_hover === "string");
        if (!isValid) {
          console.warn("Invalid product prop received:", value);
        }
        return isValid;
      }
    }
  },
  setup(props) {
    const route = inject("route");
    const { getImagePath: getImagePath2 } = useImagePath();
    const defaultImage = getImagePath2("common", "default-product.jpg");
    const quickviewIcon = getImagePath2("icons", "quickview.svg");
    const productUrl = computed(
      () => route("show-product", { slug: props.product.slug })
    );
    const safeRating = computed(() => props.product.rating ?? 0);
    return {
      defaultImage,
      quickviewIcon,
      productUrl,
      safeRating,
      props
    };
  }
};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InertiaLink = resolveComponent("InertiaLink");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ec-product-inner" }, _attrs))}><div class="ec-pro-image-outer"><div class="ec-pro-image">`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    class: "image",
    href: $setup.productUrl
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="main-image"${ssrRenderAttr("src", $props.product.image_main || $setup.defaultImage)}${ssrRenderAttr("alt", $props.product.name)} loading="lazy"${_scopeId}><img class="hover-image"${ssrRenderAttr("src", $props.product.image_hover || $setup.defaultImage)}${ssrRenderAttr("alt", $props.product.name)} loading="lazy"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            class: "main-image",
            src: $props.product.image_main || $setup.defaultImage,
            alt: $props.product.name,
            loading: "lazy"
          }, null, 8, ["src", "alt"]),
          createVNode("img", {
            class: "hover-image",
            src: $props.product.image_hover || $setup.defaultImage,
            alt: $props.product.name,
            loading: "lazy"
          }, null, 8, ["src", "alt"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: $setup.productUrl,
    class: "quickview",
    "data-link-action": "quickview",
    title: "Quick view",
    "data-bs-toggle": "modal",
    "data-bs-target": "#ec_quickview_modal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", $setup.quickviewIcon)} class="svg_img pro_svg" alt="Quick view"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: $setup.quickviewIcon,
            class: "svg_img pro_svg",
            alt: "Quick view"
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="ec-pro-content"><h5 class="ec-pro-title">`);
  _push(ssrRenderComponent(_component_InertiaLink, { href: $setup.productUrl }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.product.name)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.product.name), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h5><div class="ec-pro-rating"><!--[-->`);
  ssrRenderList(5, (index) => {
    _push(`<i class="${ssrRenderClass([{ fill: index <= $setup.safeRating }, "ecicon eci-star"])}"></i>`);
  });
  _push(`<!--]--></div><span class="ec-price"><span class="new-price">₽${ssrInterpolate($props.product.price)}</span></span></div></div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ProductInner.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const ProductInner = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$l]]);
const _sfc_main$k = {
  name: "NewProducts",
  components: {
    ProductInner
  },
  setup() {
    const siteInfoStore = useSiteInfoStore();
    return {
      siteInfoStore
    };
  }
};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ProductInner = resolveComponent("ProductInner");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "section ec-new-product section-space-p",
    id: "arrivals"
  }, _attrs))}><div class="container"><div class="row"><div class="col-md-12 text-center"><div class="section-title"><h2 class="ec-bg-title">${ssrInterpolate(_ctx.$t("new_arrivals"))}</h2><h2 class="ec-title">${ssrInterpolate(_ctx.$t("new_arrivals"))}</h2><p class="sub-title">${ssrInterpolate(_ctx.$t("browse_top_products"))}</p></div></div></div><div class="row"><!--[-->`);
  ssrRenderList($setup.siteInfoStore.top_products, (product) => {
    _push(`<div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="flip-left">`);
    _push(ssrRenderComponent(_component_ProductInner, { product }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--><div class="col-sm-12 shop-all-btn"><a href="#">${ssrInterpolate(_ctx.$t("view_all"))}</a></div></div></div></section>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/NewProducts.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const NewProducts = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$k]]);
const _sfc_main$j = {
  name: "ListBrands",
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const siteInfoStore = useSiteInfoStore();
    return {
      modules: [Autoplay],
      siteInfoStore
    };
  },
  methods: {
    Autoplay
  }
};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section ec-brand-area section-space-p" }, _attrs))}><h2 class="d-none">Brand</h2><div class="container"><div class="row"><div class="ec-brand-outer" data-aos="zoom-in">`);
  _push(ssrRenderComponent(_component_swiper, {
    class: "ec-brand-slider",
    modules: [$options.Autoplay],
    "slides-per-view": 3,
    watchSlidesProgress: true,
    loop: true,
    autoplay: {
      delay: 4e3,
      disableOnInteraction: false
    },
    breakpoints: {
      640: { slidesPerView: 4, spaceBetween: 0 },
      991: { slidesPerView: 5, spaceBetween: 0 },
      1200: { slidesPerView: 6, spaceBetween: 0 },
      1450: { slidesPerView: 7, spaceBetween: 0 }
    },
    "auto-height": false
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($setup.siteInfoStore.brands, (brand) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: brand.slug,
            class: "ec-brand-item"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="ec-brand-img"${_scopeId2}><a${ssrRenderAttr("href", brand.url ?? "#")} target="_blank" rel="noopener noreferrer"${_scopeId2}><img${ssrRenderAttr("alt", brand.name)}${ssrRenderAttr("title", brand.name)}${ssrRenderAttr("src", brand.image)} loading="lazy"${_scopeId2}></a></div>`);
              } else {
                return [
                  createVNode("div", { class: "ec-brand-img" }, [
                    createVNode("a", {
                      href: brand.url ?? "#",
                      target: "_blank",
                      rel: "noopener noreferrer"
                    }, [
                      createVNode("img", {
                        alt: brand.name,
                        title: brand.name,
                        src: brand.image,
                        loading: "lazy"
                      }, null, 8, ["alt", "title", "src"])
                    ], 8, ["href"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($setup.siteInfoStore.brands, (brand) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: brand.slug,
              class: "ec-brand-item"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "ec-brand-img" }, [
                  createVNode("a", {
                    href: brand.url ?? "#",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }, [
                    createVNode("img", {
                      alt: brand.name,
                      title: brand.name,
                      src: brand.image,
                      loading: "lazy"
                    }, null, 8, ["alt", "title", "src"])
                  ], 8, ["href"])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ListBrands.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const ListBrands = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$j]]);
const _sfc_main$i = {
  name: "AboutUs",
  layout: Layout$1,
  components: {
    InertiaLink: Link,
    ListServices,
    NewProducts,
    ListBrands
  },
  setup() {
    useBodyClass("aboutus_page");
    const { getImagePath: getImagePath2 } = useImagePath();
    const { siteInfoStore } = useSiteInfo();
    const formattedDescription = computed(
      () => siteInfoStore.description ? siteInfoStore.description.replace(/\n/g, "<br>") : ""
    );
    return {
      getImagePath: getImagePath2,
      formattedDescription
    };
  }
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InertiaLink = resolveComponent("InertiaLink");
  const _component_ListServices = resolveComponent("ListServices");
  const _component_NewProducts = resolveComponent("NewProducts");
  const _component_ListBrands = resolveComponent("ListBrands");
  _push(`<!--[--><div class="sticky-header-next-sec ec-breadcrumb section-space-mb"><div class="container"><div class="row"><div class="col-12"><div class="row ec_breadcrumb_inner"><div class="col-md-6 col-sm-12"><h2 class="ec-breadcrumb-title">${ssrInterpolate(_ctx.$t("menu.about_us"))}</h2></div><div class="col-md-6 col-sm-12"><ul class="ec-breadcrumb-list"><li class="ec-breadcrumb-item">`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: _ctx.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("menu.home"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("menu.home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-breadcrumb-item active">${ssrInterpolate(_ctx.$t("menu.about_us"))}</li></ul></div></div></div></div></div></div><section class="ec-page-content section-space-p"><div class="container"><div class="row"><div class="col-md-12 text-center"><div class="section-title"><h1 class="ec-bg-title">${ssrInterpolate(_ctx.$t("about_my_business"))}</h1><h1 class="ec-title">${ssrInterpolate(_ctx.$t("about_my_business"))}</h1></div></div><div class="ec-common-wrapper"><div class="row"><div class="col-md-6 ec-cms-block ec-abcms-block text-center"><div class="ec-cms-block-inner"><img class="a-img"${ssrRenderAttr(
    "src",
    $setup.getImagePath("common", "about-us.jpg")
  )} alt="about-my-business" loading="lazy"></div></div><div class="col-md-6 ec-cms-block ec-abcms-block text-center"><div class="ec-cms-block-inner"><p>${$setup.formattedDescription ?? ""}</p></div></div></div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_ListServices, null, null, _parent));
  _push(ssrRenderComponent(_component_NewProducts, null, null, _parent));
  _push(ssrRenderComponent(_component_ListBrands, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/AboutUs.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const AboutUs = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$i]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AboutUs
}, Symbol.toStringTag, { value: "Module" }));
function useSanitizedHtml(rawValue) {
  return computed(() => DOMPurify.sanitize(unref(rawValue) || ""));
}
const _sfc_main$h = {
  name: "BankDetails",
  layout: Layout$1,
  components: {
    InertiaLink: Link
  },
  setup() {
    useBodyClass("bank_details_page");
    const { siteInfoStore } = useSiteInfo();
    const sanitizedBankDetails = useSanitizedHtml(
      computed(() => siteInfoStore.bank_details)
    );
    return {
      sanitizedBankDetails
    };
  }
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InertiaLink = resolveComponent("InertiaLink");
  _push(`<!--[--><div class="sticky-header-next-sec ec-breadcrumb section-space-mb"><div class="container"><div class="row"><div class="col-12"><div class="row ec_breadcrumb_inner"><div class="col-md-6 col-sm-12"><h2 class="ec-breadcrumb-title">${ssrInterpolate(_ctx.$t("menu.bank_details"))}</h2></div><div class="col-md-6 col-sm-12"><ul class="ec-breadcrumb-list"><li class="ec-breadcrumb-item">`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: _ctx.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("menu.home"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("menu.home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-breadcrumb-item active">${ssrInterpolate(_ctx.$t("menu.bank_details"))}</li></ul></div></div></div></div></div></div><section class="ec-page-content section-space-p"><div class="container"><div class="row"><div class="col-md-12 text-center"><div class="section-title"><h1 class="ec-bg-title">${ssrInterpolate(_ctx.$t("bank_details"))}</h1><h1 class="ec-title">${ssrInterpolate(_ctx.$t("bank_details"))}</h1></div></div><div class="col-md-12"><div class="ec-common-wrapper"><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner">${$setup.sanitizedBankDetails ?? ""}</div></div></div></div></div></div></section><!--]-->`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/BankDetails.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const BankDetails = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BankDetails
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {
  name: "Category",
  layout: Layout$1,
  components: {
    InertiaLink: Link,
    ProductInner
  },
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    useBodyClass("category_page");
    const { siteInfoStore } = useSiteInfo();
    const route = inject("route");
    const fullCategory = ref([]);
    const sortOption = ref("low_price");
    const pagination = ref({
      total: 0,
      per_page: 12,
      current_page: 1,
      last_page: 1
    });
    const priceRange = ref({ min: "", max: "" });
    const popularTags = ref([]);
    const selectedTags = ref([]);
    const fetchFullCategory = async (slug, order = { field: "price", direction: "asc" }, page = 1, range_price = { min: "", max: "" }, tags = []) => {
      if (!slug) return;
      try {
        const data = await ApiClient.get(`/api/v1/products`, {
          category: slug,
          [`order[${order.field}]`]: order.direction,
          page,
          ...range_price.min && { min_price: range_price.min },
          ...range_price.max && { max_price: range_price.max },
          ...tags.length && { tags: tags.join(",") }
        });
        fullCategory.value = data.products;
        pagination.value = data.pagination;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    const fetchPopularTags = async () => {
      try {
        const data = await ApiClient.get(`/api/v1/popular-tags`);
        popularTags.value = data.popular_tags;
      } catch (error) {
        console.error("Error fetching popular tags:", error);
      }
    };
    onMounted(async () => {
      var _a;
      await siteInfoStore.fetchSiteInfo();
      if ((_a = props.category) == null ? void 0 : _a.slug) {
        await fetchFullCategory(props.category.slug);
      }
      await fetchPopularTags();
    });
    watch(
      priceRange,
      async () => {
        var _a;
        if ((_a = props.category) == null ? void 0 : _a.slug) {
          await fetchFullCategory(
            props.category.slug,
            sortOrder.value,
            pagination.value.current_page,
            priceRange.value,
            selectedTags.value
          );
        }
      },
      { deep: true }
    );
    const onSortChange = async () => {
      var _a;
      if ((_a = props.category) == null ? void 0 : _a.slug) {
        await fetchFullCategory(
          props.category.slug,
          sortOrder.value,
          pagination.value.current_page,
          priceRange.value,
          selectedTags.value
        );
      }
    };
    const startItem = computed(() => {
      return (pagination.value.current_page - 1) * pagination.value.per_page + 1;
    });
    const endItem = computed(() => {
      return Math.min(
        pagination.value.current_page * pagination.value.per_page,
        pagination.value.total
      );
    });
    const pages = computed(() => {
      const totalPages = pagination.value.last_page;
      const currentPage = pagination.value.current_page;
      if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }
      const visiblePages = [];
      const startPages = [1, 2, 3];
      const endPages = [totalPages - 2, totalPages - 1, totalPages];
      if (currentPage <= 4) {
        visiblePages.push(...startPages, "...", ...endPages);
      } else if (currentPage >= totalPages - 3) {
        visiblePages.push(...startPages, "...", ...endPages);
      } else {
        visiblePages.push(
          ...startPages,
          "...",
          currentPage,
          "...",
          ...endPages
        );
      }
      return visiblePages;
    });
    const goToPage = async (page) => {
      if (page >= 1 && page <= pagination.value.last_page) {
        pagination.value.current_page = page;
        await fetchFullCategory(
          props.category.slug,
          sortOrder.value,
          page
        );
      }
    };
    const sortOrder = computed(() => {
      return {
        field: "price",
        direction: sortOption.value === "low_price" ? "asc" : "desc"
      };
    });
    const onTagChange = async (tagSlug) => {
      var _a;
      if (selectedTags.value.includes(tagSlug)) {
        selectedTags.value = selectedTags.value.filter(
          (tag) => tag !== tagSlug
        );
      } else {
        selectedTags.value.push(tagSlug);
      }
      if ((_a = props.category) == null ? void 0 : _a.slug) {
        await fetchFullCategory(
          props.category.slug,
          sortOrder.value,
          pagination.value.current_page,
          priceRange.value,
          selectedTags.value
        );
      }
    };
    return {
      route,
      siteInfoStore,
      fullCategory,
      sortOption,
      onSortChange,
      pagination,
      startItem,
      endItem,
      pages,
      goToPage,
      priceRange,
      popularTags,
      selectedTags,
      onTagChange
    };
  }
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InertiaLink = resolveComponent("InertiaLink");
  const _component_ProductInner = resolveComponent("ProductInner");
  _push(`<!--[--><div class="sticky-header-next-sec ec-breadcrumb section-space-mb"><div class="container"><div class="row"><div class="col-12"><div class="row ec_breadcrumb_inner"><div class="col-md-6 col-sm-12"><h2 class="ec-breadcrumb-title">${ssrInterpolate($props.category.name)}</h2></div><div class="col-md-6 col-sm-12"><ul class="ec-breadcrumb-list"><li class="ec-breadcrumb-item">`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: $setup.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("menu.home"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("menu.home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-breadcrumb-item active">${ssrInterpolate(_ctx.$t("menu.shop"))}</li></ul></div></div></div></div></div></div><section class="ec-page-content section-space-p"><div class="container"><div class="row"><div class="ec-shop-rightside col-lg-9 col-md-12 order-lg-last order-md-first margin-b-30"><div class="ec-pro-list-top d-flex"><div class="col-md-12 ec-sort-select"><span class="sort-by">${ssrInterpolate(_ctx.$t("sort_by"))}</span><div class="ec-select-inner"><select name="ec-select" id="ec-select"><option value="low_price"${ssrIncludeBooleanAttr(Array.isArray($setup.sortOption) ? ssrLooseContain($setup.sortOption, "low_price") : ssrLooseEqual($setup.sortOption, "low_price")) ? " selected" : ""}>${ssrInterpolate(_ctx.$t("low_price"))}</option><option value="high_price"${ssrIncludeBooleanAttr(Array.isArray($setup.sortOption) ? ssrLooseContain($setup.sortOption, "high_price") : ssrLooseEqual($setup.sortOption, "high_price")) ? " selected" : ""}>${ssrInterpolate(_ctx.$t("high_price"))}</option></select></div></div></div><div class="shop-pro-content"><div class="shop-pro-inner"><div class="row"><!--[-->`);
  ssrRenderList($setup.fullCategory, (product) => {
    _push(`<div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">`);
    _push(ssrRenderComponent(_component_ProductInner, { product }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]-->`);
  if ($setup.fullCategory.length === 0) {
    _push(`<div class="col-12 text-center"><p class="no-products-found">${ssrInterpolate(_ctx.$t("products_not_found"))}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
  if ($setup.pages.length > 1) {
    _push(`<div class="ec-pro-pagination"><div class="ec-pro-pagination"><ul class="ec-pro-pagination-inner"><li><a href="#" class="${ssrRenderClass([{
      disabled: $setup.pagination.current_page === 1
    }, "next"])}"><i class="ecicon eci-angle-left"></i></a></li><!--[-->`);
    ssrRenderList($setup.pages, (page) => {
      _push(`<li>`);
      if (page !== "...") {
        _push(`<a href="#" class="${ssrRenderClass({
          active: page === $setup.pagination.current_page
        })}">${ssrInterpolate(page)}</a>`);
      } else {
        _push(`<span class="pagination-ellipsis">${ssrInterpolate(page)}</span>`);
      }
      _push(`</li>`);
    });
    _push(`<!--]--><li><a href="#" class="${ssrRenderClass([{
      disabled: $setup.pagination.current_page === $setup.pagination.last_page
    }, "next"])}"><i class="ecicon eci-angle-right"></i></a></li></ul></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="ec-shop-leftside col-lg-3 col-md-12 order-lg-first order-md-last"><div id="shop_sidebar"><div class="ec-sidebar-heading"><h1>${ssrInterpolate(_ctx.$t("filter_products_by"))}</h1></div><div class="ec-sidebar-wrap"><div class="ec-sidebar-block"><div class="ec-sb-title"><h3 class="ec-sidebar-title">${ssrInterpolate(_ctx.$t("collections"))}</h3></div><div class="ec-sb-block-content"><ul><!--[-->`);
  ssrRenderList($setup.popularTags, (tag) => {
    _push(`<li><div class="ec-sidebar-block-item"><input type="checkbox"${ssrRenderAttr("value", tag.slug)}${ssrIncludeBooleanAttr(
      $setup.selectedTags.includes(
        tag.slug
      )
    ) ? " checked" : ""}><a href="#">${ssrInterpolate(tag.name)}</a><span class="checked"></span></div></li>`);
  });
  _push(`<!--]--></ul></div></div><div class="ec-sidebar-block"><div class="ec-sb-title"><h3 class="ec-sidebar-title">${ssrInterpolate(_ctx.$t("price"))}</h3></div><div class="ec-sb-block-content es-price-slider"><div class="ec-price-filter"><div id="ec-sliderPrice" class="filter__slider-price"></div><div class="ec-price-input"><label class="filter__label"><input type="number"${ssrRenderAttr("value", $setup.priceRange.min)} class="filter__input" placeholder="0"></label><span class="ec-price-divider"></span><label class="filter__label"><input type="number"${ssrRenderAttr("value", $setup.priceRange.max)} class="filter__input" placeholder="0"></label></div></div></div></div></div></div></div></div></div></section><!--]-->`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Category.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const Category = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Category
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = {
  name: "Contacts",
  layout: Layout$1,
  components: {
    InertiaLink: Link
  },
  setup() {
    useBodyClass("contact_us_page");
    const { siteInfoStore } = useSiteInfo();
    return {
      siteInfoStore
    };
  }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InertiaLink = resolveComponent("InertiaLink");
  _push(`<!--[--><div class="sticky-header-next-sec ec-breadcrumb section-space-mb"><div class="container"><div class="row"><div class="col-12"><div class="row ec_breadcrumb_inner"><div class="col-md-6 col-sm-12"><h2 class="ec-breadcrumb-title">${ssrInterpolate(_ctx.$t("menu.contact_us"))}</h2></div><div class="col-md-6 col-sm-12"><ul class="ec-breadcrumb-list"><li class="ec-breadcrumb-item">`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: _ctx.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("menu.home"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("menu.home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-breadcrumb-item active">${ssrInterpolate(_ctx.$t("menu.contact_us"))}</li></ul></div></div></div></div></div></div><section class="ec-page-content section-space-p"><div class="container"><div class="row"><div class="ec-common-wrapper"><div class="ec-contact-leftside"><div class="ec-contact-container"><div class="ec-contact-form"><form action="#" method="post"><span class="ec-contact-wrap"><label>${ssrInterpolate(_ctx.$t("form.first_name"))}* </label><input type="text" name="firstname"${ssrRenderAttr("placeholder", _ctx.$t("form.first_name"))} required></span><span class="ec-contact-wrap"><label>${ssrInterpolate(_ctx.$t("form.last_name"))}* </label><input type="text" name="lastname"${ssrRenderAttr("placeholder", _ctx.$t("form.last_name"))} required></span><span class="ec-contact-wrap"><label>${ssrInterpolate(_ctx.$t("form.email"))}*</label><input type="email" name="email"${ssrRenderAttr("placeholder", _ctx.$t("form.email"))} required></span><span class="ec-contact-wrap"><label>${ssrInterpolate(_ctx.$t("form.phone"))}*</label><input type="text" name="phonenumber"${ssrRenderAttr("placeholder", _ctx.$t("form.phone"))} required></span><span class="ec-contact-wrap"><label>${ssrInterpolate(_ctx.$t("form.message"))}*</label><textarea name="address"${ssrRenderAttr("placeholder", _ctx.$t("form.message"))}></textarea></span><span class="ec-contact-wrap ec-recaptcha"><span class="g-recaptcha" data-sitekey="6LfKURIUAAAAAO50vlwWZkyK_G2ywqE52NU7YO0S" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></span><input class="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha"><span class="help-block with-errors"></span></span><span class="ec-contact-wrap ec-contact-btn"><button class="btn btn-primary" type="submit">${ssrInterpolate(_ctx.$t("form.send"))}</button></span></form></div></div></div><div class="ec-contact-rightside"><div class="ec_contact_map"><div class="ec_map_canvas"><iframe id="ec_map_canvas"${ssrRenderAttr("src", $setup.siteInfoStore.map)}></iframe></div></div><div class="ec_contact_info"><h1 class="ec_contact_info_head">${ssrInterpolate(_ctx.$t("page.contact_us"))}</h1><ul class="align-items-center"><li class="ec-contact-item"><i class="ecicon eci-map-marker" aria-hidden="true"></i><span>${ssrInterpolate(_ctx.$t("address"))} :</span> ${ssrInterpolate($setup.siteInfoStore.address)}</li><!--[-->`);
  ssrRenderList($setup.siteInfoStore.phones, (phone, index) => {
    _push(`<li class="ec-contact-item align-items-center"><i class="ecicon eci-phone" aria-hidden="true"></i><span>${ssrInterpolate(_ctx.$t("phone"))} : </span><a${ssrRenderAttr("href", `tel:${phone.replace(/\s+/g, "")}`)}>${ssrInterpolate(phone)}</a></li>`);
  });
  _push(`<!--]--><!--[-->`);
  ssrRenderList($setup.siteInfoStore.emails, (email, index) => {
    _push(`<li class="ec-contact-item align-items-center"><i class="ecicon eci-envelope" aria-hidden="true"></i><span>${ssrInterpolate(_ctx.$t("email"))} :</span><a${ssrRenderAttr("href", `mailto:${email}`)}>${ssrInterpolate(email)}</a></li>`);
  });
  _push(`<!--]--></ul></div></div></div></div></div></section><!--]-->`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Contacts.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Contacts = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contacts
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {
  name: "Delivery",
  layout: Layout$1,
  components: {
    InertiaLink: Link,
    ListServices
  },
  setup() {
    useBodyClass("delivery_page");
    const { getImagePath: getImagePath2 } = useImagePath();
    return {
      getImagePath: getImagePath2
    };
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InertiaLink = resolveComponent("InertiaLink");
  const _component_ListServices = resolveComponent("ListServices");
  _push(`<!--[--><div class="sticky-header-next-sec ec-breadcrumb section-space-mb"><div class="container"><div class="row"><div class="col-12"><div class="row ec_breadcrumb_inner"><div class="col-md-6 col-sm-12"><h2 class="ec-breadcrumb-title">${ssrInterpolate(_ctx.$t("menu.delivery"))}</h2></div><div class="col-md-6 col-sm-12"><ul class="ec-breadcrumb-list"><li class="ec-breadcrumb-item">`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: _ctx.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("menu.home"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("menu.home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-breadcrumb-item active">${ssrInterpolate(_ctx.$t("menu.delivery"))}</li></ul></div></div></div></div></div></div><section class="ec-page-content section-space-p"><div class="container"><div class="row"><div class="col-md-12 text-center"><div class="section-title"><h1 class="ec-bg-title">${ssrInterpolate(_ctx.$t("delivery"))}</h1><h1 class="ec-title">${ssrInterpolate(_ctx.$t("delivery"))}</h1></div></div><div class="col-md-12"><div class="ec-common-wrapper"><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><p><strong> Доставка по России и СНГ - быстро и удобно! </strong></p><br><p> Мы отправляем заказы в любую точку России и стран СНГ с помощью нашего надежного партнёра <strong>СДЭК</strong> . <br> После оформления заказа вы сможете выбрать: </p><p> - удобный <strong>пункт выдачи</strong><br> - <strong>курьерскую доставку</strong> прямо на ваш адрес <br></p><br><p> Отправка осуществляется в кратчайшие сроки, а после передачи заказа транспортной компании вы получите трек-номер для отслеживания посылки. </p><br><p><strong>Стоимость и сроки доставки</strong> рассчитываются автоматически при оформлении заказа - всё зависит от вашего региона и способа получения. <br> Для вашего удобства доступны различные варианты оплаты, включая <strong>наложенный платёж</strong> . </p></div></div></div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_ListServices, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Delivery.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const Delivery = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Delivery
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {
  components: {
    AppLoader,
    SideOverlay
  },
  props: {
    page: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    window.onload = () => {
      this.loading = false;
    };
    window.onerror = () => {
      this.loading = false;
    };
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppLoader = resolveComponent("AppLoader");
  const _component_SideOverlay = resolveComponent("SideOverlay");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_AppLoader, { loading: $data.loading }, null, _parent));
  _push(ssrRenderComponent(_component_SideOverlay, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<!--]-->`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/LayoutError.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$c = {
  name: "ErrorPage",
  layout: Layout,
  components: {
    InertiaLink: Link
  },
  props: {
    status: Number
  },
  setup(props) {
    const { t } = useI18n();
    const { getImagePath: getImagePath2 } = useImagePath();
    const title = computed(() => {
      return {
        503: t("errors.titles.503"),
        500: t("errors.titles.500"),
        404: t("errors.titles.404"),
        403: t("errors.titles.403")
      }[props.status];
    });
    const description = computed(() => {
      return {
        503: t("errors.errors.503"),
        500: t("errors.errors.500"),
        404: t("errors.errors.404"),
        403: t("errors.errors.403")
      }[props.status];
    });
    return {
      getImagePath: getImagePath2,
      title,
      description
    };
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InertiaLink = resolveComponent("InertiaLink");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "ec-404-error-page-02" }, _attrs))}><div class="container"><div class="row"><div class="col-sm-12 text-center"><img class="img-404"${ssrRenderAttr("src", $setup.getImagePath("common", "404-error-page.gif"))} alt="404-error-page" loading="lazy"><h1 class="main-title text-center">${ssrInterpolate($setup.title)}</h1><h3 class="sub-title text-center">${ssrInterpolate($setup.description)}</h3>`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: _ctx.route("home"),
    class: "link-404"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("menu.home"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("menu.home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/ErrorPage.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const ErrorPage = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ErrorPage
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  name: "FaqAccordion",
  props: {
    title: { type: String, required: true },
    content: { type: String, required: true },
    isActive: { type: Boolean, default: false }
  },
  emits: ["toggle"],
  methods: {
    toggle() {
      this.$emit("toggle");
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-sm-12 ec-faq-block" }, _attrs))}><h4 class="ec-faq-title">${ssrInterpolate($props.title)}</h4>`);
  if ($props.isActive) {
    _push(`<div class="ec-faq-content ec-faq-dropdown"><p>${ssrInterpolate($props.content)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/modules/faq/components/FaqAccordion.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const FaqAccordion = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const getFaqItems = () => [
  {
    name: "Общие вопросы",
    items: [
      {
        title: "Как оформить заказ на доставку товара из Европы?",
        content: "Свяжитесь с нами любым удобным способом - по телефону, email или через сайт. Опишите желаемый товар, и наши сотрудники подберут для вас лучшие предложения."
      },
      {
        title: "Требуется ли предоплата?",
        content: "В большинстве случаев мы работаем без предоплаты - оплата осуществляется после приемки заказа на складе."
      },
      {
        title: "Как рассчитывается стоимость доставки?",
        content: "Стоимость зависит от объёма, веса, категории товара, а также страны-поставщика и места назначения. Мы предложим вам оптимальные условия после подтверждения заказа."
      },
      {
        title: "Какие товары можно заказать?",
        content: "Мы осуществляем доставку большинства легальных товаров. Если у вас есть сомнения, уточните у наших специалистов - мы проверим возможность доставки."
      },
      {
        title: "Как проходит таможенное оформление?",
        content: "Все вопросы, связанные с оформлением документов и таможенной очисткой, мы берём на себя. Вам не придётся заниматься этим самостоятельно."
      },
      {
        title: "Можно ли отследить заказ?",
        content: "Да, после оформления отправки по России и СНГ через СДЭК мы предоставим вам трек-номер для отслеживания."
      },
      {
        title: "Как оплатить заказ?",
        content: "Оплата производится после прибытия и приемки товара на нашем складе. Возможны разные варианты оплаты по согласованию."
      }
    ]
  }
];
function useFaq() {
  const activeIndexes = ref(/* @__PURE__ */ new Set());
  const toggleFaq = (faqIndex, itemIndex) => {
    const combinedIndex = `faq-${faqIndex}-item-${itemIndex}`;
    if (activeIndexes.value.has(combinedIndex)) {
      activeIndexes.value.delete(combinedIndex);
    } else {
      activeIndexes.value.add(combinedIndex);
    }
  };
  return {
    activeIndexes,
    toggleFaq
  };
}
const _sfc_main$a = {
  name: "Faq",
  layout: Layout$1,
  components: {
    InertiaLink: Link,
    FaqAccordion,
    ListServices,
    ListBrands
  },
  setup() {
    const { activeIndexes, toggleFaq } = useFaq();
    const faqItems = getFaqItems();
    return {
      faqItems,
      activeIndexes,
      toggleFaq
    };
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InertiaLink = resolveComponent("InertiaLink");
  const _component_FaqAccordion = resolveComponent("FaqAccordion");
  const _component_ListServices = resolveComponent("ListServices");
  const _component_ListBrands = resolveComponent("ListBrands");
  _push(`<!--[--><div class="sticky-header-next-sec ec-breadcrumb section-space-mb"><div class="container"><div class="row"><div class="col-12"><div class="row ec_breadcrumb_inner"><div class="col-md-6 col-sm-12"><h2 class="ec-breadcrumb-title">${ssrInterpolate(_ctx.$t("menu.faq"))}</h2></div><div class="col-md-6 col-sm-12"><ul class="ec-breadcrumb-list"><li class="ec-breadcrumb-item">`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: _ctx.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("menu.home"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("menu.home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-breadcrumb-item active">${ssrInterpolate(_ctx.$t("menu.faq"))}</li></ul></div></div></div></div></div></div><section class="ec-page-content section-space-p"><div class="container"><div class="row"><div class="col-md-12 text-center"><div class="section-title"><h1 class="ec-bg-title">${ssrInterpolate(_ctx.$t("full_text_for_faq"))}</h1><h1 class="ec-title">${ssrInterpolate(_ctx.$t("full_text_for_faq"))}</h1></div></div><div class="ec-faq-wrapper"><!--[-->`);
  ssrRenderList($setup.faqItems, (faq, faqIndex) => {
    _push(`<div class="ec-faq-container"><h2 class="ec-faq-heading">${ssrInterpolate(faq.name)}</h2><div id="ec-faq"><!--[-->`);
    ssrRenderList(faq.items, (item, itemIndex) => {
      _push(ssrRenderComponent(_component_FaqAccordion, {
        key: `faq-${faqIndex}-item-${itemIndex}`,
        title: item.title,
        content: item.content,
        isActive: $setup.activeIndexes.has(
          `faq-${faqIndex}-item-${itemIndex}`
        ),
        onToggle: ($event) => $setup.toggleFaq(faqIndex, itemIndex)
      }, null, _parent));
    });
    _push(`<!--]--></div></div>`);
  });
  _push(`<!--]--></div></div></div></section>`);
  _push(ssrRenderComponent(_component_ListServices, null, null, _parent));
  _push(ssrRenderComponent(_component_ListBrands, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Faq.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Faq = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Faq
}, Symbol.toStringTag, { value: "Module" }));
function useSwiper() {
  const thumbsSwiper = ref(null);
  const modules = [Autoplay, Navigation, Thumbs];
  const autoplayConfig = {
    delay: 4e3,
    disableOnInteraction: false
  };
  const navigationConfig = {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next"
  };
  const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
  };
  return {
    thumbsSwiper,
    modules,
    autoplayConfig,
    navigationConfig,
    setThumbsSwiper
  };
}
const _sfc_main$9 = {
  props: {
    title: String,
    subtitle: String,
    buttonText: String
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container align-self-center" }, _attrs))}><div class="row"><div class="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center"><div class="ec-slide-content slider-animation slide-one"><h1 class="ec-slide-title background-blur">${ssrInterpolate($props.title)}</h1><h2 class="ec-slide-stitle background-blur">${ssrInterpolate($props.subtitle)}</h2><a href="#" class="btn btn-lg btn-secondary">${ssrInterpolate($props.buttonText)}</a></div></div></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/modules/home/components/SlideContent.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const SlideContent = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$8 = {
  name: "MainSlider",
  components: {
    Swiper,
    SwiperSlide,
    SlideContent
  },
  setup() {
    const {
      thumbsSwiper,
      modules,
      autoplayConfig,
      navigationConfig,
      setThumbsSwiper
    } = useSwiper();
    return {
      thumbsSwiper,
      modules,
      autoplayConfig,
      navigationConfig,
      setThumbsSwiper
    };
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_SlideContent = resolveComponent("SlideContent");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sticky-header-next-sec ec-main-slider section section-space-pb" }, _attrs))}><div class="ec-slider swiper-container main-slider-nav main-slider-dot">`);
  _push(ssrRenderComponent(_component_swiper, {
    class: "swiper-wrapper",
    modules: $setup.modules,
    "slides-per-view": 1,
    loop: true,
    autoplay: $setup.autoplayConfig,
    navigation: $setup.navigationConfig,
    lazy: "true"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-slide-item swiper-slide d-flex ec-slide-1" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_SlideContent, {
                title: _ctx.$t("good_price"),
                subtitle: _ctx.$t("action2"),
                "button-text": _ctx.$t("order_now")
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_SlideContent, {
                  title: _ctx.$t("good_price"),
                  subtitle: _ctx.$t("action2"),
                  "button-text": _ctx.$t("order_now")
                }, null, 8, ["title", "subtitle", "button-text"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-slide-item swiper-slide d-flex ec-slide-2" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_SlideContent, {
                title: _ctx.$t("nice_offer"),
                subtitle: _ctx.$t("action1"),
                "button-text": _ctx.$t("order_now")
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_SlideContent, {
                  title: _ctx.$t("nice_offer"),
                  subtitle: _ctx.$t("action1"),
                  "button-text": _ctx.$t("order_now")
                }, null, 8, ["title", "subtitle", "button-text"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="swiper-buttons"${_scopeId}><div class="swiper-button-next"${_scopeId}></div><div class="swiper-button-prev"${_scopeId}></div></div>`);
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "ec-slide-item swiper-slide d-flex ec-slide-1" }, {
            default: withCtx(() => [
              createVNode(_component_SlideContent, {
                title: _ctx.$t("good_price"),
                subtitle: _ctx.$t("action2"),
                "button-text": _ctx.$t("order_now")
              }, null, 8, ["title", "subtitle", "button-text"])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "ec-slide-item swiper-slide d-flex ec-slide-2" }, {
            default: withCtx(() => [
              createVNode(_component_SlideContent, {
                title: _ctx.$t("nice_offer"),
                subtitle: _ctx.$t("action1"),
                "button-text": _ctx.$t("order_now")
              }, null, 8, ["title", "subtitle", "button-text"])
            ]),
            _: 1
          }),
          createVNode("div", { class: "swiper-buttons" }, [
            createVNode("div", { class: "swiper-button-next" }),
            createVNode("div", { class: "swiper-button-prev" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/modules/home/components/MainSlider.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const MainSlider = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {
  name: "TabProducts",
  components: {
    ProductInner
  },
  setup() {
    const activeTab = ref(null);
    const productsByTags = ref([]);
    const loaded = ref(false);
    const tabs = ref([]);
    const fetchProductsByTags = async () => {
      try {
        const response = await ApiClient.get(
          "/api/v1/products/tags"
        );
        productsByTags.value = response.tag_groups || [];
        tabs.value = productsByTags.value.map((tagGroup) => ({
          id: `tab-${tagGroup.tag.slug}`,
          label: tagGroup.tag.name,
          href: `#tab-${tagGroup.tag.slug}`,
          products: tagGroup.products
        }));
        if (tabs.value.length > 0) {
          activeTab.value = tabs.value[0].id;
        }
        loaded.value = true;
      } catch (error) {
        console.error("Error fetching products tags:", error);
      }
    };
    onMounted(fetchProductsByTags);
    const setActiveTab = (tabId) => {
      activeTab.value = tabId;
    };
    return {
      getImagePath,
      activeTab,
      productsByTags,
      loaded,
      tabs,
      setActiveTab
    };
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ProductInner = resolveComponent("ProductInner");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "section ec-product-tab section-space-p",
    id: "topProducts"
  }, _attrs))}><div class="container"><div class="row"><div class="col-md-12 text-center"><div class="section-title"><h2 class="ec-bg-title">${ssrInterpolate(_ctx.$t("our_top_collection"))}</h2><h2 class="ec-title">${ssrInterpolate(_ctx.$t("our_top_collection"))}</h2><p class="sub-title">${ssrInterpolate(_ctx.$t("browse_top_products"))}</p></div></div><div class="col-md-12 text-center"><ul class="ec-pro-tab-nav nav justify-content-center"><!--[-->`);
  ssrRenderList($setup.tabs, (tab, index) => {
    _push(`<li class="nav-item"><a class="${ssrRenderClass([
      "nav-link",
      { active: $setup.activeTab === tab.id }
    ])}"${ssrRenderAttr("href", tab.href)} data-bs-toggle="tab">${ssrInterpolate(tab.label)}</a></li>`);
  });
  _push(`<!--]--></ul></div></div><div class="row"><div class="col"><div class="tab-content"><!--[-->`);
  ssrRenderList($setup.tabs, (tab, index) => {
    _push(`<div class="${ssrRenderClass([
      "tab-pane",
      "fade",
      {
        "show active": $setup.activeTab === tab.id
      }
    ])}"${ssrRenderAttr("id", tab.href)}><div class="row"><!--[-->`);
    ssrRenderList(tab.products, (product) => {
      _push(`<div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
      _push(ssrRenderComponent(_component_ProductInner, { product }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--><div class="col-sm-12 shop-all-btn"><a href="#">${ssrInterpolate(_ctx.$t("view_all"))}</a></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/TabProducts.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const TabProducts = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {
  name: "TwoBanners",
  components: {
    InertiaLink: Link
  },
  setup() {
    return {
      getImagePath
    };
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InertiaLink = resolveComponent("InertiaLink");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "ec-banner section section-space-p" }, _attrs))}><h2 class="d-none">${ssrInterpolate(_ctx.$t("banner"))}</h2><div class="container"><div class="ec-banner-inner"><div class="ec-banner-block ec-banner-block-2"><div class="row"><div class="banner-block col-lg-6 col-md-12 margin-b-30" data-aos="flip-right"><div class="bnr-overlay"><img${ssrRenderAttr("src", $setup.getImagePath("banner", "2.jpg"))} alt="" loading="lazy"><div class="banner-text"><span class="ec-banner-stitle">${ssrInterpolate(_ctx.$t("new_arrivals"))}</span><span class="ec-banner-title">${ssrInterpolate(_ctx.$t("screwdriver"))}</span><span class="ec-banner-discount"> 30% ${ssrInterpolate(_ctx.$t("discount"))}</span></div><div class="banner-content"><span class="ec-banner-btn">`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: _ctx.route("show-category", {
      slug: "surupoverty-i-dreli"
    })
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("order_now"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("order_now")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span></div></div></div><div class="banner-block col-lg-6 col-md-12" data-aos="flip-left"><div class="bnr-overlay"><img${ssrRenderAttr("src", $setup.getImagePath("banner", "3.jpg"))} alt="" loading="lazy"><div class="banner-text"><span class="ec-banner-stitle">${ssrInterpolate(_ctx.$t("new_trending"))}</span><span class="ec-banner-title">${ssrInterpolate(_ctx.$t("routers"))}</span><span class="ec-banner-discount">${ssrInterpolate(_ctx.$t("action1"))} <br> 20% ${ssrInterpolate(_ctx.$t("discount"))}</span></div><div class="banner-content"><span class="ec-banner-btn">`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: _ctx.route("show-category", {
      slug: "frezery"
    })
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("order_now"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("order_now")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/TwoBanners.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const TwoBanners = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  name: "TopCategories",
  components: {
    InertiaLink: Link
  },
  setup() {
    const { getImagePath: getImagePath2 } = useImagePath();
    const { siteInfoStore } = useSiteInfo();
    const defaultImage = getImagePath2("common", "default-category.jpg");
    return {
      defaultImage,
      siteInfoStore
    };
  },
  data() {
    return {
      activeTab: ""
    };
  },
  computed: {
    topCategories() {
      return this.siteInfoStore.top_categories || [];
    }
  },
  methods: {
    setActiveTab(tabId) {
      this.activeTab = tabId;
    },
    isActive(category, index) {
      const id = `tab-cat-${category.slug}`;
      return this.activeTab === id || this.activeTab === "" && index === 0;
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InertiaLink = resolveComponent("InertiaLink");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "section ec-category-section section-space-p",
    id: "categories"
  }, _attrs))}><div class="container"><div class="row"><div class="col-md-12 text-center"><div class="section-title"><h2 class="ec-bg-title">${ssrInterpolate(_ctx.$t("our_top_collection"))}</h2><h2 class="ec-title">${ssrInterpolate(_ctx.$t("top_categories"))}</h2><p class="sub-title">${ssrInterpolate(_ctx.$t("browse_top_categories"))}</p></div></div></div><div class="row"><div class="col-lg-3"><ul class="ec-cat-tab-nav nav"><!--[-->`);
  ssrRenderList($options.topCategories, (category, index) => {
    _push(`<li class="cat-item"><a class="${ssrRenderClass([
      "cat-link",
      { active: $options.isActive(category, index) }
    ])}" data-bs-toggle="tab"${ssrRenderAttr("href", `#tab-cat-${category.slug}`)}><div class="cat-desc"><span>${ssrInterpolate(category.name)}</span><span>${ssrInterpolate(category.product_count)} ${ssrInterpolate(_ctx.$t("products"))}</span></div></a></li>`);
  });
  _push(`<!--]--></ul></div><div class="col-lg-9"><div class="tab-content"><!--[-->`);
  ssrRenderList($options.topCategories, (category, index) => {
    _push(`<div class="${ssrRenderClass([
      "tab-pane",
      "fade",
      { "show active": $options.isActive(category, index) }
    ])}"${ssrRenderAttr("id", `tab-cat-${category.slug}`)}><div class="row"><img class="img-top-category"${ssrRenderAttr("src", category.image || $setup.defaultImage)}${ssrRenderAttr("alt", category.name)} loading="lazy"></div><span class="panel-overlay">`);
    _push(ssrRenderComponent(_component_InertiaLink, {
      href: _ctx.route(category.link, {
        slug: category.slug
      }),
      class: "btn btn-primary"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("view_all"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("view_all")), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</span></div>`);
  });
  _push(`<!--]--></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/TopCategories.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TopCategories = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  name: "SuperOffer",
  components: {
    InertiaLink: Link
  },
  setup() {
    return {
      getImagePath
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InertiaLink = resolveComponent("InertiaLink");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section ec-offer-section section-space-p section-space-m" }, _attrs))} data-v-291b75f5><h2 class="d-none" data-v-291b75f5>${ssrInterpolate(_ctx.$t("offer"))}</h2><div class="container" data-v-291b75f5><div class="row justify-content-end" data-v-291b75f5><div class="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center ec-offer-content" data-v-291b75f5><h2 class="ec-offer-title" data-aos="slide-down" data-v-291b75f5>${ssrInterpolate(_ctx.$t("routers"))}</h2><h3 class="ec-offer-stitle" data-aos="slide-up" data-v-291b75f5>${ssrInterpolate(_ctx.$t("super"))} ${ssrInterpolate(_ctx.$t("offer"))}</h3><span class="ec-offer-img" data-aos="zoom-in" data-v-291b75f5><img${ssrRenderAttr("src", $setup.getImagePath("offer-image", "1.png"))} alt="offer image" loading="lazy" data-v-291b75f5></span><span class="ec-offer-desc" data-v-291b75f5>${ssrInterpolate(_ctx.$t("routers"))}</span><span class="ec-offer-price" data-v-291b75f5>₽40.00 ${ssrInterpolate(_ctx.$t("only"))}</span>`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    class: "btn btn-primary btn-shop-now",
    "data-aos": "zoom-in",
    href: _ctx.route("show-category", { slug: "frezery" })
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("shop_now"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("shop_now")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/SuperOffer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SuperOffer = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-291b75f5"]]);
const _sfc_main$3 = {
  name: "HomePage",
  layout: Layout$1,
  components: {
    MainSlider,
    TabProducts,
    TwoBanners,
    TopCategories,
    ListServices,
    SuperOffer,
    NewProducts,
    ListBrands
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MainSlider = resolveComponent("MainSlider");
  const _component_TabProducts = resolveComponent("TabProducts");
  const _component_TwoBanners = resolveComponent("TwoBanners");
  const _component_TopCategories = resolveComponent("TopCategories");
  const _component_ListServices = resolveComponent("ListServices");
  const _component_SuperOffer = resolveComponent("SuperOffer");
  const _component_NewProducts = resolveComponent("NewProducts");
  const _component_ListBrands = resolveComponent("ListBrands");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_MainSlider, null, null, _parent));
  _push(ssrRenderComponent(_component_TabProducts, null, null, _parent));
  _push(ssrRenderComponent(_component_TwoBanners, null, null, _parent));
  _push(ssrRenderComponent(_component_TopCategories, null, null, _parent));
  _push(ssrRenderComponent(_component_ListServices, null, null, _parent));
  _push(ssrRenderComponent(_component_SuperOffer, null, null, _parent));
  _push(ssrRenderComponent(_component_NewProducts, null, null, _parent));
  _push(ssrRenderComponent(_component_ListBrands, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Home.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  name: "PolicyCookies",
  layout: Layout$1,
  components: {
    InertiaLink: Link
  },
  setup() {
    useBodyClass("policy_cookies_page");
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InertiaLink = resolveComponent("InertiaLink");
  _push(`<!--[--><div class="sticky-header-next-sec ec-breadcrumb section-space-mb"><div class="container"><div class="row"><div class="col-12"><div class="row ec_breadcrumb_inner"><div class="col-md-6 col-sm-12"><h2 class="ec-breadcrumb-title">${ssrInterpolate(_ctx.$t("menu.policy_cookies"))}</h2></div><div class="col-md-6 col-sm-12"><ul class="ec-breadcrumb-list"><li class="ec-breadcrumb-item">`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: _ctx.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("menu.home"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("menu.home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-breadcrumb-item active">${ssrInterpolate(_ctx.$t("menu.policy_cookies"))}</li></ul></div></div></div></div></div></div><section class="ec-page-content section-space-p"><div class="container"><div class="row"><div class="col-md-12 text-center"><div class="section-title"><h1 class="ec-bg-title">${ssrInterpolate(_ctx.$t("policy_cookies"))}</h1><h1 class="ec-title">${ssrInterpolate(_ctx.$t("policy_cookies"))}</h1></div></div><div class="col-md-12"><div class="ec-common-wrapper"><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> 1. Общие положения </h3><p> Данная Политика использования файлов cookie (далее - Политика) относится к сайту e-kaufmann.ru, который принадлежит индивидуальному предпринимателю Брухан Юрий Игоревич (далее – Оператор). <br> Оператор использует файлы cookie и аналогичные технологии на своем сайте для обеспечения его корректной работы, улучшения пользовательского опыта и предоставления персонализированной информации. <br></p></div></div><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> 2. Что такое cookie? </h3><p> Файлы cookie - это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении сайта. С помощью файлов cookie сайт может «запомнить» ваши действия и предпочтения на определенный период времени. </p></div></div><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> 3. Какие типы cookie используются </h3><p> Оператор может использовать на сайте следующие типы файлов cookie: <br> - Обязательные cookie - необходимы для работы сайта, обеспечивают навигацию и использование основных функций. <br> - Аналитические cookie - позволяют собирать обезличенную статистику о посещениях сайта, что помогает улучшать его работу и содержимое (например, Яндекс.Метрика, Google Analytics). <br> - Функциональные cookie - используются для запоминания ваших настроек и предпочтений (язык, оформление и проч.). <br> - Рекламные cookie - могут применяться для показа персонализированной рекламы или анализа эффективности рекламных кампаний (используются только с согласия пользователя). <br></p></div></div><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> 4. Цели использования cookie </h3><p> - обеспечение корректной работы сайта; <br> - анализ и улучшение работы сайта; <br> - запоминание пользовательских настроек; <br> - предоставление информации, соответствующей интересам посетителя. <br></p></div></div><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> 5. Управление cookie </h3><p> Большинство браузеров по умолчанию принимают cookie. Вы можете изменить настройки браузера, чтобы блокировать или удалять cookie, а также получать уведомления о их отправке. Обратите внимание, что при отключении или удалении cookie некоторые функции сайта могут работать некорректно. Подробнее о настройках cookie можно узнать на официальных страницах поддержки вашего браузера. </p></div></div><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> 6. Изменения в политике </h3><p> Оператор может обновлять настоящую политику. Все изменения отображаются на данной странице с указанием даты обновления. </p></div></div></div></div></div></div></section><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/PolicyCookies.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PolicyCookies = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PolicyCookies
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  name: "PrivacyPolicy",
  layout: Layout$1,
  components: {
    InertiaLink: Link
  },
  setup() {
    useBodyClass("terms_condition_page");
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InertiaLink = resolveComponent("InertiaLink");
  _push(`<!--[--><div class="sticky-header-next-sec ec-breadcrumb section-space-mb"><div class="container"><div class="row"><div class="col-12"><div class="row ec_breadcrumb_inner"><div class="col-md-6 col-sm-12"><h2 class="ec-breadcrumb-title">${ssrInterpolate(_ctx.$t("menu.privacy_policy"))}</h2></div><div class="col-md-6 col-sm-12"><ul class="ec-breadcrumb-list"><li class="ec-breadcrumb-item">`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: _ctx.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("menu.home"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("menu.home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-breadcrumb-item active">${ssrInterpolate(_ctx.$t("menu.privacy_policy"))}</li></ul></div></div></div></div></div></div><section class="ec-page-content section-space-p"><div class="container"><div class="row"><div class="col-md-12 text-center"><div class="section-title"><h1 class="ec-bg-title">${ssrInterpolate(_ctx.$t("privacy_policy"))}</h1><h1 class="ec-title">${ssrInterpolate(_ctx.$t("privacy_policy"))}</h1></div></div><div class="col-md-12"><div class="ec-common-wrapper"><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> 1. Общие положения </h3><p> 1.1. Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных индивидуального предпринимателя Брухан Юрий Игоревич (далее – Оператор). <br> 1.2. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну. <br> 1.3. Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) применяется ко всей информации, которую Оператор может получить о посетителях сайта e-kaufmann.ru (или иного используемого вами доменного имени). <br></p></div></div><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> 2. Основные понятия, используемые в Политике </h3><p> - Персональные данные – любая информация, непосредственно или косвенно относящаяся к определённому или определяемому физическому лицу (субъекту персональных данных). <br> - Оператор – лицо, организующее и/или осуществляющее обработку персональных данных, а также определяющее цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными. <br> - Сайт – интернет-ресурс, размещённый в сети Интернет по адресу e-kaufmann.ru. <br> - Пользователь – любой посетитель Сайта. <br></p></div></div><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> 3. Оператор может обрабатывать следующие персональные данные Пользователя </h3><p> - Фамилия, имя, отчество. <br> - Контактный телефон. <br> - Адрес электронной почты. <br> - Адрес для доставки (по необходимости). <br> - Иные данные, предоставляемые Пользователем. <br></p><p> Также на Сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов cookie) с помощью сервисов интернет-статистики (Яндекс.Метрика, Google Analytics и других). </p></div></div><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> 4. Цели обработки персональных данных </h3><p> Обработка персональных данных Пользователя производится в целях: <br> - Оказания услуг по доставке товаров из Европы; <br> - Оформления заявок, заказов и иной документации; <br> - Обратной связи с Пользователем; <br> - Информирования об изменениях статуса заказов и новых предложениях (при согласии Пользователя); <br> - Проведения маркетинговых и иных исследований; <br> - Соблюдения требований законодательства РФ. <br></p></div></div><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> 5. Правовые основания обработки персональных данных </h3><p> Оператор обрабатывает персональные данные Пользователя только при заполнении Пользователем форм на Сайте и/или отправке данных Оператору самостоятельно посредством специальных форм и по согласованию с Пользователем. </p></div></div><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> 6. Порядок сбора, хранения, передачи и иных видов обработки персональных данных </h3><p> 6.1. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры по исключению доступа к персональным данным неуполномоченных лиц. <br> 6.2. Персональные данные Пользователя ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства. <br> 6.3. В случае выявления неточностей в персональных данных Пользователь может их актуализировать, обратившись к Оператору по контактному адресу электронной почты. <br></p></div></div><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> 7. Сроки обработки персональных данных </h3><p> Персональные данные обрабатываются не дольше, чем этого требуют цели обработки, или чем это предусмотрено законодательством РФ. </p></div></div><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> 8. Права субъекта персональных данных </h3><p> Пользователь вправе: <br> - Получать информацию, касающуюся обработки его персональных данных; <br> - Требовать уточнения своих персональных данных, их блокирования или уничтожения при наличии оснований; <br> - Отозвать своё согласие на обработку персональных данных, направив Оператору уведомление по электронной почте. <br></p></div></div><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> 9. Заключительные положения </h3><p> 9.1. Оператор имеет право вносить изменения в настоящую Политику. Новая редакция Политики вступает в силу с момента её размещения на Сайте. <br> 9.2. Все предложения или вопросы по настоящей Политике следует направлять по электронной почте указанной на странице: `);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: _ctx.route("contacts")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("page.contact_us"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("page.contact_us")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br> 9.3. Действующая Политика размещена на Сайте по адресу: `);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: _ctx.route("privacy-policy")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("page.privacy_policy"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("page.privacy_policy")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` . <br></p></div></div></div></div></div></div></section><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/PrivacyPolicy.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PrivacyPolicy = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PrivacyPolicy
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  name: "Product",
  layout: Layout$1,
  components: {
    InertiaLink: Link,
    NewProducts,
    Swiper,
    SwiperSlide
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = inject("route");
    const activeTab = ref("description");
    const mainSwiper = ref(null);
    const fullProduct = ref(null);
    const fetchFullProduct = async (slug) => {
      if (!slug) return;
      try {
        const response = await ApiClient.get(
          `/api/v1/product/${slug}`
        );
        fullProduct.value = response.product;
      } catch (error) {
        console.error("Error fetching product by tag:", error);
      }
    };
    onMounted(() => {
      var _a;
      document.body.classList.add("product_page");
      if ((_a = props.product) == null ? void 0 : _a.slug) {
        fetchFullProduct(props.product.slug);
      }
    });
    onBeforeUnmount(() => {
      document.body.classList.remove("product_page");
    });
    const slideToNext = () => {
      if (mainSwiper.value) {
        mainSwiper.value.slideNext();
      }
    };
    const slideToPrev = () => {
      if (mainSwiper.value) {
        mainSwiper.value.slidePrev();
      }
    };
    watch(
      () => {
        var _a;
        return (_a = props.product) == null ? void 0 : _a.slug;
      },
      (newSlug) => {
        if (newSlug) fetchFullProduct(newSlug);
      }
    );
    return {
      modules: [Autoplay, FreeMode, Navigation, Thumbs],
      route,
      activeTab,
      slideToNext,
      slideToPrev,
      setMainSwiper: (swiper) => {
        mainSwiper.value = swiper;
      },
      fullProduct
    };
  },
  data() {
    return {
      thumbsSwiper: null
    };
  },
  computed: {
    safePresentation() {
      var _a;
      return DOMPurify.sanitize((_a = this.fullProduct) == null ? void 0 : _a.presentation);
    }
  },
  methods: {
    Autoplay,
    Navigation,
    Thumbs,
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e;
  const _component_InertiaLink = resolveComponent("InertiaLink");
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_NewProducts = resolveComponent("NewProducts");
  _push(`<!--[--><div class="sticky-header-next-sec ec-breadcrumb section-space-mb" data-v-06b08724><div class="container" data-v-06b08724><div class="row" data-v-06b08724><div class="col-12" data-v-06b08724><div class="row ec_breadcrumb_inner" data-v-06b08724><div class="col-md-6 col-sm-12" data-v-06b08724><h2 class="ec-breadcrumb-title" data-v-06b08724>${ssrInterpolate((_a = $setup.fullProduct) == null ? void 0 : _a.name)}</h2></div><div class="col-md-6 col-sm-12" data-v-06b08724><ul class="ec-breadcrumb-list" data-v-06b08724><li class="ec-breadcrumb-item" data-v-06b08724>`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: $setup.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("menu.home"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("menu.home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-breadcrumb-item active" data-v-06b08724>${ssrInterpolate(_ctx.$t("menu.product"))}</li></ul></div></div></div></div></div></div><section class="ec-page-content section-space-p" data-v-06b08724><div class="container" data-v-06b08724><div class="row" data-v-06b08724><div class="ec-pro-rightside ec-common-rightside col-lg-12 col-md-12" data-v-06b08724><div class="single-pro-block" data-v-06b08724><div class="single-pro-inner" data-v-06b08724><div class="row" data-v-06b08724><div class="single-pro-img single-pro-img-no-sidebar" data-v-06b08724><div class="product-gallery single-product-scroll" data-v-06b08724>`);
  _push(ssrRenderComponent(_component_swiper, {
    class: "product-gallery-main",
    modules: [$options.Thumbs],
    thumbs: { swiper: $data.thumbsSwiper },
    "slides-per-view": 1,
    "space-between": 0,
    onSwiper: $setup.setMainSwiper
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a2, _b2;
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList((_a2 = $setup.fullProduct) == null ? void 0 : _a2.images, (image, index) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            class: "product-gallery-main-slide",
            key: index
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              var _a3, _b3;
              if (_push3) {
                _push3(`<img${ssrRenderAttr("src", image.image)}${ssrRenderAttr(
                  "alt",
                  image.name ?? ((_a3 = $setup.fullProduct) == null ? void 0 : _a3.name)
                )} loading="lazy" data-v-06b08724${_scopeId2}>`);
              } else {
                return [
                  createVNode("img", {
                    src: image.image,
                    alt: image.name ?? ((_b3 = $setup.fullProduct) == null ? void 0 : _b3.name),
                    loading: "lazy"
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList((_b2 = $setup.fullProduct) == null ? void 0 : _b2.images, (image, index) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              class: "product-gallery-main-slide",
              key: index
            }, {
              default: withCtx(() => {
                var _a3;
                return [
                  createVNode("img", {
                    src: image.image,
                    alt: image.name ?? ((_a3 = $setup.fullProduct) == null ? void 0 : _a3.name),
                    loading: "lazy"
                  }, null, 8, ["src", "alt"])
                ];
              }),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="product-gallery-thumbs" data-v-06b08724>`);
  _push(ssrRenderComponent(_component_swiper, {
    class: "product-gallery-thumbs-list",
    onSwiper: $options.setThumbsSwiper,
    modules: [$options.Navigation, $options.Thumbs],
    "slides-per-view": 4,
    "space-between": 20,
    freeMode: true,
    watchSlidesProgress: "",
    watchSlidesVisibility: "",
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next"
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a2, _b2;
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList((_a2 = $setup.fullProduct) == null ? void 0 : _a2.images, (image, index) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            class: "product-gallery-thumbs-slide",
            key: index
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              var _a3, _b3;
              if (_push3) {
                _push3(`<img${ssrRenderAttr("src", image.image)}${ssrRenderAttr(
                  "alt",
                  image.name ?? ((_a3 = $setup.fullProduct) == null ? void 0 : _a3.name)
                )} loading="lazy" data-v-06b08724${_scopeId2}>`);
              } else {
                return [
                  createVNode("img", {
                    src: image.image,
                    alt: image.name ?? ((_b3 = $setup.fullProduct) == null ? void 0 : _b3.name),
                    loading: "lazy"
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList((_b2 = $setup.fullProduct) == null ? void 0 : _b2.images, (image, index) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              class: "product-gallery-thumbs-slide",
              key: index
            }, {
              default: withCtx(() => {
                var _a3;
                return [
                  createVNode("img", {
                    src: image.image,
                    alt: image.name ?? ((_a3 = $setup.fullProduct) == null ? void 0 : _a3.name),
                    loading: "lazy"
                  }, null, 8, ["src", "alt"])
                ];
              }),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="swiper-buttons" data-v-06b08724><div class="swiper-button-next" data-v-06b08724></div><div class="swiper-button-prev" data-v-06b08724></div></div></div></div></div><div class="single-pro-desc single-pro-desc-no-sidebar" data-v-06b08724><div class="single-pro-content" data-v-06b08724><h5 class="ec-single-title" data-v-06b08724>${ssrInterpolate((_b = $setup.fullProduct) == null ? void 0 : _b.name)}</h5><div class="ec-single-rating-wrap" data-v-06b08724><div class="ec-single-rating" data-v-06b08724><!--[-->`);
  ssrRenderList(5, (index) => {
    var _a2;
    _push(`<i class="${ssrRenderClass([{
      fill: index <= ((_a2 = $setup.fullProduct) == null ? void 0 : _a2.rating)
    }, "ecicon eci-star"])}" data-v-06b08724></i>`);
  });
  _push(`<!--]--></div></div><div class="ec-single-desc" data-v-06b08724>${ssrInterpolate((_c = $setup.fullProduct) == null ? void 0 : _c.description)}</div><div class="ec-single-price-stoke" data-v-06b08724><div class="ec-single-price" data-v-06b08724><span class="new-price" data-v-06b08724> ₽${ssrInterpolate((_d = $setup.fullProduct) == null ? void 0 : _d.price)}</span></div><div class="ec-single-stoke" data-v-06b08724><span class="ec-single-sku" data-v-06b08724>${ssrInterpolate(_ctx.$t("sku"))}: ${ssrInterpolate((_e = $setup.fullProduct) == null ? void 0 : _e.sku)}</span></div></div></div></div></div></div></div><div class="ec-single-pro-tab" data-v-06b08724><div class="ec-single-pro-tab-wrapper" data-v-06b08724><div class="ec-single-pro-tab-nav" data-v-06b08724><ul class="nav nav-tabs" data-v-06b08724><li class="nav-item" data-v-06b08724><a class="${ssrRenderClass([{
    active: $setup.activeTab === "description"
  }, "nav-link"])}" data-v-06b08724>${ssrInterpolate(_ctx.$t("description"))}</a></li></ul></div><div class="tab-content ec-single-pro-tab-content" data-v-06b08724><div class="${ssrRenderClass([
    "tab-pane fade show",
    { active: $setup.activeTab === "description" }
  ])}" data-v-06b08724><div class="ec-single-pro-tab-desc" data-v-06b08724>${$options.safePresentation ?? ""}</div></div></div></div></div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_NewProducts, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Product = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-06b08724"]]);
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Product
}, Symbol.toStringTag, { value: "Module" }));
const Ziggy = { "url": "http://brukhan.local", "port": null, "defaults": {}, "routes": { "filament.exports.download": { "uri": "filament/exports/{export}/download", "methods": ["GET", "HEAD"], "parameters": ["export"], "bindings": { "export": "id" } }, "filament.imports.failed-rows.download": { "uri": "filament/imports/{import}/failed-rows/download", "methods": ["GET", "HEAD"], "parameters": ["import"], "bindings": { "import": "id" } }, "filament.admin.auth.login": { "uri": "admin/login", "methods": ["GET", "HEAD"] }, "filament.admin.auth.logout": { "uri": "admin/logout", "methods": ["POST"] }, "filament.admin.pages.dashboard": { "uri": "admin", "methods": ["GET", "HEAD"] }, "filament.admin.resources.blog-posts.index": { "uri": "admin/blog-posts", "methods": ["GET", "HEAD"] }, "filament.admin.resources.blog-posts.create": { "uri": "admin/blog-posts/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.blog-posts.edit": { "uri": "admin/blog-posts/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.blog-posts.view": { "uri": "admin/blog-posts/{record}", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.brands.index": { "uri": "admin/brands", "methods": ["GET", "HEAD"] }, "filament.admin.resources.brands.create": { "uri": "admin/brands/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.brands.edit": { "uri": "admin/brands/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.categories.index": { "uri": "admin/categories", "methods": ["GET", "HEAD"] }, "filament.admin.resources.categories.create": { "uri": "admin/categories/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.categories.edit": { "uri": "admin/categories/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.contacts.index": { "uri": "admin/contacts", "methods": ["GET", "HEAD"] }, "filament.admin.resources.contacts.create": { "uri": "admin/contacts/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.contacts.edit": { "uri": "admin/contacts/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.contact-types.index": { "uri": "admin/contact-types", "methods": ["GET", "HEAD"] }, "filament.admin.resources.contact-types.create": { "uri": "admin/contact-types/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.contact-types.edit": { "uri": "admin/contact-types/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.customers.index": { "uri": "admin/customers", "methods": ["GET", "HEAD"] }, "filament.admin.resources.customers.create": { "uri": "admin/customers/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.customers.edit": { "uri": "admin/customers/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.leads.index": { "uri": "admin/leads", "methods": ["GET", "HEAD"] }, "filament.admin.resources.leads.create": { "uri": "admin/leads/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.leads.edit": { "uri": "admin/leads/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.lead-types.index": { "uri": "admin/lead-types", "methods": ["GET", "HEAD"] }, "filament.admin.resources.lead-types.create": { "uri": "admin/lead-types/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.lead-types.edit": { "uri": "admin/lead-types/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.orders.index": { "uri": "admin/orders", "methods": ["GET", "HEAD"] }, "filament.admin.resources.orders.create": { "uri": "admin/orders/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.orders.edit": { "uri": "admin/orders/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.pages.index": { "uri": "admin/pages", "methods": ["GET", "HEAD"] }, "filament.admin.resources.pages.create": { "uri": "admin/pages/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.pages.edit": { "uri": "admin/pages/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.products.index": { "uri": "admin/products", "methods": ["GET", "HEAD"] }, "filament.admin.resources.products.create": { "uri": "admin/products/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.products.edit": { "uri": "admin/products/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.settings.index": { "uri": "admin/settings", "methods": ["GET", "HEAD"] }, "filament.admin.resources.social-networks.index": { "uri": "admin/social-networks", "methods": ["GET", "HEAD"] }, "filament.admin.resources.social-networks.create": { "uri": "admin/social-networks/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.social-networks.edit": { "uri": "admin/social-networks/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.tags.index": { "uri": "admin/tags", "methods": ["GET", "HEAD"] }, "filament.admin.resources.tags.create": { "uri": "admin/tags/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.tags.edit": { "uri": "admin/tags/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "livewire.update": { "uri": "livewire/update", "methods": ["POST"] }, "livewire.upload-file": { "uri": "livewire/upload-file", "methods": ["POST"] }, "livewire.preview-file": { "uri": "livewire/preview-file/{filename}", "methods": ["GET", "HEAD"], "parameters": ["filename"] }, "log-viewer.hosts": { "uri": "admin/log-viewer/api/hosts", "methods": ["GET", "HEAD"] }, "log-viewer.folders": { "uri": "admin/log-viewer/api/folders", "methods": ["GET", "HEAD"] }, "log-viewer.folders.request-download": { "uri": "admin/log-viewer/api/folders/{folderIdentifier}/download/request", "methods": ["GET", "HEAD"], "parameters": ["folderIdentifier"] }, "log-viewer.folders.clear-cache": { "uri": "admin/log-viewer/api/folders/{folderIdentifier}/clear-cache", "methods": ["POST"], "parameters": ["folderIdentifier"] }, "log-viewer.folders.delete": { "uri": "admin/log-viewer/api/folders/{folderIdentifier}", "methods": ["DELETE"], "parameters": ["folderIdentifier"] }, "log-viewer.files": { "uri": "admin/log-viewer/api/files", "methods": ["GET", "HEAD"] }, "log-viewer.files.request-download": { "uri": "admin/log-viewer/api/files/{fileIdentifier}/download/request", "methods": ["GET", "HEAD"], "parameters": ["fileIdentifier"] }, "log-viewer.files.clear-cache": { "uri": "admin/log-viewer/api/files/{fileIdentifier}/clear-cache", "methods": ["POST"], "parameters": ["fileIdentifier"] }, "log-viewer.files.delete": { "uri": "admin/log-viewer/api/files/{fileIdentifier}", "methods": ["DELETE"], "parameters": ["fileIdentifier"] }, "log-viewer.files.clear-cache-all": { "uri": "admin/log-viewer/api/clear-cache-all", "methods": ["POST"] }, "log-viewer.files.delete-multiple-files": { "uri": "admin/log-viewer/api/delete-multiple-files", "methods": ["POST"] }, "log-viewer.logs": { "uri": "admin/log-viewer/api/logs", "methods": ["GET", "HEAD"] }, "log-viewer.folders.download": { "uri": "admin/log-viewer/api/folders/{folderIdentifier}/download", "methods": ["GET", "HEAD"], "parameters": ["folderIdentifier"] }, "log-viewer.files.download": { "uri": "admin/log-viewer/api/files/{fileIdentifier}/download", "methods": ["GET", "HEAD"], "parameters": ["fileIdentifier"] }, "log-viewer.index": { "uri": "admin/log-viewer/{view?}", "methods": ["GET", "HEAD"], "wheres": { "view": "(.*)" }, "parameters": ["view"] }, "home": { "uri": "/", "methods": ["GET", "HEAD"] }, "about-us": { "uri": "about-us", "methods": ["GET", "HEAD"] }, "contacts": { "uri": "contacts", "methods": ["GET", "HEAD"] }, "faq": { "uri": "faq", "methods": ["GET", "HEAD"] }, "privacy-policy": { "uri": "privacy-policy", "methods": ["GET", "HEAD"] }, "policy-cookies": { "uri": "policy-cookies", "methods": ["GET", "HEAD"] }, "bank-details": { "uri": "bank-details", "methods": ["GET", "HEAD"] }, "delivery": { "uri": "delivery", "methods": ["GET", "HEAD"] }, "show-product": { "uri": "product/{slug}", "methods": ["GET", "HEAD"], "parameters": ["slug"] }, "show-category": { "uri": "category/{slug}", "methods": ["GET", "HEAD"], "parameters": ["slug"] }, "api.v1.common.site-info": { "uri": "api/v1/site-info", "methods": ["GET", "HEAD"] }, "api.v1.common.popular-tags": { "uri": "api/v1/popular-tags", "methods": ["GET", "HEAD"] }, "api.v1.product.tags": { "uri": "api/v1/products/tags", "methods": ["GET", "HEAD"] }, "api.v1.product.get-product": { "uri": "api/v1/product/{slug}", "methods": ["GET", "HEAD"], "wheres": { "slug": "[a-zA-Z0-9-]+" }, "parameters": ["slug"] }, "api.v1.product.get-products": { "uri": "api/v1/products", "methods": ["GET", "HEAD"] } } };
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
const ru = {
  locale: {
    russian: "Русский",
    english: "Английский"
  },
  language: "Язык",
  all_rights_reserved: "Все права защищены",
  follow_us_on: "Подпишитесь на нас",
  information: "Информация",
  to_the_client: "Клиенту",
  newsletter: "Рассылка",
  special_promos: "Получайте мгновенные обновления о наших новых продуктах и специальных предложениях!",
  enter_your_email: "Введите ваш email здесь...",
  page: {
    about_us: "О нас",
    faq: "Часто задаваемые вопросы",
    delivery: "Информация о доставке",
    contact_us: "Контакты",
    privacy_policy: "Политика персональных данных",
    policy_cookies: "Политика обработки cookie",
    bank_details: "Банковские реквизиты"
  },
  any_questions: "Остались вопросы? Звоните",
  contact_us: "Свяжитесь с нами",
  call_us: "Позвоните нам",
  email: "Email",
  phone: "Телефон",
  address: "Адрес",
  menu: {
    home: "Главная",
    categories: "Категории",
    about_us: "О нас",
    contacts: "Контакты",
    company: "Компания",
    faq: "Часто задаваемые вопросы",
    delivery: "Информация о доставке",
    contact_us: "Контакты",
    privacy_policy: "Политика персональных данных",
    policy_cookies: "Политика обработки cookie",
    bank_details: "Банковские реквизиты",
    to_the_client: "Клиенту",
    top_products: "Лучшие товары",
    services: "Услуги",
    arrivals: "Новые поступления",
    product: "Продукт",
    shop: "Магазин"
  },
  free_shipping: "Бесплатная доставка",
  free_shipping_description: "Бесплатная доставка для заказов свыше ₽16 000",
  support: "Круглосуточная поддержка",
  support_description: "Свяжитесь с нами 24 часа в сутки, 7 дней в неделю",
  about_return: "Возврат в течение 30 дней",
  about_return_description: "Просто верните товар в течение 30 дней для обмена",
  payment_secure: "Безопасная оплата",
  payment_secure_description: "Свяжитесь с нами 24 часа в сутки, 7 дней в неделю",
  collections: "Коллекции",
  our_top_collection: "Наша лучшая коллекция",
  top_categories: "Лучшие категории",
  browse_top_categories: "Просмотрите коллекцию лучших категорий",
  browse_top_products: "Просмотрите коллекцию лучших продуктов",
  view_all: "Просмотреть все",
  products: "продукты",
  banner: "Баннер",
  new_arrivals: "Новые поступления",
  discount: "Скидка",
  order_now: "Заказать сейчас",
  new_trending: "Новый тренд",
  action1: "Купите любые 3 товара и получите подарок",
  screwdriver: "Шуруповерт",
  routers: "Фрезеры",
  shop_now: "Купить сейчас",
  only: "Только",
  super: "Супер",
  offer: "Предложение",
  good_price: "Хорошая цена",
  action2: "Выгодные предложения на все комплектующие Festool!",
  nice_offer: "Приятное предложение",
  search_products: "Найти продукты...",
  sku: "Артикул",
  description: "Описание",
  sort_by: "Сортировать по",
  low_price: "Низкая цена",
  high_price: "Высокая цена",
  filter_products_by: "Фильтровать продукты по",
  price: "Цена",
  more_categories: "Больше категорий",
  category: "Категория",
  products_not_found: "Продукты не найдены",
  about_my_business: "О нашем бизнесе",
  full_text_for_faq: "Часто задаваемые вопросы",
  form: {
    first_name: "Имя",
    last_name: "Фамилия",
    email: "Email",
    phone: "Телефон",
    message: "Сообщение",
    send: "Отправить"
  },
  privacy_policy: "Политика персональных данных",
  policy_cookies: "Политика обработки cookie",
  bank_details: "Банковские реквизиты",
  delivery: "Информация о доставке",
  errors: {
    titles: {
      503: "Сервис недоступен",
      500: "Внутренняя ошибка сервера",
      404: "Страница не найдена",
      403: "Доступ запрещён"
    },
    errors: {
      503: "Извините, мы проводим техническое обслуживание. Пожалуйста, зайдите позже.",
      500: "Упс, что-то пошло не так на сервере.",
      404: "Извините, страница, которую вы ищете, не найдена.",
      403: "Извините, у вас нет доступа к этой странице."
    }
  }
};
const en = {
  locale: {
    russian: "Russian",
    english: "English"
  },
  language: "Language",
  all_rights_reserved: "All Rights Reserved",
  follow_us_on: "Follow us on",
  information: "Information",
  to_the_client: "To the client",
  newsletter: "Newsletter",
  special_promos: "Get instant updates about our new products and special promos!",
  enter_your_email: "Enter your email here...",
  page: {
    about_us: "About us",
    faq: "FAQ",
    delivery_information: "Delivery information",
    contact_us: "Contact us",
    privacy_policy: "Privacy policy",
    policy_cookies: "Cookie processing policy",
    bank_details: "Bank details"
  },
  any_questions: "Got questions? Call us",
  contact_us: "Contact us",
  call_us: "Call us",
  email: "Email",
  phone: "Phone",
  address: "Address",
  menu: {
    home: "Home",
    categories: "Categories",
    about_us: "About us",
    contacts: "Contacts",
    company: "Company",
    faq: "FAQ",
    delivery: "Delivery information",
    contact_us: "Contact us",
    privacy_policy: "Privacy policy",
    policy_cookies: "Cookie processing policy",
    bank_details: "Bank details",
    to_the_client: "To the client",
    top_products: "Top products",
    services: "Services",
    arrivals: "New arrivals",
    product: "Product",
    shop: "Shop"
  },
  free_shipping: "Free Shipping",
  free_shipping_description: "Free shipping for orders over ₽16 000",
  support: "24X7 Support",
  support_description: "Contact us 24 hours a day, 7 days a week",
  about_return: "30 Days Return",
  about_return_description: "Simply return it within 30 days for an exchange",
  payment_secure: "Payment Secure",
  payment_secure_description: "Contact us 24 hours a day, 7 days a week",
  our_top_collection: "Our Top Collection",
  top_categories: "Top Categories",
  collections: "Collections",
  browse_top_categories: "Browse The Collection of Top Categories",
  browse_top_products: "Browse The Collection of Top Products",
  view_all: "View All",
  products: "products",
  banner: "Banner",
  new_arrivals: "New Arrivals",
  discount: "Discount",
  order_now: "Order Now",
  new_trending: "New Trending",
  action1: "Buy any 3 Items & get",
  screwdriver: "Screwdriver",
  routers: "Routers",
  shop_now: "Shop Now",
  only: "Only",
  super: "Super",
  offer: "Offer",
  good_price: "Good price",
  action2: "Great deals on all Festool accessories!",
  nice_offer: "Nice offer",
  search_products: "Search products...",
  sku: "Sku",
  description: "Description",
  sort_by: "Sort by",
  low_price: "Low price",
  high_price: "High price",
  filter_products_by: "Filter Products By",
  price: "Price",
  more_categories: "More Categories",
  category: "Category",
  products_not_found: "Products not found",
  about_my_business: "About our business",
  full_text_for_faq: "Frequently asked questions",
  form: {
    first_name: "First name",
    last_name: "Last name",
    email: "Email",
    phone: "Phone number",
    message: "Message",
    send: "Send"
  },
  privacy_policy: "Privacy policy",
  policy_cookies: "Cookie processing policy",
  bank_details: "Bank details",
  delivery: "Delivery information",
  errors: {
    titles: {
      503: "Service Unavailable",
      500: "Internal Server Error",
      404: "Page Not Found",
      403: "Forbidden"
    },
    errors: {
      503: "Sorry, we are doing some maintenance. Please check back soon.",
      500: "Whoops, something went wrong on our servers.",
      404: "Sorry, the page you are looking for could not be found.",
      403: "Sorry, you are forbidden from accessing this page."
    }
  }
};
const defaultLocale = localStorage.getItem("locale") || "ru";
const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: "en",
  messages: { ru, en }
});
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./pages/AboutUs.vue": __vite_glob_0_0, "./pages/BankDetails.vue": __vite_glob_0_1, "./pages/Category.vue": __vite_glob_0_2, "./pages/Contacts.vue": __vite_glob_0_3, "./pages/Delivery.vue": __vite_glob_0_4, "./pages/ErrorPage.vue": __vite_glob_0_5, "./pages/Faq.vue": __vite_glob_0_6, "./pages/Home.vue": __vite_glob_0_7, "./pages/PolicyCookies.vue": __vite_glob_0_8, "./pages/PrivacyPolicy.vue": __vite_glob_0_9, "./pages/Product.vue": __vite_glob_0_10 });
      const page2 = pages[`./pages/${name}.vue`];
      page2.default.layout = page2.default.layout || Layout$1;
      return page2;
    },
    setup({ App, props, plugin }) {
      const app = createSSRApp({
        render: () => h(App, props)
      });
      const pinia = createPinia();
      app.use(pinia);
      app.use(ZiggyVue, Ziggy);
      app.use(i18n);
      app.use(plugin);
      AOS.init({
        duration: 1500,
        easing: "ease-in-out",
        once: true
      });
      return app;
    }
  })
);

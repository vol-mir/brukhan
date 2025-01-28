import { useSSRContext, mergeProps, ref, resolveComponent, withCtx, createTextVNode, toDisplayString, onMounted, onBeforeUnmount, createVNode, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import { defineStore, createPinia } from "pinia";
import { Link, Head, createInertiaApp } from "@inertiajs/vue3";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import AOS from "aos";
const getImagePath = (folder, name) => new URL(`/resources/images/${folder}/${name}`, import.meta.url).href;
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$s = {
  name: "AppLoader",
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  }
};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.loading) {
    _push(`<div${ssrRenderAttrs(mergeProps({ id: "ec-overlay" }, _attrs))}><span class="loader_img"></span></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/AppLoader.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const AppLoader = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$r]]);
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
const _sfc_main$r = {
  name: "HeaderTop",
  setup() {
    const sidebarStore = useSidebarStore();
    const showLanguageDropdown = ref(false);
    const getIconPath = (name) => getImagePath("icons", name);
    const toggleDropdown = () => {
      showLanguageDropdown.value = !showLanguageDropdown.value;
    };
    return {
      sidebarStore,
      getIconPath,
      showLanguageDropdown,
      toggleDropdown
    };
  }
};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-top" }, _attrs))} data-v-4898bd83><div class="container" data-v-4898bd83><div class="row align-items-center" data-v-4898bd83><div class="col text-left header-top-left d-none d-lg-block" data-v-4898bd83><div class="header-top-social" data-v-4898bd83><span class="social-text text-upper" data-v-4898bd83> Follow us on: </span><ul class="mb-0" data-v-4898bd83><li class="list-inline-item" data-v-4898bd83><a class="hdr-facebook" href="#" aria-label="Facebook" data-v-4898bd83><i class="ecicon eci-facebook" data-v-4898bd83></i></a></li><li class="list-inline-item" data-v-4898bd83><a class="hdr-twitter" href="#" aria-label="Twitter" data-v-4898bd83><i class="ecicon eci-twitter" data-v-4898bd83></i></a></li><li class="list-inline-item" data-v-4898bd83><a class="hdr-instagram" href="#" aria-label="Instagram" data-v-4898bd83><i class="ecicon eci-instagram" data-v-4898bd83></i></a></li><li class="list-inline-item" data-v-4898bd83><a class="hdr-linkedin" href="#" aria-label="LinkedIn" data-v-4898bd83><i class="ecicon eci-linkedin" data-v-4898bd83></i></a></li></ul></div></div><div class="col text-center header-top-center" data-v-4898bd83><div class="header-top-message text-upper" data-v-4898bd83><span data-v-4898bd83>Free Shipping</span> This Week Order Over - $75 </div></div><div class="col header-top-right d-none d-lg-block" data-v-4898bd83><div class="header-top-lan-curr d-flex justify-content-end" data-v-4898bd83><div class="header-top-lan dropdown" data-v-4898bd83><button class="dropdown-toggle text-upper" aria-haspopup="true"${ssrRenderAttr("aria-expanded", $setup.showLanguageDropdown)} data-v-4898bd83> Language <i class="ecicon eci-caret-down" aria-hidden="true" data-v-4898bd83></i></button><template>`);
  if ($setup.showLanguageDropdown) {
    _push(`<ul class="dropdown-menu" data-v-4898bd83><li class="active" data-v-4898bd83><a class="dropdown-item" href="#" data-v-4898bd83> Russian </a></li><li data-v-4898bd83><a class="dropdown-item" href="#" data-v-4898bd83> English </a></li></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</template></div></div></div><div class="col d-lg-none" data-v-4898bd83><div class="ec-header-bottons" data-v-4898bd83><a href="#ec-side-cart" class="ec-header-btn ec-side-toggle" data-v-4898bd83><div class="header-icon" data-v-4898bd83><img${ssrRenderAttr("src", $setup.getIconPath("cart.svg"))} class="svg_img header_svg" alt="Cart icon" loading="lazy" data-v-4898bd83></div><span class="ec-header-count cart-count-lable" data-v-4898bd83> 3 </span></a><a href="javascript:void(0)" class="ec-header-btn ec-sidebar-toggle" data-v-4898bd83><img${ssrRenderAttr("src", $setup.getIconPath("category-icon.svg"))} class="svg_img header_svg" alt="Category icon" loading="lazy" data-v-4898bd83></a><a href="javascript:void(0)" class="ec-header-btn ec-side-toggle d-lg-none" data-v-4898bd83><img${ssrRenderAttr("src", $setup.getIconPath("menu.svg"))} class="svg_img header_svg" alt="Menu icon" loading="lazy" data-v-4898bd83></a></div></div></div></div></div>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Header/HeaderTop.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const HeaderTop = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$q], ["__scopeId", "data-v-4898bd83"]]);
const _sfc_main$q = {
  name: "HeaderTop",
  setup() {
    const getIconPath = (name) => getImagePath("icons", name);
    const getLogoPath = (name) => getImagePath("logo", name);
    return {
      getIconPath,
      getLogoPath
    };
  }
};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ec-header-bottom d-none d-lg-block" }, _attrs))}><div class="container position-relative"><div class="row"><div class="ec-flex"><div class="align-self-center"><div class="header-logo"><a href="#"><img${ssrRenderAttr("src", $setup.getLogoPath("logo.png"))} alt="Site Logo" loading="lazy"><img class="dark-logo"${ssrRenderAttr("src", $setup.getLogoPath("dark-logo.png"))} alt="Site Logo" style="${ssrRenderStyle({ "display": "none" })}" loading="lazy"></a></div></div><div class="align-self-center"><div class="header-search"><form class="ec-btn-group-form" action="#"><input class="form-control ec-search-bar" placeholder="Search products..." type="text"><button class="submit" type="submit"><img${ssrRenderAttr("src", $setup.getIconPath("search.svg"))} class="svg_img header_svg" alt="Search" loading="lazy"></button></form></div></div><div class="align-self-center"><div class="ec-header-bottons"><a href="#ec-side-cart" class="ec-header-btn ec-side-toggle"><div class="header-icon"><img${ssrRenderAttr("src", $setup.getIconPath("cart.svg"))} class="svg_img header_svg" alt="Cart" loading="lazy"></div><span class="ec-header-count cart-count-lable"> 3 </span></a></div></div></div></div></div></div>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Header/HeaderBottom.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const HeaderBottom = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$p]]);
const getMenuItems = () => [
  {
    type: "link",
    label: "Home",
    link: "/"
  },
  {
    type: "submenu",
    label: "Categories",
    path: ["categories"],
    megaMenu: true,
    children: [
      {
        type: "submenu",
        label: "Classic Variation",
        path: ["categories", "classic-variation"],
        children: [
          { type: "link", label: "Left sidebar 3 column", link: "#" },
          { type: "link", label: "Left sidebar 4 column", link: "#" },
          {
            type: "link",
            label: "Right sidebar 3 column",
            link: "#"
          },
          {
            type: "link",
            label: "Right sidebar 4 column",
            link: "#"
          },
          { type: "link", label: "Full width 4 column", link: "#" }
        ]
      },
      {
        type: "submenu",
        label: "Columns Variation",
        path: ["categories", "columns-variation"],
        children: [
          {
            type: "link",
            label: "Banner left sidebar 3 column",
            link: "#"
          },
          {
            type: "link",
            label: "Banner left sidebar 4 column",
            link: "#"
          },
          {
            type: "link",
            label: "Banner right sidebar 3 column",
            link: "#"
          },
          {
            type: "link",
            label: "Banner right sidebar 4 column",
            link: "#"
          },
          {
            type: "link",
            label: "Banner Full width 4 column",
            link: "#"
          }
        ]
      },
      {
        type: "submenu",
        label: "Columns Variation Two",
        path: ["categories", "columns-variation-two"],
        children: [
          { type: "link", label: "3 Columns full width", link: "#" },
          { type: "link", label: "4 Columns full width", link: "#" },
          { type: "link", label: "5 Columns full width", link: "#" },
          { type: "link", label: "6 Columns full width", link: "#" },
          { type: "link", label: "Banner 3 Columns", link: "#" }
        ]
      },
      {
        type: "submenu",
        label: "List Variation",
        path: ["categories", "list-variation"],
        children: [
          { type: "link", label: "Shop left sidebar", link: "#" },
          { type: "link", label: "Shop right sidebar", link: "#" },
          { type: "link", label: "Banner left sidebar", link: "#" },
          { type: "link", label: "Banner right sidebar", link: "#" },
          { type: "link", label: "Full width 2 columns", link: "#" },
          {
            type: "banner",
            src: getImagePath("menu-banner", "1.jpg"),
            href: "#"
          }
        ]
      }
    ]
  },
  {
    type: "submenu",
    label: "Products",
    path: ["products"],
    children: [
      {
        type: "submenu",
        label: "Product Page",
        path: ["products", "product-page"],
        children: [
          { type: "link", label: "Product left sidebar", link: "#" },
          { type: "link", label: "Product right sidebar", link: "#" }
        ]
      },
      {
        type: "submenu",
        label: "Product 360",
        path: ["products", "product-360"],
        children: [
          { type: "link", label: "360 left sidebar", link: "#" },
          { type: "link", label: "360 right sidebar", link: "#" }
        ]
      },
      {
        type: "submenu",
        label: "Product vodeo",
        path: ["products", "product-vodeo"],
        children: [
          { type: "link", label: "vodeo left sidebar", link: "#" },
          { type: "link", label: "vodeo right sidebar", link: "#" }
        ]
      },
      {
        type: "submenu",
        label: "Product gallery",
        path: ["products", "product-gallery"],
        children: [
          { type: "link", label: "gallery left sidebar", link: "#" },
          { type: "link", label: "gallery right sidebar", link: "#" }
        ]
      },
      { type: "link", label: "Product full width", link: "#" },
      { type: "link", label: "360 full width", link: "#" },
      { type: "link", label: "Video full width", link: "#" },
      { type: "link", label: "Gallery full width", link: "#" }
    ]
  },
  {
    type: "submenu",
    label: "Others",
    path: ["others"],
    children: [
      {
        type: "submenu",
        label: "Mail Confirmation",
        path: ["others", "mail-confirmation"],
        children: [
          { type: "link", label: "Mail Confirmation 1", link: "#" },
          { type: "link", label: "Mail Confirmation 2", link: "#" },
          { type: "link", label: "Mail Confirmation 3", link: "#" },
          { type: "link", label: "Mail Confirmation 4", link: "#" },
          { type: "link", label: "Mail Confirmation 5", link: "#" }
        ]
      },
      {
        type: "submenu",
        label: "Mail Reset password",
        path: ["others", "mail-reset-password"],
        children: [
          { type: "link", label: "Reset password 1", link: "#" },
          { type: "link", label: "Reset password 2", link: "#" },
          { type: "link", label: "Reset password 3", link: "#" },
          { type: "link", label: "Reset password 4", link: "#" },
          { type: "link", label: "Reset password 5", link: "#" }
        ]
      },
      {
        type: "submenu",
        label: "Mail Promotional",
        path: ["others", "mail-promotional"],
        children: [
          { type: "link", label: "Offer Mail 1", link: "#" },
          { type: "link", label: "Offer Mail 2", link: "#" },
          { type: "link", label: "Offer Mail 3", link: "#" },
          { type: "link", label: "Offer Mail 4", link: "#" },
          { type: "link", label: "Offer Mail 5", link: "#" },
          { type: "link", label: "Offer Mail 6", link: "#" },
          { type: "link", label: "Offer Mail 7", link: "#" },
          { type: "link", label: "Offer Mail 8", link: "#" }
        ]
      },
      {
        type: "submenu",
        label: "Vendor Account Pages",
        path: ["others", "vendor-account-pages"],
        children: [
          { type: "link", label: "Vendor Dashboard", link: "#" },
          { type: "link", label: "Vendor Profile", link: "#" },
          { type: "link", label: "Vendor Uploads", link: "#" },
          { type: "link", label: "Vendor Settings", link: "#" }
        ]
      },
      {
        type: "submenu",
        label: "User Account Pages",
        path: ["others", "user-account-pages"],
        children: [
          { type: "link", label: "User Profile", link: "#" },
          { type: "link", label: "User History", link: "#" },
          { type: "link", label: "Wishlist", link: "#" },
          { type: "link", label: "Track Order", link: "#" },
          { type: "link", label: "User Invoice", link: "#" }
        ]
      },
      {
        type: "submenu",
        label: "Construction Pages",
        path: ["others", "construction-pages"],
        children: [
          { type: "link", label: "404 Error Page", link: "#" },
          { type: "link", label: "Maintenance Page", link: "#" },
          { type: "link", label: "Comming Soon Page", link: "#" }
        ]
      },
      {
        type: "submenu",
        label: "Vendor Catalog Pages",
        path: ["others", "vendor-catalog-pages"],
        children: [
          { type: "link", label: "Catalog Single Vendor", link: "#" },
          { type: "link", label: "Catalog Multi Vendor", link: "#" }
        ]
      }
    ]
  },
  {
    type: "submenu",
    label: "Pages",
    path: ["pages"],
    children: [
      { type: "link", label: "About Us", link: "about-us" },
      { type: "link", label: "Contact Us", link: "contacts" },
      { type: "link", label: "FAQ", link: "faq" },
      { type: "link", label: "Track Order", link: "track-order" },
      { type: "link", label: "Terms Condition", link: "terms-condition" },
      { type: "link", label: "Privacy Policy", link: "privacy-policy" }
    ]
  },
  {
    type: "submenu",
    label: "Blog",
    path: ["blog"],
    children: [
      { type: "link", label: "Blog left sidebar", link: "#" },
      { type: "link", label: "Blog right sidebar", link: "#" },
      { type: "link", label: "Blog detail left sidebar", link: "#" },
      { type: "link", label: "Blog detail right sidebar", link: "#" },
      { type: "link", label: "Blog full width", link: "#" },
      { type: "link", label: "Blog detail full width", link: "#" }
    ]
  },
  {
    type: "submenu",
    label: "Elements",
    path: ["elements"],
    children: [
      { type: "link", label: "Products", link: "#" },
      { type: "link", label: "Typography", link: "#" },
      { type: "link", label: "Titles", link: "#" },
      { type: "link", label: "Categories", link: "#" },
      { type: "link", label: "Buttons", link: "#" },
      { type: "link", label: "Tabs", link: "#" },
      { type: "link", label: "Accordions", link: "#" },
      { type: "link", label: "Blogs", link: "#" }
    ]
  },
  { type: "link", label: "Hot Offers", link: "#" }
];
const _sfc_main$p = {
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
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
      href: $props.item.link
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
        _push(`<ul class="d-block"><li class="menu_title"><a href="javascript:void(0)">${ssrInterpolate(child.label)}</a></li><!--[-->`);
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
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Header/MenuItem.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const MenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$o]]);
const _sfc_main$o = {
  name: "HeaderMainMenu",
  components: {
    MenuItem
  },
  setup() {
    const getIconPath = (name) => getImagePath("icons", name);
    const getMenuBannerPath = (name) => getImagePath("menu-banner", name);
    const menuItems = ref(getMenuItems());
    return {
      getIconPath,
      getMenuBannerPath,
      menuItems
    };
  }
};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MenuItem = resolveComponent("MenuItem");
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "ec-main-menu-desk",
    class: "d-none d-lg-block sticky-nav"
  }, _attrs))}><div class="container position-relative"><div class="row"><div class="col-md-12 align-self-center"><div class="ec-main-menu"><a href="javascript:void(0)" class="ec-header-btn ec-sidebar-toggle"><img${ssrRenderAttr("src", $setup.getIconPath("category-icon.svg"))} class="svg_img header_svg" alt="Category icon" loading="lazy"></a><ul><!--[-->`);
  ssrRenderList($setup.menuItems, (item, index) => {
    _push(ssrRenderComponent(_component_MenuItem, {
      key: index,
      item
    }, null, _parent));
  });
  _push(`<!--]--><li class="dropdown scroll-to"><a href="javascript:void(0)"><img${ssrRenderAttr("src", $setup.getIconPath("scroll.svg"))} class="svg_img header_svg scroll" alt="" loading="lazy"></a><ul class="sub-menu"><li class="menu_title"> Scroll To Section </li><li><a href="javascript:void(0)" data-scroll="collection" class="nav-scroll"> Top Collection </a></li><li><a href="javascript:void(0)" data-scroll="categories" class="nav-scroll"> Categories </a></li><li><a href="javascript:void(0)" data-scroll="offers" class="nav-scroll"> Offers </a></li><li><a href="javascript:void(0)" data-scroll="vendors" class="nav-scroll"> Top Vendors </a></li><li><a href="javascript:void(0)" data-scroll="services" class="nav-scroll"> Services </a></li><li><a href="javascript:void(0)" data-scroll="arrivals" class="nav-scroll"> New Arrivals </a></li><li><a href="javascript:void(0)" data-scroll="reviews" class="nav-scroll"> Client Review </a></li><li><a href="javascript:void(0)" data-scroll="insta" class="nav-scroll"> Instagram Feed </a></li></ul></li></ul></div></div></div></div></div>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Header/HeaderMainMenu.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const HeaderMainMenu = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$n]]);
const _sfc_main$n = {
  name: "HeaderResponsiveBottom",
  setup() {
    const getIconPath = (name) => getImagePath("icons", name);
    const getLogoPath = (name) => getImagePath("logo", name);
    return {
      getIconPath,
      getLogoPath
    };
  }
};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ec-header-bottom d-lg-none" }, _attrs))}><div class="container position-relative"><div class="row"><div class="col"><div class="header-logo"><a href="#"><img${ssrRenderAttr("src", $setup.getLogoPath("logo.png"))} alt="Site Logo"><img class="dark-logo"${ssrRenderAttr("src", $setup.getLogoPath("dark-logo.png"))} alt="Site Logo" style="${ssrRenderStyle({ "display": "none" })}" loading="lazy"></a></div></div><div class="col"><div class="header-search"><form class="ec-btn-group-form" action="#"><input class="form-control ec-search-bar" placeholder="Search products..." type="text"><button class="submit" type="submit"><img${ssrRenderAttr("src", $setup.getIconPath("search.svg"))} class="svg_img header_svg" alt="icon" loading="lazy"></button></form></div></div></div></div></div>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Header/HeaderResponsiveBottom.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const HeaderResponsiveBottom = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$m]]);
const _sfc_main$m = {
  name: "MobileMenuItem",
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
    }
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
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_MobileMenuItem = resolveComponent("MobileMenuItem", true);
  _push(`<li${ssrRenderAttrs(mergeProps({
    class: { active: $options.isSubMenu && $props.isSubMenuVisible($props.item.path) }
  }, _attrs))}>`);
  if ($options.isLink) {
    _push(ssrRenderComponent(_component_router_link, {
      to: { name: $props.item.link }
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
        "toggle-sub-menu": $props.toggleSubMenu
      }, null, _parent));
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Header/MobileMenuItem.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const MobileMenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$l]]);
const _sfc_main$l = {
  name: "HeaderMobileMenu",
  components: {
    MobileMenuItem
  },
  setup() {
    const sidebarStore = useSidebarStore();
    const mobileMenu = ref(null);
    const showLanguageDropdown = ref(false);
    const activeMenu = ref({});
    const toggleDropdown = () => {
      showLanguageDropdown.value = !showLanguageDropdown.value;
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
          console.log(activeMenu.value);
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
    onMounted(() => {
      document.addEventListener("click", closeMenu);
      document.addEventListener("click", handleClickOutside);
    });
    onBeforeUnmount(() => {
      document.removeEventListener("click", closeMenu);
      document.removeEventListener("click", handleClickOutside);
    });
    const menuItems = ref(getMenuItems());
    return {
      sidebarStore,
      mobileMenu,
      closeMenu,
      showLanguageDropdown,
      toggleDropdown,
      toggleSubMenu,
      isSubMenuVisible,
      activeMenu,
      menuItems
    };
  }
};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MobileMenuItem = resolveComponent("MobileMenuItem");
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "ec-mobile-menu",
    class: ["ec-side-cart ec-mobile-menu", { "ec-open": $setup.sidebarStore.isMobileMenuOpen }],
    ref: "mobileMenu"
  }, _attrs))} data-v-e25cde43><div class="ec-menu-title" data-v-e25cde43><span class="menu_title" data-v-e25cde43>My Menu</span><button class="ec-close" data-v-e25cde43> × </button></div><div class="ec-menu-inner" data-v-e25cde43><div class="ec-menu-content" data-v-e25cde43><ul data-v-e25cde43><!--[-->`);
  ssrRenderList($setup.menuItems, (item, index) => {
    _push(ssrRenderComponent(_component_MobileMenuItem, {
      key: index,
      item,
      "is-sub-menu-visible": $setup.isSubMenuVisible,
      "toggle-sub-menu": $setup.toggleSubMenu
    }, null, _parent));
  });
  _push(`<!--]--></ul></div><div class="header-res-lan-curr" data-v-e25cde43><div class="header-top-lan-curr" data-v-e25cde43><div class="header-top-lan dropdown" data-v-e25cde43><button class="dropdown-toggle text-upper" aria-haspopup="true"${ssrRenderAttr("aria-expanded", $setup.showLanguageDropdown)} data-v-e25cde43> Language <i class="ecicon eci-caret-down" aria-hidden="true" data-v-e25cde43></i></button>`);
  if ($setup.showLanguageDropdown) {
    _push(`<ul class="dropdown-menu" data-v-e25cde43><li class="active" data-v-e25cde43><a class="dropdown-item" href="#" data-v-e25cde43> Russian </a></li><li data-v-e25cde43><a class="dropdown-item" href="#" data-v-e25cde43> English </a></li></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="header-res-social" data-v-e25cde43><div class="header-top-social" data-v-e25cde43><ul class="mb-0" data-v-e25cde43><li class="list-inline-item" data-v-e25cde43><a class="hdr-facebook" href="#" data-v-e25cde43><i class="ecicon eci-facebook" data-v-e25cde43></i></a></li><li class="list-inline-item" data-v-e25cde43><a class="hdr-twitter" href="#" data-v-e25cde43><i class="ecicon eci-twitter" data-v-e25cde43></i></a></li><li class="list-inline-item" data-v-e25cde43><a class="hdr-instagram" href="#" data-v-e25cde43><i class="ecicon eci-instagram" data-v-e25cde43></i></a></li><li class="list-inline-item" data-v-e25cde43><a class="hdr-linkedin" href="#" data-v-e25cde43><i class="ecicon eci-linkedin" data-v-e25cde43></i></a></li></ul></div></div></div></div></div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Header/HeaderMobileMenu.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const HeaderMobileMenu = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$k], ["__scopeId", "data-v-e25cde43"]]);
const _sfc_main$k = {
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
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Header/AppHeader.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = {
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
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "ec-side-cart-overlay",
    style: $options.overlayStyle
  }, _attrs))} data-v-9db8e227></div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/SideOverlay.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const SideOverlay = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$j], ["__scopeId", "data-v-9db8e227"]]);
const _sfc_main$i = {
  name: "AppFooter",
  components: {
    InertiaLink: Link
  },
  setup() {
    const sidebarStore = useSidebarStore();
    const getIconPath = (name) => getImagePath("icons", name);
    const getLogoPath = (name) => getImagePath("logo", name);
    return {
      sidebarStore,
      getIconPath,
      getLogoPath
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
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InertiaLink = resolveComponent("InertiaLink");
  _push(`<!--[--><footer class="ec-footer section-space-mt" data-v-79494728><div class="footer-container" data-v-79494728><div class="footer-offer" data-v-79494728><div class="container" data-v-79494728><div class="row" data-v-79494728><div class="text-center footer-off-msg" data-v-79494728><span data-v-79494728>Win a contest! Get this limited-editon</span><a href="#" target="_blank" data-v-79494728>View Detail</a></div></div></div></div><div class="footer-top section-space-footer-p" data-v-79494728><div class="container" data-v-79494728><div class="row" data-v-79494728><div class="col-sm-12 col-lg-3 ec-footer-contact" data-v-79494728><div class="ec-footer-widget" data-v-79494728><div class="ec-footer-logo" data-v-79494728><a href="#" data-v-79494728><img${ssrRenderAttr(
    "src",
    $setup.getLogoPath("footer-logo.png")
  )} alt="" loading="lazy" data-v-79494728><img class="dark-footer-logo"${ssrRenderAttr("src", $setup.getLogoPath("dark-logo.png"))} alt="Site Logo" style="${ssrRenderStyle({ "display": "none" })}" loading="lazy" data-v-79494728></a></div><h4 class="ec-footer-heading" data-v-79494728> Contact us <div class="ec-heading-res" data-v-79494728><i class="ecicon eci-angle-down" data-v-79494728></i></div></h4><div class="ec-footer-links ec-footer-dropdown" style="${ssrRenderStyle($data.activeIndex === "contacts" ? null : { display: "none" })}" data-v-79494728><ul class="align-items-center" data-v-79494728><li class="ec-footer-link" data-v-79494728> 71 Pilgrim Avenue Chevy Chase, east california. </li><li class="ec-footer-link" data-v-79494728><span data-v-79494728>Call Us:</span><a href="tel:+440123456789" data-v-79494728> +44 0123 456 789 </a></li><li class="ec-footer-link" data-v-79494728><span data-v-79494728>Email:</span><a href="mailto:example@ec-email.com" data-v-79494728> +example@ec-email.com </a></li></ul></div></div></div><div class="col-sm-12 col-lg-2 ec-footer-info" data-v-79494728><div class="ec-footer-widget" data-v-79494728><h4 class="ec-footer-heading" data-v-79494728> Information <div class="ec-heading-res" data-v-79494728><i class="ecicon eci-angle-down" data-v-79494728></i></div></h4><div class="ec-footer-links ec-footer-dropdown" style="${ssrRenderStyle($data.activeIndex === "information" ? null : { display: "none" })}" data-v-79494728><ul class="align-items-center" data-v-79494728><li class="ec-footer-link" data-v-79494728>`);
  _push(ssrRenderComponent(_component_InertiaLink, { href: "/about-us" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` About us `);
      } else {
        return [
          createTextVNode(" About us ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-footer-link" data-v-79494728>`);
  _push(ssrRenderComponent(_component_InertiaLink, { href: "/faq" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` FAQ `);
      } else {
        return [
          createTextVNode(" FAQ ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-footer-link" data-v-79494728><a href="#" data-v-79494728> Delivery Information </a></li><li class="ec-footer-link" data-v-79494728>`);
  _push(ssrRenderComponent(_component_InertiaLink, { href: "/contacts" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contact us `);
      } else {
        return [
          createTextVNode(" Contact us ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div><div class="col-sm-12 col-lg-2 ec-footer-service" data-v-79494728><div class="ec-footer-widget" data-v-79494728><h4 class="ec-footer-heading" data-v-79494728> Services <div class="ec-heading-res" data-v-79494728><i class="ecicon eci-angle-down" data-v-79494728></i></div></h4><div class="ec-footer-links ec-footer-dropdown" style="${ssrRenderStyle($data.activeIndex === "services" ? null : { display: "none" })}" data-v-79494728><ul class="align-items-center" data-v-79494728><li class="ec-footer-link" data-v-79494728><a href="#" data-v-79494728>Discount Returns</a></li><li class="ec-footer-link" data-v-79494728>`);
  _push(ssrRenderComponent(_component_InertiaLink, { href: "/privacy-policy" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Privacy policy `);
      } else {
        return [
          createTextVNode(" Privacy policy ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-footer-link" data-v-79494728><a href="#" data-v-79494728>Customer Service</a></li><li class="ec-footer-link" data-v-79494728>`);
  _push(ssrRenderComponent(_component_InertiaLink, { href: "/terms-condition" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Term condition `);
      } else {
        return [
          createTextVNode(" Term condition ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div><div class="col-sm-12 col-lg-5 ec-footer-news" data-v-79494728><div class="ec-footer-widget" data-v-79494728><h4 class="ec-footer-heading" data-v-79494728> Newsletter <div class="ec-heading-res" data-v-79494728><i class="ecicon eci-angle-down" data-v-79494728></i></div></h4><div class="ec-footer-links ec-footer-dropdown" style="${ssrRenderStyle($data.activeIndex === "newsletter" ? null : { display: "none" })}" data-v-79494728><ul class="align-items-center" data-v-79494728><li class="ec-footer-link" data-v-79494728> Get instant updates about our new products and special promos! </li></ul><div class="ec-subscribe-form" data-v-79494728><form id="ec-newsletter-form" name="ec-newsletter-form" method="post" action="#" data-v-79494728><div id="ec_news_signup" class="ec-form" data-v-79494728><input class="ec-email" type="email" required="" placeholder="Enter your email here..." name="ec-email" value="" data-v-79494728><button id="ec-news-btn" class="button btn-primary" type="submit" name="subscribe" value="" data-v-79494728><i class="ecicon eci-paper-plane-o" aria-hidden="true" data-v-79494728></i></button></div></form></div></div></div></div></div></div></div><div class="footer-bottom" data-v-79494728><div class="container" data-v-79494728><div class="row align-items-center" data-v-79494728><div class="col text-left footer-bottom-left" data-v-79494728><div class="footer-bottom-social" data-v-79494728><span class="social-text text-upper" data-v-79494728> Follow us on: </span><ul class="mb-0" data-v-79494728><li class="list-inline-item" data-v-79494728><a class="hdr-facebook" href="#" data-v-79494728><i class="ecicon eci-facebook" data-v-79494728></i></a></li><li class="list-inline-item" data-v-79494728><a class="hdr-twitter" href="#" data-v-79494728><i class="ecicon eci-twitter" data-v-79494728></i></a></li><li class="list-inline-item" data-v-79494728><a class="hdr-instagram" href="#" data-v-79494728><i class="ecicon eci-instagram" data-v-79494728></i></a></li><li class="list-inline-item" data-v-79494728><a class="hdr-linkedin" href="#" data-v-79494728><i class="ecicon eci-linkedin" data-v-79494728></i></a></li></ul></div></div><div class="col text-center footer-copy" data-v-79494728><div class="footer-bottom-copy" data-v-79494728><div class="ec-copy" data-v-79494728> Copyright © 2021-${ssrInterpolate($options.currentYear)} <a class="site-name text-upper" href="#" data-v-79494728> ekka <span data-v-79494728>.</span></a> . All Rights Reserved </div></div></div></div></div></div></div></footer><div class="ec-nav-toolbar" data-v-79494728><div class="container" data-v-79494728><div class="ec-nav-panel" data-v-79494728><div class="ec-nav-panel-icons" data-v-79494728><a href="javascript:void(0)" class="navbar-toggler-btn ec-header-btn ec-side-toggle" data-v-79494728><img${ssrRenderAttr("src", $setup.getIconPath("menu.svg"))} class="svg_img header_svg" alt="icon" loading="lazy" data-v-79494728></a></div><div class="ec-nav-panel-icons" data-v-79494728><a href="#ec-side-cart" class="toggle-cart ec-header-btn ec-side-toggle" data-v-79494728><img${ssrRenderAttr("src", $setup.getIconPath("cart.svg"))} class="svg_img header_svg" alt="icon" loading="lazy" data-v-79494728><span class="ec-cart-noti ec-header-count cart-count-lable" data-v-79494728> 3 </span></a></div><div class="ec-nav-panel-icons" data-v-79494728>`);
  _push(ssrRenderComponent(_component_InertiaLink, {
    href: "/",
    class: "ec-header-btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", $setup.getIconPath("home.svg"))} class="svg_img header_svg" alt="icon" loading="lazy" data-v-79494728${_scopeId}>`);
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
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/AppFooter.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const AppFooter = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$i], ["__scopeId", "data-v-79494728"]]);
const _sfc_main$h = {
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
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    id: "scrollUp",
    style: $data.visible ? null : { display: "none" }
  }, _attrs))} data-v-068d078c><i class="ecicon eci-arrow-up" aria-hidden="true" data-v-068d078c></i></a>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ScrollUp.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const ScrollUp = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h], ["__scopeId", "data-v-068d078c"]]);
const _sfc_main$g = {
  components: {
    InertiaHead: Head,
    AppLoader,
    AppHeader: _sfc_main$k,
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
  mounted() {
    window.onload = () => {
      this.loading = false;
    };
    window.onerror = () => {
      this.loading = false;
    };
  },
  watch: {
    $route() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InertiaHead = resolveComponent("InertiaHead");
  const _component_AppLoader = resolveComponent("AppLoader");
  const _component_AppHeader = resolveComponent("AppHeader");
  const _component_SideOverlay = resolveComponent("SideOverlay");
  const _component_AppFooter = resolveComponent("AppFooter");
  const _component_ScrollUp = resolveComponent("ScrollUp");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_InertiaHead, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d;
      if (_push2) {
        _push2(`<title${_scopeId}>${ssrInterpolate(((_a = $props.page) == null ? void 0 : _a.title) || "Default Title")}</title><meta name="description"${ssrRenderAttr("content", ((_b = $props.page) == null ? void 0 : _b.description) || "Default Description")}${_scopeId}>`);
      } else {
        return [
          createVNode("title", null, toDisplayString(((_c = $props.page) == null ? void 0 : _c.title) || "Default Title"), 1),
          createVNode("meta", {
            name: "description",
            content: ((_d = $props.page) == null ? void 0 : _d.description) || "Default Description"
          }, null, 8, ["content"])
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
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layout.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$f = {
  name: "InstagramFeed",
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      getImagePath,
      modules: [Autoplay]
    };
  },
  methods: {
    Autoplay
  }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section ec-instagram-section module section-space-p" }, _attrs))}><div class="container"><div class="row"><div class="col-md-12 text-center"><div class="section-title"><h2 class="ec-bg-title">Instagram Feed</h2><h2 class="ec-title">Instagram Feed</h2><p class="sub-title">Share your store with us</p></div></div></div></div><div class="ec-insta-wrapper"><div class="ec-insta-outer"><div class="container" data-aos="fade">`);
  _push(ssrRenderComponent(_component_swiper, {
    class: "insta-auto",
    modules: [$options.Autoplay],
    "slides-per-view": 1,
    watchSlidesProgress: true,
    speed: 2e3,
    loop: true,
    autoplay: {
      delay: 1e3,
      disableOnInteraction: false
    },
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 0 },
      991: { slidesPerView: 3, spaceBetween: 0 },
      1200: { slidesPerView: 4, spaceBetween: 0 },
      1450: { slidesPerView: 5, spaceBetween: 0 }
    },
    "auto-height": false
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-insta-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="ec-insta-inner"${_scopeId2}><a href="#" target="_blank"${_scopeId2}><img${ssrRenderAttr(
                "src",
                $setup.getImagePath(
                  "instragram-image",
                  "1.jpg"
                )
              )} alt="insta" loading="lazy"${_scopeId2}></a></div>`);
            } else {
              return [
                createVNode("div", { class: "ec-insta-inner" }, [
                  createVNode("a", {
                    href: "#",
                    target: "_blank"
                  }, [
                    createVNode("img", {
                      src: $setup.getImagePath(
                        "instragram-image",
                        "1.jpg"
                      ),
                      alt: "insta",
                      loading: "lazy"
                    }, null, 8, ["src"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-insta-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="ec-insta-inner"${_scopeId2}><a href="#" target="_blank"${_scopeId2}><img${ssrRenderAttr(
                "src",
                $setup.getImagePath(
                  "instragram-image",
                  "2.jpg"
                )
              )} alt="insta" loading="lazy"${_scopeId2}></a></div>`);
            } else {
              return [
                createVNode("div", { class: "ec-insta-inner" }, [
                  createVNode("a", {
                    href: "#",
                    target: "_blank"
                  }, [
                    createVNode("img", {
                      src: $setup.getImagePath(
                        "instragram-image",
                        "2.jpg"
                      ),
                      alt: "insta",
                      loading: "lazy"
                    }, null, 8, ["src"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-insta-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="ec-insta-inner"${_scopeId2}><a href="#" target="_blank"${_scopeId2}><img${ssrRenderAttr(
                "src",
                $setup.getImagePath(
                  "instragram-image",
                  "3.jpg"
                )
              )} alt="insta" loading="lazy"${_scopeId2}></a></div>`);
            } else {
              return [
                createVNode("div", { class: "ec-insta-inner" }, [
                  createVNode("a", {
                    href: "#",
                    target: "_blank"
                  }, [
                    createVNode("img", {
                      src: $setup.getImagePath(
                        "instragram-image",
                        "3.jpg"
                      ),
                      alt: "insta",
                      loading: "lazy"
                    }, null, 8, ["src"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-insta-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="ec-insta-inner"${_scopeId2}><a href="#" target="_blank"${_scopeId2}><img${ssrRenderAttr(
                "src",
                $setup.getImagePath(
                  "instragram-image",
                  "4.jpg"
                )
              )} alt="insta" loading="lazy"${_scopeId2}></a></div>`);
            } else {
              return [
                createVNode("div", { class: "ec-insta-inner" }, [
                  createVNode("a", {
                    href: "#",
                    target: "_blank"
                  }, [
                    createVNode("img", {
                      src: $setup.getImagePath(
                        "instragram-image",
                        "4.jpg"
                      ),
                      alt: "insta",
                      loading: "lazy"
                    }, null, 8, ["src"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-insta-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="ec-insta-inner"${_scopeId2}><a href="#" target="_blank"${_scopeId2}><img${ssrRenderAttr(
                "src",
                $setup.getImagePath(
                  "instragram-image",
                  "5.jpg"
                )
              )} alt="insta" loading="lazy"${_scopeId2}></a></div>`);
            } else {
              return [
                createVNode("div", { class: "ec-insta-inner" }, [
                  createVNode("a", {
                    href: "#",
                    target: "_blank"
                  }, [
                    createVNode("img", {
                      src: $setup.getImagePath(
                        "instragram-image",
                        "5.jpg"
                      ),
                      alt: "insta",
                      loading: "lazy"
                    }, null, 8, ["src"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-insta-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="ec-insta-inner"${_scopeId2}><a href="#" target="_blank"${_scopeId2}><img${ssrRenderAttr(
                "src",
                $setup.getImagePath(
                  "instragram-image",
                  "6.jpg"
                )
              )} alt="insta" loading="lazy"${_scopeId2}></a></div>`);
            } else {
              return [
                createVNode("div", { class: "ec-insta-inner" }, [
                  createVNode("a", {
                    href: "#",
                    target: "_blank"
                  }, [
                    createVNode("img", {
                      src: $setup.getImagePath(
                        "instragram-image",
                        "6.jpg"
                      ),
                      alt: "insta",
                      loading: "lazy"
                    }, null, 8, ["src"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "ec-insta-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "ec-insta-inner" }, [
                createVNode("a", {
                  href: "#",
                  target: "_blank"
                }, [
                  createVNode("img", {
                    src: $setup.getImagePath(
                      "instragram-image",
                      "1.jpg"
                    ),
                    alt: "insta",
                    loading: "lazy"
                  }, null, 8, ["src"])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "ec-insta-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "ec-insta-inner" }, [
                createVNode("a", {
                  href: "#",
                  target: "_blank"
                }, [
                  createVNode("img", {
                    src: $setup.getImagePath(
                      "instragram-image",
                      "2.jpg"
                    ),
                    alt: "insta",
                    loading: "lazy"
                  }, null, 8, ["src"])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "ec-insta-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "ec-insta-inner" }, [
                createVNode("a", {
                  href: "#",
                  target: "_blank"
                }, [
                  createVNode("img", {
                    src: $setup.getImagePath(
                      "instragram-image",
                      "3.jpg"
                    ),
                    alt: "insta",
                    loading: "lazy"
                  }, null, 8, ["src"])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "ec-insta-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "ec-insta-inner" }, [
                createVNode("a", {
                  href: "#",
                  target: "_blank"
                }, [
                  createVNode("img", {
                    src: $setup.getImagePath(
                      "instragram-image",
                      "4.jpg"
                    ),
                    alt: "insta",
                    loading: "lazy"
                  }, null, 8, ["src"])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "ec-insta-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "ec-insta-inner" }, [
                createVNode("a", {
                  href: "#",
                  target: "_blank"
                }, [
                  createVNode("img", {
                    src: $setup.getImagePath(
                      "instragram-image",
                      "5.jpg"
                    ),
                    alt: "insta",
                    loading: "lazy"
                  }, null, 8, ["src"])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "ec-insta-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "ec-insta-inner" }, [
                createVNode("a", {
                  href: "#",
                  target: "_blank"
                }, [
                  createVNode("img", {
                    src: $setup.getImagePath(
                      "instragram-image",
                      "6.jpg"
                    ),
                    alt: "insta",
                    loading: "lazy"
                  }, null, 8, ["src"])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/InstagramFeed.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const InstagramFeed = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$e = {
  name: "ListServices",
  setup() {
    return {
      getImagePath
    };
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section ec-services-section section-space-p" }, _attrs))} data-v-0fa1b1fc><h2 class="d-none" data-v-0fa1b1fc>Services</h2><div class="container" data-v-0fa1b1fc><div class="row" data-v-0fa1b1fc><div class="ec_ser_content ec_ser_content_1 col-sm-12 col-md-6 col-lg-3" data-aos="zoom-in" data-v-0fa1b1fc><div class="ec_ser_inner" data-v-0fa1b1fc><div class="ec-service-image" data-v-0fa1b1fc><img${ssrRenderAttr("src", $setup.getImagePath("icons", "service_1.svg"))} class="svg_img" alt="" loading="lazy" data-v-0fa1b1fc></div><div class="ec-service-desc" data-v-0fa1b1fc><h2 data-v-0fa1b1fc>Free Shipping</h2><p data-v-0fa1b1fc> Free shipping on all US order or order above $200 </p></div></div></div><div class="ec_ser_content ec_ser_content_2 col-sm-12 col-md-6 col-lg-3" data-aos="zoom-in" data-v-0fa1b1fc><div class="ec_ser_inner" data-v-0fa1b1fc><div class="ec-service-image" data-v-0fa1b1fc><img${ssrRenderAttr("src", $setup.getImagePath("icons", "service_2.svg"))} class="svg_img" alt="" loading="lazy" data-v-0fa1b1fc></div><div class="ec-service-desc" data-v-0fa1b1fc><h2 data-v-0fa1b1fc>24X7 Support</h2><p data-v-0fa1b1fc>Contact us 24 hours a day, 7 days a week</p></div></div></div><div class="ec_ser_content ec_ser_content_3 col-sm-12 col-md-6 col-lg-3" data-aos="zoom-in" data-v-0fa1b1fc><div class="ec_ser_inner" data-v-0fa1b1fc><div class="ec-service-image" data-v-0fa1b1fc><img${ssrRenderAttr("src", $setup.getImagePath("icons", "service_3.svg"))} class="svg_img" alt="" loading="lazy" data-v-0fa1b1fc></div><div class="ec-service-desc" data-v-0fa1b1fc><h2 data-v-0fa1b1fc>30 Days Return</h2><p data-v-0fa1b1fc> Simply return it within 30 days for an exchange </p></div></div></div><div class="ec_ser_content ec_ser_content_4 col-sm-12 col-md-6 col-lg-3" data-aos="zoom-in" data-v-0fa1b1fc><div class="ec_ser_inner" data-v-0fa1b1fc><div class="ec-service-image" data-v-0fa1b1fc><img${ssrRenderAttr("src", $setup.getImagePath("icons", "service_4.svg"))} class="svg_img" alt="" loading="lazy" data-v-0fa1b1fc></div><div class="ec-service-desc" data-v-0fa1b1fc><h2 data-v-0fa1b1fc>Payment Secure</h2><p data-v-0fa1b1fc>Contact us 24 hours a day, 7 days a week</p></div></div></div></div></div></section>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ListServices.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const ListServices = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e], ["__scopeId", "data-v-0fa1b1fc"]]);
const _sfc_main$d = {
  name: "TestimonialReviews",
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      getImagePath,
      modules: [Autoplay, Navigation, Thumbs]
    };
  },
  data() {
    return {
      thumbsSwiper: null
    };
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
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section ec-test-section section-space-ptb-100 section-space-m" }, _attrs))} data-v-8676085a><div class="container" data-v-8676085a><div class="row" data-v-8676085a><div class="col-md-12 text-center" data-v-8676085a><div class="section-title mb-0" data-v-8676085a><h2 class="ec-bg-title" data-v-8676085a>Testimonial</h2><h2 class="ec-title" data-v-8676085a>Client Review</h2><p class="sub-title mb-3" data-v-8676085a>What say client about us</p></div></div></div><div class="row" data-v-8676085a><div class="ec-test-outer" data-v-8676085a>`);
  _push(ssrRenderComponent(_component_swiper, {
    class: "ec-testimonial-slider",
    modules: [$options.Autoplay, $options.Thumbs, $options.Navigation],
    thumbs: { swiper: $data.thumbsSwiper },
    "slides-per-view": 1,
    "space-between": 0,
    navigation: true,
    loop: true,
    autoplay: {
      delay: 5e3,
      disableOnInteraction: false
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-test-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr(
                "src",
                $setup.getImagePath(
                  "testimonial",
                  "top-quotes.svg"
                )
              )} class="svg_img test_svg top" alt="" loading="lazy" data-v-8676085a${_scopeId2}><div class="ec-test-inner" data-v-8676085a${_scopeId2}><div class="ec-test-content" data-v-8676085a${_scopeId2}><div class="ec-test-desc" data-v-8676085a${_scopeId2}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen </div><div class="ec-test-name" data-v-8676085a${_scopeId2}>John Doe 1</div><div class="ec-test-designation" data-v-8676085a${_scopeId2}> General Manager </div><div class="ec-test-rating" data-v-8676085a${_scopeId2}><i class="ecicon eci-star fill" data-v-8676085a${_scopeId2}></i><i class="ecicon eci-star fill" data-v-8676085a${_scopeId2}></i><i class="ecicon eci-star fill" data-v-8676085a${_scopeId2}></i><i class="ecicon eci-star fill" data-v-8676085a${_scopeId2}></i><i class="ecicon eci-star fill" data-v-8676085a${_scopeId2}></i></div></div></div><img${ssrRenderAttr(
                "src",
                $setup.getImagePath(
                  "testimonial",
                  "bottom-quotes.svg"
                )
              )} class="svg_img test_svg bottom" alt="" loading="lazy" data-v-8676085a${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: $setup.getImagePath(
                    "testimonial",
                    "top-quotes.svg"
                  ),
                  class: "svg_img test_svg top",
                  alt: "",
                  loading: "lazy"
                }, null, 8, ["src"]),
                createVNode("div", { class: "ec-test-inner" }, [
                  createVNode("div", { class: "ec-test-content" }, [
                    createVNode("div", { class: "ec-test-desc" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen "),
                    createVNode("div", { class: "ec-test-name" }, "John Doe 1"),
                    createVNode("div", { class: "ec-test-designation" }, " General Manager "),
                    createVNode("div", { class: "ec-test-rating" }, [
                      createVNode("i", { class: "ecicon eci-star fill" }),
                      createVNode("i", { class: "ecicon eci-star fill" }),
                      createVNode("i", { class: "ecicon eci-star fill" }),
                      createVNode("i", { class: "ecicon eci-star fill" }),
                      createVNode("i", { class: "ecicon eci-star fill" })
                    ])
                  ])
                ]),
                createVNode("img", {
                  src: $setup.getImagePath(
                    "testimonial",
                    "bottom-quotes.svg"
                  ),
                  class: "svg_img test_svg bottom",
                  alt: "",
                  loading: "lazy"
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-test-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr(
                "src",
                $setup.getImagePath(
                  "testimonial",
                  "top-quotes.svg"
                )
              )} class="svg_img test_svg top" alt="" loading="lazy" data-v-8676085a${_scopeId2}><div class="ec-test-inner" data-v-8676085a${_scopeId2}><div class="ec-test-content" data-v-8676085a${_scopeId2}><div class="ec-test-desc" data-v-8676085a${_scopeId2}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen </div><div class="ec-test-name" data-v-8676085a${_scopeId2}>John Doe 2</div><div class="ec-test-designation" data-v-8676085a${_scopeId2}> General Manager </div><div class="ec-test-rating" data-v-8676085a${_scopeId2}><i class="ecicon eci-star fill" data-v-8676085a${_scopeId2}></i><i class="ecicon eci-star fill" data-v-8676085a${_scopeId2}></i><i class="ecicon eci-star fill" data-v-8676085a${_scopeId2}></i><i class="ecicon eci-star fill" data-v-8676085a${_scopeId2}></i><i class="ecicon eci-star fill" data-v-8676085a${_scopeId2}></i></div></div></div><img${ssrRenderAttr(
                "src",
                $setup.getImagePath(
                  "testimonial",
                  "bottom-quotes.svg"
                )
              )} class="svg_img test_svg bottom" alt="" loading="lazy" data-v-8676085a${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: $setup.getImagePath(
                    "testimonial",
                    "top-quotes.svg"
                  ),
                  class: "svg_img test_svg top",
                  alt: "",
                  loading: "lazy"
                }, null, 8, ["src"]),
                createVNode("div", { class: "ec-test-inner" }, [
                  createVNode("div", { class: "ec-test-content" }, [
                    createVNode("div", { class: "ec-test-desc" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen "),
                    createVNode("div", { class: "ec-test-name" }, "John Doe 2"),
                    createVNode("div", { class: "ec-test-designation" }, " General Manager "),
                    createVNode("div", { class: "ec-test-rating" }, [
                      createVNode("i", { class: "ecicon eci-star fill" }),
                      createVNode("i", { class: "ecicon eci-star fill" }),
                      createVNode("i", { class: "ecicon eci-star fill" }),
                      createVNode("i", { class: "ecicon eci-star fill" }),
                      createVNode("i", { class: "ecicon eci-star fill" })
                    ])
                  ])
                ]),
                createVNode("img", {
                  src: $setup.getImagePath(
                    "testimonial",
                    "bottom-quotes.svg"
                  ),
                  class: "svg_img test_svg bottom",
                  alt: "",
                  loading: "lazy"
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-test-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr(
                "src",
                $setup.getImagePath(
                  "testimonial",
                  "top-quotes.svg"
                )
              )} class="svg_img test_svg top" alt="" loading="lazy" data-v-8676085a${_scopeId2}><div class="ec-test-inner" data-v-8676085a${_scopeId2}><div class="ec-test-content" data-v-8676085a${_scopeId2}><div class="ec-test-desc" data-v-8676085a${_scopeId2}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen </div><div class="ec-test-name" data-v-8676085a${_scopeId2}>John Doe 3</div><div class="ec-test-designation" data-v-8676085a${_scopeId2}> General Manager </div><div class="ec-test-rating" data-v-8676085a${_scopeId2}><i class="ecicon eci-star fill" data-v-8676085a${_scopeId2}></i><i class="ecicon eci-star fill" data-v-8676085a${_scopeId2}></i><i class="ecicon eci-star fill" data-v-8676085a${_scopeId2}></i><i class="ecicon eci-star fill" data-v-8676085a${_scopeId2}></i><i class="ecicon eci-star fill" data-v-8676085a${_scopeId2}></i></div></div></div><img${ssrRenderAttr(
                "src",
                $setup.getImagePath(
                  "testimonial",
                  "bottom-quotes.svg"
                )
              )} class="svg_img test_svg bottom" alt="" loading="lazy" data-v-8676085a${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: $setup.getImagePath(
                    "testimonial",
                    "top-quotes.svg"
                  ),
                  class: "svg_img test_svg top",
                  alt: "",
                  loading: "lazy"
                }, null, 8, ["src"]),
                createVNode("div", { class: "ec-test-inner" }, [
                  createVNode("div", { class: "ec-test-content" }, [
                    createVNode("div", { class: "ec-test-desc" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen "),
                    createVNode("div", { class: "ec-test-name" }, "John Doe 3"),
                    createVNode("div", { class: "ec-test-designation" }, " General Manager "),
                    createVNode("div", { class: "ec-test-rating" }, [
                      createVNode("i", { class: "ecicon eci-star fill" }),
                      createVNode("i", { class: "ecicon eci-star fill" }),
                      createVNode("i", { class: "ecicon eci-star fill" }),
                      createVNode("i", { class: "ecicon eci-star fill" }),
                      createVNode("i", { class: "ecicon eci-star fill" })
                    ])
                  ])
                ]),
                createVNode("img", {
                  src: $setup.getImagePath(
                    "testimonial",
                    "bottom-quotes.svg"
                  ),
                  class: "svg_img test_svg bottom",
                  alt: "",
                  loading: "lazy"
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "ec-test-item" }, {
            default: withCtx(() => [
              createVNode("img", {
                src: $setup.getImagePath(
                  "testimonial",
                  "top-quotes.svg"
                ),
                class: "svg_img test_svg top",
                alt: "",
                loading: "lazy"
              }, null, 8, ["src"]),
              createVNode("div", { class: "ec-test-inner" }, [
                createVNode("div", { class: "ec-test-content" }, [
                  createVNode("div", { class: "ec-test-desc" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen "),
                  createVNode("div", { class: "ec-test-name" }, "John Doe 1"),
                  createVNode("div", { class: "ec-test-designation" }, " General Manager "),
                  createVNode("div", { class: "ec-test-rating" }, [
                    createVNode("i", { class: "ecicon eci-star fill" }),
                    createVNode("i", { class: "ecicon eci-star fill" }),
                    createVNode("i", { class: "ecicon eci-star fill" }),
                    createVNode("i", { class: "ecicon eci-star fill" }),
                    createVNode("i", { class: "ecicon eci-star fill" })
                  ])
                ])
              ]),
              createVNode("img", {
                src: $setup.getImagePath(
                  "testimonial",
                  "bottom-quotes.svg"
                ),
                class: "svg_img test_svg bottom",
                alt: "",
                loading: "lazy"
              }, null, 8, ["src"])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "ec-test-item" }, {
            default: withCtx(() => [
              createVNode("img", {
                src: $setup.getImagePath(
                  "testimonial",
                  "top-quotes.svg"
                ),
                class: "svg_img test_svg top",
                alt: "",
                loading: "lazy"
              }, null, 8, ["src"]),
              createVNode("div", { class: "ec-test-inner" }, [
                createVNode("div", { class: "ec-test-content" }, [
                  createVNode("div", { class: "ec-test-desc" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen "),
                  createVNode("div", { class: "ec-test-name" }, "John Doe 2"),
                  createVNode("div", { class: "ec-test-designation" }, " General Manager "),
                  createVNode("div", { class: "ec-test-rating" }, [
                    createVNode("i", { class: "ecicon eci-star fill" }),
                    createVNode("i", { class: "ecicon eci-star fill" }),
                    createVNode("i", { class: "ecicon eci-star fill" }),
                    createVNode("i", { class: "ecicon eci-star fill" }),
                    createVNode("i", { class: "ecicon eci-star fill" })
                  ])
                ])
              ]),
              createVNode("img", {
                src: $setup.getImagePath(
                  "testimonial",
                  "bottom-quotes.svg"
                ),
                class: "svg_img test_svg bottom",
                alt: "",
                loading: "lazy"
              }, null, 8, ["src"])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "ec-test-item" }, {
            default: withCtx(() => [
              createVNode("img", {
                src: $setup.getImagePath(
                  "testimonial",
                  "top-quotes.svg"
                ),
                class: "svg_img test_svg top",
                alt: "",
                loading: "lazy"
              }, null, 8, ["src"]),
              createVNode("div", { class: "ec-test-inner" }, [
                createVNode("div", { class: "ec-test-content" }, [
                  createVNode("div", { class: "ec-test-desc" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen "),
                  createVNode("div", { class: "ec-test-name" }, "John Doe 3"),
                  createVNode("div", { class: "ec-test-designation" }, " General Manager "),
                  createVNode("div", { class: "ec-test-rating" }, [
                    createVNode("i", { class: "ecicon eci-star fill" }),
                    createVNode("i", { class: "ecicon eci-star fill" }),
                    createVNode("i", { class: "ecicon eci-star fill" }),
                    createVNode("i", { class: "ecicon eci-star fill" }),
                    createVNode("i", { class: "ecicon eci-star fill" })
                  ])
                ])
              ]),
              createVNode("img", {
                src: $setup.getImagePath(
                  "testimonial",
                  "bottom-quotes.svg"
                ),
                class: "svg_img test_svg bottom",
                alt: "",
                loading: "lazy"
              }, null, 8, ["src"])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_swiper, {
    class: "ec-testimonial-thumbs-slider",
    onSwiper: $options.setThumbsSwiper,
    modules: [$options.Thumbs],
    "slides-per-view": 3,
    "space-between": 30,
    watchSlidesProgress: "",
    watchSlidesVisibility: "",
    centeredSlides: "true"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-testimonial-thumbs-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="ec-test-img" data-v-8676085a${_scopeId2}><img alt="testimonial" title="testimonial"${ssrRenderAttr("src", $setup.getImagePath("testimonial", "1.jpg"))} loading="lazy" data-v-8676085a${_scopeId2}></div>`);
            } else {
              return [
                createVNode("div", { class: "ec-test-img" }, [
                  createVNode("img", {
                    alt: "testimonial",
                    title: "testimonial",
                    src: $setup.getImagePath("testimonial", "1.jpg"),
                    loading: "lazy"
                  }, null, 8, ["src"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-testimonial-thumbs-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="ec-test-img" data-v-8676085a${_scopeId2}><img alt="testimonial" title="testimonial"${ssrRenderAttr("src", $setup.getImagePath("testimonial", "2.jpg"))} loading="lazy" data-v-8676085a${_scopeId2}></div>`);
            } else {
              return [
                createVNode("div", { class: "ec-test-img" }, [
                  createVNode("img", {
                    alt: "testimonial",
                    title: "testimonial",
                    src: $setup.getImagePath("testimonial", "2.jpg"),
                    loading: "lazy"
                  }, null, 8, ["src"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-testimonial-thumbs-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="ec-test-img" data-v-8676085a${_scopeId2}><img alt="testimonial" title="testimonial"${ssrRenderAttr("src", $setup.getImagePath("testimonial", "3.jpg"))} loading="lazy" data-v-8676085a${_scopeId2}></div>`);
            } else {
              return [
                createVNode("div", { class: "ec-test-img" }, [
                  createVNode("img", {
                    alt: "testimonial",
                    title: "testimonial",
                    src: $setup.getImagePath("testimonial", "3.jpg"),
                    loading: "lazy"
                  }, null, 8, ["src"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "ec-testimonial-thumbs-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "ec-test-img" }, [
                createVNode("img", {
                  alt: "testimonial",
                  title: "testimonial",
                  src: $setup.getImagePath("testimonial", "1.jpg"),
                  loading: "lazy"
                }, null, 8, ["src"])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "ec-testimonial-thumbs-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "ec-test-img" }, [
                createVNode("img", {
                  alt: "testimonial",
                  title: "testimonial",
                  src: $setup.getImagePath("testimonial", "2.jpg"),
                  loading: "lazy"
                }, null, 8, ["src"])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "ec-testimonial-thumbs-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "ec-test-img" }, [
                createVNode("img", {
                  alt: "testimonial",
                  title: "testimonial",
                  src: $setup.getImagePath("testimonial", "3.jpg"),
                  loading: "lazy"
                }, null, 8, ["src"])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/TestimonialReviews.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const TestimonialReviews = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d], ["__scopeId", "data-v-8676085a"]]);
const _sfc_main$c = {
  name: "AboutUs",
  layout: Layout,
  components: {
    InstagramFeed,
    ListServices,
    TestimonialReviews
  },
  setup() {
    onMounted(() => {
      document.body.classList.add("aboutus_page");
    });
    onBeforeUnmount(() => {
      document.body.classList.remove("aboutus_page");
    });
    return {
      getImagePath
    };
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_TestimonialReviews = resolveComponent("TestimonialReviews");
  const _component_ListServices = resolveComponent("ListServices");
  const _component_InstagramFeed = resolveComponent("InstagramFeed");
  _push(`<!--[--><div class="sticky-header-next-sec ec-breadcrumb section-space-mb"><div class="container"><div class="row"><div class="col-12"><div class="row ec_breadcrumb_inner"><div class="col-md-6 col-sm-12"><h2 class="ec-breadcrumb-title">About Us</h2></div><div class="col-md-6 col-sm-12"><ul class="ec-breadcrumb-list"><li class="ec-breadcrumb-item">`);
  _push(ssrRenderComponent(_component_router_link, { to: { name: "home" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Home `);
      } else {
        return [
          createTextVNode(" Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-breadcrumb-item active"> About Us </li></ul></div></div></div></div></div></div><section class="ec-page-content section-space-p"><div class="container"><div class="row"><div class="col-md-12 text-center"><div class="section-title"><h2 class="ec-bg-title">About Us</h2><h2 class="ec-title">About Us</h2><p class="sub-title mb-3">About our business Firm</p></div></div><div class="ec-common-wrapper"><div class="row"><div class="col-md-6 ec-cms-block ec-abcms-block text-center"><div class="ec-cms-block-inner"><img class="a-img"${ssrRenderAttr("src", $setup.getImagePath("offer-image", "1.jpg"))} alt="about" loading="lazy"></div></div><div class="col-md-6 ec-cms-block ec-abcms-block text-center"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> What is the ekka? </h3><p> Electronic typesetting text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dutmmy text ever since the 1500s, It has survived not only, but also the leap into electronic typesetting. </p><p> Lorem Ipsum is simply dummy text of the printing. It has survived not only five centuries, but also the leap into electronic typesetting. </p><p> Also the leap into electronic typesetting printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p></div></div></div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_TestimonialReviews, null, null, _parent));
  _push(ssrRenderComponent(_component_ListServices, null, null, _parent));
  _push(ssrRenderComponent(_component_InstagramFeed, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/AboutUs.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const AboutUs = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AboutUs
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  name: "Contacts",
  layout: Layout,
  setup() {
    onMounted(() => {
      document.body.classList.add("contact_us_page");
    });
    onBeforeUnmount(() => {
      document.body.classList.remove("contact_us_page");
    });
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<!--[--><div class="sticky-header-next-sec ec-breadcrumb section-space-mb"><div class="container"><div class="row"><div class="col-12"><div class="row ec_breadcrumb_inner"><div class="col-md-6 col-sm-12"><h2 class="ec-breadcrumb-title">Contact Us</h2></div><div class="col-md-6 col-sm-12"><ul class="ec-breadcrumb-list"><li class="ec-breadcrumb-item">`);
  _push(ssrRenderComponent(_component_router_link, { to: { name: "home" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Home `);
      } else {
        return [
          createTextVNode(" Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-breadcrumb-item active"> Contact Us </li></ul></div></div></div></div></div></div><section class="ec-page-content section-space-p"><div class="container"><div class="row"><div class="ec-common-wrapper"><div class="ec-contact-leftside"><div class="ec-contact-container"><div class="ec-contact-form"><form action="#" method="post"><span class="ec-contact-wrap"><label>First Name*</label><input type="text" name="firstname" placeholder="Enter your first name" required></span><span class="ec-contact-wrap"><label>Last Name*</label><input type="text" name="lastname" placeholder="Enter your last name" required></span><span class="ec-contact-wrap"><label>Email*</label><input type="email" name="email" placeholder="Enter your email address" required></span><span class="ec-contact-wrap"><label>Phone Number*</label><input type="text" name="phonenumber" placeholder="Enter your phone number" required></span><span class="ec-contact-wrap"><label>Comments/Questions*</label><textarea name="address" placeholder="Please leave your comments here.."></textarea></span><span class="ec-contact-wrap ec-recaptcha"><span class="g-recaptcha" data-sitekey="6LfKURIUAAAAAO50vlwWZkyK_G2ywqE52NU7YO0S" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></span><input class="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha"><span class="help-block with-errors"></span></span><span class="ec-contact-wrap ec-contact-btn"><button class="btn btn-primary" type="submit"> Submit </button></span></form></div></div></div><div class="ec-contact-rightside"><div class="ec_contact_map"><div class="ec_map_canvas"><iframe id="ec_map_canvas" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d71263.65594328841!2d144.93151478652146!3d-37.8734290780509!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1615963387757!5m2!1sen!2sus"></iframe><a href="https://sites.google.com/view/maps-api-v2/mapv2"></a></div></div><div class="ec_contact_info"><h1 class="ec_contact_info_head">Contact us</h1><ul class="align-items-center"><li class="ec-contact-item"><i class="ecicon eci-map-marker" aria-hidden="true"></i><span>Address :</span> 71 Pilgrim Avenue Chevy Chase, east california. east california. MD 20815, USA </li><li class="ec-contact-item align-items-center"><i class="ecicon eci-phone" aria-hidden="true"></i><span>Call Us :</span><a href="tel:+440123456789"> +44 0123 456 789 </a></li><li class="ec-contact-item align-items-center"><i class="ecicon eci-envelope" aria-hidden="true"></i><span>Email :</span><a href="mailto:example@ec-email.com"> example@ec-email.com </a></li></ul></div></div></div></div></div></section><!--]-->`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Contacts.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Contacts = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contacts
}, Symbol.toStringTag, { value: "Module" }));
const getFaqItems = () => [
  {
    name: "General",
    items: [
      {
        title: "What is the multi vendor services?",
        content: "Lorem Ipsum is simply dummy text..."
      },
      {
        title: "How to buy many products at a time?",
        content: "Lorem Ipsum is simply dummy text..."
      },
      {
        title: "Refund policy for customer",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\nIpsum has been the industry's standard dummy text ever since the 1500s, when an\nunknown printer took a galley of type and scrambled it to make a type specimen\nbook. It has survived not only five centuries, but also the leap into electronic\ntypesetting, remaining essentially unchanged. "
      },
      {
        title: "Exchange policy for customer",
        content: "Lorem Ipsum is simply dummy text..."
      },
      {
        title: "Give away products available",
        content: "Lorem Ipsum is simply dummy text..."
      }
    ]
  },
  {
    name: "Information",
    items: [
      {
        title: "What is the multi vendor services?",
        content: "Lorem Ipsum is simply dummy text..."
      },
      {
        title: "How to buy many products at a time?",
        content: "Lorem Ipsum is simply dummy text..."
      },
      {
        title: "Refund policy for customer",
        content: "Lorem Ipsum is simply dummy text..."
      },
      {
        title: "Exchange policy for customer",
        content: "Lorem Ipsum is simply dummy text..."
      },
      {
        title: "Give away products available",
        content: "Lorem Ipsum is simply dummy text..."
      }
    ]
  }
];
const _sfc_main$a = {
  name: "Faq",
  layout: Layout,
  data() {
    return {
      faqItems: getFaqItems(),
      activeIndexes: /* @__PURE__ */ new Set()
    };
  },
  methods: {
    toggleFaq(faqIndex, itemIndex) {
      const combinedIndex = `faq-${faqIndex}-item-${itemIndex}`;
      if (this.activeIndexes.has(combinedIndex)) {
        this.activeIndexes.delete(combinedIndex);
      } else {
        this.activeIndexes.add(combinedIndex);
      }
    }
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<!--[--><div class="sticky-header-next-sec ec-breadcrumb section-space-mb" data-v-29b49df6><div class="container" data-v-29b49df6><div class="row" data-v-29b49df6><div class="col-12" data-v-29b49df6><div class="row ec_breadcrumb_inner" data-v-29b49df6><div class="col-md-6 col-sm-12" data-v-29b49df6><h2 class="ec-breadcrumb-title" data-v-29b49df6>FAQ</h2></div><div class="col-md-6 col-sm-12" data-v-29b49df6><ul class="ec-breadcrumb-list" data-v-29b49df6><li class="ec-breadcrumb-item" data-v-29b49df6>`);
  _push(ssrRenderComponent(_component_router_link, { to: { name: "home" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Home `);
      } else {
        return [
          createTextVNode(" Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-breadcrumb-item active" data-v-29b49df6>FAQ</li></ul></div></div></div></div></div></div><section class="ec-page-content section-space-p" data-v-29b49df6><div class="container" data-v-29b49df6><div class="row" data-v-29b49df6><div class="col-md-12 text-center" data-v-29b49df6><div class="section-title" data-v-29b49df6><h2 class="ec-bg-title" data-v-29b49df6>FAQ</h2><h2 class="ec-title" data-v-29b49df6>FAQ</h2><p class="sub-title mb-3" data-v-29b49df6> Customer service management </p></div></div><div class="ec-faq-wrapper" data-v-29b49df6><!--[-->`);
  ssrRenderList($data.faqItems, (faq, faqIndex) => {
    _push(`<div class="ec-faq-container" data-v-29b49df6><h2 class="ec-faq-heading" data-v-29b49df6>${ssrInterpolate(faq.name)}</h2><div id="ec-faq" data-v-29b49df6><!--[-->`);
    ssrRenderList(faq.items, (item, itemIndex) => {
      _push(`<div class="col-sm-12 ec-faq-block" data-v-29b49df6><h4 class="ec-faq-title" data-v-29b49df6>${ssrInterpolate(item.title)}</h4>`);
      if ($data.activeIndexes.has(
        `faq-${faqIndex}-item-${itemIndex}`
      )) {
        _push(`<div class="ec-faq-content ec-faq-dropdown" data-v-29b49df6><p data-v-29b49df6>${ssrInterpolate(item.content)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    });
    _push(`<!--]--></div></div>`);
  });
  _push(`<!--]--></div></div></div></section><!--]-->`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Faq.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Faq = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a], ["__scopeId", "data-v-29b49df6"]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Faq
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  name: "ListBrands",
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      getImagePath,
      modules: [Autoplay]
    };
  },
  methods: {
    Autoplay
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-brand-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="ec-brand-img"${_scopeId2}><a href="#"${_scopeId2}><img alt="brand" title="brand"${ssrRenderAttr(
                "src",
                $setup.getImagePath("brand-image", "1.png")
              )} loading="lazy"${_scopeId2}></a></div>`);
            } else {
              return [
                createVNode("div", { class: "ec-brand-img" }, [
                  createVNode("a", { href: "#" }, [
                    createVNode("img", {
                      alt: "brand",
                      title: "brand",
                      src: $setup.getImagePath("brand-image", "1.png"),
                      loading: "lazy"
                    }, null, 8, ["src"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-brand-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="ec-brand-img"${_scopeId2}><a href="#"${_scopeId2}><img alt="brand" title="brand"${ssrRenderAttr(
                "src",
                $setup.getImagePath("brand-image", "2.png")
              )} loading="lazy"${_scopeId2}></a></div>`);
            } else {
              return [
                createVNode("div", { class: "ec-brand-img" }, [
                  createVNode("a", { href: "#" }, [
                    createVNode("img", {
                      alt: "brand",
                      title: "brand",
                      src: $setup.getImagePath("brand-image", "2.png"),
                      loading: "lazy"
                    }, null, 8, ["src"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-brand-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="ec-brand-img"${_scopeId2}><a href="#"${_scopeId2}><img alt="brand" title="brand"${ssrRenderAttr(
                "src",
                $setup.getImagePath("brand-image", "3.png")
              )} loading="lazy"${_scopeId2}></a></div>`);
            } else {
              return [
                createVNode("div", { class: "ec-brand-img" }, [
                  createVNode("a", { href: "#" }, [
                    createVNode("img", {
                      alt: "brand",
                      title: "brand",
                      src: $setup.getImagePath("brand-image", "3.png"),
                      loading: "lazy"
                    }, null, 8, ["src"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-brand-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="ec-brand-img"${_scopeId2}><a href="#"${_scopeId2}><img alt="brand" title="brand"${ssrRenderAttr(
                "src",
                $setup.getImagePath("brand-image", "4.png")
              )} loading="lazy"${_scopeId2}></a></div>`);
            } else {
              return [
                createVNode("div", { class: "ec-brand-img" }, [
                  createVNode("a", { href: "#" }, [
                    createVNode("img", {
                      alt: "brand",
                      title: "brand",
                      src: $setup.getImagePath("brand-image", "4.png"),
                      loading: "lazy"
                    }, null, 8, ["src"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-brand-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="ec-brand-img"${_scopeId2}><a href="#"${_scopeId2}><img alt="brand" title="brand"${ssrRenderAttr(
                "src",
                $setup.getImagePath("brand-image", "5.png")
              )} loading="lazy"${_scopeId2}></a></div>`);
            } else {
              return [
                createVNode("div", { class: "ec-brand-img" }, [
                  createVNode("a", { href: "#" }, [
                    createVNode("img", {
                      alt: "brand",
                      title: "brand",
                      src: $setup.getImagePath("brand-image", "5.png"),
                      loading: "lazy"
                    }, null, 8, ["src"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-brand-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="ec-brand-img"${_scopeId2}><a href="#"${_scopeId2}><img alt="brand" title="brand"${ssrRenderAttr(
                "src",
                $setup.getImagePath("brand-image", "6.png")
              )} loading="lazy"${_scopeId2}></a></div>`);
            } else {
              return [
                createVNode("div", { class: "ec-brand-img" }, [
                  createVNode("a", { href: "#" }, [
                    createVNode("img", {
                      alt: "brand",
                      title: "brand",
                      src: $setup.getImagePath("brand-image", "6.png"),
                      loading: "lazy"
                    }, null, 8, ["src"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-brand-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="ec-brand-img"${_scopeId2}><a href="#"${_scopeId2}><img alt="brand" title="brand"${ssrRenderAttr(
                "src",
                $setup.getImagePath("brand-image", "7.png")
              )} loading="lazy"${_scopeId2}></a></div>`);
            } else {
              return [
                createVNode("div", { class: "ec-brand-img" }, [
                  createVNode("a", { href: "#" }, [
                    createVNode("img", {
                      alt: "brand",
                      title: "brand",
                      src: $setup.getImagePath("brand-image", "7.png"),
                      loading: "lazy"
                    }, null, 8, ["src"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-brand-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="ec-brand-img"${_scopeId2}><a href="#"${_scopeId2}><img alt="brand" title="brand"${ssrRenderAttr(
                "src",
                $setup.getImagePath("brand-image", "8.png")
              )} loading="lazy"${_scopeId2}></a></div>`);
            } else {
              return [
                createVNode("div", { class: "ec-brand-img" }, [
                  createVNode("a", { href: "#" }, [
                    createVNode("img", {
                      alt: "brand",
                      title: "brand",
                      src: $setup.getImagePath("brand-image", "8.png"),
                      loading: "lazy"
                    }, null, 8, ["src"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "ec-brand-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "ec-brand-img" }, [
                createVNode("a", { href: "#" }, [
                  createVNode("img", {
                    alt: "brand",
                    title: "brand",
                    src: $setup.getImagePath("brand-image", "1.png"),
                    loading: "lazy"
                  }, null, 8, ["src"])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "ec-brand-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "ec-brand-img" }, [
                createVNode("a", { href: "#" }, [
                  createVNode("img", {
                    alt: "brand",
                    title: "brand",
                    src: $setup.getImagePath("brand-image", "2.png"),
                    loading: "lazy"
                  }, null, 8, ["src"])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "ec-brand-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "ec-brand-img" }, [
                createVNode("a", { href: "#" }, [
                  createVNode("img", {
                    alt: "brand",
                    title: "brand",
                    src: $setup.getImagePath("brand-image", "3.png"),
                    loading: "lazy"
                  }, null, 8, ["src"])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "ec-brand-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "ec-brand-img" }, [
                createVNode("a", { href: "#" }, [
                  createVNode("img", {
                    alt: "brand",
                    title: "brand",
                    src: $setup.getImagePath("brand-image", "4.png"),
                    loading: "lazy"
                  }, null, 8, ["src"])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "ec-brand-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "ec-brand-img" }, [
                createVNode("a", { href: "#" }, [
                  createVNode("img", {
                    alt: "brand",
                    title: "brand",
                    src: $setup.getImagePath("brand-image", "5.png"),
                    loading: "lazy"
                  }, null, 8, ["src"])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "ec-brand-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "ec-brand-img" }, [
                createVNode("a", { href: "#" }, [
                  createVNode("img", {
                    alt: "brand",
                    title: "brand",
                    src: $setup.getImagePath("brand-image", "6.png"),
                    loading: "lazy"
                  }, null, 8, ["src"])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "ec-brand-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "ec-brand-img" }, [
                createVNode("a", { href: "#" }, [
                  createVNode("img", {
                    alt: "brand",
                    title: "brand",
                    src: $setup.getImagePath("brand-image", "7.png"),
                    loading: "lazy"
                  }, null, 8, ["src"])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "ec-brand-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "ec-brand-img" }, [
                createVNode("a", { href: "#" }, [
                  createVNode("img", {
                    alt: "brand",
                    title: "brand",
                    src: $setup.getImagePath("brand-image", "8.png"),
                    loading: "lazy"
                  }, null, 8, ["src"])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ListBrands.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const ListBrands = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$8 = {
  name: "SuperOffer",
  setup() {
    return {
      getImagePath
    };
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section ec-offer-section section-space-p section-space-m" }, _attrs))}><h2 class="d-none">Offer</h2><div class="container"><div class="row justify-content-end"><div class="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center ec-offer-content"><h2 class="ec-offer-title" data-aos="slide-down"> Sunglasses </h2><h3 class="ec-offer-stitle" data-aos="slide-up"> Super Offer </h3><span class="ec-offer-img" data-aos="zoom-in"><img${ssrRenderAttr("src", $setup.getImagePath("offer-image", "1.png"))} alt="offer image" loading="lazy"></span><span class="ec-offer-desc">Acetate Frame Sunglasses</span><span class="ec-offer-price">$40.00 Only</span><a class="btn btn-primary" data-aos="zoom-in" href="#"> Shop Now </a></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/SuperOffer.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const SuperOffer = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {
  name: "ProductInner",
  props: {
    product: {
      type: Object,
      required: true,
      validator(value) {
        return typeof value.name === "string" && typeof value.imageMain === "string" && typeof value.imageHover === "string";
      }
    }
  },
  setup() {
    return {
      getImagePath
    };
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ec-product-inner" }, _attrs))}><div class="ec-pro-image-outer"><div class="ec-pro-image"><a href="#" class="image"><img class="main-image"${ssrRenderAttr("src", $setup.getImagePath("product-image", $props.product.imageMain))}${ssrRenderAttr("alt", $props.product.name)} loading="lazy"><img class="hover-image"${ssrRenderAttr("src", $setup.getImagePath("product-image", $props.product.imageHover))}${ssrRenderAttr("alt", $props.product.name)} loading="lazy"></a><a href="#" class="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img${ssrRenderAttr("src", $setup.getImagePath("icons", "quickview.svg"))} class="svg_img pro_svg" alt=""></a></div></div><div class="ec-pro-content"><h5 class="ec-pro-title"><a href="#">${ssrInterpolate($props.product.name)}</a></h5><div class="ec-pro-rating"><i class="ecicon eci-star fill"></i><i class="ecicon eci-star fill"></i><i class="ecicon eci-star fill"></i><i class="ecicon eci-star fill"></i><i class="ecicon eci-star"></i></div><span class="ec-price"><span class="old-price">$100.00</span><span class="new-price">$80.00</span></span></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ProductInner.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ProductInner = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {
  name: "NewProducts",
  components: {
    ProductInner
  },
  setup() {
    return {
      getImagePath
    };
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ProductInner = resolveComponent("ProductInner");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "section ec-new-product section-space-p",
    id: "arrivals"
  }, _attrs))}><div class="container"><div class="row"><div class="col-md-12 text-center"><div class="section-title"><h2 class="ec-bg-title">New Arrivals</h2><h2 class="ec-title">New Arrivals</h2><p class="sub-title"> Browse The Collection of Top Products </p></div></div></div><div class="row"><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="flip-left">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "11_1.jpg",
    imageHover: "11_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="flip-left">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "11_1.jpg",
    imageHover: "11_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="flip-left">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "12_1.jpg",
    imageHover: "12_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="flip-left">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "13_1.jpg",
    imageHover: "13_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-sm-12 shop-all-btn"><a href="#">Shop All Collection</a></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/NewProducts.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const NewProducts = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  name: "TwoBanners",
  setup() {
    return {
      getImagePath
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "ec-banner section section-space-p" }, _attrs))}><h2 class="d-none">Banner</h2><div class="container"><div class="ec-banner-inner"><div class="ec-banner-block ec-banner-block-2"><div class="row"><div class="banner-block col-lg-6 col-md-12 margin-b-30" data-aos="flip-right"><div class="bnr-overlay"><img${ssrRenderAttr("src", $setup.getImagePath("banner", "2.jpg"))} alt="" loading="lazy"><div class="banner-text"><span class="ec-banner-stitle"> New Arrivals </span><span class="ec-banner-title"> mens <br> Sport shoes </span><span class="ec-banner-discount"> 30% Discount </span></div><div class="banner-content"><span class="ec-banner-btn"><a href="#">Order Now</a></span></div></div></div><div class="banner-block col-lg-6 col-md-12" data-aos="flip-left"><div class="bnr-overlay"><img${ssrRenderAttr("src", $setup.getImagePath("banner", "3.jpg"))} alt="" loading="lazy"><div class="banner-text"><span class="ec-banner-stitle"> New Trending </span><span class="ec-banner-title"> Smart <br> watches </span><span class="ec-banner-discount"> Buy any 3 Items &amp; get <br> 20% Discount </span></div><div class="banner-content"><span class="ec-banner-btn"><a href="#">Order Now</a></span></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/TwoBanners.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TwoBanners = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  name: "TabProducts",
  components: {
    ProductInner
  },
  setup() {
    return {
      getImagePath
    };
  },
  data() {
    return {
      activeTab: "tab-pro-for-all",
      tabs: [
        {
          id: "tab-pro-for-all",
          label: "For All",
          href: "#tab-pro-for-all"
        },
        {
          id: "tab-pro-for-men",
          label: "For Men",
          href: "#tab-pro-for-men"
        },
        {
          id: "tab-pro-for-women",
          label: "For Women",
          href: "#tab-pro-for-women"
        },
        {
          id: "tab-pro-for-child",
          label: "For Children",
          href: "#tab-pro-for-child"
        }
      ]
    };
  },
  methods: {
    setActiveTab(tabId) {
      this.activeTab = tabId;
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ProductInner = resolveComponent("ProductInner");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "section ec-product-tab section-space-p",
    id: "collection"
  }, _attrs))}><div class="container"><div class="row"><div class="col-md-12 text-center"><div class="section-title"><h2 class="ec-bg-title">Our Top Collection</h2><h2 class="ec-title">Our Top Collection</h2><p class="sub-title"> Browse The Collection of Top Products </p></div></div><div class="col-md-12 text-center"><ul class="ec-pro-tab-nav nav justify-content-center"><!--[-->`);
  ssrRenderList($data.tabs, (tab, index) => {
    _push(`<li class="nav-item"><a class="${ssrRenderClass([
      "nav-link",
      { active: $data.activeTab === tab.id }
    ])}"${ssrRenderAttr("href", tab.href)} data-bs-toggle="tab">${ssrInterpolate(tab.label)}</a></li>`);
  });
  _push(`<!--]--></ul></div></div><div class="row"><div class="col"><div class="tab-content"><div class="${ssrRenderClass([
    "tab-pane",
    "fade",
    {
      "show active": $data.activeTab === "tab-pro-for-all"
    }
  ])}" id="tab-pro-for-all"><div class="row"><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "6_1.jpg",
    imageHover: "6_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "7_1.jpg",
    imageHover: "7_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "1_1.jpg",
    imageHover: "1_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "2_1.jpg",
    imageHover: "2_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "3_1.jpg",
    imageHover: "3_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "4_1.jpg",
    imageHover: "4_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "5_1.jpg",
    imageHover: "5_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "8_1.jpg",
    imageHover: "8_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-sm-12 shop-all-btn"><a href="#">Shop All Collection</a></div></div></div><div class="${ssrRenderClass([
    "tab-pane",
    "fade",
    {
      "show active": $data.activeTab === "tab-pro-for-men"
    }
  ])}" id="tab-pro-for-men"><div class="row"><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "6_1.jpg",
    imageHover: "6_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "7_1.jpg",
    imageHover: "7_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "1_1.jpg",
    imageHover: "1_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "2_1.jpg",
    imageHover: "2_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "3_1.jpg",
    imageHover: "3_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "4_1.jpg",
    imageHover: "4_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "5_1.jpg",
    imageHover: "5_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "8_1.jpg",
    imageHover: "8_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-sm-12 shop-all-btn"><a href="#">Shop All Collection</a></div></div></div><div class="${ssrRenderClass([
    "tab-pane",
    "fade",
    {
      "show active": $data.activeTab === "tab-pro-for-women"
    }
  ])}" id="tab-pro-for-women"><div class="row"><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "6_1.jpg",
    imageHover: "6_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "7_1.jpg",
    imageHover: "7_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "1_1.jpg",
    imageHover: "1_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "2_1.jpg",
    imageHover: "2_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "3_1.jpg",
    imageHover: "3_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "4_1.jpg",
    imageHover: "4_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "5_1.jpg",
    imageHover: "5_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "8_1.jpg",
    imageHover: "8_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-sm-12 shop-all-btn"><a href="#">Shop All Collection</a></div></div></div><div class="${ssrRenderClass([
    "tab-pane",
    "fade",
    {
      "show active": $data.activeTab === "tab-pro-for-child"
    }
  ])}" id="tab-pro-for-child"><div class="row"><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "6_1.jpg",
    imageHover: "6_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "7_1.jpg",
    imageHover: "7_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "1_1.jpg",
    imageHover: "1_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "2_1.jpg",
    imageHover: "2_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "3_1.jpg",
    imageHover: "3_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "4_1.jpg",
    imageHover: "4_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "5_1.jpg",
    imageHover: "5_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content" data-aos="fade">`);
  _push(ssrRenderComponent(_component_ProductInner, { product: {
    name: "Classic Leather Purse",
    imageMain: "8_1.jpg",
    imageHover: "8_2.jpg"
  } }, null, _parent));
  _push(`</div><div class="col-sm-12 shop-all-btn"><a href="#">Shop All Collection</a></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/TabProducts.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TabProducts = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  name: "HomePage",
  layout: Layout,
  components: {
    Swiper,
    SwiperSlide,
    InstagramFeed,
    ListServices,
    TestimonialReviews,
    ListBrands,
    SuperOffer,
    NewProducts,
    TwoBanners,
    TabProducts
  },
  setup() {
    return {
      getImagePath,
      modules: [Autoplay, Navigation, Thumbs]
    };
  },
  data() {
    return {
      thumbsSwiper: null
    };
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
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_TabProducts = resolveComponent("TabProducts");
  const _component_TwoBanners = resolveComponent("TwoBanners");
  const _component_ListServices = resolveComponent("ListServices");
  const _component_SuperOffer = resolveComponent("SuperOffer");
  const _component_NewProducts = resolveComponent("NewProducts");
  const _component_TestimonialReviews = resolveComponent("TestimonialReviews");
  const _component_ListBrands = resolveComponent("ListBrands");
  const _component_InstagramFeed = resolveComponent("InstagramFeed");
  _push(`<!--[--><div class="sticky-header-next-sec ec-main-slider section section-space-pb" data-v-6353eae1><div class="ec-slider swiper-container main-slider-nav main-slider-dot" data-v-6353eae1>`);
  _push(ssrRenderComponent(_component_swiper, {
    class: "swiper-wrapper",
    modules: [$options.Autoplay, $options.Navigation],
    "slides-per-view": 1,
    loop: true,
    autoplay: {
      delay: 4e3,
      disableOnInteraction: false
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next"
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-slide-item swiper-slide d-flex ec-slide-1" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="container align-self-center" data-v-6353eae1${_scopeId2}><div class="row" data-v-6353eae1${_scopeId2}><div class="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center" data-v-6353eae1${_scopeId2}><div class="ec-slide-content slider-animation" data-v-6353eae1${_scopeId2}><h1 class="ec-slide-title" data-v-6353eae1${_scopeId2}> New Fashion Collection </h1><h2 class="ec-slide-stitle" data-v-6353eae1${_scopeId2}>Sale Offer</h2><p data-v-6353eae1${_scopeId2}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p><a href="#" class="btn btn-lg btn-secondary" data-v-6353eae1${_scopeId2}> Order Now </a></div></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "container align-self-center" }, [
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center" }, [
                      createVNode("div", { class: "ec-slide-content slider-animation" }, [
                        createVNode("h1", { class: "ec-slide-title" }, " New Fashion Collection "),
                        createVNode("h2", { class: "ec-slide-stitle" }, "Sale Offer"),
                        createVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "),
                        createVNode("a", {
                          href: "#",
                          class: "btn btn-lg btn-secondary"
                        }, " Order Now ")
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "ec-slide-item swiper-slide d-flex ec-slide-2" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="container align-self-center" data-v-6353eae1${_scopeId2}><div class="row" data-v-6353eae1${_scopeId2}><div class="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center" data-v-6353eae1${_scopeId2}><div class="ec-slide-content slider-animation" data-v-6353eae1${_scopeId2}><h1 class="ec-slide-title" data-aos="flip-right" data-v-6353eae1${_scopeId2}> Boat Headphone Sets </h1><h2 class="ec-slide-stitle" data-v-6353eae1${_scopeId2}>Sale Offer</h2><p data-v-6353eae1${_scopeId2}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p><a href="#" class="btn btn-lg btn-secondary" data-v-6353eae1${_scopeId2}> Order Now </a></div></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "container align-self-center" }, [
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center" }, [
                      createVNode("div", { class: "ec-slide-content slider-animation" }, [
                        createVNode("h1", {
                          class: "ec-slide-title",
                          "data-aos": "flip-right"
                        }, " Boat Headphone Sets "),
                        createVNode("h2", { class: "ec-slide-stitle" }, "Sale Offer"),
                        createVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "),
                        createVNode("a", {
                          href: "#",
                          class: "btn btn-lg btn-secondary"
                        }, " Order Now ")
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="swiper-buttons" data-v-6353eae1${_scopeId}><div class="swiper-button-next" data-v-6353eae1${_scopeId}></div><div class="swiper-button-prev" data-v-6353eae1${_scopeId}></div></div>`);
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "ec-slide-item swiper-slide d-flex ec-slide-1" }, {
            default: withCtx(() => [
              createVNode("div", { class: "container align-self-center" }, [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center" }, [
                    createVNode("div", { class: "ec-slide-content slider-animation" }, [
                      createVNode("h1", { class: "ec-slide-title" }, " New Fashion Collection "),
                      createVNode("h2", { class: "ec-slide-stitle" }, "Sale Offer"),
                      createVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "),
                      createVNode("a", {
                        href: "#",
                        class: "btn btn-lg btn-secondary"
                      }, " Order Now ")
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "ec-slide-item swiper-slide d-flex ec-slide-2" }, {
            default: withCtx(() => [
              createVNode("div", { class: "container align-self-center" }, [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center" }, [
                    createVNode("div", { class: "ec-slide-content slider-animation" }, [
                      createVNode("h1", {
                        class: "ec-slide-title",
                        "data-aos": "flip-right"
                      }, " Boat Headphone Sets "),
                      createVNode("h2", { class: "ec-slide-stitle" }, "Sale Offer"),
                      createVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "),
                      createVNode("a", {
                        href: "#",
                        class: "btn btn-lg btn-secondary"
                      }, " Order Now ")
                    ])
                  ])
                ])
              ])
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
  _push(ssrRenderComponent(_component_TabProducts, null, null, _parent));
  _push(ssrRenderComponent(_component_TwoBanners, null, null, _parent));
  _push(ssrRenderComponent(_component_ListServices, null, null, _parent));
  _push(ssrRenderComponent(_component_SuperOffer, null, null, _parent));
  _push(ssrRenderComponent(_component_NewProducts, null, null, _parent));
  _push(ssrRenderComponent(_component_TestimonialReviews, null, null, _parent));
  _push(ssrRenderComponent(_component_ListBrands, null, null, _parent));
  _push(ssrRenderComponent(_component_InstagramFeed, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Home.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-6353eae1"]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  name: "PrivacyPolicy",
  layout: Layout,
  setup() {
    onMounted(() => {
      document.body.classList.add("terms_condition_page");
    });
    onBeforeUnmount(() => {
      document.body.classList.remove("terms_condition_page");
    });
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<!--[--><div class="sticky-header-next-sec ec-breadcrumb section-space-mb"><div class="container"><div class="row"><div class="col-12"><div class="row ec_breadcrumb_inner"><div class="col-md-6 col-sm-12"><h2 class="ec-breadcrumb-title">Policy</h2></div><div class="col-md-6 col-sm-12"><ul class="ec-breadcrumb-list"><li class="ec-breadcrumb-item">`);
  _push(ssrRenderComponent(_component_router_link, { to: { name: "home" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Home `);
      } else {
        return [
          createTextVNode(" Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-breadcrumb-item active"> Policy </li></ul></div></div></div></div></div></div><section class="ec-page-content section-space-p"><div class="container"><div class="row"><div class="col-md-12 text-center"><div class="section-title"><h2 class="ec-bg-title">Privacy &amp; Policy</h2><h2 class="ec-title">Privacy &amp; Policy</h2><p class="sub-title mb-3"> Welcome to the ekka multivendor marketplace </p></div></div><div class="col-md-12"><div class="ec-common-wrapper"><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> Welcome to Ekka Multi Market. </h3><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <b>Lorem Ipsum is simply dutmmy text</b></p></div></div><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> Ekka Websites </h3><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <b>Lorem Ipsum is simply dutmmy text</b></p></div></div><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> How browsing and vendor works? </h3><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <b>Lorem Ipsum is simply dutmmy text</b></p></div></div><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> Becoming an vendor </h3><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <b>Lorem Ipsum is simply dutmmy text</b></p></div></div></div></div></div></div></section><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/PrivacyPolicy.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PrivacyPolicy = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PrivacyPolicy
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  name: "TermsCondition",
  layout: Layout,
  setup() {
    onMounted(() => {
      document.body.classList.add("terms_condition_page");
    });
    onBeforeUnmount(() => {
      document.body.classList.remove("terms_condition_page");
    });
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<!--[--><div class="sticky-header-next-sec ec-breadcrumb section-space-mb"><div class="container"><div class="row"><div class="col-12"><div class="row ec_breadcrumb_inner"><div class="col-md-6 col-sm-12"><h2 class="ec-breadcrumb-title"> Terms &amp; Condition </h2></div><div class="col-md-6 col-sm-12"><ul class="ec-breadcrumb-list"><li class="ec-breadcrumb-item">`);
  _push(ssrRenderComponent(_component_router_link, { to: { name: "home" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Home `);
      } else {
        return [
          createTextVNode(" Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-breadcrumb-item active"> Condition </li></ul></div></div></div></div></div></div><section class="ec-page-content section-space-p"><div class="container"><div class="row"><div class="col-md-12 text-center"><div class="section-title"><h2 class="ec-bg-title">Terms &amp; Condition</h2><h2 class="ec-title">Terms &amp; Condition</h2><p class="sub-title mb-3"> Welcome to the ekka multivendor marketplace </p></div></div><div class="col-md-12"><div class="ec-common-wrapper"><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> Welcome to Ekka Multi Market. </h3><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <b>Lorem Ipsum is simply dutmmy text</b></p></div></div><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> Ekka Websites </h3><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <b>Lorem Ipsum is simply dutmmy text</b></p></div></div><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> How browsing and vendor works? </h3><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <b>Lorem Ipsum is simply dutmmy text</b></p></div></div><div class="col-sm-12 ec-cms-block"><div class="ec-cms-block-inner"><h3 class="ec-cms-block-title"> Becoming an vendor </h3><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <b>Lorem Ipsum is simply dutmmy text</b></p></div></div></div></div></div></div></section><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/TermsCondition.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TermsCondition = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: TermsCondition
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  name: "PrivacyPolicyPage",
  layout: Layout,
  setup() {
    const getIconPath = (name) => getImagePath("icons", name);
    onMounted(() => {
      document.body.classList.add("track_order_page");
    });
    onBeforeUnmount(() => {
      document.body.classList.remove("track_order_page");
    });
    return {
      getIconPath
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<!--[--><div class="sticky-header-next-sec ec-breadcrumb section-space-mb"><div class="container"><div class="row"><div class="col-12"><div class="row ec_breadcrumb_inner"><div class="col-md-6 col-sm-12"><h2 class="ec-breadcrumb-title">Track Order</h2></div><div class="col-md-6 col-sm-12"><ul class="ec-breadcrumb-list"><li class="ec-breadcrumb-item">`);
  _push(ssrRenderComponent(_component_router_link, { to: { name: "home" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Home `);
      } else {
        return [
          createTextVNode(" Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="ec-breadcrumb-item active">Track</li></ul></div></div></div></div></div></div><section class="ec-page-content section-space-p"><div class="container"><div class="ec-trackorder-content col-md-12"><div class="ec-trackorder-inner"><div class="ec-trackorder-top"><h2 class="ec-order-id">order #6152</h2><div class="ec-order-detail"><div>Expected arrival 14-02-2021-2022</div><div> Grasshoppers <span>v534hb</span></div></div></div><div class="ec-trackorder-bottom"><div class="ec-progress-track"><ul id="ec-progressbar"><li class="step0 active"><span class="ec-track-icon"><img${ssrRenderAttr("src", $setup.getIconPath("track_1.png"))} alt="track_order" loading="lazy"></span><span class="ec-progressbar-track"></span><span class="ec-track-title"> order <br> processed </span></li><li class="step0 active"><span class="ec-track-icon"><img${ssrRenderAttr("src", $setup.getIconPath("track_2.png"))} alt="track_order" loading="lazy"></span><span class="ec-progressbar-track"></span><span class="ec-track-title"> order <br> designing </span></li><li class="step0 active"><span class="ec-track-icon"><img${ssrRenderAttr("src", $setup.getIconPath("track_3.png"))} alt="track_order" loading="lazy"></span><span class="ec-progressbar-track"></span><span class="ec-track-title"> order <br> shipped </span></li><li class="step0"><span class="ec-track-icon"><img${ssrRenderAttr("src", $setup.getIconPath("track_4.png"))} alt="track_order" loading="lazy"></span><span class="ec-progressbar-track"></span><span class="ec-track-title"> order <br> enroute </span></li><li class="step0"><span class="ec-track-icon"><img${ssrRenderAttr("src", $setup.getIconPath("track_5.png"))} alt="track_order" loading="lazy"></span><span class="ec-progressbar-track"></span><span class="ec-track-title"> order <br> arrived </span></li></ul></div></div></div></div></div></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/TrackOrder.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TrackOrder = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: TrackOrder
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./pages/AboutUs.vue": __vite_glob_0_0, "./pages/Contacts.vue": __vite_glob_0_1, "./pages/Faq.vue": __vite_glob_0_2, "./pages/Home.vue": __vite_glob_0_3, "./pages/PrivacyPolicy.vue": __vite_glob_0_4, "./pages/TermsCondition.vue": __vite_glob_0_5, "./pages/TrackOrder.vue": __vite_glob_0_6 });
      const page2 = pages[`./pages/${name}.vue`];
      page2.default.layout = page2.default.layout || Layout;
      return page2;
    },
    setup({ App, props, plugin }) {
      const app = createSSRApp({
        render: () => h(App, props)
      });
      const pinia = createPinia();
      app.use(pinia);
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

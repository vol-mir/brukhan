<script>
    import { Link as InertiaLink } from '@inertiajs/vue3';
    import Layout from '@/Layout.vue';
    import { useBodyClass } from '@/composables/useBodyClass';
    import { useSiteInfo } from '@/composables/useSiteInfo';

    export default {
        name: 'Contacts',
        layout: Layout,
        components: {
            InertiaLink,
        },
        setup() {
            useBodyClass('contact_us_page');

            const { siteInfoStore } = useSiteInfo();

            return {
                siteInfoStore,
            };
        },
    };
</script>

<template>
    <!-- Breadcrumb start -->
    <div class="sticky-header-next-sec ec-breadcrumb section-space-mb">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="row ec_breadcrumb_inner">
                        <div class="col-md-6 col-sm-12">
                            <h2 class="ec-breadcrumb-title">
                                {{ $t('menu.contact_us') }}
                            </h2>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <!-- breadcrumb-list start -->
                            <ul class="ec-breadcrumb-list">
                                <li class="ec-breadcrumb-item">
                                    <InertiaLink :href="route('home')">
                                        {{ $t('menu.home') }}
                                    </InertiaLink>
                                </li>
                                <li class="ec-breadcrumb-item active">
                                    {{ $t('menu.contact_us') }}
                                </li>
                            </ul>
                            <!-- breadcrumb-list end -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb end -->

    <!-- Contacts page start -->
    <section class="ec-page-content section-space-p">
        <div class="container">
            <div class="row">
                <div class="ec-common-wrapper">
                    <div class="ec-contact-leftside">
                        <div class="ec-contact-container">
                            <div class="ec-contact-form">
                                <form action="#" method="post">
                                    <span class="ec-contact-wrap">
                                        <label>
                                            {{ $t('form.first_name') }}*
                                        </label>
                                        <input
                                            type="text"
                                            name="firstname"
                                            :placeholder="$t('form.first_name')"
                                            required
                                        />
                                    </span>
                                    <span class="ec-contact-wrap">
                                        <label>
                                            {{ $t('form.last_name') }}*
                                        </label>
                                        <input
                                            type="text"
                                            name="lastname"
                                            :placeholder="$t('form.last_name')"
                                            required
                                        />
                                    </span>
                                    <span class="ec-contact-wrap">
                                        <label>{{ $t('form.email') }}*</label>
                                        <input
                                            type="email"
                                            name="email"
                                            :placeholder="$t('form.email')"
                                            required
                                        />
                                    </span>
                                    <span class="ec-contact-wrap">
                                        <label>{{ $t('form.phone') }}*</label>
                                        <input
                                            type="text"
                                            name="phonenumber"
                                            :placeholder="$t('form.phone')"
                                            required
                                        />
                                    </span>
                                    <span class="ec-contact-wrap">
                                        <label>{{ $t('form.message') }}*</label>
                                        <textarea
                                            name="address"
                                            :placeholder="$t('form.message')"
                                        ></textarea>
                                    </span>
                                    <span class="ec-contact-wrap ec-recaptcha">
                                        <span
                                            class="g-recaptcha"
                                            data-sitekey="6LfKURIUAAAAAO50vlwWZkyK_G2ywqE52NU7YO0S"
                                            data-callback="verifyRecaptchaCallback"
                                            data-expired-callback="expiredRecaptchaCallback"
                                        ></span>
                                        <input
                                            class="form-control d-none"
                                            data-recaptcha="true"
                                            required
                                            data-error="Please complete the Captcha"
                                        />
                                        <span
                                            class="help-block with-errors"
                                        ></span>
                                    </span>
                                    <span
                                        class="ec-contact-wrap ec-contact-btn"
                                    >
                                        <button
                                            class="btn btn-primary"
                                            type="submit"
                                        >
                                            {{ $t('form.send') }}
                                        </button>
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="ec-contact-rightside">
                        <div class="ec_contact_map">
                            <div class="ec_map_canvas">
                                <iframe
                                    id="ec_map_canvas"
                                    :src="siteInfoStore.map"
                                ></iframe>
                            </div>
                        </div>
                        <div class="ec_contact_info">
                            <h1 class="ec_contact_info_head">
                                {{ $t('page.contact_us') }}
                            </h1>
                            <ul class="align-items-center">
                                <li class="ec-contact-item">
                                    <i
                                        class="ecicon eci-map-marker"
                                        aria-hidden="true"
                                    ></i>
                                    <span>{{ $t('address') }} :</span>
                                    {{ siteInfoStore.address }}
                                </li>
                                <li
                                    v-for="(
                                        phone, index
                                    ) in siteInfoStore.phones"
                                    :key="index"
                                    class="ec-contact-item align-items-center"
                                >
                                    <i
                                        class="ecicon eci-phone"
                                        aria-hidden="true"
                                    ></i>
                                    <span>{{ $t('phone') }} :&nbsp;</span>
                                    <a
                                        :href="`tel:${phone.replace(/\s+/g, '')}`"
                                    >
                                        {{ phone }}
                                    </a>
                                </li>
                                <li
                                    v-for="(
                                        email, index
                                    ) in siteInfoStore.emails"
                                    :key="index"
                                    class="ec-contact-item align-items-center"
                                >
                                    <i
                                        class="ecicon eci-envelope"
                                        aria-hidden="true"
                                    ></i>
                                    <span>{{ $t('email') }} :</span>
                                    <a :href="`mailto:${email}`">
                                        {{ email }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Contacts page end -->
</template>

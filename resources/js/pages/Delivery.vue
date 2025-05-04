<script>
    import { Link as InertiaLink } from '@inertiajs/vue3';
    import Layout from '@/layouts/LayoutBase.vue';
    import { useBodyClass } from '@/composables/useBodyClass';
    import { useImagePath } from '@/composables/useImagePath';
    import ListServices from '@/components/ListServices.vue';

    export default {
        name: 'Delivery',
        layout: Layout,
        components: {
            InertiaLink,
            ListServices,
        },
        setup() {
            useBodyClass('delivery_page');

            const { getImagePath } = useImagePath();

            return {
                getImagePath,
            };
        },
    };
</script>

<template class="delivery_page">
    <!-- Breadcrumb start -->
    <div class="sticky-header-next-sec ec-breadcrumb section-space-mb">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="row ec_breadcrumb_inner">
                        <div class="col-md-6 col-sm-12">
                            <h2 class="ec-breadcrumb-title">
                                {{ $t('menu.delivery') }}
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
                                    {{ $t('menu.delivery') }}
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

    <section class="ec-page-content section-space-p">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="section-title">
                        <h1 class="ec-bg-title">{{ $t('delivery') }}</h1>
                        <h1 class="ec-title">{{ $t('delivery') }}</h1>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="ec-common-wrapper">
                        <div class="col-sm-12 ec-cms-block">
                            <div class="ec-cms-block-inner">
                                <p>
                                    <strong>
                                        Доставка по России и СНГ - быстро и
                                        удобно!
                                    </strong>
                                </p>
                                <br />
                                <p>
                                    Мы отправляем заказы в любую точку России и
                                    стран СНГ с помощью нашего надежного
                                    партнёра
                                    <strong>СДЭК</strong>
                                    .
                                    <br />
                                    После оформления заказа вы сможете выбрать:
                                </p>
                                <p>
                                    - удобный
                                    <strong>пункт выдачи</strong>
                                    <br />
                                    -
                                    <strong>курьерскую доставку</strong>
                                    прямо на ваш адрес
                                    <br />
                                </p>
                                <br />
                                <p>
                                    Отправка осуществляется в кратчайшие сроки,
                                    а после передачи заказа транспортной
                                    компании вы получите трек-номер для
                                    отслеживания посылки.
                                </p>
                                <br />
                                <p>
                                    <strong>Стоимость и сроки доставки</strong>
                                    рассчитываются автоматически при оформлении
                                    заказа - всё зависит от вашего региона и
                                    способа получения.
                                    <br />
                                    Для вашего удобства доступны различные
                                    варианты оплаты, включая
                                    <strong>наложенный платёж</strong>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <ListServices />
</template>

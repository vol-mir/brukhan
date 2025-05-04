<script>
    import { Link as InertiaLink } from '@inertiajs/vue3';
    import Layout from '@/layouts/LayoutBase.vue';
    import { useBodyClass } from '@/composables/useBodyClass';

    export default {
        name: 'PolicyCookies',
        layout: Layout,
        components: {
            InertiaLink,
        },
        setup() {
            useBodyClass('policy_cookies_page');
        },
    };
</script>

<template class="policy_cookies_page">
    <!-- Breadcrumb start -->
    <div class="sticky-header-next-sec ec-breadcrumb section-space-mb">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="row ec_breadcrumb_inner">
                        <div class="col-md-6 col-sm-12">
                            <h2 class="ec-breadcrumb-title">
                                {{ $t('menu.policy_cookies') }}
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
                                    {{ $t('menu.policy_cookies') }}
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

    <!-- Terms & Condition page start -->
    <section class="ec-page-content section-space-p">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="section-title">
                        <h1 class="ec-bg-title">{{ $t('policy_cookies') }}</h1>
                        <h1 class="ec-title">{{ $t('policy_cookies') }}</h1>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="ec-common-wrapper">
                        <div class="col-sm-12 ec-cms-block">
                            <div class="ec-cms-block-inner">
                                <h3 class="ec-cms-block-title">
                                    1. Общие положения
                                </h3>
                                <p>
                                    Данная Политика использования файлов cookie
                                    (далее - Политика) относится к сайту
                                    e-kaufmann.ru, который принадлежит
                                    индивидуальному предпринимателю Брухан Юрий
                                    Игоревич (далее – Оператор).
                                    <br />
                                    Оператор использует файлы cookie и
                                    аналогичные технологии на своем сайте для
                                    обеспечения его корректной работы, улучшения
                                    пользовательского опыта и предоставления
                                    персонализированной информации.
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-12 ec-cms-block">
                            <div class="ec-cms-block-inner">
                                <h3 class="ec-cms-block-title">
                                    2. Что такое cookie?
                                </h3>
                                <p>
                                    Файлы cookie - это небольшие текстовые
                                    файлы, которые сохраняются на вашем
                                    устройстве при посещении сайта. С помощью
                                    файлов cookie сайт может «запомнить» ваши
                                    действия и предпочтения на определенный
                                    период времени.
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-12 ec-cms-block">
                            <div class="ec-cms-block-inner">
                                <h3 class="ec-cms-block-title">
                                    3. Какие типы cookie используются
                                </h3>
                                <p>
                                    Оператор может использовать на сайте
                                    следующие типы файлов cookie:
                                    <br />
                                    - Обязательные cookie - необходимы для
                                    работы сайта, обеспечивают навигацию и
                                    использование основных функций.
                                    <br />
                                    - Аналитические cookie - позволяют собирать
                                    обезличенную статистику о посещениях сайта,
                                    что помогает улучшать его работу и
                                    содержимое (например, Яндекс.Метрика, Google
                                    Analytics).
                                    <br />
                                    - Функциональные cookie - используются для
                                    запоминания ваших настроек и предпочтений
                                    (язык, оформление и проч.).
                                    <br />
                                    - Рекламные cookie - могут применяться для
                                    показа персонализированной рекламы или
                                    анализа эффективности рекламных кампаний
                                    (используются только с согласия
                                    пользователя).
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-12 ec-cms-block">
                            <div class="ec-cms-block-inner">
                                <h3 class="ec-cms-block-title">
                                    4. Цели использования cookie
                                </h3>
                                <p>
                                    - обеспечение корректной работы сайта;
                                    <br />
                                    - анализ и улучшение работы сайта;
                                    <br />
                                    - запоминание пользовательских настроек;
                                    <br />
                                    - предоставление информации, соответствующей
                                    интересам посетителя.
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-12 ec-cms-block">
                            <div class="ec-cms-block-inner">
                                <h3 class="ec-cms-block-title">
                                    5. Управление cookie
                                </h3>
                                <p>
                                    Большинство браузеров по умолчанию принимают
                                    cookie. Вы можете изменить настройки
                                    браузера, чтобы блокировать или удалять
                                    cookie, а также получать уведомления о их
                                    отправке. Обратите внимание, что при
                                    отключении или удалении cookie некоторые
                                    функции сайта могут работать некорректно.
                                    Подробнее о настройках cookie можно узнать
                                    на официальных страницах поддержки вашего
                                    браузера.
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-12 ec-cms-block">
                            <div class="ec-cms-block-inner">
                                <h3 class="ec-cms-block-title">
                                    6. Изменения в политике
                                </h3>
                                <p>
                                    Оператор может обновлять настоящую политику.
                                    Все изменения отображаются на данной
                                    странице с указанием даты обновления.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Terms & Condition page end -->
</template>

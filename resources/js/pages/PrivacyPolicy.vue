<script>
    import { Link as InertiaLink } from '@inertiajs/vue3';
    import Layout from '@/layouts/LayoutBase.vue';
    import { useBodyClass } from '@/composables/useBodyClass';

    export default {
        name: 'PrivacyPolicy',
        layout: Layout,
        components: {
            InertiaLink,
        },
        setup() {
            useBodyClass('terms_condition_page');
        },
    };
</script>

<template class="terms_condition_page">
    <!-- Breadcrumb start -->
    <div class="sticky-header-next-sec ec-breadcrumb section-space-mb">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="row ec_breadcrumb_inner">
                        <div class="col-md-6 col-sm-12">
                            <h2 class="ec-breadcrumb-title">
                                {{ $t('menu.privacy_policy') }}
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
                                    {{ $t('menu.privacy_policy') }}
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

    <!-- Privacy & Policy page start -->
    <section class="ec-page-content section-space-p">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="section-title">
                        <h1 class="ec-bg-title">{{ $t('privacy_policy') }}</h1>
                        <h1 class="ec-title">{{ $t('privacy_policy') }}</h1>
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
                                    1.1. Настоящая политика обработки
                                    персональных данных составлена в
                                    соответствии с требованиями Федерального
                                    закона от 27.07.2006 №152-ФЗ «О персональных
                                    данных» и определяет порядок обработки
                                    персональных данных и меры по обеспечению
                                    безопасности персональных данных
                                    индивидуального предпринимателя Брухан Юрий
                                    Игоревич (далее – Оператор).
                                    <br />
                                    1.2. Оператор ставит своей важнейшей целью и
                                    условием осуществления своей деятельности
                                    соблюдение прав и свобод человека и
                                    гражданина при обработке его персональных
                                    данных, в том числе защиты прав на
                                    неприкосновенность частной жизни, личную и
                                    семейную тайну.
                                    <br />
                                    1.3. Настоящая политика Оператора в
                                    отношении обработки персональных данных
                                    (далее – Политика) применяется ко всей
                                    информации, которую Оператор может получить
                                    о посетителях сайта e-kaufmann.ru (или иного
                                    используемого вами доменного имени).
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-12 ec-cms-block">
                            <div class="ec-cms-block-inner">
                                <h3 class="ec-cms-block-title">
                                    2. Основные понятия, используемые в Политике
                                </h3>
                                <p>
                                    - Персональные данные – любая информация,
                                    непосредственно или косвенно относящаяся к
                                    определённому или определяемому физическому
                                    лицу (субъекту персональных данных).
                                    <br />
                                    - Оператор – лицо, организующее и/или
                                    осуществляющее обработку персональных
                                    данных, а также определяющее цели обработки
                                    персональных данных, состав персональных
                                    данных, подлежащих обработке, действия
                                    (операции), совершаемые с персональными
                                    данными.
                                    <br />
                                    - Сайт – интернет-ресурс, размещённый в сети
                                    Интернет по адресу e-kaufmann.ru.
                                    <br />
                                    - Пользователь – любой посетитель Сайта.
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-12 ec-cms-block">
                            <div class="ec-cms-block-inner">
                                <h3 class="ec-cms-block-title">
                                    3. Оператор может обрабатывать следующие
                                    персональные данные Пользователя
                                </h3>
                                <p>
                                    - Фамилия, имя, отчество.
                                    <br />
                                    - Контактный телефон.
                                    <br />
                                    - Адрес электронной почты.
                                    <br />
                                    - Адрес для доставки (по необходимости).
                                    <br />
                                    - Иные данные, предоставляемые
                                    Пользователем.
                                    <br />
                                </p>
                                <p>
                                    Также на Сайте происходит сбор и обработка
                                    обезличенных данных о посетителях (в т.ч.
                                    файлов cookie) с помощью сервисов
                                    интернет-статистики (Яндекс.Метрика, Google
                                    Analytics и других).
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-12 ec-cms-block">
                            <div class="ec-cms-block-inner">
                                <h3 class="ec-cms-block-title">
                                    4. Цели обработки персональных данных
                                </h3>
                                <p>
                                    Обработка персональных данных Пользователя
                                    производится в целях:
                                    <br />
                                    - Оказания услуг по доставке товаров из
                                    Европы;
                                    <br />
                                    - Оформления заявок, заказов и иной
                                    документации;
                                    <br />
                                    - Обратной связи с Пользователем;
                                    <br />
                                    - Информирования об изменениях статуса
                                    заказов и новых предложениях (при согласии
                                    Пользователя);
                                    <br />
                                    - Проведения маркетинговых и иных
                                    исследований;
                                    <br />
                                    - Соблюдения требований законодательства РФ.
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-12 ec-cms-block">
                            <div class="ec-cms-block-inner">
                                <h3 class="ec-cms-block-title">
                                    5. Правовые основания обработки персональных
                                    данных
                                </h3>
                                <p>
                                    Оператор обрабатывает персональные данные
                                    Пользователя только при заполнении
                                    Пользователем форм на Сайте и/или отправке
                                    данных Оператору самостоятельно посредством
                                    специальных форм и по согласованию с
                                    Пользователем.
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-12 ec-cms-block">
                            <div class="ec-cms-block-inner">
                                <h3 class="ec-cms-block-title">
                                    6. Порядок сбора, хранения, передачи и иных
                                    видов обработки персональных данных
                                </h3>
                                <p>
                                    6.1. Оператор обеспечивает сохранность
                                    персональных данных и принимает все
                                    возможные меры по исключению доступа к
                                    персональным данным неуполномоченных лиц.
                                    <br />
                                    6.2. Персональные данные Пользователя ни при
                                    каких условиях не будут переданы третьим
                                    лицам, за исключением случаев, связанных с
                                    исполнением действующего законодательства.
                                    <br />
                                    6.3. В случае выявления неточностей в
                                    персональных данных Пользователь может их
                                    актуализировать, обратившись к Оператору по
                                    контактному адресу электронной почты.
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-12 ec-cms-block">
                            <div class="ec-cms-block-inner">
                                <h3 class="ec-cms-block-title">
                                    7. Сроки обработки персональных данных
                                </h3>
                                <p>
                                    Персональные данные обрабатываются не
                                    дольше, чем этого требуют цели обработки,
                                    или чем это предусмотрено законодательством
                                    РФ.
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-12 ec-cms-block">
                            <div class="ec-cms-block-inner">
                                <h3 class="ec-cms-block-title">
                                    8. Права субъекта персональных данных
                                </h3>
                                <p>
                                    Пользователь вправе:
                                    <br />
                                    - Получать информацию, касающуюся обработки
                                    его персональных данных;
                                    <br />
                                    - Требовать уточнения своих персональных
                                    данных, их блокирования или уничтожения при
                                    наличии оснований;
                                    <br />
                                    - Отозвать своё согласие на обработку
                                    персональных данных, направив Оператору
                                    уведомление по электронной почте.
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-12 ec-cms-block">
                            <div class="ec-cms-block-inner">
                                <h3 class="ec-cms-block-title">
                                    9. Заключительные положения
                                </h3>
                                <p>
                                    9.1. Оператор имеет право вносить изменения
                                    в настоящую Политику. Новая редакция
                                    Политики вступает в силу с момента её
                                    размещения на Сайте.
                                    <br />
                                    9.2. Все предложения или вопросы по
                                    настоящей Политике следует направлять по
                                    электронной почте указанной на странице:
                                    <InertiaLink :href="route('contacts')">
                                        {{ $t('page.contact_us') }}
                                    </InertiaLink>
                                    <br />
                                    9.3. Действующая Политика размещена на Сайте
                                    по адресу:
                                    <InertiaLink
                                        :href="route('privacy-policy')"
                                    >
                                        {{ $t('page.privacy_policy') }}
                                    </InertiaLink>
                                    .
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Privacy & Policy page end -->
</template>

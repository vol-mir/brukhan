<script>
    export default {
        props: {
            title: String,
            subtitle: String,
            buttonText: String,
        },
    };
</script>

<template>
    <div class="container align-self-center">
        <div class="row">
            <div class="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
                <div class="ec-slide-content slider-animation slide-one">
                    <h1 class="ec-slide-title background-blur">
                        {{ title }}
                    </h1>
                    <h2 class="ec-slide-stitle background-blur">
                        {{ subtitle }}
                    </h2>
                    <a href="#" class="btn btn-lg btn-secondary">
                        {{ buttonText }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

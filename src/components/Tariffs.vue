<template>
  <section id="tarrifs" class="tarrifs">
    <div class="container">
      <div class="common__titling">
        <h2 class="common__titling-title">{{ $t("plans") }}</h2>
        <p class="common__titling-subtitle">{{ $t("plans_detail") }}</p>
      </div>
      <div class="tarrifs__content">
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-10">
          <div class="tarrifs__card wow animate__fadeInUp" data-wow-delay="">
            <p class="tarrifs__card-title">{{ $t("plans_1") }}</p>

            <div class="tarrifs__card-box">
              <p class="tarrifs__card-price">{{ $t("plans_1_price") }}</p>
              <p class="tarrifs__card-amount">{{ $t("plans_1_detail") }}</p>
              <p class="tarrifs__card-perprice">{{ $t("plans_1_one") }}</p>
              <button class="tarrifs__card-button">
                {{ $t("purchase") }}
              </button>
              <span></span> <span></span>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-10">
          <div
            class="tarrifs__card wow animate__fadeInUp"
            data-wow-delay="0.3s"
          >
            <p class="tarrifs__card-title">STANDART</p>

            <div class="tarrifs__card-box">
              <p class="tarrifs__card-price">{{ $t("plans_2_price") }}</p>
              <p class="tarrifs__card-amount">{{ $t("plans_2_detail") }}</p>
              <p class="tarrifs__card-perprice">{{ $t("plans_2_one") }}</p>
              <button class="tarrifs__card-button">
                {{ $t("purchase") }}
              </button>
              <span></span> <span></span>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-10">
          <div
            class="tarrifs__card wow animate__fadeInUp"
            data-wow-delay="0.6s"
          >
            <p class="tarrifs__card-title">{{ $t("plans_3") }}</p>

            <div class="tarrifs__card-box">
              <p class="tarrifs__card-price">{{ $t("plans_3_price") }}</p>
              <p class="tarrifs__card-amount">{{ $t("plans_3_detail") }}</p>
              <p class="tarrifs__card-perprice">{{ $t("plans_3_one") }}</p>
              <button class="tarrifs__card-button">
                {{ $t("purchase") }}
              </button>
              <span></span> <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>

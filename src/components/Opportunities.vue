<template>
  <section id="opportunities" class="opportunities">
    <div class="container">
      <div class="common__titling">
        <h2 class="common__titling-title">{{ $t("opportunities") }}</h2>
        <p class="common__titling-subtitle">
          {{ $t("opportunities_detail") }}
        </p>
      </div>
      <div class="opportunities__content">
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-11">
          <div
            class="opportunities__card wow animate__fadeInUp"
            data-wow-delay=""
          >
            <div class="opportunities__card-img">
              <img src="../assets/icons/opportunity-global.svg" alt="global" />
            </div>

            <h3 class="opportunities__card-title">
              {{ $t("opportunities_1") }}
            </h3>

            <p class="opportunities__card-desc">
              {{ $t("opportunities_1_detail") }}
            </p>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-11">
          <div
            class="opportunities__card wow animate__fadeInUp"
            data-wow-delay="0.3s"
          >
            <div class="opportunities__card-img">
              <img
                src="../assets/icons/opportunity-documents.svg"
                alt="global"
              />
            </div>

            <h3 class="opportunities__card-title">
              {{ $t("opportunities_2") }}
            </h3>

            <p class="opportunities__card-desc">
              {{ $t("opportunities_2_detail") }}
            </p>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-11">
          <div
            class="opportunities__card wow animate__fadeInUp"
            data-wow-delay="0.6s"
          >
            <div class="opportunities__card-img">
              <img src="../assets/icons/opportunity-shield.svg" alt="shield" />
            </div>

            <h3 class="opportunities__card-title">
              {{ $t("opportunities_3") }}
            </h3>

            <p class="opportunities__card-desc">
              {{ $t("opportunities_3_detail") }}
            </p>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-11">
          <div
            class="opportunities__card wow animate__fadeInUp"
            data-wow-delay="0.9s"
          >
            <div class="opportunities__card-img">
              <img
                src="../assets/icons/opportunity-network.svg"
                alt="network"
              />
            </div>

            <h3 class="opportunities__card-title">
              {{ $t("opportunities_4") }}
            </h3>

            <p class="opportunities__card-desc">
              {{ $t("opportunities_detail") }}
            </p>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-11">
          <div
            class="opportunities__card wow animate__fadeInUp"
            data-wow-delay="1.2s"
          >
            <div class="opportunities__card-img">
              <img
                src="../assets/icons/opportunity-message.svg"
                alt="message"
              />
            </div>

            <h3 class="opportunities__card-title">
              {{ $t("opportunities_5") }}
            </h3>

            <p class="opportunities__card-desc">
              {{ $t("opportunities_5_detail") }}
            </p>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-11">
          <div
            class="opportunities__card wow animate__fadeInUp"
            data-wow-delay="1.5s"
          >
            <div class="opportunities__card-img">
              <img
                src="../assets/icons/opportunity-support.svg"
                alt="support"
              />
            </div>

            <h3 class="opportunities__card-title">
              {{ $t("opportunities_6") }}
            </h3>

            <p class="opportunities__card-desc">
              {{ $t("opportunities_6_detail") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>

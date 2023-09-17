<template>
  <section id="advantages" class="advantages">
    <div class="container">
      <div class="common__titling">
        <h2 class="common__titling-title">{{ $t("benefits") }}</h2>
        <p class="common__titling-subtitle">{{ $t("benefits_detail") }}</p>
      </div>
      <div class="advantages__content">
        <div class="advantages__block">
          <div
            class="advantages__desc col-xl-6 col-lg-6 col-md-7 col-sm-10 col-12"
          >
            <div class="advantages__desc-title wow animate__fadeInUp">
              {{ $t("benefits_question_1") }}
            </div>
            <div class="advantages__desc-desc wow animate__fadeInUp">
              {{ $t("benefits_answer_1") }}
            </div>
          </div>
          <div
            class="advantages__img wow animate__fadeInUp col-xl-6 col-lg-6 col-md-5 col-sm-8 col-10"
          >
            <img src="../assets/icons/advantages-block1.svg" alt="advantage" />
          </div>
        </div>
        <div class="advantages__block">
          <div
            class="advantages__desc col-xl-6 col-lg-6 col-md-7 col-sm-10 col-12"
          >
            <div class="advantages__desc-title wow animate__fadeInUp">
              {{ $t("benefits_2") }}
            </div>
            <div class="advantages__desc-desc wow animate__fadeInUp">
              {{ $t("benefits_2_detail") }}
            </div>
          </div>
          <div
            class="advantages__img wow animate__fadeInUp col-xl-6 col-lg-6 col-md-5 col-sm-8 col-10"
          >
            <img src="../assets/icons/advantages-block2.svg" alt="advantage" />
          </div>
        </div>
        <div class="advantages__block">
          <div
            class="advantages__desc col-xl-6 col-lg-6 col-md-7 col-sm-10 col-12"
          >
            <div class="advantages__desc-title wow animate__fadeInUp">
              {{ $t("benefits_question_2") }}
            </div>
            <div class="advantages__desc-desc wow animate__fadeInUp">
              {{ $t("benefits_answer_2") }}
            </div>
          </div>
          <div
            class="advantages__img wow animate__fadeInUp col-xl-6 col-lg-6 col-md-5 col-sm-8 col-10"
          >
            <img src="../assets/icons/advantages-block3.svg" alt="advantage" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>

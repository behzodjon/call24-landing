<template>
  <section id="contact" class="contact">
    <div class="container">
      <div
        class="contact__info wow animate__fadeInLeft col-xl-6 col-lg-6 col-md-7 col-sm-12 col-12"
      >
        <h2 class="contact__info-title">{{ $t("support_title") }}</h2>
        <div class="contact__info-form">
          <div class="contact__info-input half">
            <input onkeyup="checkval(this)" type="text" />
            <span>{{ $t("name") }}</span>
          </div>
          <div class="contact__info-input half">
            <input onkeyup="checkval(this)" type="text" />
            <span>{{ $t("surname") }}</span>
          </div>
          <div class="contact__info-input half">
            <input onkeyup="checkval(this)" type="text" />
            <span>{{ $t("phone") }}</span>
          </div>
          <div class="contact__info-input half">
            <input onkeyup="checkval(this)" type="text" />
            <span>{{ $t("email") }}</span>
          </div>
          <div class="contact__info-input textarea">
            <textarea type="text" :placeholder="$t('message')"></textarea>
          </div>
          <div class="contact__info-button">{{ $t("send") }}</div>
        </div>
      </div>
      <div
        class="contact__img wow animate__fadeInRight col-xl-6 col-lg-6 col-md-5 col-sm-8 col-10"
      >
        <img src="../assets/icons/contact-hero.svg" alt="contact" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>

<template>
  <section class="introduction">
    <div class="container">
      <div class="introduction__slider">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="introduction__item swiper-slide">
              <div class="introduction__item-desc">
                <h2 class="introduction__item-title">
                  {{ $t("main_title") }}
                </h2>
                <p class="introduction__item-text">
                  {{ $t("main_subtitle") }}
                </p>
                <div class="introduction__item-buttons">
                  <div class="introduction__item-button white">
                    <p>{{ $t("more_details") }}</p>
                  </div>
                  <a href="#contact" class="introduction__item-button">
                    <p>{{ $t("contact") }}</p>
                  </a>
                </div>
              </div>

              <div class="introduction__item-img">
                <img src="../assets/icons/intro-hero.svg" alt="introheros" />
              </div>
            </div>
            <div class="introduction__item swiper-slide">
              <div class="introduction__item-desc">
                <h2 class="introduction__item-title">
                  Ishonchli va qulay usul
                </h2>
                <p class="introduction__item-text">
                  Call24 - bu kompaniyangiz murojaat qilayotgan mijozlarga
                  xizmat ko'rsatishning sodda, ishonchli va qulay usuli!
                </p>
                <div class="introduction__item-buttons">
                  <div class="introduction__item-button white">
                    <p>{{ $t("more_detail") }}</p>
                  </div>
                  <a href="#contact" class="introduction__item-button">
                    <p>{{ $t("contact") }}</p>
                  </a>
                </div>
              </div>

              <div class="introduction__item-img">
                <img src="../assets/icons/intro-hero2.svg" alt="introheros" />
              </div>
            </div>
            <div class="introduction__item swiper-slide">
              <div class="introduction__item-desc">
                <h2 class="introduction__item-title">
                  Sodiq auditoriya va sotuvlar oshishi
                </h2>
                <p class="introduction__item-text">
                  Call24 - bu mijozlar bilan muloqot qilish, sodiq auditoriyani
                  shakllantirish va sotuvlar hajmini oshirish uchun samarali
                  vositadir. "Call24" tizimi sizga mijozlar bilan video, audio,
                  matnli aloqani amalga oshirish imkonini beradi.
                </p>
                <div class="introduction__item-buttons">
                  <div class="introduction__item-button white">
                    <p>{{ $t("more_detail") }}</p>
                  </div>
                  <a href="#contact" class="introduction__item-button">
                    <p>{{ $t("contact") }}</p>
                  </a>
                </div>
              </div>

              <div class="introduction__item-img">
                <img src="../assets/icons/intro-hero3.svg" alt="introheros" />
              </div>
            </div>
          </div>
          <div class="introduction__slider-controls">
            <div class="introduction__slider-pr common__purehover"></div>
            <div class="introduction__slider-nx common__purehover"></div>
            <div class="introduction__slider-pg"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="introduction__bglines">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>

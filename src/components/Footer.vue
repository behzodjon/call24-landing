<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="footer__head">
          <div class="footer__head-titling">
            <h3>{{ $t("footer_title") }}</h3>
            <p>{{ $t("footer_subtitle") }}</p>
          </div>
          <div class="footer__head-form">
            <input type="text" :placeholder="$t('email')" />
            <button>{{ $t("subscribe") }}</button>
          </div>
        </div>
        <div class="footer__main">
          <div class="footer__desc col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div class="footer__desc-logo">
              <a href="/">
                <img
                  class="common__purehover"
                  src="../assets/icons/logo.svg"
                  alt="logo"
                />
              </a>
            </div>
            <p class="footer__desc-text">{{ $t("footer_description") }}</p>
          </div>

          <div class="footer__links col-xl-4 col-lg-4 col-md-12">
            <ul>
              <p class="footer__title">Menu</p>
              <a href="#">
                <li class="footer__links-item">
                  <span>»</span>{{ $t("main_menu") }}
                </li>
              </a>
              <a href="#opportunities">
                <li class="footer__links-item">
                  <span>»</span> {{ $t("opportunities") }}
                </li>
              </a>
              <a href="#advantages">
                <li class="footer__links-item">
                  <span>»</span> {{ $t("benefits") }}
                </li>
              </a>
              <a href="#tarrifs">
                <li class="footer__links-item">
                  <span>»</span> {{ $t("plans") }}
                </li>
              </a>
              <a href="#contact">
                <li class="footer__links-item">
                  <span>»</span> {{ $t("contact") }}
                </li>
              </a>
            </ul>
            <ul>
              <p class="footer__title">{{ $t("plans") }}</p>
              <a href="#tarrifs">
                <li class="footer__links-item">
                  <span>»</span> {{ $t("plans_1") }}
                </li>
              </a>
              <a href="#tarrifs">
                <li class="footer__links-item">
                  <span>»</span> {{ $t("plans_2") }}
                </li>
              </a>
              <a href="#tarrifs">
                <li class="footer__links-item">
                  <span>»</span> {{ $t("plans_3") }}
                </li>
              </a>
            </ul>
          </div>

          <div class="footer__contacts col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <p class="footer__title">{{ $t("contact") }}</p>
            <ul class="footer__contacts-list">
              <li>
                <div class="footer__contacts-list-img">
                  <img src="../assets/icons/svg-location.svg" alt="location" />
                </div>
                <p class="footer__contacts-list-text">{{ $t("address") }}</p>
              </li>
              <li>
                <div class="footer__contacts-list-img">
                  <img src="../assets/icons/svg-mail.svg" alt="mail" />
                </div>
                <p class="footer__contacts-list-text">
                  info@realsoft.uz, realsoft@exat.uz
                </p>
              </li>
              <li>
                <div class="footer__contacts-list-img">
                  <img src="../assets/icons/svg-phone.svg" alt="phone" />
                </div>
                <p class="footer__contacts-list-text">+998 71 205-84-84</p>
              </li>
            </ul>
            <ul class="footer__contacts-socials">
              <li>
                <a class="footer__contacts-socials-item" href="#!">
                  <img src="../assets/icons/social-facebook.svg" alt="" />
                </a>
              </li>
              <li>
                <a class="footer__contacts-socials-item" href="#!">
                  <img src="../assets/icons/social-telegram.svg" alt="" />
                </a>
              </li>
              <li>
                <a class="footer__contacts-socials-item" href="#!">
                  <img src="../assets/icons/social-instagram.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__developer">
          <p class="footer__developer-text">
            Copyright © 2023 <span> Call24.</span>
            {{ $t("all_rights_reserved") }}
          </p>
          <a
            href="https://realsoft.uz/"
            target="_blank"
            class="footer__developer-link common__purehover"
          >
            <p>{{ $t("website_creator") }}: <span>REALSOFT</span></p>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>

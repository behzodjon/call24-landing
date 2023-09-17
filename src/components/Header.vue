<template>
  <header class="header">
    <div class="header__content container">
      <div class="header__logo">
        <a href="/">
          <img
            src="../assets/icons/logo.svg"
            class="common__purehover"
            alt="logo"
          />
        </a>
      </div>
      <div class="header__links">
        <ul>
          <li>
            <a href="#" class="header__links-item">{{ $t("main_menu") }}</a>
          </li>
          <li>
            <a href="#opportunities" class="header__links-item">{{
              $t("opportunities")
            }}</a>
          </li>
          <li>
            <a href="#advantages" class="header__links-item">{{
              $t("benefits")
            }}</a>
          </li>
          <li>
            <a href="#tarrifs" class="header__links-item">{{ $t("plans") }}</a>
          </li>
          <li>
            <a href="#contact" class="header__links-item">{{
              $t("contact")
            }}</a>
          </li>
          <li><SelectLang /></li>
        </ul>
      </div>
      <div class="header__buttons">
        <a href="https://app.call24.uz/login" class="common__button blue">
          <img src="../assets/icons/svg-user.svg" alt="user" />
          <p>{{ $t("login") }}</p>
        </a>
        <!-- <a href="./login.html" class="common__button">
            <img src="../assets/icons/svg-useradd.svg" alt="user" />
            <p>Ro’yxatdan o’tish</p>
        </a> -->
      </div>
      <div class="header__burger">
        <div class="header__burger-button"></div>
      </div>
    </div>
  </header>
</template>

<script setup>
import SelectLang from "./SelectLang.vue";
</script>

<style lang="scss" scoped></style>

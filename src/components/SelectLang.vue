<script setup>

import {ref, watch} from "vue";
import {useI18n} from "vue-i18n";

const languages = [
  {name: 'English', code: 'en'},
  {name: `O'zbek`, code: 'uz'},
  {name: 'Ўзбекча', code: 'uz_cryl'},
  {name: 'Русский', code: 'ru'},
  {name: 'العربية', code: 'ar'}
]
const {t, locale, setLocale} = useI18n()
const currentLanguage = ref(localStorage.getItem('lang'))

watch(currentLanguage, (newVal) => {
  setLocale(newVal)
  localStorage.setItem('lang', newVal)
  const html = document.getElementsByTagName('html')[0]
  console.log(newVal)
  html.setAttribute('dir', newVal === 'ar' ? 'rtl' : 'ltr')
})

const changeLanguage = (lang) => {
  currentLanguage.value = lang
}

</script>

<template>
  <div class="select-lang">
    <select v-model="currentLanguage" @change="changeLanguage(currentLanguage)">
      <option v-for="lang in languages" :key="lang.code" :value="lang.code">{{ lang.name }}</option>
    </select>
  </div>


</template>

<style scoped>
.select-lang {
  z-index: 100;
}

.select-lang select {
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  background-color: #fff;
  transition: all 0.3s ease;
}


.select-lang select option {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  background-color: #fff;
  transition: all 0.3s ease;
}

.select-lang select option:hover {
  color: #fff;
}

.select-lang select option:focus {
  color: #fff;
}
</style>
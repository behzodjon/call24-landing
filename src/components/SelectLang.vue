<script setup>

import {onMounted, ref, watch} from "vue";
import {useI18n} from "vue-i18n";

const languages = [
  {name: 'English', code: 'en'},
  {name: `O'zbek`, code: 'uz'},
  {name: 'Ўзбекча', code: 'uz_cryl'},
  {name: 'Русский', code: 'ru'},
  {name: 'العربية', code: 'ar'}
]

const { locale } = useI18n();
watch(locale, (newVal) => {
  localStorage.setItem('locale', newVal)
  const html = document.getElementsByTagName('html')[0]
  html.setAttribute('dir', newVal === 'ar' ? 'rtl' : 'ltr')
})

onMounted(() => {
 const html = document.getElementsByTagName('html')[0]
  const locale = localStorage.getItem('locale')
  if (locale) {
    html.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr')
  } else {
    html.setAttribute('dir', 'ltr')
  }
})

</script>

<template>
  <div class="select-lang">
    <select v-model="$i18n.locale">
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
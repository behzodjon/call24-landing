import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

// Import your language files
import en from '/src/assets/locales/en.json'
import ru from '/src/assets/locales/ru.json'

const i18n = createI18n({
    locale: 'ru', // Set the default locale
    messages: {
        en,
        ru
    }
})
const app = createApp(App)

app.use(i18n)
app.mount('#app')
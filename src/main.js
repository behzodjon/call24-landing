import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

// Import your language files
import en from '/src/assets/locales/en.json'
import ru from '/src/assets/locales/ru.json'
import uz from '/src/assets/locales/uz.json'
import ar from '/src/assets/locales/ar.json'
import uz_cryl from '/src/assets/locales/uz_cryl.json'

const i18n = createI18n({
    locale: localStorage.getItem('locale') || 'en',
    legacy: false,
    messages: {
        en,
        ru,
        uz,
        ar,
        uz_cryl
    }
})
const app = createApp(App)

app.use(i18n)
app.mount('#app')
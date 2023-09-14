
<template>

  <header class="header">
    <div class="header__content container">
      <div class="header__logo">
        <a href="/">
          <img src="./assets/icons/logo.svg" class="common__purehover" alt="logo"/>
        </a>
      </div>
      <div class="header__links">
        <ul>
          <li><a href="#" class="header__links-item">Bosh sahifa</a></li>
          <li><a href="#opportunities" class="header__links-item">Imkoniyatlar</a></li>
          <li><a href="#advantages" class="header__links-item">Afzalliklar</a></li>
          <li><a href="#tarrifs" class="header__links-item">Tariflar</a></li>
          <li><a href="#contact" class="header__links-item">Aloqa</a></li>
        </ul>
      </div>
      <div class="header__buttons">
        <a href="https://app.call24.uz/login" class="common__button blue">
          <img src="./assets/icons/svg-user.svg" alt="user"/>
          <p>Kirish</p>
        </a>
        <!-- <a href="./login.html" class="common__button">
            <img src="./assets/icons/svg-useradd.svg" alt="user" />
            <p>Ro’yxatdan o’tish</p>
        </a> -->
      </div>
      <div class="header__burger">
        <div class="header__burger-button"></div>
      </div>
    </div>
  </header>



  <main>
    <section class="introduction">
      <div class="container">
        <div class="introduction__slider">
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="introduction__item swiper-slide">
                <div class="introduction__item-desc">
                  <h2 class="introduction__item-title">Biznesingiz uchun ishonchli markaz xizmati</h2>
                  <p class="introduction__item-text">Call24 barcha turdagi aloqalarni jumladan video,
                    audio va screen orqali qong'iroqlar tezkor va sifatli foydalanishda yordam beruvchi
                    yagona tizim!</p>
                  <div class="introduction__item-buttons">
                    <div class="introduction__item-button white">
                      <p>Batafsil</p>
                    </div>
                    <a href="#contact" class="introduction__item-button">
                      <p>Bog’lanish</p>
                    </a>
                  </div>
                </div>

                <div class="introduction__item-img">
                  <img src="./assets/icons/intro-hero.svg" alt="introheros"/>
                </div>
              </div>
              <div class="introduction__item swiper-slide">
                <div class="introduction__item-desc">
                  <h2 class="introduction__item-title">Ishonchli va qulay usul</h2>
                  <p class="introduction__item-text">Call24 - bu kompaniyangiz murojaat qilayotgan
                    mijozlarga xizmat ko'rsatishning sodda, ishonchli va qulay usuli!</p>
                  <div class="introduction__item-buttons">
                    <div class="introduction__item-button white">
                      <p>Batafsil</p>
                    </div>
                    <a href="#contact" class="introduction__item-button">
                      <p>Bog’lanish</p>
                    </a>
                  </div>
                </div>

                <div class="introduction__item-img">
                  <img src="./assets/icons/intro-hero2.svg" alt="introheros"/>
                </div>
              </div>
              <div class="introduction__item swiper-slide">
                <div class="introduction__item-desc">
                  <h2 class="introduction__item-title">Sodiq auditoriya va sotuvlar oshishi</h2>
                  <p class="introduction__item-text">Call24 - bu mijozlar bilan muloqot qilish, sodiq
                    auditoriyani shakllantirish va sotuvlar hajmini oshirish uchun samarali vositadir.
                    "Call24" tizimi sizga mijozlar bilan video, audio, matnli aloqani amalga oshirish
                    imkonini beradi.</p>
                  <div class="introduction__item-buttons">
                    <div class="introduction__item-button white">
                      <p>Batafsil</p>
                    </div>
                    <a href="#contact" class="introduction__item-button">
                      <p>Bog’lanish</p>
                    </a>
                  </div>
                </div>

                <div class="introduction__item-img">
                  <img src="./assets/icons/intro-hero3.svg" alt="introheros"/>
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

    <section id="opportunities" class="opportunities">
      <div class="container">
        <div class="common__titling">
          <h2 class="common__titling-title">Imkoniyatlar</h2>
          <p class="common__titling-subtitle">Call24 xizmati sizga quyidagi imkoniyatlarni beradi</p>
        </div>
        <div class="opportunities__content">
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-11">
            <div class="opportunities__card wow animate__fadeInUp" data-wow-delay="">
              <div class="opportunities__card-img">
                <img src="./assets/icons/opportunity-global.svg" alt="global"/>
              </div>

              <h3 class="opportunities__card-title">To'g'ridan-to'g'ri ulanishlar</h3>

              <p class="opportunities__card-desc">Qo'ngiroq qilish uchun faqat ishonchli kanallar</p>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-11">
            <div class="opportunities__card wow animate__fadeInUp" data-wow-delay="0.3s">
              <div class="opportunities__card-img">
                <img src="./assets/icons/opportunity-documents.svg" alt="global"/>
              </div>

              <h3 class="opportunities__card-title">Batafsil hisobotlar</h3>

              <p class="opportunities__card-desc">Qo'ng'iroqlar - qo'ng'iroqlarning holati va ularni jo'natish
                statistikasi</p>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-11">
            <div class="opportunities__card wow animate__fadeInUp" data-wow-delay="0.6s">
              <div class="opportunities__card-img">
                <img src="./assets/icons/opportunity-shield.svg" alt="shield"/>
              </div>

              <h3 class="opportunities__card-title">100% xavfsizlik</h3>

              <p class="opportunities__card-desc">Biz mijozlar ma'lumotlarining xavfsizligini
                kafolatlaymiz</p>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-11">
            <div class="opportunities__card wow animate__fadeInUp" data-wow-delay="0.9s">
              <div class="opportunities__card-img">
                <img src="./assets/icons/opportunity-network.svg" alt="network"/>
              </div>

              <h3 class="opportunities__card-title">Aloqa guruhlari</h3>

              <p class="opportunities__card-desc">Ma'lumotlar bazasini istalgan parametrlar bo'yicha
                segmentlarga ajrating</p>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-11">
            <div class="opportunities__card wow animate__fadeInUp" data-wow-delay="1.2s">
              <div class="opportunities__card-img">
                <img src="./assets/icons/opportunity-message.svg" alt="message"/>
              </div>

              <h3 class="opportunities__card-title">Qo'ng'iroqlar tahlili</h3>

              <p class="opportunities__card-desc">Kimlar tomonidan qo'ng'iroq qilinganini bilib oling</p>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-11">
            <div class="opportunities__card wow animate__fadeInUp" data-wow-delay="1.5s">
              <div class="opportunities__card-img">
                <img src="./assets/icons/opportunity-support.svg" alt="support"/>
              </div>

              <h3 class="opportunities__card-title">24/7 qo'llab-quvvatlash</h3>

              <p class="opportunities__card-desc">Istalgan vaqtda barcha savollaringizga javob beramiz</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="advantages" class="advantages">
      <div class="container">
        <div class="common__titling">
          <h2 class="common__titling-title">Afzalliklar</h2>
          <p class="common__titling-subtitle">Bizning afzalliklarimiz quyidagicha</p>
        </div>
        <div class="advantages__content">
          <div class="advantages__block">
            <div class="advantages__desc col-xl-6 col-lg-6 col-md-7 col-sm-10 col-12">
              <div class="advantages__desc-title wow animate__fadeInUp">Nima uchun Call24 dan foydalanish
                shunchalik samarali?
              </div>
              <div class="advantages__desc-desc wow animate__fadeInUp">Barcha turdagi qo'ng'iroqlarni oziga
                jamlovchi yagona tizim
              </div>
            </div>
            <div class="advantages__img wow animate__fadeInUp col-xl-6 col-lg-6 col-md-5 col-sm-8 col-10">
              <img src="./assets/icons/advantages-block1.svg" alt="advantage"/>
            </div>
          </div>
          <div class="advantages__block">
            <div class="advantages__desc col-xl-6 col-lg-6 col-md-7 col-sm-10 col-12">
              <div class="advantages__desc-title wow animate__fadeInUp">Telefon har doim qo'lda,
                foydalanuvchilar xohlagan usulda murojaat qilishlari mumkin
              </div>
              <div class="advantages__desc-desc wow animate__fadeInUp">Mijozlar telefon yoki internet tarmog'i
                orqali o'zlariga qulay usulda tezkor sizning kompaniyangiz bilan bog'lanish imkonini.
              </div>
            </div>
            <div class="advantages__img wow animate__fadeInUp col-xl-6 col-lg-6 col-md-5 col-sm-8 col-10">
              <img src="./assets/icons/advantages-block2.svg" alt="advantage"/>
            </div>
          </div>
          <div class="advantages__block">
            <div class="advantages__desc col-xl-6 col-lg-6 col-md-7 col-sm-10 col-12">
              <div class="advantages__desc-title wow animate__fadeInUp">Call24 ni tanlaganda nimaga
                erishasiz?
              </div>
              <div class="advantages__desc-desc wow animate__fadeInUp">Xavfsiz ma'lumotlar markazidagi
                ishonchli serverlar, DoS va DDoS hujumlaridan himoyalanish, mobil operatorlarga
                to'g'ridan-to'g'ri ulanish - bularning barchasi yuqori darajadagi ishonchni ta'minlaydi va
                har oy millionlab xabarlarni jo'natish imkonini beradi.
              </div>
            </div>
            <div class="advantages__img wow animate__fadeInUp col-xl-6 col-lg-6 col-md-5 col-sm-8 col-10">
              <img src="./assets/icons/advantages-block3.svg" alt="advantage"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="tarrifs" class="tarrifs">
      <div class="container">
        <div class="common__titling">
          <h2 class="common__titling-title">Tariflar</h2>
          <p class="common__titling-subtitle">CAll24 tizimida tariflar. Eslatib o’tamiz narxlar tarif rejasiga
            bog’liq!</p>
        </div>
        <div class="tarrifs__content">
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-10">
            <div class="tarrifs__card wow animate__fadeInUp" data-wow-delay="">
              <p class="tarrifs__card-title">START</p>

              <div class="tarrifs__card-box">
                <p class="tarrifs__card-price">300 000<span>so’m</span></p>
                <p class="tarrifs__card-amount">6000 sms</p>
                <p class="tarrifs__card-perprice">1 sms (50 so’m)</p>
                <button class="tarrifs__card-button">Sotib olish</button>
                <span></span> <span></span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-10">
            <div class="tarrifs__card wow animate__fadeInUp" data-wow-delay="0.3s">
              <p class="tarrifs__card-title">STANDART</p>

              <div class="tarrifs__card-box">
                <p class="tarrifs__card-price">450 000<span>so’m</span></p>
                <p class="tarrifs__card-amount">10 0000 sms</p>
                <p class="tarrifs__card-perprice">1 sms (45 so’m)</p>
                <button class="tarrifs__card-button">Sotib olish</button>
                <span></span> <span></span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-10">
            <div class="tarrifs__card wow animate__fadeInUp" data-wow-delay="0.6s">
              <p class="tarrifs__card-title">PLATINUM</p>

              <div class="tarrifs__card-box">
                <p class="tarrifs__card-price">850 000<span>so’m</span></p>
                <p class="tarrifs__card-amount">20 000 sms</p>
                <p class="tarrifs__card-perprice">1 sms (42,5 so’m)</p>
                <button class="tarrifs__card-button">Sotib olish</button>
                <span></span> <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="container">
        <div class="contact__info wow animate__fadeInLeft col-xl-6 col-lg-6 col-md-7 col-sm-12 col-12">
          <h2 class="contact__info-title">Har bir mijozimiz uchun doimiy texnik ko‘mak berish tashkil
            etilgan.</h2>
          <div class="contact__info-form">
            <div class="contact__info-input half">
              <input onkeyup="checkval(this)" type="text"/>
              <span>Ism</span>
            </div>
            <div class="contact__info-input half">
              <input onkeyup="checkval(this)" type="text"/>
              <span>Familiya</span>
            </div>
            <div class="contact__info-input half">
              <input onkeyup="checkval(this)" type="text"/>
              <span>Telefon</span>
            </div>
            <div class="contact__info-input half">
              <input onkeyup="checkval(this)" type="text"/>
              <span>Email</span>
            </div>
            <div class="contact__info-input textarea">
              <textarea type="text" placeholder="Xabar matni"></textarea>
            </div>
            <div class="contact__info-button">Yuborish</div>
          </div>
        </div>
        <div class="contact__img wow animate__fadeInRight col-xl-6 col-lg-6 col-md-5 col-sm-8 col-10">
          <img src="./assets/icons/contact-hero.svg" alt="contact"/>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer__head">
        <div class="footer__head-titling">
          <h3>So‘ngi yangiliklarga a’zo bo‘ling</h3>
          <p>Bizning faoliyatimizga oid yangiliklarga obuna bo’ling</p>
        </div>
        <div class="footer__head-form">
          <input type="text" placeholder="Email manzilingizni kiriting"/>
          <button>Obuna bo‘lish</button>
        </div>
      </div>
      <div class="footer__main">
        <div class="footer__desc col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <div class="footer__desc-logo">
            <a href="/">
              <img class="common__purehover" src="./assets/icons/logo.svg" alt="logo"/>
            </a>
          </div>
          <p class="footer__desc-text">Call24 - mijozlar bilan ishonchli aloqa kanali va minimal xarajatlar bilan
            samarali qayta aloqa xizmat. Call24 dan foydalangan holda yangi mijozlarni jalb qiling, savdo
            o'sishini rag'batlantiring, iste'molchilarning biznesingizga sodiqligini oshiring!</p>
        </div>

        <div class="footer__links col-xl-4 col-lg-4 col-md-12">
          <ul>
            <p class="footer__title">Menyular</p>
            <a href="#">
              <li class="footer__links-item"><span>»</span> Bosh sahifa</li>
            </a>
            <a href="#opportunities">
              <li class="footer__links-item"><span>»</span> Imkoniyatlar</li>
            </a>
            <a href="#advantages">
              <li class="footer__links-item"><span>»</span> Afzalliklar</li>
            </a>
            <a href="#tarrifs">
              <li class="footer__links-item"><span>»</span> Tariflar</li>
            </a>
            <a href="#contact">
              <li class="footer__links-item"><span>»</span> Aloqa</li>
            </a>
          </ul>
          <ul>
            <p class="footer__title">Tariflar</p>
            <a href="#tarrifs">
              <li class="footer__links-item"><span>»</span> Start</li>
            </a>
            <a href="#tarrifs">
              <li class="footer__links-item"><span>»</span> Standart</li>
            </a>
            <a href="#tarrifs">
              <li class="footer__links-item"><span>»</span> Platinum</li>
            </a>
          </ul>
        </div>

        <div class="footer__contacts col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <p class="footer__title">Bog’lanish</p>
          <ul class="footer__contacts-list">
            <li>
              <div class="footer__contacts-list-img">
                <img src="./assets/icons/svg-location.svg" alt="location"/>
              </div>
              <p class="footer__contacts-list-text">Toshkent sh., Yunusobod t., Amir Temur shox ko’chasi, 107
                B uy</p>
            </li>
            <li>
              <div class="footer__contacts-list-img">
                <img src="./assets/icons/svg-mail.svg" alt="mail"/>
              </div>
              <p class="footer__contacts-list-text">info@realsoft.uz, realsoft@exat.uz</p>
            </li>
            <li>
              <div class="footer__contacts-list-img">
                <img src="./assets/icons/svg-phone.svg" alt="phone"/>
              </div>
              <p class="footer__contacts-list-text">+998 71 205-84-84</p>
            </li>
          </ul>
          <ul class="footer__contacts-socials">
            <li>
              <a class="footer__contacts-socials-item" href="#!">
                <img src="./assets/icons/social-facebook.svg" alt=""/>
              </a>
            </li>
            <li>
              <a class="footer__contacts-socials-item" href="#!">
                <img src="./assets/icons/social-telegram.svg" alt=""/>
              </a>
            </li>
            <li>
              <a class="footer__contacts-socials-item" href="#!">
                <img src="./assets/icons/social-instagram.svg" alt=""/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__developer">
        <p class="footer__developer-text">Copyright © 2023 <span> Call24.</span> Barcha huquqlar himoyalangan</p>
        <a href="https://realsoft.uz/" target="_blank" class="footer__developer-link common__purehover">
          <p>Sayt yaratuvchisi: <span>REALSOFT</span></p>
          <p>{{ $t('welcome') }}</p>
          <p>{{ $t('hello', { name: 'John' }) }}</p>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>

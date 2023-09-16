
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
          <li><a href="#" class="header__links-item">{{ $t('main_menu') }}</a></li>
          <li><a href="#opportunities" class="header__links-item">{{ $t('opportunities') }}</a></li>
          <li><a href="#advantages" class="header__links-item">{{ $t('benefits') }}</a></li>
          <li><a href="#tarrifs" class="header__links-item">{{ $t('plans') }}</a></li>
          <li><a href="#contact" class="header__links-item">{{ $t('contact') }}</a></li>
          <li><SelectLang/></li>
        </ul>
      </div>
      <div class="header__buttons">
        <a href="https://app.call24.uz/login" class="common__button blue">
          <img src="./assets/icons/svg-user.svg" alt="user"/>
          <p>{{ $t('login') }}</p>
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
                  <h2 class="introduction__item-title">{{ $t('main_title') }}</h2>
                  <p class="introduction__item-text">{{ $t('main_subtitle') }}</p>
                  <div class="introduction__item-buttons">
                    <div class="introduction__item-button white">
                      <p>{{ $t('more_details') }}</p>
                    </div>
                    <a href="#contact" class="introduction__item-button">
                      <p>{{ $t('contact') }}</p>
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
                      <p>{{ $t('more_detail') }}</p>
                    </div>
                    <a href="#contact" class="introduction__item-button">
                      <p>{{ $t('contact') }}</p>
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
                      <p>{{ $t('more_detail') }}</p>
                    </div>
                    <a href="#contact" class="introduction__item-button">
                      <p>{{ $t('contact') }}</p>
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
          <h2 class="common__titling-title">{{ $t('opportunities') }}</h2>
          <p class="common__titling-subtitle">{{ $t('opportunities_detail') }}</p>
        </div>
        <div class="opportunities__content">
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-11">
            <div class="opportunities__card wow animate__fadeInUp" data-wow-delay="">
              <div class="opportunities__card-img">
                <img src="./assets/icons/opportunity-global.svg" alt="global"/>
              </div>

              <h3 class="opportunities__card-title">{{ $t('opportunities_1') }}</h3>

              <p class="opportunities__card-desc">{{ $t('opportunities_1_detail') }}</p>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-11">
            <div class="opportunities__card wow animate__fadeInUp" data-wow-delay="0.3s">
              <div class="opportunities__card-img">
                <img src="./assets/icons/opportunity-documents.svg" alt="global"/>
              </div>

              <h3 class="opportunities__card-title">{{ $t('opportunities_2') }}</h3>

              <p class="opportunities__card-desc">{{ $t('opportunities_2_detail') }}</p>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-11">
            <div class="opportunities__card wow animate__fadeInUp" data-wow-delay="0.6s">
              <div class="opportunities__card-img">
                <img src="./assets/icons/opportunity-shield.svg" alt="shield"/>
              </div>

              <h3 class="opportunities__card-title">{{ $t('opportunities_3') }}</h3>

              <p class="opportunities__card-desc">{{ $t('opportunities_3_detail') }}</p>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-11">
            <div class="opportunities__card wow animate__fadeInUp" data-wow-delay="0.9s">
              <div class="opportunities__card-img">
                <img src="./assets/icons/opportunity-network.svg" alt="network"/>
              </div>

              <h3 class="opportunities__card-title">{{ $t('opportunities_4') }}</h3>

              <p class="opportunities__card-desc">{{ $t('opportunities_detail') }}</p>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-11">
            <div class="opportunities__card wow animate__fadeInUp" data-wow-delay="1.2s">
              <div class="opportunities__card-img">
                <img src="./assets/icons/opportunity-message.svg" alt="message"/>
              </div>

              <h3 class="opportunities__card-title">{{ $t('opportunities_5') }}</h3>

              <p class="opportunities__card-desc">{{ $t('opportunities_5_detail') }}</p>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-11">
            <div class="opportunities__card wow animate__fadeInUp" data-wow-delay="1.5s">
              <div class="opportunities__card-img">
                <img src="./assets/icons/opportunity-support.svg" alt="support"/>
              </div>

              <h3 class="opportunities__card-title">{{ $t('opportunities_6') }}</h3>

              <p class="opportunities__card-desc">{{ $t('opportunities_6_detail') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="advantages" class="advantages">
      <div class="container">
        <div class="common__titling">
          <h2 class="common__titling-title">{{ $t('benefits') }}</h2>
          <p class="common__titling-subtitle">{{ $t('benefits_detail') }}</p>
        </div>
        <div class="advantages__content">
          <div class="advantages__block">
            <div class="advantages__desc col-xl-6 col-lg-6 col-md-7 col-sm-10 col-12">
              <div class="advantages__desc-title wow animate__fadeInUp">
                {{ $t('benefits_question_1') }}
              </div>
              <div class="advantages__desc-desc wow animate__fadeInUp">
                {{ $t('benefits_answer_1') }}
              </div>
            </div>
            <div class="advantages__img wow animate__fadeInUp col-xl-6 col-lg-6 col-md-5 col-sm-8 col-10">
              <img src="./assets/icons/advantages-block1.svg" alt="advantage"/>
            </div>
          </div>
          <div class="advantages__block">
            <div class="advantages__desc col-xl-6 col-lg-6 col-md-7 col-sm-10 col-12">
              <div class="advantages__desc-title wow animate__fadeInUp">
                {{ $t('benefits_2') }}
              </div>
              <div class="advantages__desc-desc wow animate__fadeInUp">
                {{ $t('benefits_2_detail') }}
              </div>
            </div>
            <div class="advantages__img wow animate__fadeInUp col-xl-6 col-lg-6 col-md-5 col-sm-8 col-10">
              <img src="./assets/icons/advantages-block2.svg" alt="advantage"/>
            </div>
          </div>
          <div class="advantages__block">
            <div class="advantages__desc col-xl-6 col-lg-6 col-md-7 col-sm-10 col-12">
              <div class="advantages__desc-title wow animate__fadeInUp">
                {{ $t('benefits_question_2') }}
              </div>
              <div class="advantages__desc-desc wow animate__fadeInUp">
                {{ $t('benefits_answer_2') }}
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
          <h2 class="common__titling-title">{{$t('plans')}}</h2>
          <p class="common__titling-subtitle">{{$t('plans_detail')}}</p>
        </div>
        <div class="tarrifs__content">
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-10">
            <div class="tarrifs__card wow animate__fadeInUp" data-wow-delay="">
              <p class="tarrifs__card-title">{{$t('plans_1')}}</p>

              <div class="tarrifs__card-box">
                <p class="tarrifs__card-price">{{$t('plans_1_price')}}</p>
                <p class="tarrifs__card-amount">{{$t('plans_1_detail')}}</p>
                <p class="tarrifs__card-perprice">{{$t('plans_1_one')}}</p>
                <button class="tarrifs__card-button">{{$t('purchase')}}</button>
                <span></span> <span></span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-10">
            <div class="tarrifs__card wow animate__fadeInUp" data-wow-delay="0.3s">
              <p class="tarrifs__card-title">STANDART</p>

              <div class="tarrifs__card-box">
                <p class="tarrifs__card-price">{{$t('plans_2_price')}}</p>
                <p class="tarrifs__card-amount">{{$t('plans_2_detail')}}</p>
                <p class="tarrifs__card-perprice">{{$t('plans_2_one')}}</p>
                <button class="tarrifs__card-button">{{$t('purchase')}}</button>
                <span></span> <span></span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-10">
            <div class="tarrifs__card wow animate__fadeInUp" data-wow-delay="0.6s">
              <p class="tarrifs__card-title">{{$t('plans_3')}}</p>

              <div class="tarrifs__card-box">
                <p class="tarrifs__card-price">{{$t('plans_3_price')}}</p>
                <p class="tarrifs__card-amount">{{$t('plans_3_detail')}}</p>
                <p class="tarrifs__card-perprice">{{$t('plans_3_one')}}</p>
                <button class="tarrifs__card-button">{{$t('purchase')}}</button>
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
          <h2 class="contact__info-title">{{$t('support_title')}}</h2>
          <div class="contact__info-form">
            <div class="contact__info-input half">
              <input onkeyup="checkval(this)" type="text"/>
              <span>{{$t('name')}}</span>
            </div>
            <div class="contact__info-input half">
              <input onkeyup="checkval(this)" type="text"/>
              <span>{{$t('surname')}}</span>
            </div>
            <div class="contact__info-input half">
              <input onkeyup="checkval(this)" type="text"/>
              <span>{{$t('phone')}}</span>
            </div>
            <div class="contact__info-input half">
              <input onkeyup="checkval(this)" type="text"/>
              <span>{{$t('email')}}</span>
            </div>
            <div class="contact__info-input textarea">
              <textarea type="text" :placeholder="$t('message')"></textarea>
            </div>
            <div class="contact__info-button">{{$t('send')}}</div>
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
          <h3>{{$t('footer_title')}}</h3>
          <p>{{$t('footer_subtitle')}}</p>
        </div>
        <div class="footer__head-form">
          <input type="text" :placeholder="$t('email')"/>
          <button>{{$t('subscribe')}}</button>
        </div>
      </div>
      <div class="footer__main">
        <div class="footer__desc col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <div class="footer__desc-logo">
            <a href="/">
              <img class="common__purehover" src="./assets/icons/logo.svg" alt="logo"/>
            </a>
          </div>
          <p class="footer__desc-text">{{$t('footer_description')}}</p>
        </div>

        <div class="footer__links col-xl-4 col-lg-4 col-md-12">
          <ul>
            <p class="footer__title">Menu</p>
            <a href="#">
              <li class="footer__links-item"><span>»</span>{{$t('main_menu')}}</li>
            </a>
            <a href="#opportunities">
              <li class="footer__links-item"><span>»</span> {{$t('opportunities')}}</li>
            </a>
            <a href="#advantages">
              <li class="footer__links-item"><span>»</span> {{$t('benefits')}}</li>
            </a>
            <a href="#tarrifs">
              <li class="footer__links-item"><span>»</span> {{$t('plans')}}</li>
            </a>
            <a href="#contact">
              <li class="footer__links-item"><span>»</span> {{$t('contact')}}</li>
            </a>
          </ul>
          <ul>
            <p class="footer__title">{{$t('plans')}}</p>
            <a href="#tarrifs">
              <li class="footer__links-item"><span>»</span> {{$t('plans_1')}}</li>
            </a>
            <a href="#tarrifs">
              <li class="footer__links-item"><span>»</span> {{$t('plans_2')}}</li>
            </a>
            <a href="#tarrifs">
              <li class="footer__links-item"><span>»</span> {{$t('plans_3')}}</li>
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
              <p class="footer__contacts-list-text">{{$t('address')}}</p>
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
        <p class="footer__developer-text">Copyright © 2023 <span> Call24.</span> {{$t('all_rights_reserved')}}</p>
        <a href="https://realsoft.uz/" target="_blank" class="footer__developer-link common__purehover">
          <p>{{$t('website_creator')}}: <span>REALSOFT</span></p>
        </a>
      </div>
    </div>
  </footer>
</template>
<script setup>


import SelectLang from "./components/SelectLang.vue";

</script>
<style scoped>
</style>

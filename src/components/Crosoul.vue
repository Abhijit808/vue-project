<template>
<section class="section slide4 bg-noise gallery-bg" id="gallery">
            <div class="container">
                <div class="row pb-5 heading-row">
                    <div class="col-12 col-md-7">
                        <h3 class="main-font text-uppercase"><span class="text-dsgrey d-block"> GALLERY </span> </h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="team-classic owl-team owl-carousel text-center">
                        <swiper
     :slides-per-view="3"
    :space-between="50"
    navigation  
    :loop="true"
    :loopFillGroupWithBlank="true"
    :pagination="{
      dynamicBullets: true,
    }"
    :modules="modules"
    class="mySwiper"
  >                         <swiper-slide>
                            <!-- Item 1 -->
                            <div class="item">
                                <div class="team-data-img">
                                    <a href="../assets/images/portfolio-img-1.jpg" data-fancybox="images">
                                        <div class="single-work">
                                            <img src="../assets/images/portfolio-img-1.jpg" alt="team" class="img-responsive" data-no-retina>
                                            <div class="overlay-text center-block">
                                                <div class="cases-image-inner">
                                                    <span class="cases-line top"></span>
                                                    <span class="cases-line top-right"></span>
                                                    <span class="cases-line bottom"></span>
                                                    <span class="cases-line bottom-left"></span>
                                                    <h6 class="text-white text-uppercase alt-font">Therapy</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                 
                                </div>
                            </div>
                            </swiper-slide>
                            <!-- Item 2 -->
                             <swiper-slide>
                            <div class="item">
                                <div class="team-data-img">
                                    <a href="../assets/images/portfolio-img-1.jpg" data-fancybox="images">
                                        <div class="single-work">
                                            <img src="../assets/images/portfolio-img-1.jpg" alt="team" class="img-responsive" data-no-retina>
                                            <div class="overlay-text center-block">
                                                <div class="cases-image-inner">
                                                    <span class="cases-line top"></span>
                                                    <span class="cases-line top-right"></span>
                                                    <span class="cases-line bottom"></span>
                                                    <span class="cases-line bottom-left"></span>
                                                    <h6 class="text-white text-uppercase alt-font">Therapy</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                   
                                </div>
                            </div>
                             </swiper-slide>
                            <!-- Item 3 -->
                             <swiper-slide>
                            <div class="item">
                                <div class="team-data-img">
                                    <a href="../assets/images/portfolio-img-1.jpg" data-fancybox="images">
                                        <div class="single-work">
                                            <img src="../assets/images/portfolio-img-1.jpg" alt="team" class="img-responsive" data-no-retina>
                                            <div class="overlay-text center-block">
                                                <div class="cases-image-inner">
                                                    <span class="cases-line top"></span>
                                                    <span class="cases-line top-right"></span>
                                                    <span class="cases-line bottom"></span>
                                                    <span class="cases-line bottom-left"></span>
                                                    <h6 class="text-white text-uppercase alt-font">Therapy</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                             </swiper-slide>
                            <!-- Item 4 -->
                             <swiper-slide>
                            <div class="item">
                                <div class="team-data-img">
                                    <a href="../assets/images/portfolio-img-1.jpg" data-fancybox="images">
                                        <div class="single-work">
                                            <img src="../assets/images/portfolio-img-1.jpg" alt="team" class="img-responsive" data-no-retina>
                                            <div class="overlay-text center-block">
                                                <div class="cases-image-inner">
                                                    <span class="cases-line top"></span>
                                                    <span class="cases-line top-right"></span>
                                                    <span class="cases-line bottom"></span>
                                                    <span class="cases-line bottom-left"></span>
                                                    <h6 class="text-white text-uppercase alt-font">Therapy</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                             </swiper-slide>
                            <!-- Item 5 -->
                             <swiper-slide>
                            <div class="item">
                                <div class="team-data-img">
                                    <a href="../assets/images/portfolio-img-1.jpg" data-fancybox="images">
                                        <div class="single-work">
                                            <img src="../assets/images/portfolio-img-1.jpg" alt="team" class="img-responsive" data-no-retina>
                                            <div class="overlay-text center-block">
                                                <div class="cases-image-inner">
                                                    <span class="cases-line top"></span>
                                                    <span class="cases-line top-right"></span>
                                                    <span class="cases-line bottom"></span>
                                                    <span class="cases-line bottom-left"></span>
                                                    <h6 class="text-white text-uppercase alt-font">Therapy</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                             </swiper-slide>
                            <!-- Item 6 -->
                             <swiper-slide>
                            <div class="item">
                                <div class="team-data-img">
                                    <a href="../assets/images/portfolio-img-1.jpg" data-fancybox="images">
                                        <div class="single-work">
                                            <img src="../assets/images/portfolio-img-1.jpg" alt="team" class="img-responsive" data-no-retina>
                                            <div class="overlay-text center-block">
                                                <div class="cases-image-inner">
                                                    <span class="cases-line top"></span>
                                                    <span class="cases-line top-right"></span>
                                                    <span class="cases-line bottom"></span>
                                                    <span class="cases-line bottom-left"></span>
                                                    <h6 class="text-white text-uppercase alt-font">Therapy</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <!--<div class="portfolio-content">
                                        <h5 class="text-yellow main-font mb-2 text-uppercase">Graphic Portfolio</h5>
                                        <p class="text-capitalize">Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. </p>
                                    </div>-->
                                  
                                </div>
                            </div>
                             </swiper-slide>
                    </swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
 import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide} from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css/autoplay';

  // Import Swiper styles
  export default {
      name:'CarComp',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation, Pagination, Scrollbar, A11y,Autoplay],
      };
    },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        } 
  };
</script>
<style >
.swiper-pagination-bullets{
  margin: -1rem;
}
</style>
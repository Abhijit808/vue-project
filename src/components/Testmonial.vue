<template>

     <section class="section bg-noise testimonials-bg" id="ourteam">
            <div class="container">
                <div class="row pb-5 heading-row">
                    <div class="col-12 col-md-7">
                        <h3 class="main-font text-uppercase"><span class="text-dsgrey d-block text-uppercase"> OUR </span> <span> Team </span></h3>
                        <p class="py-2 heading-row alt-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                    </div>
                    <!--<div class="col-12 col-md-5 text-md-right pt-4 pt-md-0">
                        <h2 class="m-0 text-dsgrey main-font">100+</h2>
                        <p class="alt-font">Clients Worldwide</p>
                    </div>-->
                </div>
                <div class="row pt-3">
                    <div class="col-12">
                        <!-- Testimonial Slider -->
                        <div id="testimonial-carousal" class="testimonial-owl owl-carousel owl-theme">
        <swiper
     :slides-per-view="2"
    :space-between="50"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :autoplay="{
    delay: 1000,
  }"
    :pagination="{
      dynamicBullets: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
                            <!-- Item-1 -->
                            <swiper-slide>
                            <div class="item text-center">
                                <div class="icon-quotes mb-4">
                                    <i class="fas fa-quote-right"></i>
                                </div>
                                <div class="description">
                                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim et mi. In at tempor purus. </p>
                                </div>
                                <!--<div class="testimonial-img mt-4">
                                    <img src="./images/testimonial-img-1.png" alt="">
                                </div>-->
                                <div class="testimonial-tittle mt-3 mb-3">
                                    <h4 class="mb-0 text-dsgrey main-font font-weight-normal text-uppercase">Sara Jones</h4>
                                </div>
                            </div>
                            </swiper-slide>
                            <!-- Item-2 -->
                            <swiper-slide>
                            <div class="item text-center">
                                <div class="icon-quotes mb-4">
                                    <i class="fas fa-quote-right"></i>
                                </div>
                                <div class="description">
                                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim et mi. In at tempor purus. </p>
                                </div>
                                <!--<div class="testimonial-img mt-4">
                                    <img src="./images/testimonial-img-1.png" alt="">
                                </div>-->
                                <div class="testimonial-tittle mt-3 mb-3">
                                    <h4 class="mb-0 text-dsgrey main-font font-weight-normal text-uppercase">Ricky Clark</h4>
                                </div>
                            </div>
                            </swiper-slide>
                            <!-- Item-3 -->
                            <swiper-slide>
                            <div class="item text-center">
                                <div class="icon-quotes mb-4">
                                    <i class="fas fa-quote-right"></i>
                                </div>
                                <div class="description">
                                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim et mi. In at tempor purus. </p>
                                </div>
                                <!--<div class="testimonial-img mt-4">
                                    <img src="./images/testimonial-img-1.png" alt="">
                                </div>-->
                                <div class="testimonial-tittle mt-3 mb-3">
                                    <h4 class="mb-0 text-dsgrey main-font font-weight-normal text-uppercase">Johnson Smith</h4>
                                </div>
                            </div>
                            </swiper-slide>
                            <!-- Item-4 -->
                            <swiper-slide>
                            <div class="item text-center">
                                <div class="icon-quotes mb-4">
                                    <i class="fas fa-quote-right"></i>
                                </div>
                                <div class="description">
                                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim et mi. In at tempor purus. </p>
                                </div>
                                <!--<div class="testimonial-img mt-4">
                                    <img src="./images/testimonial-img-1.png" alt="">
                                </div>-->
                                <div class="testimonial-tittle mt-3 mb-3">
                                    <h4 class="mb-0 text-dsgrey main-font font-weight-normal text-uppercase">Ellie Joe</h4>
                                </div>
                            </div>
                            </swiper-slide>
                            <!-- Item-5 -->
                            <swiper-slide>
                            <div class="item text-center">
                                <div class="icon-quotes mb-4">
                                    <i class="fas fa-quote-right"></i>
                                </div>
                                <div class="description">
                                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim et mi. In at tempor purus. </p>
                                </div>
                                <!--<div class="testimonial-img mt-4">
                                    <img src="./images/testimonial-img-1.png" alt="">
                                </div>-->
                                <div class="testimonial-tittle mt-3 mb-3">
                                    <h4 class="mb-0 text-dsgrey main-font font-weight-normal text-uppercase">Sara Jones</h4>
                                </div>
                            </div>
                            </swiper-slide>
                            <!-- Item-6 -->
                            <swiper-slide>
                            <div class="item text-center">
                                <div class="icon-quotes mb-4">
                                    <i class="fas fa-quote-right"></i>
                                </div>
                                <div class="description">
                                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim et mi. In at tempor purus. </p>
                                </div>
                                <!--<div class="testimonial-img mt-4">
                                    <img src="./images/testimonial-img-1.png" alt="">
                                </div>-->
                                <div class="testimonial-tittle mt-3 mb-3">
                                    <h4 class="mb-0 text-dsgrey main-font font-weight-normal text-uppercase">Ricky Clark</h4>
                                </div>
                            </div>
                            </swiper-slide>
                            <!-- Item-7 -->
                            <swiper-slide>
                            <div class="item text-center">
                                <div class="icon-quotes mb-4">
                                    <i class="fas fa-quote-right"></i>
                                </div>
                                <div class="description">
                                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim et mi. In at tempor purus. </p>
                                </div>
                                <!--<div class="testimonial-img mt-4">
                                    <img src="./images/testimonial-img-1.png" alt="">
                                </div>-->
                                <div class="testimonial-tittle mt-3 mb-3">
                                    <h4 class="mb-0 text-dsgrey main-font font-weight-normal text-uppercase">Johnson Smith</h4>
                                </div>
                            </div>
                            </swiper-slide>
                            <!-- Item-8 -->
                            <swiper-slide>
                            <div class="item text-center">
                                <div class="icon-quotes mb-4">
                                    <i class="fas fa-quote-right"></i>
                                </div>
                                <div class="description">
                                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim et mi. In at tempor purus. </p>
                                </div>
                                <!--<div class="testimonial-img mt-4">
                                    <img src="./images/testimonial-img-1.png" alt="">
                                </div>-->
                                <div class="testimonial-tittle mt-3 mb-3">
                                    <h4 class="mb-0 text-dsgrey main-font font-weight-normal text-uppercase">Ellie Joe</h4>
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
//   import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css/autoplay';

  // Import Swiper styles
  export default {
      name:'TestMonial',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation, Pagination, Scrollbar, A11y,Autoplay],
      };
    }, 
  };
</script>

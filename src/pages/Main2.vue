<template>
  <div class="main">
    <div class="inner">
      <!-- 슬라이드 영역(s) -->
      <div class="main-sldr">
        <div class="item">
          <div>
            <img
              src="../assets/images/main/slide_img01.png"
              alt="MIRROR &amp; LIGHT"
            >
          </div>
        </div>
      </div>
      <!--// 슬라이드 영역(e) -->
      <section class="info-sector">
        <h3>DINING - LIFESTYLE - AMENITY</h3>
        <p>
          품격 있고 트렌디한 미각 세계와 프리미엄 라이프스타일 컨텐츠를 The Shops At CENTERFIELD에서 만나보세요.
        </p>
      </section>
      <section
        class="urban-sector type2"
        ref="urban"
      >
        <div
          class="item i1 active"
          ref="item1"
        >
          <div class="inner-item">
            <div class="front-tit">
              <div class="floorinfo">
                <span>FINE DINNIG</span>
                <span>SPA</span>
                <span>CLINIC</span>
              </div>
              <h4>2F</h4>
            </div>
            <div class="back-tit">
              <h4>2F</h4>
              <div class="floorinfo">
                <span>FINE DINNIG</span>
                <span>SPA</span>
                <span>CLINIC</span>
              </div>
            </div>
            <div class="background-img" />
          </div>
        </div>
        <div
          class="item i2"
          ref="item2"
        >
          <div class="inner-item">
            <div class="front-tit">
              <div class="floorinfo">
                <span>DINNIG</span>
                <span>CAFE</span>
                <span>LIFESTYLE</span>
              </div>
              <h4>1F</h4>
            </div>
            <div class="back-tit">
              <h4>1F</h4>
              <div class="floorinfo">
                <span>DINNIG</span>
                <span>CAFE</span>
                <span>LIFESTYLE</span>
              </div>
            </div>
            <div class="background-img" />
          </div>
        </div>
        <div
          class="item i3"
          ref="item3"
        >
          <div class="inner-item">
            <div class="front-tit">
              <div class="floorinfo">
                <span>CASUAL F&amp;B</span>
                <span>AMENITY</span>
              </div>
              <h4>B1</h4>
            </div>
            <div class="back-tit">
              <h4>B1</h4>
              <div class="floorinfo">
                <span>CASUAL F&amp;B</span>
                <span>AMENITY</span>
              </div>
            </div>
            <div class="background-img" />
          </div>
        </div>
        <div
          class="item i4"
          ref="item4"
        >
          <div class="inner-item">
            <div class="front-tit">
              <div class="floorinfo">
                <span>FOOD STREET</span>
                <span>GOLF ACADEMY</span>
              </div>
              <h4>B2</h4>
            </div>
            <div class="back-tit">
              <h4>B2</h4>
              <div class="floorinfo">
                <span>FOOD STREET</span>
                <span>GOLF ACADEMY</span>
              </div>
            </div>
            <div class="background-img" />
          </div>
        </div>
      </section>
      <section class="insta-sector">
        <h3>
          #THESHOPSATCENTERFIELD<br>
          #더샵스앳센터필드
        </h3>
        <!-- 인스타그램 영역(s) -->
        <div class="img-insta">
          <img
            src="../assets/images/main/temp_insta.png"
            alt=""
            style="width: 100%"
          >
        </div>
        <!--// 인스타그램 영역(e) -->
        <div class="more">
          <a
            href="#"
            class="btnmore"
          >더 보기</a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { gsap, ScrollTrigger, power2 } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'Main',
  head: {
    title: {
      inner: 'Main'
    },
    // Meta tags
    meta: [{ name: 'keywords', content: 'Main' }]
  },
  methods: {},
  mounted () {
    gsap.set('.i2', { y: -250 })
    gsap.set('.i3', { y: -760 })
    gsap.set('.i4', { y: -1250 })
    ScrollTrigger.create({
      trigger: '.i2',
      start: 'top ' + this.$refs.item2.getBoundingClientRect().top + 'px',
      // markers: true,
      end: 'top top',
      scrub: true,
      pin: true
    })
    ScrollTrigger.create({
      trigger: '.i3',
      start: 'top ' + this.$refs.item2.getBoundingClientRect().top + 'px',
      markers: true,
      end: 'top top-=300',
      scrub: true,
      pin: true
    })
    ScrollTrigger.create({
      trigger: '.i4',
      start: 'top ' + this.$refs.item2.getBoundingClientRect().top + 'px',
      // markers: true,
      end: 'top top-=300',
      scrub: true,
      pin: true
    })
    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.i3',
    //     start: 'top ' + this.$refs.item2.getBoundingClientRect().top + 'px',
    //     // markers: true,
    //     end: 'top top',
    //     scrub: true,
    //     pin: true
    //   }
    // })
    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.i4',
    //     start: 'top ' + this.$refs.item2.getBoundingClientRect().top + 'px',
    //     // markers: true,
    //     end: 'top top',
    //     scrub: true,
    //     pin: true
    //   }
    // })
    // ScrollTrigger.create({
    //   trigger: '.urban-sector .item.i2',
    //   pin: '.urban-sector .item.i2',
    //   markers: true,
    //   // toggleClass: 'active',
    //   start: 'top ' + this.$refs.item2.getBoundingClientRect().top + 'px',
    //   end: 'bottom center'
    // })
    // gsap.to('.i2', {
    //   scrollTrigger: {
    //     trigger: '.i2',
    //     markers: true,
    //     start: 'top ' + this.$refs.item2.getBoundingClientRect().top + 'px',
    //     end: 'top top',
    //     pin: true,
    //     scrub: true
    //   }
    // })
    // gsap.to('.i3', {
    //   scrollTrigger: {
    //     trigger: '.i3',
    //     markers: true,
    //     start: 'top ' + this.$refs.item3.getBoundingClientRect().top + 'px',
    //     end: 'top top',
    //     pin: true,
    //     scrub: true
    //   }
    // })
    // gsap.to('.i4', {
    //   scrollTrigger: {
    //     trigger: '.i4',
    //     markers: true,
    //     start: 'top ' + this.$refs.item4.getBoundingClientRect().top + 'px',
    //     end: 'top top',
    //     pin: true,
    //     scrub: true
    //   }
    // })
    // gsap.to('#thirdCircle', {
    //   x: 100,
    //   duration: 5,
    //   scrollTrigger: {
    //     trigger: '#thirdCircle',
    //     markers: true,
    //     start: 'top center',
    //     end: 'bottom 80px',
    //     scrub: true
    //   }
    // })
    // console.log(this.$refs.item2.getBoundingClientRect().top)
    // console.log(this.$refs.item3.getBoundingClientRect().top)
    // console.log(this.$refs.item4.getBoundingClientRect().top)
    // gsap.timeline({
    //   scrollTrigger: {
    //     y: -340,
    //     trigger: '.urban-sector .i2',
    //     pin: '.urban-sector .i2',
    //     markers: true,
    //     // toggleClass: 'active',
    //     start: 'top ' + this.$refs.item2.getBoundingClientRect().top + 'px',
    //     end: 'bottom center'
    //   }
    // })
    // gsap.timeline({
    //   scrollTrigger: {
    //     // y: -140,
    //     trigger: '.urban-sector .i3',
    //     pin: '.urban-sector .i3',
    //     // markers: true,
    //     // toggleClass: 'active',
    //     start: 'top ' + this.$refs.item3.getBoundingClientRect().top + 'px',
    //     end: 'bottom center'
    //   }
    // })
    // gsap.timeline({
    //   scrollTrigger: {
    //     // y: -140,
    //     trigger: '.urban-sector .i4',
    //     pin: '.urban-sector .i4',
    //     // markers: true,
    //     // toggleClass: 'active',
    //     start: 'top ' + this.$refs.item4.getBoundingClientRect().top + 'px',
    //     end: 'bottom center'
    //   }
    // })
    // ScrollTrigger.create({
    //   trigger: '.urban-sector .item.i2',
    //   pin: '.urban-sector .item.i2',
    //   markers: true,
    //   // toggleClass: 'active',
    //   start: 'top ' + this.$refs.item2.getBoundingClientRect().top + 'px',
    //   end: 'bottom center'
    // })
    // ScrollTrigger.create({
    //   trigger: '.urban-sector .item.i3',
    //   pin: '.urban-sector .item.i3',
    //   // markers: true,
    //   // toggleClass: 'active',
    //   start: 'top ' + this.$refs.item3.getBoundingClientRect().top + 'px',
    //   end: 'bottom center'
    // })
    // ScrollTrigger.create({
    //   trigger: '.urban-sector .item.i4',
    //   pin: '.urban-sector .item.i4',
    //   // markers: true,
    //   // toggleClass: 'active',
    //   start: 'top ' + this.$refs.item4.getBoundingClientRect().top + 'px',
    //   end: 'bottom center'
    // })
  }
}
</script>
<style>
/*.i1 {*/
/*  z-index: 5;*/
/*}*/
/*.i2 {*/
/*  z-index: 4;*/
/*  margin-top: -250px;*/
/*}*/
/*.i3 {*/
/*  z-index: 3;*/
/*  margin-top: -500px;*/
/*}*/
/*.i4 {*/
/*  z-index: 2;*/
/*  margin-top: -750px;*/
/*}*/
</style>

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
          품격 있고 트렌디한 미각 세계와 프리미엄 라이프스타일 컨텐츠를 The Shops At CENTERFIELD에서
          만나보세요.
        </p>
      </section>
      <section
        class="urban-sector"
        ref="urban"
      >
        <div class="item i1">
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
        <div class="item i2">
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
        <div class="item i3">
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
        <div class="item i4">
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
  methods: {

  },
  mounted () {
    // gsap.to('.urban-sector .item:not(:last-child)', {
    //   // yPercent: -100,
    //   // ease: 'none',
    //   // stagger: 0.5,
    //   scrollTrigger: {
    //     trigger: '.urban-sector ',
    //     // endTrigger: '.urban-sector ',
    //     start: 'top top',
    //     end: 'bottom -100%',
    //     scrub: true,
    //     pin: true
    //   }
    // })
    // gsap.set('.urban-sector .item', { zIndex: (i, target, targets) => targets.length - i })
    // gsap.to('.urban-sector', {
    //   scrollTrigger: {
    //     trigger: '.urban-sector',
    //     scrub: true,
    //     pin: true,
    //     start: 'center center',
    //     end: 'bottom -100%',
    //     toggleClass: 'active',
    //     ease: 'power2'
    //   }
    // })
    //
    // const HEIGHT = window.innerHeight
    // const top = this.$refs.urban.getBoundingClientRect().top
    // const start = 'top ' + top + 'px'
    // console.log(HEIGHT, start, top)
    // ScrollTrigger.create({
    //   trigger: '.urban-sector',
    //   pin: true,
    //   // markers: true,
    //   // toggleActions: 'restart none reverse reset',
    //   start: start,
    //   end: 'bottom center'
    // })
    // gsap.utils.toArray('.urban-sector .item').forEach((panel, i) => {
    //   let cards = [top, top + 310, top + 310 * 2, top + 310 * 3, top + 310 * 4]
    //   ScrollTrigger.create({
    //     trigger: panel,
    //     start: 'top top',
    //     // pin: true,
    //     markers: true,
    //     end: () => '+=' + cards[i]
    //     // pinSpacing: true,
    //     // scrub: true,
    //   })
    // })
  //   gsap.to('.urban-sector .item.i1', {
  //     scrollTrigger: {
  //       trigger: '.urban-sector .item.i1',
  //       // scrub: true,
  //       markers: true,
  //       start: start,
  //       end: 'bottom center',
  //       ease: 'power2',
  //       // pin: true,
  //       toggleClass: 'active'
  //     }
  //   })
  }
}
</script>

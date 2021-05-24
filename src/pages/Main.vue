<template>
  <div class="main">
    <div class="inner">
      <!-- 슬라이드 영역(s) -->
      <div class="main-sldr swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="/floor1">
              <img src="../assets/images/main/slide_img01.png" alt="FOOD STREET 6월 30일 오픈" />
            </a>
          </div>
          <div class="swiper-slide">
            <a href="/parkingInfo">
              <img src="../assets/images/main/slide_img02.png" alt="THE SHOPS AT CENTERFIELD 오시는 길" />
            </a>
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/main/slide_img03.png" alt="MIRROR &amp; LIGHT" />
          </div>
        </div>
        <div class="swiper-pagination" />
      </div>
      <!--// 슬라이드 영역(e) -->
      <section class="info-sector" ref="info">
        <h3>
          미식과 취향,<br />
          세상에 없던 도심 라이프스타일
        </h3>
        <p>
          더 샵스 앳 센터필드(THE SHOPS AT CENTERFIELD)는 식(食)을 중심으로 현대인들에게 필요한 라이프스타일을 제안합니다.<br />
          총 4개 층에 다채로운 콘셉트로 파인 다이닝과 캐주얼 다이닝은 물론, 트렌디한 카페, 편집숍, 스파 등 미식과 감성, 삶을 풍요롭게 하는 취향을 경험할 수 있습니다.
        </p>
      </section>
      <section class="urban-sector" ref="urban" id="urban">
        <div class="item i1 active" ref="item1" id="i1" @click="goFloor">
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
        <div class="item i2" ref="item2" id="i2" @click="goFloor">
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
        <div class="item i3" ref="item3" id="i3" @click="goFloor">
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
        <div class="item i4" ref="item4" id="i4">
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
      </section>
      <section class="insta-sector">
        <h3>
          #THESHOPSATCENTERFIELD<br />
          #더샵스앳센터필드
        </h3>
        <!-- 인스타그램 영역(s) -->
        <div class="img-insta">
          <img src="../assets/images/main/temp_insta.png" alt="" style="width: 100%" />
        </div>
        <!--// 인스타그램 영역(e) -->
        <div class="more">
          <a href="#" class="btnmore">더 보기</a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { gsap, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Main',
  head: {
    title: {
      inner: 'Main',
    },
    // Meta tags
    meta: [{ name: 'keywords', content: 'Main' }],
  },
  data: () => ({
    ScrollTrigger01: null,
    ScrollTrigger02: null,
    ScrollTrigger03: null,
    visualSwiper: null,
    inter: null
  }),
  computed: {
    vtop() {
      return (106.6667 * innerWidth) / 100;
    },
    getHeight () {
      return Math.max(
        `${window.outerHeight}`,
        innerHeight
      )
    }
  },
  methods: {
    goToSection(t, b) {
      const o = document.getElementById(t);
      if (b === 'onEnter' || b === 'onEnterBack') o.classList.remove('active');
      else o.classList.add('active');
    },
    goFloor() {
      this.$router.push({ name: 'floor1' });
    },
    resize() {
      ScrollTrigger.update()
    },
  },
  mounted() {
    this.$nextTick(_ => {
      this.visualSwiper = new window.Swiper('.main-sldr.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
      });
    });
    window.addEventListener('resize', this.resize);
    this.resize();
    this.ScrollTrigger01 = ScrollTrigger.create({
      trigger: '#i2',
      start: 'top ' + (innerHeight - 580) + 'px',
      // markers: true,
      end: 'top top+=' + (innerHeight - this.vtop - 380),
      scrub: true,
      pin: true,
      overwrite: true,
      onEnter: () => this.goToSection('i2', 'onEnter'),
      onEnterBack: () => this.goToSection('i2', 'onEnterBack'),
      onLeave: () => this.goToSection('i2', 'onLeave'),
    });
    this.ScrollTrigger02 = ScrollTrigger.create({
      trigger: '#i3',
      start: 'top ' + (innerHeight - 580) + 'px',
      // markers: true,
      end: 'top top+=' + (innerHeight - this.vtop - 640),
      scrub: true,
      pin: true,
      overwrite: true,
      onEnter: () => this.goToSection('i3', 'onEnter'),
      onEnterBack: () => this.goToSection('i3', 'onEnterBack'),
      onLeave: () => this.goToSection('i3', 'onLeave'),
    });
    this.ScrollTrigger03 = ScrollTrigger.create({
      trigger: '#i4',
      start: 'top ' + (innerHeight - 580) + 'px',
      // markers: true
      end: 'top top+=' + (innerHeight - this.vtop - 900),
      scrub: true,
      pin: true,
      overwrite: true,
      onEnter: () => this.goToSection('i4', 'onEnter'),
      onEnterBack: () => this.goToSection('i4', 'onEnterBack'),
      onLeave: () => this.goToSection('i4', 'onLeave'),
    });
  },
  destroyed() {
    console.log(ScrollTrigger.getAll());
    ScrollTrigger.getAll().map(s => {
      s.kill(true);
    });
  }
};
</script>
<style scoped>
.urban-sector {
  height: 1260px;
}
</style>

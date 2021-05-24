<template>
  <div class="contents">
    <!-- <div class="sect-prepare">오픈 준비중</div> -->
    <section class="sector sect-floorinfo">
      <div class="inner">
        <div class="floor-imgwrap">
          <div class="floor-tit">
            <div class="floorinfo">
              <span>DINNIG</span>
              <span>CAFE</span>
              <span>LIFESTYLE</span>
            </div>
            <h3>B2</h3>
          </div>
          <div class="background-img">
            <img src="../assets/images/main/uban_img2.png" alt="" />
          </div>
        </div>
        <div class="floor-infotext">
          <h3>
            <span>FOOD STREET</span>
            <span>GOLF ACADEMY</span>
          </h3>
          <p>동서양을 넘나드는 12곳의 트렌디한 맛집과 차별화된 골프 문화를 경험할 수 있는 GDR 아카데미를 만나보세요.</p>
        </div>
      </div>
    </section>
    <section class="sector sect-floormap">
      <img src="../assets/images/floor/floor_mapB2.svg" alt="" />
    </section>
    <section class="sector sect-store" ref="store" id="store">
      <div class="item i1 active" ref="item1" id="i1">
        <div class="store">
          <a href="/tenantDetail">
            <!-- (!)오픈 준비중일때는 photo에 'prepare'를 추가해주세요. -->
            <div class="photo">
              <img src="../assets/images/floor/store/image_34.png" alt="" />
            </div>
            <div class="tan-textwrap">
              <h4 class="store-name">파이어벨 디어고메</h4>
              <div class="category">브런치 / 버거 / 샌드위치</div>
              <div class="area">EAST TOWER 1F</div>
            </div>
          </a>
        </div>
      </div>
      <div class="item i2" ref="item2" id="i2">
        <div class="store">
          <a href="#">
            <div class="photo">
              <img src="../assets/images/floor/store/image_35.png" alt="" />
            </div>
            <div class="tan-textwrap">
              <h4 class="store-name">제네랄드링크</h4>
              <div class="category">브런치 / 버거 / 샌드위치</div>
              <div class="area">EAST TOWER 1F</div>
            </div>
          </a>
        </div>
      </div>
      <div class="item i3" ref="item3" id="i3">
        <div class="store">
          <a href="#">
            <div class="photo prepare">
              <img src="../assets/images/floor/store/image_36.png" alt="" />
            </div>
            <div class="tan-textwrap">
              <h4 class="store-name">레호이</h4>
              <div class="category">브런치 / 버거 / 샌드위치</div>
              <div class="area">EAST TOWER 1F</div>
            </div>
          </a>
        </div>
      </div>
      <div class="item i4" ref="item4" id="i4">
        <div class="store">
          <a href="#">
            <div class="photo">
              <img src="../assets/images/floor/store/image_37.png" alt="" />
            </div>
            <div class="tan-textwrap">
              <h4 class="store-name">미아논나</h4>
              <div class="category">브런치 / 버거 / 샌드위치</div>
              <div class="area">EAST TOWER 1F</div>
            </div>
          </a>
        </div>
      </div>
      <div class="item i5" ref="item5" id="i5">
        <div class="store">
          <a href="#">
            <div class="photo">
              <img src="../assets/images/floor/store/image_38.png" alt="" />
            </div>
            <div class="tan-textwrap">
              <h4 class="store-name">쿠앤즈버킷</h4>
              <div class="category">브런치 / 버거 / 샌드위치</div>
              <div class="area">EAST TOWER 1F</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {ScrollTrigger} from "gsap/all";

export default {
  name: 'Floor1',
  head: {
    title: {
      inner: '1층안내',
    },
    // Meta tags
    meta: [{ name: 'keywords', content: 'Floor1' }],
  },
  data: () => ({
    ScrollTrigger01: null,
    ScrollTrigger02: null,
    ScrollTrigger03: null
  }),
  computed: {
    vtop() {
      return (106.6667 * innerWidth) / 100;
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
    handleScroll () {

    }
  },
  mounted() {
    const store = document.getElementById('store') || this.$refs.store;
    const storeTop = store.getBoundingClientRect().y || 0;
    window.addEventListener('resize', this.resize);
    window.addEventListener('scroll', this.handleScroll);
    console.log(`${window.outerHeight}` , storeTop, this.vtop)
    console.log(storeTop - `${window.outerHeight}`)
    this.resize();
    this.ScrollTrigger01 = ScrollTrigger.create({
      trigger: '#i2',
      start: 'top ' + (`${window.outerHeight}` - 690) + 'px',
      // markers: true,
      end: 'top top+=' + (`${window.outerHeight}` - 1060),
      scrub: true,
      pin: true,
      overwrite: true,
      onEnter: () => this.goToSection('i2', 'onEnter'),
      onEnterBack: () => this.goToSection('i2', 'onEnterBack'),
      onLeave: () => this.goToSection('i2', 'onLeave'),
    });
    this.ScrollTrigger02 = ScrollTrigger.create({
      trigger: '#i3',
      start: 'top ' + (`${window.outerHeight}` - 690) + 'px',
      // markers: true,
      end: 'top top+=' + (`${window.outerHeight}` - 1430),
      scrub: true,
      pin: true,
      overwrite: true,
      onEnter: () => this.goToSection('i3', 'onEnter'),
      onEnterBack: () => this.goToSection('i3', 'onEnterBack'),
      onLeave: () => this.goToSection('i3', 'onLeave'),
    });
    this.ScrollTrigger03 = ScrollTrigger.create({
      trigger: '#i4',
      start: 'top ' + (`${window.outerHeight}` - 690) + 'px',
      // markers: true
      end: 'top top+=' + (`${window.outerHeight}` - 1800),
      scrub: true,
      pin: true,
      overwrite: true,
      onEnter: () => this.goToSection('i4', 'onEnter'),
      onEnterBack: () => this.goToSection('i4', 'onEnterBack'),
      onLeave: () => this.goToSection('i4', 'onLeave'),
    });
    this.ScrollTrigger04 = ScrollTrigger.create({
      trigger: '#i5',
      start: 'top ' + (`${window.outerHeight}` - 690) + 'px',
      // markers: true
      end: 'top top+=' + (`${window.outerHeight}` - 2170),
      scrub: true,
      pin: true,
      overwrite: true,
      onEnter: () => this.goToSection('i5', 'onEnter'),
      onEnterBack: () => this.goToSection('i5', 'onEnterBack'),
      onLeave: () => this.goToSection('i5', 'onLeave'),
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
.sect-store {
  height: 2175px;
  position: relative;
}
</style>

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
      <section
        class="info-sector"
        ref="info"
      >
        <h3>DINING - LIFESTYLE - AMENITY</h3>
        <p>
          품격 있고 트렌디한 미각 세계와 프리미엄 라이프스타일 컨텐츠를 The Shops At CENTERFIELD에서
          만나보세요.
        </p>
      </section>
      <section
        class="urban-sector"
        ref="urban"
        id="urban"
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
  computed: {
    vh () {
      return 2 * innerHeight / 100
    }
  },
  methods: {
    onUpdate () {
      console.log(this)
      // gsap.to('.i1', { y: -this.$refs.info.getBoundingClientRect().top, ease: 'none', overwrite: true })
      // gsap.to('.i2', { y: -this.$refs.item1.getBoundingClientRect().top, ease: 'none', overwrite: true })
      // gsap.to('.i3', { y: -this.$refs.item2.getBoundingClientRect().top, ease: 'none', overwrite: true })
      // gsap.to('.i4', { y: -this.$refs.item3.getBoundingClientRect().top, ease: 'none', overwrite: true })
    },
    goToSection (t, b) {
      const o = document.getElementsByClassName(t)
      if (b === 'onEnter' || b === 'onEnterBack') o[0].classList.remove('active')
      else o[0].classList.add('active')
    },
    handleScroll () {
      // console.log(Math.max(
      //   document.body.scrollTop, document.documentElement.scrollTop,
      //   document.body.offsetTop, document.documentElement.scrollTop,
      //   document.body.clientTop, document.documentElement.scrollTop
      // ), innerHeight, innerWidth, this.$refs.item1.offsetTop)
    }
  },
  mounted () {
    const urban = document.getElementById('urban')
    const urbanTop = urban.offsetTop || 0
    console.log('=-==>', urban.offsetTop)
    console.log('')
    window.addEventListener('scroll', this.handleScroll)
    console.log(innerHeight, this.$refs.urban.getBoundingClientRect().top)
    this.$nextTick(_ => {
      ScrollTrigger.create({
        trigger: '.i2',
        start: 'top ' + (innerHeight - 510) + 'px',
        markers: true,
        end: 'top top+=' + (innerHeight - 510 + 10 - urbanTop),
        scrub: true,
        pin: true,
        overwrite: true,
        onEnter: () => this.goToSection('i2', 'onEnter'),
        onEnterBack: () => this.goToSection('i2', 'onEnterBack'),
        onLeave: () => this.goToSection('i2', 'onLeave')
      })
      ScrollTrigger.create({
        trigger: '.i3',
        start: 'top ' + (innerHeight - 510) + 'px',
        // markers: true,
        end: 'top top+=' + (innerHeight - 510 - 240 - urbanTop),
        scrub: true,
        pin: true,
        overwrite: true,
        onEnter: () => this.goToSection('i3', 'onEnter'),
        onEnterBack: () => this.goToSection('i3', 'onEnterBack'),
        onLeave: () => this.goToSection('i3', 'onLeave'),
      })
      ScrollTrigger.create({
        trigger: '.i4',
        start: 'top ' + (innerHeight - 510) + 'px',
        // markers: true
        end: 'top top+=' + (innerHeight - 510 - 490 - urbanTop),
        scrub: true,
        pin: true,
        overwrite: true,
        onEnter: () => this.goToSection('i4', 'onEnter'),
        onEnterBack: () => this.goToSection('i4', 'onEnterBack'),
        onLeave: () => this.goToSection('i4', 'onLeave')
      })
    })
    // gsap.timeline({
    //   scrollTrigger: {
    //     animation: '.urban-sector',
    //     trigger: '.urban-sector',
    //     start: 'top ' + this.$refs.urban.getBoundingClientRect().top + 'px',
    //     markers: true,
    //     end: 'top top',
    //     scrub: true,
    //     pin: true,
    //     toggleClass: 'active',
    //     onUpdate: () => this.onUpdate()
    //   }
    // })
    //   .to('.i1', { y: -innerHeight, ease: 'none' })
    //   .to('.i2', { y: -innerHeight, ease: 'none' })
    //   .to('.i3', { y: -innerHeight, ease: 'none' })
    //   .to('.i4', { y: -innerHeight, ease: 'none' })
    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.i1',
    //     start: 'top ' + this.$refs.item1.getBoundingClientRect().top + 'px',
    //     markers: true,
    //     end: 'top top',
    //     scrub: true,
    //     pin: true
    //   }
    // })
    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.i2',
    //     start: 'top ' + this.$refs.item2.getBoundingClientRect().top + 'px',
    //     // markers: true,
    //     end: 'top top',
    //     scrub: true,
    //     pin: true
    //   }
    // })
    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.i3',
    //     start: 'top ' + this.$refs.item3.getBoundingClientRect().top + 'px',
    //     // markers: true,
    //     end: 'top top',
    //     scrub: true,
    //     pin: true
    //   }
    // })
    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.i4',
    //     start: 'top ' + this.$refs.item4.getBoundingClientRect().top + 'px',
    //     // markers: true,
    //     end: 'top top',
    //     scrub: true,
    //     pin: true
    //   }
    // })
    // const depth = layer.dataset.depth;
    // const movement = -(layer.offsetHeight * depth)
    // tl.to(layer, {y: movement, ease: "none"}, 0)
    // ScrollTrigger.create({
    //   snap: 1 / 4 // snap whole page to the closest section!
    // })
    //   .to('.i1', {
    //   scrollTrigger: {
    //     trigger: '.i1',
    //     start: 'top ' + this.$refs.item1.getBoundingClientRect().top + 'px',
    //     end: 'top top',
    //     pin: true,
    //     scrub: true
    //   }
    // }).to('.i2', {
    //   scrollTrigger: {
    //     trigger: '.i2',
    //     start: 'top ' + this.$refs.item2.getBoundingClientRect().top + 'px',
    //     end: 'top top',
    //     pin: true,
    //     scrub: true
    //   }
    // }).to('.i3', {
    //   scrollTrigger: {
    //     trigger: '.i3',
    //     start: 'top ' + this.$refs.item3.getBoundingClientRect().top + 'px',
    //     end: 'top top',
    //     pin: true,
    //     scrub: true
    //   }
    // }).to('.i4', {
    //   scrollTrigger: {
    //     trigger: '.i4',
    //     start: 'top ' + this.$refs.item4.getBoundingClientRect().top + 'px',
    //     end: 'top top',
    //     pin: true,
    //     scrub: true
    //   }
    // })
    // .to('.i1', { yPercent: -100 }, 0)
    // .to('.i1', { y: -innerHeight })
    // .to('.i2', { y: -innerHeight })
    // .to('.i3', { y: -innerHeight })
    // .to('.i4', { y: -innerHeight })
    // gsap.to('.i1', {
    //   scrollTrigger: {
    //     trigger: '.urban-sector',
    //     markers: true,
    //     start: 'top ' + this.$refs.item1.getBoundingClientRect().top + 'px',
    //     end: 'top top',
    //     pin: true,
    //     scrub: true
    //   }
    // })
    // gsap.to('.i2', {
    //   scrollTrigger: {
    //     trigger: '.i1',
    //     markers: true,
    //     start: 'top ' + this.$refs.item2.getBoundingClientRect().top + 'px',
    //     end: 'top top',
    //     pin: true,
    //     scrub: true
    //   }
    // })
    // gsap.to('.i3', {
    //   scrollTrigger: {
    //     trigger: '.i2',
    //     markers: true,
    //     start: 'top ' + this.$refs.item3.getBoundingClientRect().top + 'px',
    //     end: 'top top',
    //     pin: true,
    //     scrub: true
    //   }
    // })
    // gsap.to('.i4', {
    //   scrollTrigger: {
    //     trigger: '.i3',
    //     markers: true,
    //     start: 'top ' + this.$refs.item4.getBoundingClientRect().top + 'px',
    //     end: 'top top',
    //     pin: true,
    //     scrub: true
    //   }
    // })
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
    // gsap.to('.urban-sector .item.i1', {
    //   scrollTrigger: {
    //     trigger: '.urban-sector',
    //     scrub: true,
    //     markers: true,
    //     start: 'top center',
    //     end: 'bottom center',
    //     ease: 'power2',
    //     // pin: true,
    //     toggleClass: 'active'
    //   }
    // })
  }
}
</script>
<style scoped>
 .urban-sector {
   height: 1260px;
 }
</style>

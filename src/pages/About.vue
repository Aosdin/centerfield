<template>
  <div class="contents">
    <section class="sector sect-visual">
      <div class="inner">
        <div class="visual">
          <div class="text-group2">
            <h3>
              ABOUT THE<br />
              SHOPS AT<br />
              CENTERFIELD
            </h3>
            <div>센터필드 소개</div>
          </div>
          <div class="background-img"><img src="../assets/images/about/visual_about.png" alt="" /></div>
        </div>
      </div>
    </section>
    <section class="sector">
      <div class="inner2">
        <div class="about-text">
          <p>오늘날 식(食)은 현대인들에게 최고의 유희 중 하나입니다. 좋은 장소, 좋은 사람, 그리고 좋은 음식을 나누며 우리는 반복되는 일상에서 소모된 생의 에너지를 회복합니다.</p>
          <p>더샵스앳센터필드(THE SHOPS AT CENTERFIELD)는 식(食)을 중심으로 현대인들에게 필요한 라이프스타일을 제안하는 영역입니다.</p>
          <p>톱 세프의 오뜨 퀴진을 맛볼 수 있는 파인 다이닝과 캐주얼 다이닝은 물론, 국내 처음 소개되는 동시대 가장 힙한 카페 등 총 4개 층에 걸친 다채로운 콘셉트로 세상에 없던 세상이 펼쳐집니다. 또한 뷰티 스파와 편집력이 돋보이는 라이프 스타일 숍 등의 리테일이 함께 구성되어, 미식과 취향을 즐기며 도심 라이프스타일의 정수를 경험할 수 있습니다.</p>
        </div>
      </div>
    </section>
    <section class="sector">
      <div class="inner">
        <div class="about-sldr swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/images/about/slider1.png" alt="" /></div>
            <div class="swiper-slide"><img src="../assets/images/about/slider1.png" alt="" /></div>
            <div class="swiper-slide"><img src="../assets/images/about/slider1.png" alt="" /></div>
          </div>
          <div class="swiper-pagination" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  head: {
    title: {
      inner: 'ABOUT THE SHOPS AT CENTERFIELD',
    },
    // Meta tags
    meta: [{ name: 'keywords', content: 'About' }],
  },
  mounted() {
    this.$nextTick(_ => {
      this.visualSwiper = new window.Swiper('.about-sldr.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
      });
    });
  },
};
</script>

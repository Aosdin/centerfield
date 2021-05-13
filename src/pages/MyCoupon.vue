<template>
  <div class="contents">
    <section class="sector sect-mycoupon">
      <div class="inner2">
        <h3 class="sectit1">MY COUPON</h3>
        <div class="ico-coupon"></div>
        <div class="ment1"><strong class="ftc-primary">사용 가능 쿠폰이 없습니다.</strong></div>
        <p class="ment2">쿠폰 상세보기에서 쿠폰을 다운로드 하세요.</p>
        <div class="btnwrap">
          <a href="#" class="btn1 btg-primary">이벤트 &amp; 쿠폰 바로가기</a>
        </div>
        <div class="btn-more"><a href="#">마이페이지로 돌아가기</a></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MyCoupon',
  head: {
    title: {
      inner: 'MY COUPON',
    },
    // Meta tags
    meta: [{ name: 'keywords', content: 'MyCoupon' }],
  },
};
</script>

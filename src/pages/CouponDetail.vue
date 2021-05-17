<template>
  <div class="contents">
    <section class="sector">
      <div class="inner">
        <section class="detail-view">
          <div class="imgthumb">
            <img
              src="../assets/images/temp/temp_event.png"
              alt=""
            >
          </div>
          <div class="detail-text">
            <h4 class="tit">더샵스앳스타필드 오픈기념 할인 쿠폰</h4>
            <div class="text">
              <p>2021.06.01 부터 2021.12.31 까지</p>
              <p>사용조건 : 50,000원 이상 구매 시</p>
            </div>
            <ul class="guide-list">
              <li>
                <div class="list-tit">쿠폰 사용 가능 매장 및 이용 안내</div>
                <p>더샵스앳센터필드 전 매장에서 사용 가능<br>(단, 팝업스토에어서 제외)</p>
              </li>
              <li>
                <div class="list-tit">유의사항</div>
                <p>발급된 바코드를 점원에게 확인 받아야 합니다.</p>
              </li>
            </ul>
          </div>
        </section>
        <div class="btn-more"><a href="#">쿠폰 리스트로 돌아가기</a></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CouponDetail',
  head: {
    title: {
      inner: '쿠폰 상세'
    },
    // Meta tags
    meta: [{ name: 'keywords', content: 'CouponDetail' }]
  }
}
</script>

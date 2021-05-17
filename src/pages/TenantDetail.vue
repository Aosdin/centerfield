<template>
  <div class="contents">
    <div class="sect-prepare">오픈 준비중</div>
    <section class="sector sect-tenant">
      <div class="tenant-mainimg">
        <img src="../assets/images/tenant/firebell.png" alt="" />
      </div>
      <div class="tenant-info">
        <div class="tenant-tit">파이어벨 디어 고메</div>
        <div class="tenant-detail">
          <div class="subinfo">
            <div class="time">매일 오전 10:00 ~ 오후 9:00</div>
            <div class="area">EAST TOWER 1F</div>
          </div>
          <button type="button" class="btntel">
            <span>전화걸기</span>
          </button>
        </div>
        <div class="use-info">
          <div class="item">
            <div class="ico y">
              <span class="i1"></span>
            </div>
            <p>신세계상품권</p>
          </div>
          <div class="item">
            <div class="ico y">
              <span class="i2"></span>
            </div>
            <p>포인트적립</p>
          </div>
          <div class="item">
            <div class="ico y">
              <span class="i3"></span>
            </div>
            <p>카드가능</p>
          </div>
          <div class="item">
            <div class="ico y">
              <span class="i4"></span>
            </div>
            <p>포장가능</p>
          </div>
          <div class="item">
            <div class="ico n">
              <span class="i5"></span>
            </div>
            <p>예약불가</p>
          </div>
        </div>
        <ul class="menu-list ulist2">
          <li>
            <div class="menu">루키버거</div>
            <div class="price">7,900</div>
          </li>
          <li>
            <div class="menu">맥버거</div>
            <div class="price">8,900</div>
          </li>
          <li>
            <div class="menu">하나바버거</div>
            <div class="price">8,900</div>
          </li>
          <li>
            <div class="menu">칠리킹버거</div>
            <div class="price">10,900</div>
          </li>
          <li>
            <div class="menu">레오버거</div>
            <div class="price">9,900</div>
          </li>
          <li>
            <div class="menu">콜911버거</div>
            <div class="price">9,900</div>
          </li>
          <li>
            <div class="menu">에그이고버거</div>
            <div class="price">10,900</div>
          </li>
        </ul>
        <p class="description">수제버거 전문점. 소고기 패티에 아메리칸 치즈를 사용한 아메리칸 스타일의 수제버거.</p>
      </div>
      <div class="tenant-location">
        <img src="../assets/images/tenant/tenant_location_firebell.svg" alt="" />
      </div>
    </section>
    <!-- 매장 썸네일(s) -->
    <section class="sector">
      <div class="inner">
        <div class="img-thumb">
          <img src="../assets/images/tenant/Rectangle_116.png" alt="" />
        </div>
        <div class="img-thumb">
          <img src="../assets/images/tenant/Rectangle_117.png" alt="" />
        </div>
        <div class="img-thumb">
          <img src="../assets/images/tenant/Rectangle_118.png" alt="" />
        </div>
      </div>
    </section>
    <!--// 매장 썸네일(e) -->
  </div>
</template>

<script>
export default {
  name: 'TenantDetail',
  head: {
    title: {
      inner: '매장 상세',
    },
    // Meta tags
    meta: [{ name: 'keywords', content: 'TenantDetail' }],
  },
};
</script>

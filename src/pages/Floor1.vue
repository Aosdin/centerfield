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
    <section class="sector sect-store">
      <div class="item i1 active">
        <div class="store">
          <a href="/tenantDetail">
            <!-- (!)오픈 준비중일때는 photo에 'prepare'를 추가해주세요. -->
            <div class="photo">
              <img src="../assets/images/floor/store/image_34.png" alt="" />
            </div>
            <h4 class="store-name">파이어벨 디어고메</h4>
            <div class="category">브런치 / 버거 / 샌드위치</div>
            <div class="area">EAST TOWER 1F</div>
          </a>
        </div>
      </div>
      <div class="item i2">
        <div class="store">
          <a href="#">
            <div class="photo">
              <img src="../assets/images/floor/store/image_35.png" alt="" />
            </div>
            <h4 class="store-name">제네랄드링크</h4>
            <div class="category">브런치 / 버거 / 샌드위치</div>
            <div class="area">EAST TOWER 1F</div>
          </a>
        </div>
      </div>
      <div class="item i3">
        <div class="store">
          <a href="#">
            <div class="photo prepare">
              <img src="../assets/images/floor/store/image_36.png" alt="" />
            </div>
            <h4 class="store-name">레호이</h4>
            <div class="category">브런치 / 버거 / 샌드위치</div>
            <div class="area">EAST TOWER 1F</div>
          </a>
        </div>
      </div>
      <div class="item i4">
        <div class="store">
          <a href="#">
            <div class="photo">
              <img src="../assets/images/floor/store/image_37.png" alt="" />
            </div>
            <h4 class="store-name">미아논나</h4>
            <div class="category">브런치 / 버거 / 샌드위치</div>
            <div class="area">EAST TOWER 1F</div>
          </a>
        </div>
      </div>
      <div class="item i5">
        <div class="store">
          <a href="#">
            <div class="photo">
              <img src="../assets/images/floor/store/image_38.png" alt="" />
            </div>
            <h4 class="store-name">쿠앤즈버킷</h4>
            <div class="category">브런치 / 버거 / 샌드위치</div>
            <div class="area">EAST TOWER 1F</div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Floor1',
  head: {
    title: {
      inner: '1층안내',
    },
    // Meta tags
    meta: [{ name: 'keywords', content: 'Floor1' }],
  },
};
</script>

<style scoped>
.sect-store {
  height: 700px;
}
</style>

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
            <h3>1F</h3>
          </div>
          <div class="background-img">
            <img src="../assets/images/main/uban_img2.png" alt="" />
          </div>
        </div>
        <div class="floor-infotext">
          <h3>DINING - LIFESTYLE - AMENITY</h3>
          <p>품격 있고 트렌디한 미각 세계와프리미엄 라이프스타일 컨텐츠를 The Shops At CENTERFIELD에서 만나보세요. 품격 있고 트렌디한 미각 세계와 프리미엄 라이프스타일 컨텐츠를 The Shops At CENTERFIELD에서 만나보세요.</p>
        </div>
      </div>
    </section>
    <section class="sector sect-floormap">
      <img src="../assets/images/floor/floor_map1.svg" alt="" />
    </section>
    <section class="sector sect-store">
      <div class="item i1 active">
        <div class="store">
          <a href="/tenantDetail">
            <!-- (!)오픈 준비중일때는 photo에 'prepare'를 추가해주세요. -->
            <div class="photo">
              <img src="../assets/images/floor/store/image 34.png" alt="" />
            </div>
            <h4 class="store-name">FIRE BELL</h4>
            <div class="category">브런치 / 버거 / 샌드위치</div>
            <div class="area">EAST TOWER 1F</div>
          </a>
        </div>
      </div>
      <div class="item i2">
        <div class="store">
          <a href="#">
            <div class="photo">
              <img src="../assets/images/floor/store/image 35.png" alt="" />
            </div>
            <h4 class="store-name">GENERAL DRINK SHOP</h4>
            <div class="category">브런치 / 버거 / 샌드위치</div>
            <div class="area">EAST TOWER 1F</div>
          </a>
        </div>
      </div>
      <div class="item i3">
        <div class="store">
          <a href="#">
            <div class="photo prepare">
              <img src="../assets/images/floor/store/image 36.png" alt="" />
            </div>
            <h4 class="store-name">PHO LEHOI</h4>
            <div class="category">브런치 / 버거 / 샌드위치</div>
            <div class="area">EAST TOWER 1F</div>
          </a>
        </div>
      </div>
      <div class="item i4">
        <div class="store">
          <a href="#">
            <div class="photo">
              <img src="../assets/images/floor/store/image 37.png" alt="" />
            </div>
            <h4 class="store-name">MIA NONNAA</h4>
            <div class="category">브런치 / 버거 / 샌드위치</div>
            <div class="area">EAST TOWER 1F</div>
          </a>
        </div>
      </div>
      <div class="item i5">
        <div class="store">
          <a href="#">
            <div class="photo">
              <img src="../assets/images/floor/store/image 38.png" alt="" />
            </div>
            <h4 class="store-name">QUEENS BUKET</h4>
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

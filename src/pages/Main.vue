<template>
  <div class="main">
    <div class="inner">
      <!-- 슬라이드 영역(s) -->
      <div class="main-sldr">
        <div class="item">
          <div><img src="../assets/images/main/slide_img01.png" alt="MIRROR &amp; LIGHT" /></div>
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
      <section class="urban-sector">
        <div class="item i1 active">
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
            <div class="background-img"></div>
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
            <div class="background-img"></div>
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
            <div class="background-img"></div>
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
            <div class="background-img"></div>
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
export default {
  name: "Main",
  head: {
    title: {
      inner: "Main"
    },
    // Meta tags
    meta: [{ name: "keywords", content: "Main" }]
  }
};
</script>

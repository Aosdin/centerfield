<template>
  <div class="contents">
    <section class="sector sect-visual">
      <div class="inner">
        <div class="visual">
          <div class="text-group">
            <h3>Floor Map</h3>
            <div>더샵스앳센터필드 층별안내</div>
          </div>
          <div class="background-img">
            <img src="../assets/images/floor/visual01.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="sector sect-floormap">
      <img src="../assets/images/floor/floor_map.svg" alt="" />
    </section>
    <section class="sector sect-floorstore">
      <div class="inner">
        <div class="area-store">
          <div class="map"><img src="../assets/images/floor/floor_info1.svg" alt="" /></div>
          <h4 class="sectit">
            2F -
            <div class="patition-text">
              <span>FINE DINING</span>
              <span>SPA</span>
              <span>CLINIC</span>
            </div>
          </h4>
          <div class="area">
            <dl class="dlist west">
              <dt>WEST TOWER</dt>
              <dd><a href="#">더트리니티 스파</a></dd>
              <dd><a href="#">스토리피부과</a></dd>
            </dl>
            <dl class="dlist east">
              <dt>EAST TOWER</dt>
              <dd><a href="#">오리지널 팬케이크하우스</a></dd>
              <dd><a href="#">커피스니퍼</a></dd>
              <dd><a href="#">모퉁이우</a></dd>
              <dd><a href="#">스시아라미즈</a></dd>
              <dd><a href="#">임프레션</a></dd>
            </dl>
          </div>
        </div>
        <div class="area-store">
          <div class="map"><img src="../assets/images/floor/floor_info2.svg" alt="" /></div>
          <h4 class="sectit">
            1F -
            <div class="patition-text">
              <span>DINING</span>
              <span>CAFE</span>
              <span>LIFESTYLE</span>
            </div>
          </h4>
          <div class="area">
            <dl class="dlist west">
              <dt>WEST TOWER</dt>
              <dd><a href="#">번개장터</a></dd>
              <dd><a href="#">에디토리</a></dd>
              <dd><a href="#">산타마리아노벨라</a></dd>
              <dd><a href="#">헤아</a></dd>
              <dd><a href="#">오르오르</a></dd>
              <dd><a href="#">스틸북스</a></dd>
              <dd><a href="#">아방베이커리</a></dd>
            </dl>
            <dl class="dlist east">
              <dt>EAST TOWER</dt>
              <dd><a href="#">해우리</a></dd>
              <dd><a href="#">JS가든</a></dd>
              <dd><a href="#">부루독</a></dd>
            </dl>
          </div>
        </div>
        <div class="area-store">
          <div class="map"><img src="../assets/images/floor/floor_info3.svg" alt="" /></div>
          <h4 class="sectit">
            B1 -
            <div class="patition-text">
              <span>CASUAL F&amp;B</span>
              <span>AMENITY</span>
            </div>
          </h4>
          <div class="area">
            <dl class="dlist west">
              <dt>WEST TOWER</dt>
              <dd><a href="#">치과</a></dd>
              <dd><a href="#">에이와</a></dd>
              <dd><a href="#">약국</a></dd>
              <dd><a href="#">꽃집</a></dd>
              <dd><a href="#">이마트24</a></dd>
            </dl>
            <dl class="dlist east">
              <dt>EAST TOWER</dt>
              <dd><a href="#">하입빈스</a></dd>
              <dd><a href="#">김씨마구로</a></dd>
              <dd><a href="#">스타벅스 리저브</a></dd>
              <dd><a href="#">와인앤모어</a></dd>
            </dl>
          </div>
        </div>
        <div class="area-store">
          <div class="map"><img src="../assets/images/floor/floor_info4.svg" alt="" /></div>
          <h4 class="sectit">
            B2 -
            <div class="patition-text">
              <span>FOOD STREET</span>
              <span>GOLF ACADEMY</span>
            </div>
          </h4>
          <div class="area">
            <dl class="dlist east">
              <dt>EAST TOWER</dt>
              <dd><a href="#">삼백돈</a></dd>
              <dd><a href="#">한국집</a></dd>
              <dd><a href="#">도화정공가네 서오룽 가마솥한</a></dd>
              <dd><a href="#">우에노421 바이고메서촌김씨</a></dd>
              <dd><a href="#">GDR아카데미</a></dd>
              <dd><a href="#">쿠앤즈버킷</a></dd>
              <dd><a href="#">정읍 옛날김밥</a></dd>
              <dd><a href="#">소이연남</a></dd>
              <dd><a href="#">차알</a></dd>
              <dd><a href="#">제네럴드링크샵</a></dd>
              <dd><a href="#">라면베라보</a></dd>
              <dd><a href="#">파이어벨 디어고메</a></dd>
              <dd><a href="#">미아논나</a></dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FloorInfo',
  head: {
    title: {
      inner: '층별안내 상세',
    },
    // Meta tags
    meta: [{ name: 'keywords', content: 'FloorInfo' }],
  },
};
</script>

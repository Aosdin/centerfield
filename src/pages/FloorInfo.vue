<template>
  <div class="contents">
    <section class="sect-floorinfo">
      <div class="inner">
        <div class="floor-imgwrap">
          <div class="text-group">
            <h3>Floor Map</h3>
            <div>더샵스앳센터필드 층별안내</div>
          </div>
          <div class="background-img"><img src="../assets/images/floor/visual01.png" alt="" /></div>
        </div>
      </div>
    </section>
    <section class="sector sect-floormap"><img src="../assets/images/floor/floor_map1.svg" alt="" /></section>
    <section class="sector">
      <div class="inner2">
        <h3 class="sectit1">경로 찾기</h3>
        <div class="formwrap">
          <form>
            <fieldset>
              <legend>경로 찾기</legend>
              <div class="selectbox">
                <label for="frm1" class="blind">현재 위치 선택</label>
                <select id="frm1">
                  <option>현재 위치를 선택하세요.</option>
                  <option>선택1</option>
                  <option>선택2</option>
                  <option>선택3</option>
                </select>
              </div>
              <div class="selectbox">
                <label for="frm2" class="blind">목적지 선택</label>
                <select id="frm2">
                  <option>목적지를 선택하세요</option>
                  <option>선택1</option>
                  <option>선택2</option>
                  <option>선택3</option>
                </select>
              </div>
              <button type="button" class="btn1 btg-gray"><span>재설정</span></button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
    <section class="sector">
      <div class="inner">
        <div class="imgwrap"><img src="../assets/images/floor/floor_info.svg" alt="" /></div>
      </div>
    </section>
    <section class="sector sect-floorstore">
      <div class="inner2">
        <div class="area-store">
          <h4 class="sectit">2F</h4>
          <div class="patition-text">
            <span>FINE DINING</span>
            <span>SPA</span>
            <span>CLINIC</span>
          </div>
          <div class="area">
            <dl class="dlist west">
              <dt>WEST</dt>
              <dd><a href="#">더트리니티 스파</a></dd>
              <dd><a href="#">스토리피부과</a></dd>
            </dl>
            <dl class="dlist east">
              <dt>EAST</dt>
              <dd><a href="#">오리지널 팬케이크하우스</a></dd>
              <dd><a href="#">커피스니퍼</a></dd>
              <dd><a href="#">임프레션</a></dd>
              <dd><a href="#">스시아라미즈</a></dd>
              <dd><a href="#">모퉁이우</a></dd>
            </dl>
          </div>
        </div>
        <div class="area-store">
          <h4 class="sectit">1F</h4>
          <div class="patition-text">
            <span>DINING</span>
            <span>CAFE</span>
            <span>LIFESTYLE</span>
          </div>
          <div class="area">
            <dl class="dlist west">
              <dt>WEST</dt>
              <dd><a href="#">미확정</a></dd>
              <dd><a href="#">미확정</a></dd>
              <dd><a href="#">미확정</a></dd>
              <dd><a href="#">미확정</a></dd>
              <dd><a href="#">미확정</a></dd>
              <dd><a href="#">미확정</a></dd>
              <dd><a href="#">미확정</a></dd>
              <dd><a href="#">미확정</a></dd>
            </dl>
            <dl class="dlist east">
              <dt>EAST</dt>
              <dd><a href="#">JS가든</a></dd>
              <dd><a href="#">산타마리아 노벨라</a></dd>
              <dd><a href="#">오르오르</a></dd>
              <dd><a href="#">헤아</a></dd>
            </dl>
          </div>
        </div>
        <div class="area-store">
          <h4 class="sectit">B1</h4>
          <div class="patition-text">
            <span>CASUAL F&amp;B</span>
            <span>AMENITY</span>
          </div>
          <div class="area">
            <dl class="dlist west">
              <dt>WEST</dt>
              <dd><a href="#">약국</a></dd>
              <dd><a href="#">미확정</a></dd>
              <dd><a href="#">미확정</a></dd>
              <dd><a href="#">미확정</a></dd>
            </dl>
            <dl class="dlist east">
              <dt>EAST</dt>
              <dd><a href="#">하입빈스</a></dd>
              <dd><a href="#">스타벅스리저브</a></dd>
              <dd><a href="#">와인앤모어</a></dd>
            </dl>
          </div>
        </div>
        <div class="area-store">
          <h4 class="sectit">B2</h4>
          <div class="patition-text">
            <span>FOOD STREET</span>
            <span>GOLF ACADEMY</span>
          </div>
          <div class="area">
            <dl class="dlist east">
              <dt>EAST</dt>
              <dd><a href="#">파이어벨 디어고메</a></dd>
              <dd><a href="#">호시카츠</a></dd>
              <dd><a href="#">미아논나</a></dd>
              <dd><a href="#">차알</a></dd>
              <dd><a href="#">한국집</a></dd>
              <dd><a href="#">라면베라보</a></dd>
              <dd><a href="#">제네럴드링크샵</a></dd>
              <dd><a href="#">정읍 옛날김밥</a></dd>
              <dd><a href="#">쿠앤즈버킷</a></dd>
              <dd><a href="#">GDR아카데미</a></dd>
              <dd><a href="#">미확정</a></dd>
              <dd><a href="#">미확정</a></dd>
              <dd><a href="#">미확정</a></dd>
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

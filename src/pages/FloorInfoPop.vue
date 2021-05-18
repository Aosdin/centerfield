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
      <img src="../assets/images/floor/floor_map1.svg" alt="" />
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
              <dd><a href="#">BGZT Lab.</a></dd>
              <dd><a href="#">에디토리</a></dd>
              <dd><a href="#">산타마리아노벨라</a></dd>
              <dd><a href="#">헤아</a></dd>
              <dd><a href="#">오르오르</a></dd>
              <dd><a href="#">카페진정성</a></dd>
              <dd><a href="#">노아베이커리</a></dd>
            </dl>
            <dl class="dlist east">
              <dt>EAST TOWER</dt>
              <dd><a href="#">해우리</a></dd>
              <dd><a href="#">JS가든</a></dd>
              <dd><a href="#">락희옥</a></dd>
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
              <dd><a href="#">이마트24</a></dd>
            </dl>
            <dl class="dlist east">
              <dt>EAST TOWER</dt>
              <dd><a href="#">하입빈스</a></dd>
              <dd><a href="#">미확정</a></dd>
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
              <dd><a href="#">호시카츠</a></dd>
              <dd><a href="#">한국집</a></dd>
              <dd><a href="#">천일제면소</a></dd>
              <dd><a href="#">홍대개미</a></dd>
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
    <!-- 팝업(s) -->
    <section class="popwrap poptype1">
      <h3 class="poptit">경로찾기</h3>
      <div class="pop-content">
        <div class="formwrap">
          <form>
            <fieldset>
              <legend>경로 찾기</legend>
              <ul class="floor-level">
                <li><button type="button">주차장</button></li>
                <li><button type="button">B2</button></li>
                <li class="active"><button type="button">B1</button></li>
                <li><button type="button">1F</button></li>
                <li><button type="button">2F</button></li>
              </ul>
              <div class="selectbox">
                <label for="frm1" class="blind">현재 위치 선택</label>
                <select id="frm1">
                  <option>현재 위치를 선택하세요.</option>
                  <option>선택1</option>
                  <option>선택2</option>
                  <option>선택3</option>
                </select>
              </div>
              <ul class="floor-level">
                <li class="active"><button type="button">주차장</button></li>
                <li><button type="button">B2</button></li>
                <li><button type="button">B1</button></li>
                <li><button type="button">1F</button></li>
                <li><button type="button">2F</button></li>
              </ul>
              <div class="selectbox">
                <label for="frm2" class="blind">목적지 선택</label>
                <select id="frm2">
                  <option>목적지를 선택하세요</option>
                  <option>선택1</option>
                  <option>선택2</option>
                  <option>선택3</option>
                </select>
              </div>
              <button type="button" class="btn1 btg-primary">
                <span>찾기</span>
              </button>
              <div class="floor-rootmap">
                <img src="../assets/images/floor/floor_root.svg" alt="" />
                <p>EAST 엘리베이터를 이용하여 2F에서 하차, 외부 정원을 통과해 주세요.</p>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <button type="button" class="pop-close">
        <span>팝업닫기</span>
      </button>
    </section>
    <!--// 팝업(e) -->
  </div>
</template>

<script>
export default {
  name: 'FloorInfoPop',
  head: {
    title: {
      inner: '경로찾기 > 층별안내 상세',
    },
    // Meta tags
    meta: [{ name: 'keywords', content: 'FloorInfoPop' }],
  },
};
</script>

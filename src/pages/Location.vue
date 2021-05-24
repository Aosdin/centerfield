<template>
  <div class="contents">
    <section class="sector sect-visual">
      <div class="inner">
        <div class="visual">
          <div class="text-group2">
            <h3>LOCATION</h3>
            <div>더샵스앳센터필드 오시는 길</div>
          </div>
          <div class="background-img">
            <img src="../assets/images/parking/visual_location.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="sector sect-parking">
      <div class="imgwrap bg-graylight2">
        <img src="../assets/images/parking/location_parking.png" alt="" />
      </div>
      <div class="inner2">
        <ul class="ulist1">
          <li>
            <h4 class="icotit">
              <div class="icon">
                <img src="../assets/images/icon/ico_parking3.svg" alt="" />
              </div>
              자동차
            </h4>
            <ul class="ulist2">
              <li><strong>역삼/강남역 방면</strong> : 테헤란로 선릉역 방면 직진 - 르네상스호텔 사거리 앞 U턴 - 큰길타워 앞 우회전 - 센터필드 서문/북문게이트 진입</li>
              <li><strong>선릉역/잠실 방면</strong> : 테헤란로 역삼역 방면 직진 - 큰길타워 앞 우회전 - 센터필드 서문/북문게이트 진입</li>
              <li><strong>압구정 방면</strong> : 도산공원 사거리 직진 - 경복아파트 사거리 직진 - KT강남지사 지나 우회전 - 센터필드 북문게이트 진입</li>
              <li><strong>도곡동 방면</strong> : 매봉터널 사거리 언주로 북단 방면 - 강남세브란스 사거리 직진 - 르네상스호텔 사거리 직진 - 두번째 신호에서 유턴 - KT강남지사 지나 우회전 - 센터필드 GATE1(북측 주차장) 진입</li>
            </ul>
          </li>
          <li>
            <h4 class="icotit">
              <div class="icon">
                <img src="../assets/images/icon/ico_parking4.svg" alt="" />
              </div>
              버스
            </h4>
            <ul class="ulist2">
              <li>
                <strong>KT강남지사 정류장 하차(도보3분)</strong>
                <p>일반버스 : <span class="ftc-blue">141</span>, <span class="ftc-blue">242</span>, <span class="ftc-green">3422</span></p>
              </li>
              <li>
                <strong>서울상록회관, 한국기술센터, 한국자산신탁, 르네상스호텔 정류장 하차</strong>
                <p>일반버스 : <span class="ftc-blue">146</span>, <span class="ftc-blue">341</span>, <span class="ftc-blue">360</span>, <span class="ftc-blue">740</span>, <span class="ftc-blue">N13</span>, <span class="ftc-blue">N61</span></p>
                <p>광역버스 : <span class="ftc-red">1100</span>, <span class="ftc-red">1700</span>, <span class="ftc-red">2000</span>, <span class="ftc-red">2000-1</span>, <span class="ftc-red">7007</span>, <span class="ftc-red">9303</span>, <span class="ftc-red">8001</span></p>
              </li>
            </ul>
          </li>
          <li>
            <h4 class="icotit">
              <div class="icon">
                <img src="../assets/images/icon/ico_parking5.svg" alt="" />
              </div>
              지하철
            </h4>
            <ul class="ulist2">
              <li>
                <strong>2호선 역삼역</strong>
                <p>3번출구에서 500미터 도보 7분 소요</p>
              </li>
              <li>
                <strong>2호선 선릉역</strong>
                <p>5번출구에서 600미터 도보 10분 소요</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Location',
  head: {
    title: {
      inner: 'Location',
    },
    // Meta tags
    meta: [{ name: 'keywords', content: 'Location' }],
  },
};
</script>

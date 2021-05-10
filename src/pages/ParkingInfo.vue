<template>
  <div class="contents">
    <section class="sector sect-visual">
      <div class="inner">
        <div class="visual">
          <div class="text-group2">
            <h3>PARKING</h3>
            <div>더샵스앳센터필드 주차 안내</div>
          </div>
          <div class="background-img"><img src="../assets/images/parking/visual_parking.png" alt="" /></div>
        </div>
      </div>
    </section>
    <section class="sector sect-parking">
      <div class="imgwrap bg-graylight2"><img src="../assets/images/parking/location_parking.png" alt="" /></div>
      <div class="inner2">
        <ul class="ulist1">
          <li>
            <h4 class="icotit">
              <div class="icon"><img src="../assets/images/icon/ico_parking1.svg" alt="" /></div>
              주차진입로
            </h4>
            <div class="parktext"><strong>Gate 1</strong> : 지하주차장 진입로</div>
            <div class="parktext"><strong>Gate 2</strong> : 지하주차장 진/출입로, 자전거주차장</div>
          </li>
          <li>
            <h4 class="icotit">
              <div class="icon"><img src="../assets/images/icon/ico_parking2.svg" alt="" /></div>
              주차요금
            </h4>
            <ul class="ulist2">
              <li>15분 이내 출차시 무료</li>
              <li>10분당 1,500원</li>
              <li>1일 주차시 최고 50,000원</li>
            </ul>
            <div class="parktext"><strong>입차 후 15분 이내 출차 차량</strong> – 주차료 면제</div>
            <div class="parktext"><strong>입차 후 15분 초과 출차 차량</strong> – 정상요금(15분 포함)</div>
            <div class="parktext"><strong>무인요금계산기/APP 이용 정산 후 출차시</strong> - 정산유예 시간 15분 인정</div>
            <div class="park-intext">
              <strong>주요매장 할인</strong>
              <p>더샵스앳센터필드 이용고객 대상 무료주차 서비스 제공</p>
              <table class="tbl1">
                <caption>
                  주요매장 주차요금 할인안내(매장, 할인 시간으로 구분)
                </caption>
                <colgroup>
                  <col style="width: 45%" />
                  <col style="width: 55%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>카페, 판매시설</th>
                    <td>
                      1시간<br />
                      *카페는 1만원 이상 구매 시
                    </td>
                  </tr>
                  <tr>
                    <th>F&amp;B</th>
                    <td>2시간</td>
                  </tr>
                  <tr>
                    <th>Dining(1F~2F), 스파, 클리닉, G.D.R</th>
                    <td>3시간</td>
                  </tr>
                </tbody>
              </table>
              <p>*무료주차시간 합산 불가, 세부사항은 이용매장에 문의</p>
            </div>
          </li>
          <li>
            <h4 class="icotit">
              <div class="icon"><img src="../assets/images/icon/ico_parking3.svg" alt="" /></div>
              이륜차 주차 안내
            </h4>
            <ul class="ulist2">
              <li>이륜차 진입 및 주차 불가</li>
              <li>자전거 주차 가능(북측 주차장 우측)</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ParkingInfo',
  head: {
    title: {
      inner: '주차안내 상세',
    },
    // Meta tags
    meta: [{ name: 'keywords', content: 'ParkingInfo' }],
  },
};
</script>

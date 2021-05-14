<template>
  <div class="contents">
    <section class="sector">
      <div class="inner2">
        <h3 class="sectit1">영상정보처리기기 운영관리 방침</h3>
        <div class="selectbox">
          <label class="blind" for="termselect">영상정보처리기기 운영관리 방침 버전선택</label>
          <select id="termselect">
            <option value="">[Ver.2.0] 2021.05.05</option>
            <option value="">[Ver.1.9] 2020.05.05</option>
            <option value="">[Ver.1.8] 2019.05.05</option>
          </select>
        </div>
        <div class="terms-wrap">
          <h3 class="fir">제1장 총칙</h3>

          <h4>제1조 영상정보처리기기의 설치근거 및 설치목적</h4>
          <p class="desc-txt">본사는 개인정보보호법 제25조 제1항에 따라 다음과 같은 목적으로 영상정보처리기기를 설치 운영합니다.</p>
          <ol>
            <li>시설안전 및 화재예방</li>
            <li>고객의 안전을 위한 범죄예방</li>
            <li>차량도난 및 파손방지</li>
          </ol>

          <h4>제2조 설치대수, 설치위치 및 촬영범위</h4>
          <table>
            <thead>
              <tr>
                <th scope="col">구분</th>
                <th scope="col">설치대수</th>
                <th scope="col">설치위치 및 촬영범위</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">CCTV</td>
                <td>1,025</td>
                <td>건물내.외곽 및 주차장 등 전 층</td>
              </tr>
              <tr>
                <td scope="row">차량번호인식 카메라</td>
                <td>28</td>
                <td>주차장 입,출구(차량번호)</td>
              </tr>
              <tr>
                <td scope="row">차량유도시스템 카메라</td>
                <td>459</td>
                <td>주차장 전 구역(차량번호)</td>
              </tr>
            </tbody>
          </table>

          <h4>제3조 관리책임자 및 접근권한자</h4>
          <p class="desc-txt">귀하의 영상정보를 보호하고 개인영상정보와 관련한 불만을 처리하기 위하여 아래와 같이 개인영상정보 보호책임자를 두고 있습니다.</p>
          <table>
            <thead>
              <tr>
                <th scope="col">구분</th>
                <th scope="col">이름</th>
                <th scope="col">직위</th>
                <th scope="col">소속</th>
                <th scope="col">연락처</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">관리책임자</td>
                <td>이태석</td>
                <td>팀장</td>
                <td>WTC Seoul</td>
                <td>02-6000-1220</td>
              </tr>
              <tr>
                <td scope="row">접근권한자</td>
                <td colspan="4"><strong>안전관리팀, 시설운영팀, 센터관리팀</strong></td>
              </tr>
            </tbody>
          </table>

          <h4>제4조 영상정보의 촬영시간, 보관기간, 보관장소 및 처리방법</h4>
          <table>
            <thead>
              <tr>
                <th scope="col">촬영시간</th>
                <th scope="col">보관기간</th>
                <th scope="col">보관장보</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">24시간</td>
                <td>촬영일로부터 자동 저장 30일</td>
                <td>종합상황실</td>
              </tr>
            </tbody>
          </table>
          <p>처리방법</p>
          <p>개인영상정보의 목적외 이용, 제3자제공, 파기, 열람 등 요구에 관한 사항을 기록, 관리하고, 보관기간 만료시 복원이 불가능한 방법으로 영구삭제(출력물의 경우 파쇄 또는 소각)합니다.</p>

          <h4>제5조 영상정보처리기기 설치 및 관리 등의 위탁에 관한 사항</h4>
          <p class="desc_txt">본 사는 아래와 같이 영상정보처리기기 설치 및 관리 등을 위탁하고 있으며, 관계법령에 따라 위탁 계약시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 있습니다.</p>
          <table>
            <thead>
              <tr>
                <th scope="col">수탁업체</th>
                <th scope="col">업무</th>
                <th scope="col">담당자</th>
                <th scope="col">연락처</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">㈜한국씨씨에스</td>
                <td>공용부</td>
                <td>김우승</td>
                <td>02-852-7007</td>
              </tr>
              <tr>
                <td scope="row">㈜글로벌피엠코</td>
                <td>주차</td>
                <td>명민수</td>
                <td>02-6002-7130</td>
              </tr>
              <tr>
                <td scope="row">㈜다래파크텍</td>
                <td>주차</td>
                <td>임창현</td>
                <td>02-549-8688</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Terms2',
  head: {
    title: {
      inner: '영상정보처리기기 운영관리 방침',
    },
    // Meta tags
    meta: [{ name: 'keywords', content: 'Terms2' }],
  },
};
</script>

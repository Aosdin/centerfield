<template>
  <div class="contents">
    <section class="sector sect-mypage">
      <div class="inner2">
        <h3 class="sectit1">MY PAGE</h3>
      </div>
      <div class="inner">
        <ul class="mypage-list">
          <li>
            <div class="item">
              <h4>회원등급</h4>
              <div class="item-area">
                <div class="icon">
                  <div class="ico-img" />
                </div>
                <div class="item-tit type1"><span class="ftc-primary">일반</span> 고객</div>
              </div>
              <a
                href="#"
                class="btn1 btg-primary"
              >더보기</a>
            </div>
          </li>
          <li>
            <div class="item">
              <h4>단골점포</h4>
              <div class="item-area">
                <div class="item-tit"><span class="ftc-primary">고양점</span></div>
              </div>
              <a
                href="#"
                class="btn1 btg-primary"
              >더보기</a>
            </div>
          </li>
          <li>
            <div class="item">
              <h4>내 쿠폰함</h4>
              <div class="item-area">
                <div class="item-tit"><span class="ftc-primary">00</span>개</div>
              </div>
              <a
                href="#"
                class="btn1 btg-primary"
              >더보기</a>
            </div>
          </li>
          <li>
            <div class="item">
              <h4>신세계포인트</h4>
              <div class="item-area">
                <div class="item-tit"><span class="ftc-primary">2,234</span> Point</div>
                <p>
                  현재 사용 가능한 포인트입니다.<br>
                  다른 가맹점에서 적립/사용한 전역 내역조회는 www.shinsegaepoint.com에서 확인 가능합니다.
                </p>
              </div>
              <a
                href="#"
                class="btn1 btg-primary"
              >신세계포인트 조회</a>
            </div>
          </li>
          <li>
            <div class="item">
              <h4>개인정보 수정</h4>
              <div class="item-area">
                <div class="item-tit"><span class="ftc-primary">김센터</span> 님</div>
                <p>
                  개인정보 수정은 신세계포인트 홈페이지<br>
                  My 신세계포인트 &gt; My 회원정보에서 가능합니다.
                </p>
              </div>
              <a
                href="#"
                class="btn1 btg-primary"
              >개인정보수정</a>
              <div class="btn-withdrawal">
                <a href="#"><span>탈퇴하기</span></a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <!-- 팝업(s) -->
    <section class="popwrap poptype1">
      <h3 class="poptit">단골점포 설정</h3>
      <div class="pop-content">
        <p class="poptext1">
          <strong>
            고객님께서 자주 찾는 점포를 설정해주세요.<br>
            단골점포로 설정하시면 재방문 시 단골점포로 바로 이동합니다.
          </strong>
        </p>
        <ul class="branch-list">
          <li>
            <a
              href="#"
              role="button"
            >
              <div class="branch-item">
                <div class="branch-photo"><img
                  src="../assets/images/temp/temp_branch.png"
                  alt=""
                ></div>
                <div class="branch">센터필드점</div>
              </div>
            </a>
          </li>
          <li class="active">
            <a
              href="#"
              role="button"
            >
              <div class="branch-item">
                <div class="branch-photo"><img
                  src="../assets/images/temp/temp_branch.png"
                  alt=""
                ></div>
                <div class="branch">고양점</div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              role="button"
            >
              <div class="branch-item">
                <div class="branch-photo"><img
                  src="../assets/images/temp/temp_branch.png"
                  alt=""
                ></div>
                <div class="branch">코엑스몰점</div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              role="button"
            >
              <div class="branch-item">
                <div class="branch-photo"><img
                  src="../assets/images/temp/temp_branch.png"
                  alt=""
                ></div>
                <div class="branch">안성점</div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              role="button"
            >
              <div class="branch-item">
                <div class="branch-photo"><img
                  src="../assets/images/temp/temp_branch.png"
                  alt=""
                ></div>
                <div class="branch">위례점</div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              role="button"
            >
              <div class="branch-item">
                <div class="branch-photo"><img
                  src="../assets/images/temp/temp_branch.png"
                  alt=""
                ></div>
                <div class="branch">부천점</div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              role="button"
            >
              <div class="branch-item">
                <div class="branch-photo"><img
                  src="../assets/images/temp/temp_branch.png"
                  alt=""
                ></div>
                <div class="branch">명지점</div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              role="button"
            >
              <div class="branch-item">
                <div class="branch-photo"><img
                  src="../assets/images/temp/temp_branch.png"
                  alt=""
                ></div>
                <div class="branch">하남점</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <button
        type="button"
        class="pop-close"
      >
        <span>팝업닫기</span>
      </button>
    </section>
    <!--// 팝업(e) -->
  </div>
</template>

<script>
export default {
  name: 'MyPagePop2',
  head: {
    title: {
      inner: '단골점포 설정 > 마이페이지'
    },
    // Meta tags
    meta: [{ name: 'keywords', content: 'MyPagePop2' }]
  }
}
</script>

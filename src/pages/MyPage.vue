<template>
  <div class="contents">
    <section class="sector sect-mypage">
      <div class="inner2 ">
        <h3 class="sectit1">MY PAGE</h3>
        <a href="#" class="btn2 btg-black">개인정보수정</a>
        <div class="userwrap">
          <div class="username"><span class="ftc-primary">김센터</span> 님</div>
          <div class="usermember">일반회원</div>
        </div>
      </div>
      <div class="inner">
        <ul class="mypage-list">
          <li class="grid-2">
            <div class="item">
              <h4>내 쿠폰함</h4>
              <div class="item-area">
                <div class="item-tit"><span class="ftc-primary">00</span>개</div>
              </div>
              <a href="#" class="btn2 btg-primary">더보기</a>
            </div>
          </li>
          <li class="grid-2">
            <div class="item">
              <h4>단골점포</h4>
              <div class="item-area">
                <div class="item-tit"><span class="ftc-primary">고양점</span></div>
              </div>
              <a href="#" class="btn2 btg-primary">더보기</a>
            </div>
          </li>
          <li>
            <div class="item">
              <h4 class="taleft">신세계포인트</h4>
              <div class="item-area">
                <div class="item-tit taleft"><span class="ftc-primary">2,003</span></div>
              </div>
              <div class="barcode">
                <img src="../assets/images/temp/barcode.png" alt="" />
              </div>
              <a href="#" class="btn2 btg-primary">포인트 조회</a>
            </div>
          </li>
          <li>
            <div class="itemlink">
              <a href="#" class="ftc-primary">회원 등급 기준 및 혜택 자세히보기</a>
              <a href="/Withdrawal" class="ftc-red">탈퇴하기</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MyPage',
  head: {
    title: {
      inner: '마이페이지',
    },
    // Meta tags
    meta: [{ name: 'keywords', content: 'MyPage' }],
  },
};
</script>

<template>
  <div class="contents">
    <section class="sector">
      <div class="inner2">
        <h3 class="sectit1">SHINSEGAE POINT</h3>
        <form>
          <fieldset>
            <legend>로그인입력</legend>
            <!-- 간편로그인(s) -->
            <section class="joinbox">
              <h4 class="sectit3">간편로그인</h4>
              <div class="inputbox">
                <label class="blind" for="userName">이름</label>
                <input type="text" id="userName" placeholder="이름" value="" />
              </div>
              <div class="inputbox">
                <label class="blind" for="userBirthday">생년월일</label>
                <input type="number" id="userBirthday" placeholder="생년월일(160101)" value="" />
              </div>
              <div class="phonebox">
                <div class="selectbox">
                  <label class="blind" for="phoneNum1">휴대폰 앞번호</label>
                  <select id="phoneNum1">
                    <option value="">010</option>
                    <option value="">011</option>
                    <option value="">016</option>
                    <option value="">017</option>
                    <option value="">019</option>
                  </select>
                </div>
                <div>-</div>
                <div class="inputbox">
                  <label class="blind" for="phoneNum2">휴대폰 중간번호</label>
                  <input type="number" id="phoneNum2" value="" />
                </div>
                <div>-</div>
                <div class="inputbox">
                  <label class="blind" for="phoneNum3">휴대폰 뒷번호</label>
                  <input type="number" id="phoneNum3" value="" />
                </div>
              </div>
              <button type="button" class="btn1 btg-primary">휴대폰인증</button>
              <ul class="ulist2">
                <li>신세계포인트 회원정보에 등록되어 있는 정보로 로그인 할 수 있습니다.</li>
                <li>입력하신 정보가 신세계포인트에 등록된 정보와 일치해야 합니다.</li>
              </ul>
            </section>
            <!--// 간편로그인(e) -->
            <!-- 통합로그인(s) -->
            <section class="joinbox">
              <h4 class="sectit3">통합로그인</h4>
              <div class="inputbox">
                <label class="blind" for="userName2">이름</label>
                <input type="text" id="userName2" placeholder="이름" value="" />
              </div>
              <div class="inputbox">
                <label class="blind" for="userPassword">비밀번호</label>
                <input type="password" id="userPassword" placeholder="비밀번호" value="" />
              </div>
              <button type="button" class="btn1 btg-black">확인</button>
              <ul class="login-menu">
                <li>
                  <a href="#">
                    <div class="ico"><img src="../assets/images/icon/ico_login1.svg" alt="" /></div>
                    <p>아이디찾기</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="ico"><img src="../assets/images/icon/ico_login2.svg" alt="" /></div>
                    <p>비밀번호찾기</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="ico"><img src="../assets/images/icon/ico_login3.svg" alt="" /></div>
                    <p>회원가입</p>
                  </a>
                </li>
              </ul>
            </section>
            <!--// 통합로그인(e) -->
          </fieldset>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Login2',
  head: {
    title: {
      inner: 'SHINSEGAE POINT',
    },
    // Meta tags
    meta: [{ name: 'keywords', content: 'Login2' }],
  },
};
</script>

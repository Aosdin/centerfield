<template>
  <div class="contents">
    <section class="sector">
      <div class="inner2">
        <h3 class="sectit1">LOGIN</h3>
        <div class="textbox">
          <strong class="ftc-primary">더샵스앳센터필드</strong>에 오신 것을 환영합니다.<br>
          로그인을 하시면 다양한 서비스 혜택을 누리실 수 있습니다.
        </div>
        <div class="logbtn-wrap">
          <button
            type="button"
            class="btn1 btg-primary"
          >
            로그인
          </button>
          <a
            href="#"
            class="btn1 btg-black"
          >회원가입</a>
        </div>
        <div class="textbox">
          <strong class="ftc-primary">신세계포인트 회원</strong>은<br>
          기존 아이디로 로그인 하실 수 있습니다.<br>
          만14세 이상부터 회원가입이 가능합니다.
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Login',
  head: {
    title: {
      inner: 'Login'
    },
    // Meta tags
    meta: [{ name: 'keywords', content: 'Login' }]
  }
}
</script>

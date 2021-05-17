<template>
  <div class="contents">
    <section class="sector sect-withdrawal">
      <h3 class="title">DELETE ACCOUNT</h3>
      <div class="inner2">
        <div class="withdrawal-ment">
          <p><strong class="ftc-primary">그동안 더샵스앳센터필드를 이용해주셔서 감사합니다.</strong></p>
          <p>더욱 더 좋은 서비스로 보답하겠습니다.</p>
          <p>센터필드 회원탈퇴를 하실 경우 신세계포인트 통합회원 정보는 유지되며, 센터필드에서 수집한 고객님의 개인정보는 회원 탈회 요청 시 지체없이 파기됩니다.</p>
        </div>
        <div class="chkbox">
          <input
            type="checkbox"
            id="chk1"
            value=""
          >
          <label for="chk1">센터필드 회원탈퇴 안내사항을 모두 확인하였으며, 이에 동의합니다.</label>
        </div>
        <div class="btnwrap">
          <button
            type="button"
            class="btn1 btg-red"
          >
            더샵스앳센터필드 회원탈퇴
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Withdrawal',
  head: {
    title: {
      inner: '회원탈퇴'
    },
    // Meta tags
    meta: [{ name: 'keywords', content: 'Withdrawal' }]
  }
}
</script>

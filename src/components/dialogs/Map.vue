<template>
  <v-dialog v-model="isMapDialog" fullscreen hide-overlay persistent content-class="pop-modal-survey" transition="slide-x-transition">
    <v-card class="fullPop">
      <div class="pop-inner">
        <h3 class="poptit">경로찾기</h3>

        <div class="pop-content">
          <div class="formwrap">
            <form>
              <fieldset>
                <legend>경로 찾기</legend>
                <ul class="floor-level">
                  <li :class="{'active' : fromFloor === 'parking'}"><button type="button" @click="fromFloor = 'parking'">주차장</button></li>
                  <li :class="{'active' : fromFloor === 'B2'}"><button type="button" @click="fromFloor = 'B2'">B2</button></li>
                  <li :class="{'active' : fromFloor === 'B1'}"><button type="button" @click="fromFloor = 'B1'">B1</button></li>
                  <li :class="{'active' : fromFloor === 'F1'}"><button type="button" @click="fromFloor = 'F1'">1F</button></li>
                  <li :class="{'active' : fromFloor === 'F2'}"><button type="button" @click="fromFloor = 'F2'">2F</button></li>
                </ul>
                <div class="selectbox">
                  <label for="frm1" class="blind">현재 위치 선택</label>
                  <select id="frm1" v-model="fromSel">
                    <option :value="null">선택하세요.</option>
                    <option :value="o.value" v-for="o in selData[fromFloor]">{{ o.text }}</option>
                  </select>
                </div>
                <ul class="floor-level">
                  <li :class="{'active' : toFloor === 'parking'}"><button type="button" @click="toFloor = 'parking'">주차장</button></li>
                  <li :class="{'active' : toFloor === 'B2'}"><button type="button" @click="toFloor = 'B2'">B2</button></li>
                  <li :class="{'active' : toFloor === 'B1'}"><button type="button" @click="toFloor = 'B1'">B1</button></li>
                  <li :class="{'active' : toFloor === 'F1'}"><button type="button" @click="toFloor = 'F1'">1F</button></li>
                  <li :class="{'active' : toFloor === 'F2'}"><button type="button" @click="toFloor = 'F2'">2F</button></li>
                </ul>
                <div class="selectbox">
                  <label for="frm2" class="blind">목적지 선택</label>
                  <select id="frm2" v-model="toSel">
                    <option :value="null">선택하세요.</option>
                    <option :value="o.value" v-for="o in selData[toFloor]">{{ o.text }}</option>
                  </select>
                </div>
                <button type="button" class="btn1 btg-primary">
                  <span>찾기</span>
                </button>
                { fromSel }} {{ toSel }}

                {{ showMapDataGroup ? '지도 코드 : ' + showMapDataGroup : '지도미선택' }}
                <div class="map" v-if="showMapDataGroup">
                  <div v-if="showMapDataGroup === 'PE_PW'">PE_PW 지도이미지 넣어주세요</div>
                  <div v-if="showMapDataGroup === 'PE_B2E1'">PE_B2E1 지도이미지 넣어주세요</div>
                  <div v-if="showMapDataGroup === 'PE_B2E2'">PE_B2E2 지도이미지 넣어주세요</div>
                  <div v-if="showMapDataGroup === 'PE_B1E'">PE_B1E 지도이미지 넣어주세요</div>
                  <div v-if="showMapDataGroup === 'PE_B1W'">PE_B1W 지도이미지 넣어주세요</div>
                  <div v-if="showMapDataGroup === 'PE_1FE'">PE_1FE 지도이미지 넣어주세요</div>
                  <div v-if="showMapDataGroup === 'PE_1FW'">PE_1FW 지도이미지 넣어주세요</div>
                  <div v-if="showMapDataGroup === 'PE_2FE'">PE_2FE 지도이미지 넣어주세요</div>
                  <div v-if="showMapDataGroup === 'PE_2FW'">PE_2FW 지도이미지 넣어주세요</div>
                </div>

                <div class="floor-rootmap">
                  <img src="../../assets/images/floor/floor_root.svg" alt="" />
                  <p>EAST 엘리베이터를 이용하여 2F에서 하차, 외부 정원을 통과해 주세요.</p>
                </div>
              </fieldset>
            </form>
          </div>
        </div>

        <button type="button" class="pop-close" @click="setMapDialogsAction(false)">
          <span>팝업닫기</span>
        </button>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      fromFloor: 'parking',
      toFloor: 'parking',
      fromSel: null,
      toSel: null,
      mapData: null,
      mapDataGroup: [
        ['', 'PE_PW', 'PE_B2E1', 'PE_B2E2', 'PE_B1E', 'PE_B1W', 'PE_1FE', 'PE_1FW', 'PE_2FE', 'PE_2FW'],
        ['PE_PW', '', 'PW_B2E1', 'PW_B2E2', 'PW_B1E', 'PW_B1W', 'PW_1FE', 'PW_1FW', 'PW_2FE', 'PW_2FW'],
        ['PE_B2E1', 'PW_B2E1', '', 'B2E1_B2E2', 'B2E1_B1E', 'B2E1_B1W', 'B2E1_1FE', 'B2E1_1FW', 'B2E1_2FE', 'B2E1_2FW'],
        ['PE_B2E2', 'PE_B2E2', 'PE_B2E2', '', 'PE_B2E2', 'PE_B2E2', 'PE_B2E2', 'PE_B2E2', 'PE_B2E2', 'PE_B2E2'],
        ['PE_B1W', 'PW_B1W', 'B2E1_B1W', 'B2E2_B1W', 'B1E_B1W', '', 'B1W_1FE', 'B1W_1FW', 'B1W_2FE', 'B1W_2FW'],
        ['PE_1FE', 'PW_1FE', 'B2E1_1FE', 'B2E2_1FE', 'B1E_1FE', 'B1W_1FE', '', '1FE_1FW', '1FE_2FE', '1FE_2FW'],
        ['PE_1FW', 'PW_1FW', 'B2E1_1FW', 'B2E2_1FW', 'B1E_1FW', 'B1W_1FW', '1FE_1FW', '', '1FW_2FW', '1FW_2FW'],
        ['PE_2FE', 'PW_2FE', 'B2E1_2FE', 'B2E2_2FE', 'B1E_2FE', 'B1W_2FE', '1FE_2FE', '1FW_2FW', '', '2FE_2FW'],
        ['PE_2FW', 'PW_2FW', 'B2E1_2FW', 'B2E2_2FW', 'B1E_2FW', 'B1W_2FW', '1FE_2FW', '1FW_2FW', '2FE_2FW', ''],
      ],
      selData: {
        parking: [
          { text: '주차장 East', value: 0 },
          { text: '주차장 West', value: 1 },
        ],
        B2: [
          { text: '호시카츠, 한국집, 천일제면소, 홍대개매, 소이연남, 차알, 라면베라보, 파이어벨, 디어고메, 미아논나', value: 2 },
          { text: 'GDR아카데미, 쿠앤즈버킷, 정읍 옛날김밥, 제네럴드링크샵', value: 3 },
        ],
        B1: [
          { text: '하입빈스, 미확정, 스타벅스 리저브, 와인앤모어', value: 4 },
          { text: '치과, 에이와, 약국, 이마트24', value: 5 },
        ],
        F1: [
          { text: '해우리, JS가든, 락희옥', value: 6 },
          { text: 'BGZT Lab., 에디토리, 산타마리아노벨라, 헤아, 오르오르, 카페진정성, 노아베이커리', value: 7 },
        ],
        F2: [
          { text: '오리지널 팬케이크하우스, 커피스니퍼, 모퉁이우, 스시아라미즈, 임프레션', value: 8 },
          { text: '더트리니티 스파, 스토리피부과', value: 9 },
        ],
      },
    };
  },
  components: {},
  computed: {
    ...mapState('common', {
      isMapDialog: state => state.isMapDialog,
    }),
    showMapDataGroup() {
      if (this.fromSel !== null && this.toSel !== null) return this.mapDataGroup[this.fromSel][this.toSel];
      return null;
    },
  },
  watch: {
    fromFloor () {
      this.fromSel = null
    },
    toFloor () {
      this.toSel = null
    }
  },
  methods: {
    ...mapActions('common', {
      setMapDialogsAction: 'setMapDialogs',
    }),
  },
};
</script>

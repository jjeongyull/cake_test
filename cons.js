const TEST = [
  {
    num : 1,
    title : "생크림을 휘핑할 때의 가장 적당한 온도는?",
    sub: [
      {num: 1, text: "-5 ~ 1℃"},
      {num: 2, text: "1 ~ 10℃"},
      {num: 3, text: "15 ~ 18℃"},
      {num: 4, text: "22 ~ 26℃"}
    ],
    value : 2
  },
  {
    num : 2,
    title : "다음 중 발연점이 가장 높은 유지는?",
    sub: [
      {num: 1, text: "쇼트닝"},
      {num: 2, text: "면실유"},
      {num: 3, text: "라드"},
      {num: 4, text: "옥수수기름"}
    ],
    value : 2
  },
  {
    num : 3,
    title : "냉장의 목적과 가장 관계가 먼 것은?",
    sub: [
      {num: 1, text: "식품의 보존기간 연장"},
      {num: 2, text: "미생물의 멸균"},
      {num: 3, text: "세균의 증식 억제"},
      {num: 4, text: "자기호흡 지연"}
    ],
    value : 2
  },
  {
    num : 4,
    title : "계란이 오래 되었을 때 나타나는 현상은?",
    sub: [
      {num: 1, text: "비중이 무거워진다."},
      {num: 2, text: "점도가 떨어진다."},
      {num: 3, text: "pH가 높아진다."},
      {num: 4, text: "껍질이 두꺼워진다."}
    ],
    value : 2
  },
  {
    num : 5,
    title : "다음 중 화학 팽창제가 아닌 것은?",
    sub: [
      {num: 1, text: "프로피온산 칼슘"},
      {num: 2, text: "탄산암모늄"},
      {num: 3, text: "베이킹 소다"},
      {num: 4, text: "베이킹파우더"}
    ],
    value : 1
  },
  {
    num : 6,
    title : "일반 파운드케이크와 마블 파운드케이크를 구별할 수 있는 재료는?",
    sub: [
      {num: 1, text: "코코아"},
      {num: 2, text: "밀가루"},
      {num: 3, text: "설탕"},
      {num: 4, text: "팽창제"}
    ],
    value : 1
  },
  {
    num : 7,
    title : "코코아 20%에 상당하는 초콜릿의 양은?",
    sub: [
      {num: 1, text: "16%"},
      {num: 2, text: "32%"},
      {num: 3, text: "48%"},
      {num: 4, text: "64%"}
    ],
    value : 2
  },
  {
    num : 8,
    title : "과자 제품의 평가 시 내부적 평가 요인으로 알맞지 않는 것은?",
    sub: [
      {num: 1, text: "맛"},
      {num: 2, text: "방향"},
      {num: 3, text: "기공"},
      {num: 4, text: "부피"}
    ],
    value : 4
  },
  {
    num : 9,
    title : "다음 설명 중 코팅용 초콜릿으로 가장 중요한 것을 바르게 설명한 것은?",
    sub: [
      {num: 1, text: "맛이 좋은 것"},
      {num: 2, text: "융점이 항상 높은 것"},
      {num: 3, text: "초콜릿 냄새가 강한 것"},
      {num: 4, text: "융점이 겨울에는 낮고 여름에는 높은 것"}
    ],
    value : 4
  },
  {
    num : 10,
    title : "아이싱(lcing)에 필요한 도구로 적합한 것은?",
    sub: [
      {num: 1, text: "스크래퍼"},
      {num: 2, text: "거품기"},
      {num: 3, text: "짤주머니"},
      {num: 4, text: "스파튤러"}
    ],
    value : 4
  },
  {
    num : 11,
    title : "케이크의 노화지연 방법이 아닌 것은?",
    sub: [
      {num: 1, text: "정확한 공정을 지킨다."},
      {num: 2, text: "제품을 4-10℃에서 보관한다."},
      {num: 3, text: "신선한 재료를 사용한다."},
      {num: 4, text: "제품을 실온에서 보관한다."}
    ],
    value : 2
  },
  {
    num : 12,
    title : "카카오버터는 초콜릿에 함유된 유지이다. 카카오버터는 그 안정성이 떨어져 초콜릿 불룸현상의 원인이 되고 있다. 이를 방지하기 위한 공정을 무엇이라 하는가?",
    sub: [
      {num: 1, text: "콘칭"},
      {num: 2, text: "템퍼링"},
      {num: 3, text: "발효"},
      {num: 4, text: "선별"}
    ],
    value : 2
  },
  {
    num : 13,
    title : "베이킹파우더 성분중 이산화탄소(CO2)를 발생시키는 것은?",
    sub: [
      {num: 1, text: "전분"},
      {num: 2, text: "주석산"},
      {num: 3, text: "인산칼슘"},
      {num: 4, text: "탄산수소나트륨"}
    ],
    value : 4
  },
  {
    num : 14,
    title : "태어난 날을 생일이라고 하는데 이것의 높임 말이 “생신” 이다. 다음 중 한문으로 맞는 것은?",
    sub: [
      {num: 1, text: "生 信"},
      {num: 2, text: "生 辰"},
      {num: 3, text: "生 新"},
      {num: 4, text: "生 神"}
    ],
    value : 2
  },
  {
    num : 15,
    title : "유지를 경화(硬化)시키는데 사용되는 물질은?",
    sub: [
      {num: 1, text: "마가린"},
      {num: 2, text: "라드"},
      {num: 3, text: "소금"},
      {num: 4, text: "수소"}
    ],
    value : 4
  },
  {
    num : 16,
    title : "마지팬을 만들 때 필요한 기본 재료가 아닌 것은 어느 것인가?",
    sub: [
      {num: 1, text: "물"},
      {num: 2, text: "아몬드"},
      {num: 3, text: "전분"},
      {num: 4, text: "설탕"}
    ],
    value : 3
  },
  {
    num : 17,
    title : "발렌타인 데이는 몇 월 몇 일 인가?",
    sub: [
      {num: 1, text: "1월 14일"},
      {num: 2, text: "2월 14일"},
      {num: 3, text: "3월 14일"},
      {num: 4, text: "4월 14일"}
    ],
    value : 2
  },
  {
    num : 18,
    title : "생일의 철자로 맞는 것은?",
    sub: [
      {num: 1, text: "Bilthday"},
      {num: 2, text: "Burthday"},
      {num: 3, text: "Berthday"},
      {num: 4, text: "Birthday"}
    ],
    value : 4
  },
  {
    num : 19,
    title : "동물이나 장미꽃 등에 사용되는 마지팬의 재료로 적당한 것은?",
    sub: [
      {num: 1, text: "아몬드 + 유지"},
      {num: 2, text: "아몬드 + 소금"},
      {num: 3, text: "아몬드 + 중조"},
      {num: 4, text: "아몬드 + 설탕"}
    ],
    value : 4
  },
  {
    num : 20,
    title : "퐁당을 만들기 위하여 시럽을 끓일 때 시럽의 온도로 적당한 범위는?",
    sub: [
      {num: 1, text: "72 - 78℃"},
      {num: 2, text: "102 - 105℃"},
      {num: 3, text: "114 - 118℃"},
      {num: 4, text: "121 - 126℃"}
    ],
    value : 3
  },
  {
    num : 21,
    title : "다음 중 계란흰자의 pH로 적당한 것은?",
    sub: [
      {num: 1, text: "5.0~6.0"},
      {num: 2, text: "6.0~6.5"},
      {num: 3, text: "7.0~8.0"},
      {num: 4, text: "8.5~9.0"}
    ],
    value : 4
  },
  {
    num : 22,
    title : "다음 중에서 ‘보라색’의 색상배합으로 적당한 것은?",
    sub: [
      {num: 1, text: "청색 + 황색"},
      {num: 2, text: "청색 + 적색"},
      {num: 3, text: "적색 + 황색"},
      {num: 4, text: "적색 + 녹색"}
    ],
    value : 2
  },
  {
    num : 23,
    title : "버터스펀지 케이크를 만들 때 반죽에서 버터는 몇 ℃로 용해하여 사용하는게 좋은가?",
    sub: [
      {num: 1, text: "30℃"},
      {num: 2, text: "60℃"},
      {num: 3, text: "90℃"},
      {num: 4, text: "100℃"}
    ],
    value : 2
  },
  {
    num : 24,
    title : "다음중 로열아이싱(royal icing)의 주원료로 적당한 것은?",
    sub: [
      {num: 1, text: "주석산"},
      {num: 2, text: "설탕"},
      {num: 3, text: "흰자"},
      {num: 4, text: "노른자"}
    ],
    value : 3
  },
  {
    num : 25,
    title : "제과용 밀가루의 주요 기능은?",
    sub: [
      {num: 1, text: "구조형성"},
      {num: 2, text: "유화작용"},
      {num: 3, text: "감미도 조절"},
      {num: 4, text: "껍질색"}
    ],
    value : 1
  },
  {
    num : 26,
    title : "제과에 많이 쓰이는 “럼주”는 무엇을 원료로 하여 만드는 술인가?",
    sub: [
      {num: 1, text: "옥수수전분"},
      {num: 2, text: "포도당"},
      {num: 3, text: "당밀"},
      {num: 4, text: "타피오카"}
    ],
    value : 3
  },
  {
    num : 27,
    title : "계란의 고형분 함량으로 맞는 것은?",
    sub: [
      {num: 1, text: "25%"},
      {num: 2, text: "50%"},
      {num: 3, text: "75%"},
      {num: 4, text: "80%"}
    ],
    value : 1
  },
  {
    num : 28,
    title : "물 100g에 설탕 150g을 녹이면 당도는 몇 %인가?",
    sub: [
      {num: 1, text: "20%"},
      {num: 2, text: "40%"},
      {num: 3, text: "60%"},
      {num: 4, text: "80%"}
    ],
    value : 3
  },
  {
    num : 29,
    title : "쇼트닝에 함유된 지방함량은?",
    sub: [
      {num: 1, text: "40%"},
      {num: 2, text: "60%"},
      {num: 3, text: "80%"},
      {num: 4, text: "100%"}
    ],
    value : 4
  },
  {
    num : 30,
    title : "물중의 기름을 분산시키고 또 분산된 기름을 응고 하지않도록 안정화 시키는 작용을 돕는 것은?",
    sub: [
      {num: 1, text: "팽창제"},
      {num: 2, text: "강화제"},
      {num: 3, text: "개량제"},
      {num: 4, text: "유화제"}
    ],
    value : 4
  },
  {
    num : 31,
    title : "흰자를 사용하는 제품에 주석산크림이나 식초를 첨가하는 이유로 부적당한 것은?",
    sub: [
      {num: 1, text: "알카리성의 흰자를 중화함"},
      {num: 2, text: "풍미를 좋게 함"},
      {num: 3, text: "색깔을 희게 함"},
      {num: 4, text: "pH를 낮춤으로 흰자를 강력하게 함"}
    ],
    value : 2
  },
  {
    num : 32,
    title : "별 모양깍지를 이용하여 모양을 만들려고 한다. 다음 중 어떤 것이 적당한가?",
    sub: [
      {num: 1, text: "조개모양"},
      {num: 2, text: "장미 꽃"},
      {num: 3, text: "글씨쓰기"},
      {num: 4, text: "코스모스 꽃"}
    ],
    value : 1
  },
  {
    num : 33,
    title : "다음 첨가제 중에서 착색료의 효과는?",
    sub: [
      {num: 1, text: "몸에 이로운 성분이 들어서 많이 먹어도 된다."},
      {num: 2, text: "육류나 생선의 냄새를 완화시킨다."},
      {num: 3, text: "매운 맛과 향기로 혀, 코, 위장을 자극하여 식욕을 억제한다."},
      {num: 4, text: "제품에 식욕을 불러일으키는 맛있는 색을 부여 한다."}
    ],
    value : 4
  },
  {
    num : 34,
    title : "결핵의 중요한 감염원이 될 수 있는 것은?",
    sub: [
      {num: 1, text: "토끼고기"},
      {num: 2, text: "양고기"},
      {num: 3, text: "돼지고기"},
      {num: 4, text: "불완전 살균우유"}
    ],
    value : 4
  },
  {
    num : 35,
    title : "식품과 부패에 관여하는 주요 미생물의 연결이 옳지 않은 것은?",
    sub: [
      {num: 1, text: "육류 - 세균"},
      {num: 2, text: "어패류 - 곰팡이"},
      {num: 3, text: "통조림 - 포자형성세균"},
      {num: 4, text: "곡류 - 곰팡이"}
    ],
    value : 2
  },
  {
    num : 36,
    title : "다음 중에서 조절영양소로 적합한 것은?",
    sub: [
      {num: 1, text: "비타민, 지방"},
      {num: 2, text: "비타민, 무기질"},
      {num: 3, text: "탄수화물, 단백질"},
      {num: 4, text: "단백질, 지방"}
    ],
    value : 2
  },
  {
    num : 37,
    title : "소다(중조) 1.2%를 사용하는 배합비율의 팽창제를 베이킹파우더로 대체하고자할 때 사용량으로 알맞은 것은?",
    sub: [
      {num: 1, text: "1.2%"},
      {num: 2, text: "2.4%"},
      {num: 3, text: "3.6%"},
      {num: 4, text: "4.8%"}
    ],
    value : 3
  },
  {
    num : 38,
    title : "알레르기(allergy)성 식중독의 주된 원인 식품은?",
    sub: [
      {num: 1, text: "오징어"},
      {num: 2, text: "꽁치"},
      {num: 3, text: "갈치"},
      {num: 4, text: "광어"}
    ],
    value : 2
  },
  {
    num : 39,
    title : "다음 중 버터크림에 사용하기에 알맞은 향료는?",
    sub: [
      {num: 1, text: "에센스 타입"},
      {num: 2, text: "오일 타입"},
      {num: 3, text: "농축 타입"},
      {num: 4, text: "분말 타입"}
    ],
    value : 1
  },
  {
    num : 40,
    title : "일반적으로 가장 낮은 회분 함량을 가진 밀가루로 만들어야 좋은 제품은?",
    sub: [
      {num: 1, text: "쿠키"},
      {num: 2, text: "파이"},
      {num: 3, text: "크래커"},
      {num: 4, text: "스펀지 케이크"}
    ],
    value : 4
  },
  {
    num : 41,
    title : "제과 재료인 땅콩에 들어있는 성분 중 가장 많은 것은?",
    sub: [
      {num: 1, text: "수분"},
      {num: 2, text: "섬유질"},
      {num: 3, text: "단백질"},
      {num: 4, text: "지방"}
    ],
    value : 4
  },
  {
    num : 42,
    title : "액체재료(물, 우유)의 응고제로 부적당한 것은?",
    sub: [
      {num: 1, text: "탄산수소나트륨"},
      {num: 2, text: "젤라틴"},
      {num: 3, text: "한천"},
      {num: 4, text: "전분"}
    ],
    value : 1
  },
  {
    num : 43,
    title : "글씨용 버터크림을 제조한 후 되기조절 목적으로 사용하는 원료는?",
    sub: [
      {num: 1, text: "마가린"},
      {num: 2, text: "식용유"},
      {num: 3, text: "쇼트닝"},
      {num: 4, text: "카카오버터"}
    ],
    value : 2
  },
  {
    num : 44,
    title : "버터와 마가린의 차이는?",
    sub: [
      {num: 1, text: "지방 함량"},
      {num: 2, text: "소금 함량"},
      {num: 3, text: "지방의 조성"},
      {num: 4, text: "수분 함량"}
    ],
    value : 3
  },
  {
    num : 45,
    title : "소맥분의 질을 판단하는 기준이 되는 것은?",
    sub: [
      {num: 1, text: "소맥의 양"},
      {num: 2, text: "단백질 함량"},
      {num: 3, text: "생산지"},
      {num: 4, text: "분산성"}
    ],
    value : 2
  },
  {
    num : 46,
    title : "다음 중에서 “축 입학” 의 한자어는?",
    sub: [
      {num: 1, text: "祝  立 學"},
      {num: 2, text: "祝  粒 學"},
      {num: 3, text: "祝  笠 學"},
      {num: 4, text: "祝  入 學"}
    ],
    value : 4
  },
  {
    num : 47,
    title : "다음 당류 중 물에 잘 녹지 않는 것은?",
    sub: [
      {num: 1, text: "과당"},
      {num: 2, text: "유당"},
      {num: 3, text: "포도당"},
      {num: 4, text: "맥아당"}
    ],
    value : 2
  },
  {
    num : 48,
    title : "젤리 롤을 마는 작업 시 겉면이 터질 때, 행하여야 할 조치 사항 중 잘못된 것은?",
    sub: [
      {num: 1, text: "유지 사용량을 늘인다."},
      {num: 2, text: "설탕 일부를 물엿으로 대치한다."},
      {num: 3, text: "팽창 요인을 줄인다."},
      {num: 4, text: "덱스트린을 사용하면 점착성이 증가한다."}
    ],
    value : 1
  },
  {
    num : 49,
    title : "복어 식중독을 일으키는 독성분은?",
    sub: [
      {num: 1, text: "삭시톡신"},
      {num: 2, text: "솔라닌"},
      {num: 3, text: "테트로톡신"},
      {num: 4, text: "베네루핀"}
    ],
    value : 3
  },
  {
    num : 50,
    title : "야채를 통해서 감염되는 대표적인 기생충은?",
    sub: [
      {num: 1, text: "선모충"},
      {num: 2, text: "광절열두조충"},
      {num: 3, text: "회충"},
      {num: 4, text: "폐흡충"}
    ],
    value : 3
  },
  {
    num : 51,
    title : "모기, 파리를 구제할 수 있는 가장 안정적인 것은?",
    sub: [
      {num: 1, text: "살충제를 사용한다."},
      {num: 2, text: "발생지를 제거한다."},
      {num: 3, text: "유충을 구제한다."},
      {num: 4, text: "음식물을 냉장고에 보관한다."}
    ],
    value : 2
  },
  {
    num : 52,
    title : "식품제조 공정 중에서 거품을 없애는 용도로 사용 되는 첨가물은?",
    sub: [
      {num: 1, text: "글리세린"},
      {num: 2, text: "프로필렌 글리콜"},
      {num: 3, text: "피피로닐 부톡사이드"},
      {num: 4, text: "실리콘 수지"}
    ],
    value : 4
  },
  {
    num : 53,
    title : "다음 진급을 하거나 더 좋은 부서로 옮겼을 때 축하의 뜻으로 전하는 말은?",
    sub: [
      {num: 1, text: "祝 入選"},
      {num: 2, text: "祝 榮典"},
      {num: 3, text: "祝 盛典"},
      {num: 4, text: "祝 合格"}
    ],
    value : 2
  },
  {
    num : 54,
    title : "한천은 다음 중 어떤 재료에서 만들어지나?",
    sub: [
      {num: 1, text: "수목류"},
      {num: 2, text: "어패류"},
      {num: 3, text: "해조류"},
      {num: 4, text: "화학합성품"}
    ],
    value : 3
  },
  {
    num : 55,
    title : "다음 중 지방을 분해하는 효소는?",
    sub: [
      {num: 1, text: "인벌타제"},
      {num: 2, text: "찌마제"},
      {num: 3, text: "프로티아제"},
      {num: 4, text: "리파아제"}
    ],
    value : 4
  },
  {
    num : 56,
    title : "커피를 넣어 아이싱하는 것을 무엇이라 하는가?",
    sub: [
      {num: 1, text: "크림아이싱"},
      {num: 2, text: "단순아이싱"},
      {num: 3, text: "모카아이싱"},
      {num: 4, text: "컴비네이션아이싱"}
    ],
    value : 3
  },
  {
    num : 57,
    title : "다음 중 이당류에 속하는 것은?",
    sub: [
      {num: 1, text: "과당"},
      {num: 2, text: "설탕"},
      {num: 3, text: "포도당"},
      {num: 4, text: "갈락토오스"}
    ],
    value : 2
  },
  {
    num : 58,
    title : "쌀은 무슨 영양소 인가?",
    sub: [
      {num: 1, text: "단백질"},
      {num: 2, text: "지방"},
      {num: 3, text: "탄수화물"},
      {num: 4, text: "무기질"}
    ],
    value : 3
  },
  {
    num : 59,
    title : "다음 중 수용성 비타민은?",
    sub: [
      {num: 1, text: "비타민 E"},
      {num: 2, text: "비타민 C"},
      {num: 3, text: "비타민 D"},
      {num: 4, text: "비타민 A"}
    ],
    value : 2
  },
  {
    num : 60,
    title : "'축 화혼‘ 에 맞는 한자는 어느 것인가?",
    sub: [
      {num: 1, text: "祝 聖婚"},
      {num: 2, text: "祝 結婚"},
      {num: 3, text: "祝 華婚"},
      {num: 4, text: "祝 盛婚"}
    ],
    value : 3
  }
]
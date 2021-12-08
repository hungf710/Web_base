export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const REACT_APP_WEB = process.env.REACT_APP_WEB;

export const JWT_TOKEN = "jwtToken";
export const CURRENT_USER = "currentUser";



export const EVENT_TYPE_LIST = {
    'campaign': '서명/캠페인',
    'survey_yes_no': '찬반투표',
    'survey_multiple': '다문항',
  }
  
  export const THIRD_PARTY_EVENT_CATEGORY_LIST = {
    'brand_issue': 'Brand Issue',
    'hot_and_new': 'Hot & New',
    'politics': 'Politics',
  }
  
  
  export const STATUS_EVENT = {
    'draft': '승인 전', /// approval
    'waiting_display': '대기 중',
    'on_going': '진행 중',
    // 'stand_by': '승인 전',
    'completed': '종료',
    'stopped': '중단'
  }
  // 승인 전 ==> draft
  // 대기 중 ==> waitting_display + stand_by
  // 진행 중 ==> on_going
  // 중단 ==> stopped
  // 종료 ==> completed
  // stand_by + is_paused === true => stopped
  export const TRANSACTION_TYPE = {
    'reward': '리워드 지급',
    'receiver_coin': '코인 받기',
    'send_coin': '코인 보내기',
  }

  export const NOTIFI_TYPE = {
    'app_coin_received': 'META 코인을 받았습니다',
    'web_survey_registered': '새로운 설문이 등록되었습니다',
    'web_survey_approved': '설문이 승인되었습니다',
    'web_survey_opened': '설문이 시작되었습니다',
    'web_survey_stopped': '설문이 중단되었습니다',
    'web_survey_closed': '설문이 종료되었습니다',
    'web_survey_resumed': '중단된 설문이 재진행되었습니다',
  }
  
// 교육 회차별 데이터. 공통 화면과 분리하여 다음 교육에서 재사용합니다.
window.education = {
 // 교육자료와 교육용 Claude 계정정보 확인 링크.
 resources: {
  materials:'https://www.safarion.app/login',
  account:'https://docs.google.com/spreadsheets/d/1y46UO8buCwGkOj48wA0cz9H_2oXk6quR5hmxGh_Pt9M/edit?usp=sharing'
 },
 groups: [
  {name:'A',dates:[['1일차','2026-10-12','10월 12일','월요일'],['2일차','2026-10-21','10월 21일','수요일']]},
  {name:'B',dates:[['1일차','2026-10-14','10월 14일','수요일'],['2일차','2026-10-19','10월 19일','월요일']]}
 ],
 days: [
  {title:'도구를 익히고, 나만의 스킬 만들기',items:['Cowork 이해와 기본 환경 세팅','연결 폴더 기반 파일 제어와 문서 자동화','브라우저 자료 조사와 웹·로컬 연계','Office 애드인(Microsoft 365) 실무 연동','MCP와 외부 도구·커넥터 연동','스킬 이해와 활용','스킬 분석과 설계','스킬 제작과 배포']},
  {title:'맥락을 연결하고, 자동화 완성하기',items:['아침 업무 브리핑 실습','직군별 플러그인·스킬 탐색 및 구성','컨텍스트 폴더와 CLAUDE.md 설계','RSS 경제뉴스 호재·악재 자동 분류','예약 작업과 무인 실행 자동화','다중 에이전트와 오케스트레이션','최종 미니 프로젝트 · 2개 차시']}
 ]
};

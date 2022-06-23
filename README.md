# 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

1. 레포지토리 코드 다운로드
2. 최상위 디렉토리에서 `yarn init` 실행
3. `index.html`의 `<noscript>` 태그 지우고 아래 코드 삽입
```html
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=a68ed45b5be30b286b4dacec0b31d924"></script>
```
3. `DatePicker.js` 에서, `SERVER_URL`을 본인 환경에 맞게 알맞게 설정(대개 localhost:3000 입니다.)
4. `yarn start`실행 (편집됨) 
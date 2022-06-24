# Gachi-Tayo-FE

## 1. 개발 기간
- 2022.06.22(수)~ 2022.06.24(금)  


## 2. 팀 소개
* 팀 명: 모아모아
* 팀원 소개:
![팀소개2](https://user-images.githubusercontent.com/75000923/175468337-22375c8c-e1ac-4b59-b0eb-3a1e71600589.png)  



## 3. 프로젝트 소개- 가치타자: 택시 동승자를 찾는 웹 플랫폼
![프로젝트 주제 (1)](https://user-images.githubusercontent.com/75000923/175468634-1bb0bf1b-5084-4d07-95d1-f609fd55a323.png)  



## 4. 프로젝트 기획
### 1) 기획 배경
* 최근 40년 만에 택시 합승 제도가 부활했습니다. 하지만 택시 합승 멤버를 모집하는 서비스가 충분하지 않아, 안전하고 편리한 합승을 할 수 있는 서비스에 대한 부족함이 존재했습니다. 이에 따라 택시 동승자를 찾는 웹 플랫폼을 기획하였습니다.  


![디자인](https://user-images.githubusercontent.com/75000923/175471184-786474c3-0f23-40fe-a27a-5c5c397d2d45.png)

  
  
### 2) 기존 한계점
![설문조사](https://user-images.githubusercontent.com/75000923/175471025-3f563571-76b3-44bc-bc55-f8756d23f2cd.png)

  
  
### 3) "가치타자" 서비스의 차별성
![차별점(장점)2](https://user-images.githubusercontent.com/75000923/175471289-888c91e0-95fb-4930-a9ba-ecbc963fcbae.png)

  
  
## 5. 프로젝트 컨셉
![차별점(장점)1](https://user-images.githubusercontent.com/75000923/175471817-ef44be88-1111-4315-b8d7-de7bba609db2.png)

  
  
## 6. 프로세스 및 플로우 차트
![프로세스, 플로우](https://user-images.githubusercontent.com/75000923/175470095-850a5e5d-ac2e-480a-b07c-0a416e85d003.png)

  
  
## 7. 기술 스택

* [BE] Spring boot, Mybatis
* [BE] Mysql
* [BE] Kakao 로컬 API- 도로명 주소 -->위도, 경도 좌표 변환
* [BE] CoolSMS API- 휴대폰 본인 인증

![협업툴](https://user-images.githubusercontent.com/75000923/175469754-7191815f-01e3-475c-8854-ccfdbfbb60da.png)

  
  
### 1) API 설계
<img width="1049" alt="API 명세" src="https://user-images.githubusercontent.com/75000923/175486454-f1e6e240-92bf-4057-baec-c97c83442c2e.png">

  
  
### 2) ERD
<img width="814" alt="ERD" src="https://user-images.githubusercontent.com/75000923/175487233-fdda0eb1-a873-4295-a7cc-4b1672c74829.png">

  
  

## 8. 디자인 Asset
![디자인 에셋](https://user-images.githubusercontent.com/75000923/175473435-5fb44702-b46d-4c0d-b66b-7fa589a4cfd3.png)

  
  
## 9. 프로젝트 주 기능
![프로젝트 목표 (1)](https://user-images.githubusercontent.com/75000923/175472963-6eb3ef85-f030-424d-862e-2f0774d11286.png)

  
  
## 10. 주 기능 소개
### 1) 가치타기: 게시물을 조회하고 원하는 합승을 예약하기
* 출발지, 도착지 선택
* 원하는 반경 선택(출발지, 목적지 각각에 대해 반경이 설정되어 게시글이 필터링 됨)
* 원하는 좌석 선택  


![동승자 평가](https://user-images.githubusercontent.com/75000923/175469176-2fa436de-2a2b-43a7-86aa-95171e2660d8.png)
  
  

### 2) 가치 타요: 게시물을 작성하여 원하는 합승을 제안하기
* 출발지, 도착지 선택
* 원하는 좌석 선택
* 출발 시각 설정
* 합승할 인원 선택
  
  
![기능 소개 - 가치타기](https://user-images.githubusercontent.com/75000923/175468852-335779e0-7347-4702-aab3-2303bef03fdb.png)

  
  
### 3) 이력 및 합승자 조회 + 상호 매너 평가: 예약 이력 및 합승 내역을 조회하기.
* 완료된 합승에 대해 상호 평가 가능
* 3가지 중에 선택하여 평가  

![로그인](https://user-images.githubusercontent.com/75000923/175469525-f4337d50-83fb-48ea-8c36-6ea498678723.png)

  
  
### 4) 회원 가입시 본인 인증 절차: 회원 가입시 사용자의 휴대폰 번호로 본인 인증하기
* 입력한 휴대폰 번호로 문자가 전송되고, 올바른 인증 번호 입력해야 회원 가입 완료

![로그인](https://user-images.githubusercontent.com/75000923/175469663-1bbb2b50-f7f4-41ec-9f07-2f6f3f3b32bb.png)

  
  
## 11. 시연 영상
* https://www.youtube.com/embed/PWQDfj7aAOI

  
  
## 12. 최종 발표 영상
* https://www.youtube.com/embed/eCJD5tn4LSo

## 13. 실행

1. 레포지토리 코드 다운로드

2. 최상위 디렉토리에서 `yarn init` 실행

3. `index.html`의 `<noscript>` 태그 지우고 아래 코드 삽입
```html

<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=API_KEY"></script>
```

3. `DatePicker.js` 에서, `SERVER_URL`을 본인 환경에 맞게 알맞게 설정

4. `yarn start`실행 (편집됨) 

## 주요 기능

### 로그인 / 회원가입


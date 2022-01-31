# hanghae99-project
짤 메이킹 어플리케이션

## 프로젝트 짤공장

![멋진 로고를 볼수 있다.](https://user-images.githubusercontent.com/89088205/149082819-1557bb6e-126f-4c81-afaa-83e1531585d1.jpg)

* 사용기술 소개
  * Flask 
  * pillow
  * Jinja2
  * PyJWT
  * pymongo (mongoDB)
  * tailwind CSS

프로젝트 기간 : 2022년 1월 10일 ~ 12일

웹사이트 링크 : http://hpmp.shop

데모영상 : https://youtu.be/Df6sKdEwMY4

소개 : 재미있는 짤을 손쉽게 제작하고 공유할 수 있는 사이트


# DB 
![Copy of zzal maker](https://user-images.githubusercontent.com/42686784/150622354-47789365-96a4-49ed-8bb7-c50cd4d517ba.png)



#  SSR vs CSR
SSR은 한 번에 그려진다는 장점이 있지만,
CSR은 전체적인 시간은 SSR보다 비슷하거나 더 오래 걸리더라도 로딩창을 먼저 보여줌으로써 사용자에게 좋은 경험을 준다.

#  JWT
발급 후 토큰 검증만 하면 되기 때문에 추가 저장소가 필요 없다. 가볍다.
필요한 모든 정보를 자체적으로 지니고 있기(self-contained)때문에 두 개체 사이에서 손쉽게 전달 될 수 있다.

#  pillow
    서버 내에 이미지를 저장하고 손쉽게 텍스트와 합쳐 변환시켜주는 python 라이브러리

#  jinja2
    flask 서버 내에서 사용할 수 있는 템플릿 문법

#  mongoDB
    대표적인 non-SQL 데이터베이스, 자료가 많다.

# tailwindCSS
    간편하게 반응형 웹을 적용할 수 있게 해주는 CSS 라이브러리
    
# 우리가 해결한 문제
    이미리 처리를 어떻게 구현할 것인가
    -> 파이썬 라이브러리 PILLOW를 사용하여 해결하였다. 이미지 선택과 폰트의 색상 선택이 가능하다.
    
    화면 구성은 어떻게 할 것인가
    -> 테일윈드CSS를 사용하여 짧게 한정된 기간 내에 편리하고 빠르게 구축할 수 있었다.
    
    공유는 어떻게 할 것인가
    -> 카카오톡 공유하기 API를 이용하여 다른 사용자에게 자신이 만든 짤을 공유할 수 있게 하였다.
    

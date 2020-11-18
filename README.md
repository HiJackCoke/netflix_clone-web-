# netflix_clone

## 주요기능
 - [x] API 연동 및 받아온 DATA 뿌려주기
 - [x] Movie 구현(nowPlaying, popular, upcoming)
 - [x] Show 화면 구현(popular, topRated, airing_today)
 - [x] 검색페이지 구현 및 키워드 서칭 결과 출력
 - [x] 세부페이지 구현 및 링크 추가
 - [x]선택한 ID에 대한 비슷한 영화 및 TV 구현
 
 ## API
- [x] Now playing (Movie)
- [x] Upcoming (Movie)
- [x] Top Rated (TV)
- [x] Popular (TV, Movie)
- [x] Airing Today(TV)
- [x] TV Show Detail
- [x] Movie Detail
- [x] TV Show Similar
- [x] Movie Similar
- [x] search (Movie, TV)

## 완성화면
<img src="https://user-images.githubusercontent.com/54699548/99503103-464fe480-29c1-11eb-9e05-c70d6d1146af.gif" />
<img src="https://user-images.githubusercontent.com/54699548/99503589-bcece200-29c1-11eb-8353-ad6a53bfedf9.gif" />
<img src="https://user-images.githubusercontent.com/54699548/99503920-266cf080-29c2-11eb-9e1f-ca3a067e5c98.gif" />

## 활용 기술
 - [x] axios
 - [x] Class : Life cycle (componentDidMount)
 - [x] Functional : Hook (useState, useEffect, useCallback, useParams, useLoaction)
 
## study note
- class -> Functional 
- useParams : url parameter (id) 값 받아오기 (url과 관련된 값들을 객체로 받을 수 있다, Router로 감싼 컴포넌트 안에서만 사용 가능)
- useLocation : location 객체에 접근 가능 , location 속성인 pathname을 받아와 /movie/, /tv/를 구분

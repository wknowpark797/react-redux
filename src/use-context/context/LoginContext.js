/* 데이터 저장 공간 */

import { createContext } from 'react';
export const LoginContext = createContext(null);

/*
  [ 작업 흐름 순서 ]
  1. LoginContext.js 파일
    - 전역으로 관리할 저장 객체 생성
    - createContext를 이용해서 초기값을 null로 지정한 빈 객체를 생성
    - 해당 빈 객체는 root컴포넌트인 App에서 Provider로 해당 값을 전역으로 자식 요소에게 전달

  2. App.js 파일
    - 최상위 전역 컴포넌트

  3. Login.js 파일
*/

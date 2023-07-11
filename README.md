# useContext

- 컴포넌트 외부에서 값 관리하기

- 자식 컴포넌트의 Depth가 많을 경우 최상위 컴포넌트에서 최하위 자식 컴포넌트까지 값을 하나하나 전달하는 것은 비효율적 (Props)
- Prop Drilling: Props를 통해서 중간 단계의 컴포넌트들이 계속 값을 전달하는 상황
- Context API를 활용한 useContext Hook을 활용하면 컴포넌트 외부에 전역으로 특정 값을 관리하면서 자식 컴포넌트에 바로 값 전달이 가능
- context: 전역에서 state를 쉽게 공유할 수 있도록 해준다.

- createContext(): context 생성 후 Provider를 통해 전역으로 특정 값 전달 가능
- useContext(): createContext로 생성된 값을 원하는 자식 컴포넌트에서 자유롭게 호출 가능

---

# useReducer

## useReducer의 사용이유

- 전역의 데이터가 외부 요인에 따라 함부로 변경되면 안되기 때문에 구조적으로 데이터값을 관리하면서 변경하도록 강제하는 시스템적인 틀

## useReducer에서 중요한 개념

- dispatch (전달자): state 정보값에 변경 요청을 전달해주는 전달자
- reducer (변형자): dispatch로 전달받은 요청에만 반응하여 전역 데이터를 변경해주는 변경자
- action (변경내용): dispatch로 전달요청을 보낼 때 변경사항이 담겨있는 특별한 객체

  - {type: '변경방법', payload: '변경할 데이터'}

- 사용자가 보낸 action객체를 dispatch가 reducer에 전달하면 reducer는 action의 type에 따라 payload값으로 전역 데이터 변경

## 정리

- dispatch가 action객체를 가지고 변경요청을 보내면 reducer는 action객체의 타입에 따라 같이 전달된 payload값으로 기존 전역 state를 변경

# useContext

- 컴포넌트 외부에서 값 관리하기

- 자식 컴포넌트의 Depth가 많을 경우 최상위 컴포넌트에서 최하위 자식 컴포넌트까지 값을 하나하나 전달하는 것은 비효율적 (Props)
- Prop Drilling: Props를 통해서 중간 단계의 컴포넌트들이 계속 값을 전달하는 상황
- Context API를 활용한 useContext Hook을 활용하면 컴포넌트 외부에 전역으로 특정 값을 관리하면서 자식 컴포넌트에 바로 값 전달이 가능
- context: 전역에서 state를 쉽게 공유할 수 있도록 해준다.

- createContext(): context 생성 후 Provider를 통해 전역으로 특정 값 전달 가능
- useContext(): createContext로 생성된 값을 원하는 자식 컴포넌트에서 자유롭게 호출 가능

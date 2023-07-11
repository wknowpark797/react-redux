import { useReducer } from 'react';

// 1. 전역 데이터를 변경해주는 규칙을 갖고 있는 변형자 함수
const reducer = (state, action) => {
	switch (action.type) {
		case 'minus':
			return state - action.payload;
		case 'plus':
			return state + action.payload;
		default:
			return state;
	}
};

function App() {
	// 2. 변형자 함수와 초기값을 인수로 전달받아 전역 state와 전달자 함수를 생성해주는 useReducer 호출
	// const [초기값으로 만들어진 전역 state, 해당 state를 변경하기 위한 action객체 전달함수] = useReducer(변경함수, 초기값);
	const [Num, dispatch] = useReducer(reducer, 0);

	return (
		<main>
			<h1>{Num}</h1>

			{/* 3. 이벤트 발생시 useReducer로 활성화 시킨 dispatch 함수로 action객체 Reducer에 전달 */}
			<button onClick={() => dispatch({ type: 'minus', payload: 1 })}>MINUS</button>
			<button onClick={() => dispatch({ type: 'plus', payload: 1 })}>PLUS</button>
		</main>
	);
}

export default App;

import { useContext } from 'react';
import { LoginContext } from './context/LoginContext';

function Login() {
	const login = useContext(LoginContext);

	return (
		<article>
			<button onClick={() => login.setLogin(true)}>로그인</button>
			<button onClick={() => login.setLogin(false)}>로그아웃</button>
		</article>
	);
}

export default Login;

/*
  3. 전역 정보값을 가져와서 로그인, 로그아웃 버튼 클릭시 해당 전역 정보값을 자유롭게 변경
    - useContext를 이용해서 LoginContext값을 자유롭게 사용 가능
*/

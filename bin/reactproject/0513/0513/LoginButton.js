
import {withRouter} from 'react-router-dom'

export default function LoginButton(props){
	console.log(props);
	function login() {
		setTimeout(() => {
			props.history.push('/');
		},1000);
	}

	return <button onClick={login}>로그인</button>
}
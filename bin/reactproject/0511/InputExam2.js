import React, {useState} from 'react';

function InputExam(){
	const [text, setText] = useState('');

	const onChange=(e)=>{
		console.log(e.target.value)
		setText(e.target.value)
	}

	const onReset=()=>{
		setText('');
	}

	return(
		<div>
			<input onChange={onChange} value={text}></input>
			<button onClick={onReset}>초기화</button>

			<div>
				<b>value : </b>
				{text}
			</div>

		</div>

	);

}


export default InputExam;
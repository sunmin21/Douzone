export default function Profile(props){
	const id = props.match.params.id;
	console.log(id, typeof id)
	return( 
		<>
			<div>Profile page</div>
			<p>id는 {id}입니다.</p>
		</>
		);
}
// // Input.js
// import React, { PureComponent } from 'reat';
// import PropTypes from 'prop-types';

// class Input extends PureComponent {
// 	constructor(props){
// 		super(props);
// 		this.setRef = this.setRef.bind(this);
// 		this.handleChange = this.handleChange.bind(this);
// 	}

// 	handleChange(e) {
// 		const { name, onChange } = this.props;
// 		if( onChange ) {
// 			onChange(name, e.target.value);
// 		}
// 	}

// 	componentDidMount(){
// 		if(this.props.autoFocus) {
// 			this.setRef.autoFocus();
// 		}
// 	}
// 	componentDidUpdate(){
// 		if(this.props.autoFocus) {
// 			this.setRef.autoFocus();
// 		}
// 	}
// 	setRef(ref){
// 		this.ref = ref;
// 	}

// 	render(){
// 		const { errorMessage, label, name, value, type, onFocus} = this.props;

// 		return(
// 			<label>
// 				{label}
// 				<input
// 					id={`input_${name}`}
// 					ref={this.setRef}
// 					onChange={this.handleChange}
// 					onFocus={onFocus}
// 					value={value}
// 					type={type}
// 				/>
// 				{errorMessage && <span className="error">{errorMessage}</span>}
// 			</label>
// 		);
// 	}
// }

// Input.propTypes = {
// 	type: PropTypes.oneOf(['text', 'number', 'price']),
// 	name: PropTypes.string.isRequired,
// 	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// 	errorMessage: PropTypes.string,
// 	label: PropTypes.string,
// 	onChange: PropTypes.func,
// 	onFous: PropTypes.func,
// 	autoFocus: PropTypes.bool,
// };

// Input.defaultProps = {
// 	onChange: () =>{},
// 	onFocus: () => {},
// 	autoFocus: false,
// 	type: 'text',
// };

// export default Input;











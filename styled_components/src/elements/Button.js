import styled, { css } from 'styled-components';

const Button = styled.button`
	background: #83d394;
	display: inline-block;
	padding: 20px;
	border: none;
	border-radius: 3px;
	font-weight: bold;
	font-family: Arial, sans-serif;
	cursor: pointer;
	transition: .3s ease all;
	width: ${props => props.length ?  '100%' : 'auto'}; /* if we want to use dynamic width */

	&:hover {
		background: #44a559;
    color: #fff;
	}

	/*
	 * Create the arrow function to can access to props and add styles
	 * the props black is used where the component button will be used
	*/
	${props => props.black && css`
		background: #000;
		color: #fff;
	`}

	${props => props.marginTop && css`
		margin-top: 10px;
	`}

	${props => props.marginRight && css`
		margin-right: 10px;
	`}
`;

export default Button;
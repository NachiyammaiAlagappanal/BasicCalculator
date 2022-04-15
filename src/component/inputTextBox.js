import { React } from 'react';

const InputTextBox = (context) => {
	const { state: number, actions } = context;

	return (
		<input
			checked={ number }
			onChange={ () => actions.display() }
		/>);
};

export default InputTextBox;

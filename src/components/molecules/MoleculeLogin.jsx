import { useState } from "react";
import AtomButton from "../atoms/AtomButton";
import AtomForm from "../atoms/AtomForm";
import AtomInput from "../atoms/AtomInput";

export default function MoleculeLogin({ onLogin }) {
	// NOTE: Используй одно состояние для формы. Также рекомендуется хранить состояние (лучше отдельно) isLoading и pending

	const [formState, setFormState] = useState({
		isLoading: false,
		error: null,
		data: {
			email: '',
			password: '',
		},
	});

	function handleSubmit(e) {
		e.preventDefault();
		onLogin(formState.data);
	}

	function handleEmail(e) {
		setFormState({ ...formState, data: { ...formState.data, email: e.target.value } });
	}
	function handlePassword(e) {
		setFormState({ ...formState, data: { ...formState.data, password: e.target.value } });
	}
	return (
		<AtomForm onSubmit={handleSubmit}>
			<AtomInput handleChange={handleEmail} typeInp={'email'} placeholderInp={'Email:'} />
			<AtomInput handleChange={handlePassword} typeInp={'password'} placeholderInp={'Password:'} />
			<AtomButton type="submit">Login</AtomButton>

			{formState.isLoading && <p>Loading...</p>}
			{formState.error && <p>Error: {formState.error}</p>}
		</AtomForm>
	);
}

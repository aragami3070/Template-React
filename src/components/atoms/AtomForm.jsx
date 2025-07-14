import style from './AtomForm.module.css';

export default function AtomForm( {children} ) {
	return (
		<form className={style.AtomForm}>
			{children}
		</form>
	);
}

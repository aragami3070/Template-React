import styles from './AtomForm.module.css';

export default function AtomForm( {onSubmit, children} ) {
	return (
		<form className={styles.AtomForm} onSubmit={onSubmit}>
			{children}
		</form>
	);
}

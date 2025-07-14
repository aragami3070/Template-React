import styles from './AtomForm.module.css';

export default function AtomForm( {children} ) {
	return (
		<form className={styles.AtomForm}>
			{children}
		</form>
	);
}

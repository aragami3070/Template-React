import styles from './AtomButton.module.css';

export default function AtomButton({ type, children }) {
	return (
		<button className={styles.AtomButton} type={type}>
			{children}
		</button>
	);
}

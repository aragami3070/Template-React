import styles from './AtomButton.module.css';

export default function AtomButton({ children }) {
	return (
		<button className={styles.AtomButton}>
			{children}
		</button>
	);
}

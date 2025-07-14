import style from './AtomButton.module.css';

export default function AtomButton({ children }) {
	return (
		<button className={style.AtomButton}>
			{children}
		</button>
	);
}

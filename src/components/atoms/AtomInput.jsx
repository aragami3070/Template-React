import styles from './AtomInput.module.css';
export default function AtomInput(props) {
	return (
		<input className={styles.AtomInput} type={props.typeInp} placeholder={props.placeholderInp} onChange={props.handleChange}/>
	);
}

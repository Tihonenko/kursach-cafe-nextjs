import styles from './button.module.scss';

const FormButton = ({ children }) => {
	return (
		<button className={`transition-settings ${styles.form_button}`}>
			{children}
		</button>
	);
};

export default FormButton;

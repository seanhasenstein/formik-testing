import { ErrorMessage as FormikErrorMessage } from 'formik';
import styles from '../styles/Form.module.css';

const ErrorMessage = ({ field }) => (
  <FormikErrorMessage name={field} component="div" className={styles.error} />
);

export default ErrorMessage;

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from './ErrorMessage';
import styles from '../styles/Form.module.css';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  street1: '',
  street2: '',
  city: '',
  state: '',
  zipcode: '',
  wiaaClass: '',
  wiaaNumber: '',
  officialsAssociation: '',
  allergies: '',
  ecName: '',
  ecPhone: '',
  liabilityAgreement: false,
  cardholderName: '',
};

const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Email must be valid')
    .required('A valid email is required'),
  phone: Yup.string().required('Phone number is required'),
  street1: Yup.string().required('Street is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zipcode: Yup.string().required('Zipcode is required'),
  ecName: Yup.string().required('Name is required'),
  ecPhone: Yup.string().required('Phone number is required'),
  liabilityAgreement: Yup.boolean().oneOf(
    [true],
    'You must agree to these terms'
  ),
  cardholderName: Yup.string().required('Cardholder name is required'),
});

const TestForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegistrationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log('HELLOOOOOOO');
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 3000);
      }}
    >
      {({ values, errors, isSubmitting }) => (
        <>
          <Form className={styles.form}>
            <div className={styles.section}>
              <h3>Contact Information</h3>
              <p>Please enter your contact information here.</p>
              <div className={`${styles['lg-half']} ${styles['item']}`}>
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <Field type="text" name="firstName" />
                  <ErrorMessage field="firstName" />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <Field type="text" name="lastName" />
                  <ErrorMessage field="lastName" />
                </div>
              </div>
              <div className={styles.item}>
                <label htmlFor="email">Email</label>
                <Field type="text" name="email" />
                <ErrorMessage field="email" />
              </div>
              <div className={styles.item}>
                <label htmlFor="phone">Phone Number</label>
                <Field type="text" name="phone" />
                <ErrorMessage field="phone" />
              </div>
              <div className={styles.item}>
                <label htmlFor="street1">Street</label>
                <Field type="text" name="street1" />
                <ErrorMessage field="street1" />
              </div>
              <div className={styles.item}>
                <label htmlFor="street2">Apartment</label>
                <Field type="text" name="street2" />
              </div>
              <div className={styles.item}>
                <div className={styles['lg-half']}>
                  <div>
                    <label htmlFor="city">City</label>
                    <Field type="text" name="city" />
                    <ErrorMessage field="city" />
                  </div>
                  <div>
                    <label htmlFor="state">State</label>
                    <Field name="state" as="select">
                      <option value="DEFAULT">Select your state</option>
                      <option value="WI">Wisconsin</option>
                      <option value="IL">Illinois</option>
                    </Field>
                    <ErrorMessage field="state" />
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <label htmlFor="zipcode">Zipcode</label>
                <Field type="text" name="zipcode" />
                <ErrorMessage field="zipcode" />
              </div>
            </div>
            <div className={styles.section}>
              <h3>WIAA Information</h3>
              <p>Fill this section out if you work games in the WIAA.</p>
              <div className={`${styles['lg-half']} ${styles['item']}`}>
                <div>
                  <label htmlFor="wiaaClass">WIAA Classification</label>
                  <Field name="wiaaClass" as="select">
                    <option value="DEFAULT">Select your classification</option>
                    <option value="MASTER">Master</option>
                    <option value="L5">L5</option>
                    <option value="L4">L4</option>
                    <option value="L3">L3</option>
                    <option value="L2">L2</option>
                    <option value="L1">L1</option>
                    <option value="LR">LR</option>
                    <option value="NEW_OFFICIAL">New Official</option>
                  </Field>
                </div>
                <div>
                  <label htmlFor="wiaaNumber">WIAA Number</label>
                  <Field type="text" name="wiaaNumber" />
                </div>
              </div>
              <label htmlFor="officialsAssociation">
                Officials Associations
              </label>
              <Field type="text" name="officialsAssociation" />
            </div>
            <div className={styles.section}>
              <h3>Food Allergies</h3>
              <p>Please list any food allergies that you have.</p>
              <label htmlFor="allergies">Food Allergies</label>
              <Field type="text" name="allergies" />
            </div>
            <div className={styles.section}>
              <h3>Emergency Contact</h3>
              <p>Please list someone we may contact in case of an emergency.</p>
              <div className={`${styles['lg-half']} ${styles['item']}`}>
                <div>
                  <label htmlFor="ecName">Name</label>
                  <Field type="text" name="ecName" />
                  <ErrorMessage field="ecName" />
                </div>
                <div>
                  <label htmlFor="ecPhone">Phone Number</label>
                  <Field type="text" name="ecPhone" />
                  <ErrorMessage field="ecPhone" />
                </div>
              </div>
            </div>
            <div className={styles.section}>
              <h3>Liability Agreement</h3>
              <div className={styles.item}>
                <label className={styles.liabilityAgreement}>
                  <Field type="checkbox" name="liabilityAgreement" />
                  By checking this box you agree to release the WBYOC from all
                  liability for any injuries or illness while attending camp.
                </label>
                <ErrorMessage field="liabilityAgreement" />
              </div>
            </div>
            <div className={styles.section}>
              <h3>Payment Details</h3>
              <p>Enter your payment details here.</p>
              <div className={styles.item}>
                <label htmlFor="cardholderName">Cardholders Name</label>
                <Field type="text" name="cardholderName" />
                <ErrorMessage field="cardholderName" />
              </div>
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Form'}
            </button>
          </Form>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </>
      )}
    </Formik>
  );
};

export default TestForm;

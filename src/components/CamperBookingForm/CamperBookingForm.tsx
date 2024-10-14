import css from './CamperBookingForm.module.css';
import { Field, Form, Formik } from 'formik';
import Button from '../../components/Button/Button';

const CamperBookingForm = () => {
  return (
    <div className={css.form_block}>
      <div className={css.form_title__block}>
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          bookingDate: '',
          comment: '',
        }}
        onSubmit={() => console.log('Form')}
      >
        <Form className={css.form}>
          <Field
            type="text"
            name="name"
            placeholder="Name*"
            className={css.form_input}
          />
          <Field
            type="email"
            name="email"
            placeholder="Email*"
            className={css.form_input}
          />
          <Field
            type="text"
            name="dateBooking"
            placeholder="Booking date*"
            className={css.form_input}
          />
          <Field
            as="textarea"
            name="comment"
            placeholder="Comment"
            className={`${css.form_input} ${css.form_textarea}`}
          />
        </Form>
      </Formik>

      <Button onClick={() => console.log('first: ')}>Send</Button>
    </div>
  );
};

export default CamperBookingForm;

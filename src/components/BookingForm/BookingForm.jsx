import styles from './BookingForm.module.scss';
import { Button } from 'components/UI/Button/Button';

const BookingForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, date, comment } = e.target.elements;
    const data = {
      name: name.value,
      email: email.value,
      date: date.value,
      comment: comment.value,
    };
    console.log(data);
  };

  return (
    <div className={styles.bookingForm}>
      <h4 className={styles.formTitle}>Book your campervan now</h4>
      <span className={styles.slogan}>
        Stay connected! We are always ready to help you.
      </span>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <div className={styles.dateBar}>
          <input type="date" name="date" min="2020-01-01" max="2025-12-31" />
        </div>
        <textarea
          name="comment"
          placeholder="Comment"
          rows="4"
          pattern="^[a-zA-Z0-9\s.,!?']*$"
        ></textarea>
        <Button text="Send" type="submit" />
      </form>
    </div>
  );
};

export default BookingForm;

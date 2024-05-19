import style from './RadioButton.module.scss';

export const RadioButton = ({ label, icon }) => {
  return (
    <div className={style.container}>
      <input
        className={style.hidden}
        type="radio"
        id={label}
        name="venType"
        value={label}
      />
      <label htmlFor={label} className={style.label}>
        {icon}
        {label}
      </label>
    </div>
  );
};

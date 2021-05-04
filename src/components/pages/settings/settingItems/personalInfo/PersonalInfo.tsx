import styles from "./personalInfo.module.scss";

export const PersonalInfo = () => {

  const className: string = styles.PersonalInfo

  return (
    <div className={className}>
      <h2>Персональные данные (335588)</h2>

      <h3>Введите ваши персональные данные и выбирте место вашего проживания</h3>
    </div>
  );
};

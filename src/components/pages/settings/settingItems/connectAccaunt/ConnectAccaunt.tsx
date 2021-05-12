import styles from "./connectAccaunt.module.scss";

export const Connect = () => {
  const className: string = styles.connectAccaunt;

  return (
    <div className={className}>
      <h2>Управление аккаунтом сервиса</h2>

      <h3>Нажмите, чтобы ввести логин и пароль для подключиния к сервису.</h3>
    </div>
  );
};

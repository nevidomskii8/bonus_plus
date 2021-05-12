import styles from "./infoVideo.module.scss";

export const InfoVideo = () => {
  const className: string = styles.infoVideo;

  return (
    <div className={className}>
      <h2>Информация о услуге видеонаблюдения</h2>

      <h3>Нажмите, чтобы прочитать о сервисе "Видеонаблюдение".</h3>
    </div>
  );
};

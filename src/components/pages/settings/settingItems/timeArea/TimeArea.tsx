import styles from './timeArea.module.scss'


export const TimeArea = () => {

    const className: string = styles.timeArea

    return (
        <div className={className}>
            <h2>Временная зона</h2>

            <h3>Выбирите вашу временную зону для правильного отображения программы передач.</h3>

        </div>
    )
}
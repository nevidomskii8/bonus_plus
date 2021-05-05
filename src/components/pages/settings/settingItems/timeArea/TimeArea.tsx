import styles from './timeArea.module.scss'

const className: string = styles.timeArea

export const TimeArea = () => {
    return (
        <div className={className}>
            <h2>Временная зона</h2>

            <h3>Выбирите вашу временную зону для правильного отображения программы передач.</h3>

        </div>
    )
}
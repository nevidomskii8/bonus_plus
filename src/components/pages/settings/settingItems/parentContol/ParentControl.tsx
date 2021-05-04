import styles from "./parentControl.module.scss";


export const ParContol = () => {

    const calssName: string = styles.ParentControl

    return (
        <div className={calssName}>
            <h2>Родительский контроль</h2>
        </div>
    )
}

import { useEffect, useState } from "react";
import { useKeyBoardListener } from "../keyBoard/useKeyBoardListener";
import styles from "./CheckAge.module.scss";

const { checkAge, UIBoard, danger } = styles

const CheckAge = () => {
    const [stateFocus, setStateFocus] = useState('key-1')
    const { setIsBoardListener } = useKeyBoardListener()

    useEffect(() => {

    }, [])

    useEffect(() => {
        setIsBoardListener(true)
        return () => {
        };
    }, []);

    return (

        <div className={checkAge}>
            <div className={UIBoard}>
                <div className={danger}> value</div>
            </div>
        </div>
    );
};

export default CheckAge;

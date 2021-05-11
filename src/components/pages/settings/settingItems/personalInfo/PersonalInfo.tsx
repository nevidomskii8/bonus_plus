import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFocusActive, getFocusSection } from "../../../../../redux/selectors/mainStateSelector";
import styles from "./personalInfo.module.scss";

const persInfo: string = styles.personalInfo
const styleLI: string = styles.styleLi
const styleUl: string = styles.styleUl

export const PersonalInfo = () => {
  const focusSection = useSelector(getFocusSection)
  const [currentFocus, setCurrentFocus] = useState(null)
  const active = useSelector(getFocusActive)

  const defineState = () => {

  }

  useEffect(() => {
    //  focusSection === 'setup-detail' 
    console.log(focusSection)
  }, [focusSection])


  return (
    <div className={persInfo}>
      <h2>Персональные данные (335588)</h2>

      <h3>Введите ваши персональные данные и выбирте место вашего проживания</h3>

      <ul className={styleUl} >
        <li className={`${styleLI}`} >
          <label htmlFor="name">Имя</label>
          <input type="text" id="name" name="userName" />
        </li>
        <li className={`${styleLI}`} >
          <label htmlFor="surName">Имя</label>
          <input type="text" id="surName" name="userSurName" />

        </li>
        <li className={`${styleLI}`} >
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="userEmail" />
        </li>
        <li className={`${styleLI}`} >
          <label htmlFor="country">Страна</label>

          <select name="country" id="country">
            <option value="Ukraine">Украина</option>
            <option value="Fhanch">Франция</option>
            <option value="Spain">Испания</option>
            <option value="Itali">Италия</option>
          </select></li>
        <li className={`${styleLI}`} >
          <label htmlFor="area">Область</label>
          <select name="area" id="area">
            <option value="obl_odessa">Одесса oбл</option>
            <option value="obl_kharkov">Харьков oбл</option>
            <option value="obl_nikolaev">Николаев oбл</option>
            <option value="obl_lvov">Львов oбл</option>
            <option value="obl_uzgorod">Закарпатье oбл</option>
            <option value="obl_kiev">Киев oбл</option>
            <option value="obl_dnepr">Днепр oбл</option>
          </select>
        </li>
        <li className={`${styleLI}`} >
          <label htmlFor="city">Город</label>
          <select name="city" id="city">
            <option value="odessa">Одесса</option>
            <option value="kharkov">Харьков</option>
            <option value="nikolaev">Николаев</option>
            <option value="lvov">Львов</option>
            <option value="uzgorod">Закарпатье</option>
            <option value="kiev">Киев</option>
            <option value="dnepr">Днепр</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

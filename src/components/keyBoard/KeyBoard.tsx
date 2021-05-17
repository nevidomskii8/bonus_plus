import { useEffect, useState } from "react";
import styles from "./KeyBoard.module.scss";
import { useKeyBoardListener } from "./useKeyBoardListener";

const { key, virtualInput, keyBoard, enter, keyFocus } = styles;

const KeyBoard = () => {
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

		<div className={keyBoard}>
			<div className={virtualInput}> value</div>
			<div className={`${key} focusKey ${stateFocus === 'key-1' ? `${keyFocus} 'active'` : ''}`} id="key-1">
				1
      </div>
			<div className={`${key} focusKey ${stateFocus === 'key-2' ? `${keyFocus} 'active'` : ''} `} id="key-2">
				2
      </div>
			<div className={`${key} focusKey ${stateFocus === 'key-3' ? `${keyFocus} 'active'` : ''} `} id="key-3">
				3
      </div>
			<div className={`${key} focusKey ${stateFocus === 'key-4' ? `${keyFocus} 'active'` : ''} `} id="key-4">
				4
      </div>
			<div className={`${key} focusKey ${stateFocus === 'key-5' ? `${keyFocus} 'active'` : ''} `} id="key-5">
				5
      </div>
			<div className={`${key} focusKey ${stateFocus === 'key-6' ? `${keyFocus} 'active'` : ''} `} id="key-6">
				6
      </div>
			<div className={`${key} focusKey ${stateFocus === 'key-7' ? `${keyFocus} 'active'` : ''} `} id="key-7">
				7
      </div>
			<div className={`${key} focusKey ${stateFocus === 'key-8' ? `${keyFocus} 'active'` : ''} `} id="key-8">
				8
      </div>
			<div className={`${key} focusKey ${stateFocus === 'key-9' ? `${keyFocus} 'active'` : ''} `} id="key-9">
				9
      </div>
			<div className={`${key} focusKey ${stateFocus === 'key-0' ? `${keyFocus} 'active'` : ''} `} id="key-0">
				0
      </div>
			<div className={`${key} focusKey ${stateFocus === 'key-esc' ? `${keyFocus} 'active'` : ''} `} id="key-esc">
				esc
      </div>
			<div className={`${key} focusKey ${stateFocus === 'key-del' ? `${keyFocus} 'active'` : ''} `} id="key-del">
				del
      </div>
			<div className={`${enter} focusKey ${stateFocus === 'key-enter' ? `${keyFocus} 'active'` : ''} `} id="key-enter">
				enter
      </div>
		</div>
	);
};

export default KeyBoard;

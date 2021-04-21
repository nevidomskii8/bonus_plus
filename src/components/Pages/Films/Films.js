import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFocusSection } from '../../../redux/actions/mainStateActions';
import {
  getFocusActive,
  getFocusSection,
  getStateCarusel,
} from '../../../redux/selectors/mainStateSelector';
import './Films.scss';
import { Carousel } from 'react-responsive-carousel';

export const Films = () => {
  const focusSection = useSelector(getFocusSection);
  const dispatch = useDispatch();
  const stateCarusel = useSelector(getStateCarusel);
  const [isActive, setIsActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    focusSection === 'films' ? setIsActive(true) : setIsActive(false);
  }, [focusSection]);

  useEffect(() => {
    setIsActive(true);
  }, []);

  useEffect(() => {
    isActive && setSelectedItem(+stateCarusel);
  }, [stateCarusel]);

  return (
    <div className={`films focusable isCarusel ${focusSection === 'films' ? 'focused' : ''}`}>
      <Carousel
        axis="vertical"
        showThumbs={false}
        selectedItem={selectedItem}
        showStatus={false}
        showArrows={false}
      >
        <div className={`carusel_sl cur 0 ${+selectedItem === 0 && isActive ? 'active' : ''}`}>
          <img src="http://195.78.244.201/bonus/parsers/posterimage/valley_of_the_gods.jpg" />
        </div>
        <div className={`carusel_sl cur 1 ${+selectedItem === 1 && isActive ? 'active' : ''}`}>
          <img src="http://195.78.244.201/bonus/parsers/posterimage/valley_of_the_gods.jpg" />
        </div>
        <div className={`carusel_sl cur 2 ${+selectedItem === 2 && isActive ? 'active' : ''}`}>
          <img src="http://195.78.244.201/bonus/parsers/posterimage/valley_of_the_gods.jpg" />
        </div>
        <div className={`carusel_sl cur 3 ${+selectedItem === 3 && isActive ? 'active' : ''}`}>
          <img src="http://195.78.244.201/bonus/parsers/posterimage/valley_of_the_gods.jpg" />
        </div>
        <div className={`carusel_sl cur 4 ${+selectedItem === 4 && isActive ? 'active' : ''}`}>
          <img src="http://195.78.244.201/bonus/parsers/posterimage/valley_of_the_gods.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

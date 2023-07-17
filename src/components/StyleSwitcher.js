import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import '../css/StyleSwitcher.css';

const StyleSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Open colors section onClick
  const toggleSwitcher = () => {
    setIsOpen(!isOpen);
    setIsClicked(!isClicked);
  };

  // Change Color theme on selection
  const handleColorSelection = (color) => {
    const rootStyles = getComputedStyle(document.documentElement);
    const colorPurple = rootStyles.getPropertyValue('--color-purple');

    if (color === 'purple') {
      document.documentElement.style.setProperty('--color-purple', '#9600bf');
    } else {
      document.documentElement.style.setProperty('--color-purple', `var(--color-${color})`);
    }
  };

  return (
    <div className={`style-switcher ${isOpen ? 'open' : ''}`}>
      <div className="style-switcher-toggler" onClick={toggleSwitcher}>
        <FontAwesomeIcon
          icon={faGear}
          className={`s-icon ${isClicked ? '' : 'spin'}`}
        />
      </div>
      <h4>Theme Colors</h4>
      <div className="colors">
        <span className="color1" onClick={() => handleColorSelection('purple')}></span>
        <span className="color2" onClick={() => handleColorSelection('red')}></span>
        <span className="color3" onClick={() => handleColorSelection('brown')}></span>
        <span className="color4" onClick={() => handleColorSelection('green')}></span>
        <span className="color5" onClick={() => handleColorSelection('blue')}></span>
      </div>
    </div>
  );
};

export default StyleSwitcher;

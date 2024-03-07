import React, { useState } from 'react';
import './index.less';


interface ThemeProps {
  themeColor?: string;
}

const ThemeComponent: React.FC<ThemeProps> = ({ themeColor = 'black' }) => {
  const [currentTheme, setCurrentTheme] = useState(themeColor);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'black' ? 'white' : 'black');
  };

  return (
    <div className="container" style={{ backgroundColor: currentTheme, color: currentTheme === 'black' ? 'white' : 'black' }}>
      <div className="header">Deposit ATOM</div>
      <div className="content">
        <div className="left">
          <span>From Cusmos Hub</span>
          <span className="input" style={{ backgroundColor: currentTheme === 'black' ? 'white' : 'black', color: currentTheme === 'black' ? 'black' : 'white' }}>
            atom123sfwfwefwefwefwefwef
          </span>
        </div>
        <span>{"->"}</span>
        <div className="right">
          <span>To Osmosis</span>
          <span className="input" style={{ backgroundColor: currentTheme === 'black' ? 'white' : 'black', color: currentTheme === 'black' ? 'black' : 'white' }}>
            atom123sfwfwefwefwefwefwef
          </span>
        </div>
      </div>
      <button style={{ backgroundColor: currentTheme === 'black' ? 'white' : 'black', color: currentTheme === 'black' ? 'black' : 'white' }} onClick={toggleTheme}>
        {currentTheme === 'black' ? 'Switch to White Theme' : 'Switch to Black Theme'}
      </button>
    </div>
  );
};

export default ThemeComponent;

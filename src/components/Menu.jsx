import  { useState } from "react";

const Menu = ({setTypeOfTimer}) => {
  const [activeItem, setActiveItem] = useState('pomodoro');
  const [sliderPosition, setSliderPosition] = useState(0);

  const menuItems = ['pomodoro', 'shortBreak', 'longBreak'];
  const menuItemsTitle = ['Pomodoro', 'Short Break', 'Long Break'];

  const handleClick = (item, index) => {
    setActiveItem(item);
    setTypeOfTimer(item);
    setSliderPosition(index * 100); // Move the slider to the position of the clicked item
  };

  return (
    <div className="menu-wrapper">
    <div className="menu">
      <div 
        className="menu-item-bg" 
        style={{ transform: `translateX(${sliderPosition}%)` }} 
      />
      {menuItems.map((item, index) => (
        <div
          key={item}
          className={`menu-item ${item === activeItem ? 'menu-item-active' : ''}`}
          onClick={() => handleClick(item, index)}
        >
          {menuItemsTitle[index]}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Menu;

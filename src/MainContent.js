import React from 'react';
import './MainContent.css'; // Import your CSS file

function MainContent() {
  return (
    <div className="main-content">
      <div className="wallpaper"></div>
      <div className="content">
        <h1 className='p1'>Let's Find Your </h1>
        <h1 className='p2'>Forever Food</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices lectus vitae nisl pulvinar, id porta quam tristique.
        </p>
        <div className="buttons">
          <button className="btn1">Search now</button>
          <button className="btn2">Know more</button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;

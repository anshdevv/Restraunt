import React from 'react';

import './SpecialMenu.css';
import { images, data } from '../../constants'
import { MenuItem } from '../../components';

import { SubHeading } from '../../components';


const SpecialMenu = () => (
  <>
    <div className='app__specialmenu flex__center dection__padding ' id='menu'>
      <div className="app__specialmenu-title">
        <SubHeading title='Menu that fits your palatte' />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>
      <div className="app__specialmenu-menu">
        <div className="app__specialmenu-menu_wine flex__center">
          <p className='app__specialmenu_menu_heading'>Wine and Beer</p>
          <div className="app__specialmenu_menu_items">
            {data.wines.map((wines, index) => (
             <MenuItem key={wines.title+index} title={wines.title} price={wines.price} tags={wines.tags} />
            ))};

          </div>
        </div>
        <div className="app__specialmenu-menu_img">
          <img src={images.menu} alt="menu" />
        </div>

        <div className="app__specialmenu-menu_cocktails flex__center">
          <p className='app__specialmenu_menu_heading'>Cocktails</p>
          <div className="app__specialmenu_menu_items">
            {data.cocktails.map((cocktails, index) => (
             <MenuItem key={cocktails.title+index} title={cocktails.title} price={cocktails.price}  tags={cocktails.tags} />
             
            ))};

          </div>
        </div>
      </div>
        <div style={{marginTop:'15px'}}>
          <button type='button' className='custom__button'>View More</button>
        </div>

    </div>
  </>
);

export default SpecialMenu;

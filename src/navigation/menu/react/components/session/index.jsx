import { React, useState } from 'react';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';

import ItemLine from '../item-line';

import './index.css';

const Session = ({label, items}) => {
  const [hidedMenu, setHidedMenu] = useState(false);

  function _handleClickSessionToggle(event) {
    setHidedMenu(!hidedMenu);
  }

  return (
    <div className="sample__menu__session">
      <button className="sample__menu__session-toggle" onClick={_handleClickSessionToggle}>
        <label>{label}</label>
        <Icon path={mdiChevronDown} size={"24px"} color={"#999999"}/>
      </button>
      <ul className="sample__menu__item-group" hidden={hidedMenu}>
        {items.map((item, index) => {
          return(<ItemLine link={item.link} text={item.text} key={index} />)
        })}
      </ul>
    </div>
  );
};

export default Session;
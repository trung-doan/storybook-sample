import React from 'react';
import './index.css';

const ItemLine = ({link, text}) => {
  return (
    <li className="sample__menu__item-line"><a href={link}>{text}</a></li>
  );
};

export default ItemLine;
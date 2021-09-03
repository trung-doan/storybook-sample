import React from 'react';
import Session from './components/session';

const Menu = ({ sessions }) => {
  return (
    <React.Fragment>
      {sessions.map((session, index) => {
        return (<Session label={session.label} items={session.items} key={index} />)
      })}
    </React.Fragment>
  );
};

export default Menu;
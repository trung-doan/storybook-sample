import React from 'react';

import Session from './index';

export default {
  title: 'Navigation/Menu/React/components/Session',
  component: Session,
}

const Template = (args) => <Session {...args} />;

export const session = Template.bind({});

session.args = {
  label: "session 1",
  items: [
    {link: "#", text: "Item 1"},
    {link: "#", text: "Item 2"},
    {link: "#", text: "Item 3"}
  ]
};
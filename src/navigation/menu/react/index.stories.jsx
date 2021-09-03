import React from 'react';

import Menu from './index';

export default {
  title: 'Navigation/Menu/React',
  component: Menu,
}

const Template = (args) => <Menu {...args} />;

export const menu = Template.bind({});

menu.args = {
  sessions: [
    { label: "session 1", items: [ {link: "#", text: "Item 1"}, {link: "#", text: "Item 2"}, {link: "#", text: "Item 3"} ]},
    { label: "session 2", items: [ {link: "#", text: "Item 1"}, {link: "#", text: "Item 2"}, {link: "#", text: "Item 3"} ]},
    { label: "session 3", items: [ {link: "#", text: "Item 1"}, {link: "#", text: "Item 2"}, {link: "#", text: "Item 3"} ]},
  ]
};

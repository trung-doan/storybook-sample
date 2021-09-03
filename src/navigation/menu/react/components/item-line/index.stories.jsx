import React from 'react';

import ItemLine from './index';

export default {
  title: 'Navigation/Menu/React/components',
  component: ItemLine,
}

const Template = (args) => <ItemLine {...args} />;

export const itemLine = Template.bind({});

itemLine.args = {
  link: "https://github.com/trung-doan/storybook-sample",
  text: "storybook sample"
};
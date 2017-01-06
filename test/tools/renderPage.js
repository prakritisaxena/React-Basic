import {mount} from 'enzyme';
import React from 'react';

export default function renderComponent(component) {
  return mount(
      <div>
        {component}
      </div>
  );
}
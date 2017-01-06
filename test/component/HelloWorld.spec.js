import renderPage from '../tools/renderPage';
import HelloWorld from '../../src/HelloWorld';
import ReactDOM from 'react-dom';
import {expect} from 'chai';
import React from 'react';

describe('Test for Hello World', function () {

  before(function () {
    this.page = renderPage(<HelloWorld/>);
  });

  after(function () {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.page.get(0)).parentNode);
  });

  it('should render hello world component', function() {
    expect(this.page.find('.heading').at(0).length).to.eql(1);
  });

  it('should render hello world text', function () {
    expect(this.page.find('.heading').at(0).text()).eq("Hello World!");
  });
});
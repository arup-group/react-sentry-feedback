import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { Component } from 'react'
import { configure, mount , shallow } from 'enzyme'
import Feedback from '../index.js'
import 'jest-styled-components'

configure({ adapter: new Adapter() });





test('will instantiate', () => {
  const wrapper = mount(<Feedback dsn="hiya" />)
  const instance = wrapper.instance();

  console.log(wrapper.debug())
  //expect(wrapper).toHaveStyleRule('color', 'white')
})

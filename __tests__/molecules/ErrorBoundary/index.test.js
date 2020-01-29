import React from 'react'
import { shallow } from 'enzyme'
import { ErrorBoundary } from '@/molecules'

describe('Testing App Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ErrorBoundary />)
    expect(wrapper).toMatchSnapshot()
  })
})

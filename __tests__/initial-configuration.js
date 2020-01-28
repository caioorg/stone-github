import { mount, shallow, configure } from 'enzyme'
import { cleanup, render, fireEvent, wait } from '@testing-library/react'
import Adapter from 'enzyme-adapter-react-16'
import { renderHook, act } from '@testing-library/react-hooks'

configure({ adapter: new Adapter() })

global.mount = mount
global.render = render
global.shallow = shallow
global.cleanup = cleanup
global.fireEvent = fireEvent
global.wait = wait
global.renderHook = renderHook
global.act = act
global.error = new Error('Ops, Something Went Wrong')

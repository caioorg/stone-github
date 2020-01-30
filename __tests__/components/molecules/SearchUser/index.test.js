/* eslint-disable no-undef */
import React from 'react'
import { SearchUser } from '@/components/molecules'
import { MemoryRouter } from 'react-router'
import { getUser } from '@/api/UserApi'

jest.mock('@/api/UserApi', () => {
  return {
    getUser: jest.fn(async () => ({
      error: null,
      data: {}
    }))
  }
})

beforeEach(() => {
  getUser.mockClear()
})

describe('Testing SearchUser Component', () => {
  it('Expect to render correctly ', async () => {
    const { asFragment } = await global.render(
      <MemoryRouter>
        <SearchUser />
      </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('Expect user to find the person', async () => {
    getUser.mockImplementation(async () => ({
      error: false,
      data: {
        login: 'caio'
      }
    }))

    const { container } = await global.render(
      <MemoryRouter>
        <SearchUser />
      </MemoryRouter>
    )

    global.fireEvent.change(container.querySelector('input'), { target: { value: 'caioorg' } })
    global.fireEvent.click(container.querySelector('button'))
    expect(getUser).toHaveBeenCalledTimes(1)
  })
})

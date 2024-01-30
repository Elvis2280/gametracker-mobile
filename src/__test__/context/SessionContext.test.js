import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import SessionContext from '../../contex/SessionContext'
import TestSessionContext from '../testcomponents/TestSessionContext'

describe('SessionContext', () => {
  it('render with default value', () => {
    const { getByTestId } = render(
      <SessionContext>
        <TestSessionContext />
      </SessionContext>
    )

    const isLogged = getByTestId('isLoggedTest')
    const userName = getByTestId('userTest')
    const token = getByTestId('tokenTest')
    expect(isLogged.props.children).toBe(false)
    expect(userName.props.children).toBe(undefined)
    expect(token.props.children).toBe(null)
  })

  it('render with values when user log in', () => {
    const { getByTestId } = render(
      <SessionContext>
        <TestSessionContext />
      </SessionContext>
    )

    const btnSetToken = getByTestId('setToken')
    const token = getByTestId('tokenTest')
    const isLogged = getByTestId('isLoggedTest')
    fireEvent.press(btnSetToken)
    expect(token.props.children).toBe('token')
    expect(isLogged.props.children).toBe(true)
  })
})

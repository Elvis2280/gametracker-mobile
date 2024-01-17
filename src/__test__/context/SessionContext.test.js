import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import SessionContex from '../../contex/SessionContex'
import TestSessionContext from '../testcomponents/TestSessionContext'

describe('SessionContext', () => {
  it('render with default value', () => {
    const { getByTestId } = render(
      <SessionContex>
        <TestSessionContext />
      </SessionContex>
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
      <SessionContex>
        <TestSessionContext />
      </SessionContex>
    )

    const btnSetToken = getByTestId('setToken')
    const token = getByTestId('tokenTest')
    const isLogged = getByTestId('isLoggedTest')
    fireEvent.press(btnSetToken)
    expect(token.props.children).toBe('token')
    expect(isLogged.props.children).toBe(true)
  })
})

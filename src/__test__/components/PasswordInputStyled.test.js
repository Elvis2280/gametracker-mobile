/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react-native'
import PasswordInputStyled from '../../components/PasswordInputStyled/PasswordInputStyled'
import TamaguiConfigWrapper from '../../utils/TamaguiConfigWrapper'
import '@testing-library/jest-native/extend-expect'

describe('PasswordInputStyled', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <TamaguiConfigWrapper>
          <PasswordInputStyled />
        </TamaguiConfigWrapper>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with props', () => {
    const handler = (value) => {}
    const value = 'test'
    const onblur = () => {}

    const rendered = renderer
      .create(
        <TamaguiConfigWrapper>
          <PasswordInputStyled
            value={value}
            onChange={handler}
            onBlur={onblur}
          />
        </TamaguiConfigWrapper>
      )
      .toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('renders correctly value from props and change on user change text', () => {
    const value = 'test'
    const handler = (value) => {}
    const { getByTestId } = render(
      <TamaguiConfigWrapper>
        <PasswordInputStyled value={value} onChange={handler} />
      </TamaguiConfigWrapper>
    )

    const input = getByTestId('password-input')
    expect(input.props.value).toBe('test')

    fireEvent.changeText(input, 'new value')
    expect(input.props.value).toBe('new value')
  })

  it('should change the secureTextEntry prop when the eye icon is pressed', () => {
    const { getByTestId } = render(
      <TamaguiConfigWrapper>
        <PasswordInputStyled />
      </TamaguiConfigWrapper>
    )

    const input = getByTestId('password-input')
    const eyeIcon = getByTestId('password-input-toggle')

    expect(input.props.secureTextEntry).toBe(true)

    fireEvent.press(eyeIcon)
    expect(input.props.secureTextEntry).toBe(false)

    fireEvent.press(eyeIcon)
    expect(input.props.secureTextEntry).toBe(true)
  })
})

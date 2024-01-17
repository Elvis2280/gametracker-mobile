import React from 'react'
import Home from '../../pages/home/Home'
import TamaguiConfigWrapper from '../../utils/TamaguiConfigWrapper'
import { render } from '@testing-library/react-native'

describe('Home', () => {
  it('renders correctly', () => {
    const rendered = render(
      <TamaguiConfigWrapper>
        <Home />
      </TamaguiConfigWrapper>
    )
    expect(rendered).toMatchSnapshot()
  })
})

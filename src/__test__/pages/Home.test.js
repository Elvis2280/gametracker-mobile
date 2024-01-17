import React from 'react'
import renderer from 'react-test-renderer'
import Home from '../../pages/home/Home'
import TamaguiConfigWrapper from '../../utils/TamaguiConfigWrapper'

describe('Home', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <TamaguiConfigWrapper>
          <Home />
        </TamaguiConfigWrapper>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

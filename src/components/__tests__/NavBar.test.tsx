import React from 'react'
import { render, screen, act } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { store } from '../../'
import { Provider } from 'react-redux'
import NavBar from '../NavBar'

describe('component NavBar', () => {
  test('should be correct render', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NavBar />
          </Provider>
        </BrowserRouter>
      )
    });
    expect(screen.getByTestId('icon-svg')).toBeInTheDocument()
    expect(screen.getByTestId('icon-svg')).toHaveClass('MuiSvgIcon-root')
    expect(screen.getByText(/Products/i)).toBeInTheDocument()
  })
})

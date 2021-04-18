import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import ProductCard from '../ProductCard'

describe('component ProductCard button', () => {
  test('button addToCart is render', () => {
    render(    
      <ProductCard 
        image="image"
        title='title'
        color='color'
        price='price'
        id='id'
        addToCart={jest.fn()}
      />)    
    expect(screen.getByRole('button', { name: /Add to cart/i })).toBeInTheDocument()
  })
  test('button renders with correct text', () => {
    render(    
    <ProductCard 
      image="image"
      title='title'
      color='color'
      price='price'
      id='id'
      addToCart={jest.fn()}
    />)
    expect(screen.getByRole('button', { name: /Add to cart/i })).toHaveTextContent(/Add to Cart/i)
  })
  test('click button', () => {
    render(
    <ProductCard 
      image="image"
      title='title'
      color='color'
      price='price'
      id='id'
      addToCart={jest.fn()}
    />
  ) 
    fireEvent.click(screen.getByTestId('button-add'))
    expect(screen.getByTestId('button-add')).toBeTruthy()
  })
})

describe('component ProductCard description', () => {
  test('description is render', () => {
    render(    
      <ProductCard 
        image="image"
        title='title'
        color='color'
        price='price'
        id='id'
        addToCart={jest.fn()}
      />)    
    expect(screen.getByText(/title/i)).toBeInTheDocument()
    expect(screen.getByText(/color/i)).toBeInTheDocument()
    expect(screen.getByText(/price/i)).toBeInTheDocument()
  })
})

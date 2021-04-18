
import React from 'react'
import { render, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SearchBar from "../SearchBar"
import SearchInput from '../SearchInput'

describe("component SearchInput", () => {
  test("should is empty input", () => {
    act(() => {
      const utils = render(
        <SearchBar 
          handleChangeSearchValue={jest.fn()} 
          searchValue={""} 
          selectedColor={''}
          colors={[]}
          handleChangeColorValue={jest.fn()}
        />
      )
      const input = utils.getByPlaceholderText("Search") as HTMLInputElement
      expect(input.value).toBe("")
      expect(input).toHaveValue("")
    })
  })
  test("should is empty input and focused", () => {
    act(() => {
      const utils = render(
        <SearchInput 
          handleChangeValue={jest.fn()} 
          value=''
        />
      )
      const input = utils.getByPlaceholderText("Search") as HTMLInputElement
      expect(input.value).toBe("")
      expect(input).not.toHaveFocus()
      userEvent.click(input)
      expect(input).toHaveFocus()
      expect(input).toHaveValue("")
    })
  })
  test("should have input typed value 'Hello' and focused", () => {
    act(() => {
      const utils = render(
        <SearchInput 
          handleChangeValue={jest.fn()} 
          value='Hello'
        />
      )
      const input = utils.getByPlaceholderText("Search") as HTMLInputElement
      userEvent.type(input, 'Hello')
      expect(input).toHaveFocus()
      expect(input).toHaveValue('Hello')
    })
  })
  test("should have input typed value 'Hello' and focused", () => {
    act(() => {
      const handleChange = jest.fn()
      const utils = render(
        <SearchInput 
          handleChangeValue={handleChange} 
          value='Hello'
        />
      )
      const input = utils.getByPlaceholderText("Search") as HTMLInputElement
      userEvent.type(input, 'Hello')
      expect(input).toHaveFocus()
      expect(input).toHaveValue('Hello')
      expect(handleChange).toHaveBeenCalledTimes(5)
    })
  })
})

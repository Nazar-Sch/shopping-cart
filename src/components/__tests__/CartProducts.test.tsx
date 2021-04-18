import React from "react"
import { render, screen } from "@testing-library/react"

import CartProducts from "../CartProducts"
import { store } from "../../"
import { Provider } from "react-redux"

describe("component ProductCard description", () => {
  test("description is render", () => {
    render(
      <Provider store={store}>
        <CartProducts
          image="image"
          title="title"
          color="color"
          price="price"
          id="id"
          amount={5}
        />
      </Provider>
    )
    expect(screen.getByText(/title/i)).toBeInTheDocument()
    expect(screen.getByText(/color/i)).toBeInTheDocument()
    expect(screen.getByText(/price/i)).toBeInTheDocument()
  })
})

describe("component ProductCard button", () => {
  test("button addToCart is render", () => {
    render(
      <Provider store={store}>
        <CartProducts
          image="image"
          title="title"
          color="color"
          price="price"
          id="id"
          amount={5}
        />
      </Provider>
    )
    expect(screen.getByRole("button", { name: /Remove/i })).toBeInTheDocument()
  })
  test("button renders with correct text", () => {
    render(
      <Provider store={store}>
        <CartProducts
          image="image"
          title="title"
          color="color"
          price="price"
          id="id"
          amount={5}
        />
      </Provider>
    )
    expect(screen.getByRole("button", { name: /Remove/i })).toHaveTextContent(/Remove/i)
  })
})

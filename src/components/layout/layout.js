import React from "react"
import { GlobalStyle } from "../styles/GlobalStyle"
import "./layout.css"
import Header from "./header/Header"
function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout

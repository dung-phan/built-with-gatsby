import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import MenuButton from "../../buttons/MenuButton"
import { menuData } from "../../data/menuData"
import { Link } from "gatsby"
import MenuTooltip from "../../tooltips/MenuTooltip"
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef()
  const tooltipRef = useRef()
  const handleClick = event => {
    event.preventDefault()
    setIsOpen(!isOpen)
  }
  const handleClickOutside = event => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target)
    ) {
      setIsOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    //clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])
  return (
    <Wrapper>
      <Link to="/">
        <img src="/images/logos/logo.svg" alt="logo" />
      </Link>
      <MenuWrapper count={menuData.length} ref={menuRef}>
        {menuData.map((item, index) =>
          item.link === "/account" ? (
            <MenuButton
              onClick={event => handleClick(event)}
              key={index}
              item={item}
            >
              Account
            </MenuButton>
          ) : (
            <MenuButton item={item} key={index} />
          )
        )}
        <HamburgerWrapper>
          <MenuButton
            item={{ title: "", icon: "/images/icons/hamburger.svg", link: "/" }}
          />
        </HamburgerWrapper>
      </MenuWrapper>
      <div ref={tooltipRef}>
        <MenuTooltip isOpen={isOpen} />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`
const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);
  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`
const HamburgerWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`

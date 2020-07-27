import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import logo from "../../images/logo-designcode.svg"
import styled from "styled-components"
import StripeCheckout from "react-stripe-checkout"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    const scrollTop = typeof window !== "undefined" && window.pageYOffset
    if (scrollTop > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  const handlePurchase = token => {
    const amount = 5000
    const description = "My awesome product"

    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount,
    }

    fetch("http:localhost:9000/stripe-charge", {
      method: "POST",
      body: JSON.stringify(bodyObject),
    })
  }

  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <HeaderContainer className={scrolled ? "HeaderScrolled" : ""}>
      <HeaderGroup>
        <Link to="/">
          <img src={logo} width="30" alt="Design+Code 3" />
        </Link>
        <Link to="/courses">Courses</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshops">Workshops</Link>
        <StripeCheckout
          amount={5000}
          image="https://cl.ly/0K2f1V3K3h0D/download/Logo.jpg"
          token={handlePurchase}
          stripeKey={
            "pk_test_51H9aL7Eh3RGAnd330gilU2jCshO486dOMVRVyYtQqayej9TyLM6RCDKcm91x6zzBsts7Lkx7YxLlu9E8nYN37zHV00cDm9U4N9"
          }
        >
          <HeaderButton>Buy</HeaderButton>
        </StripeCheckout>
      </HeaderGroup>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  padding: 50px 0;
  z-index: 100;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &.HeaderScrolled {
    background: rgba(0, 0, 0, 0.95);
    padding: 15px 0;
  }

  @media (max-width: 640px) {
    padding: 15px 0;
  }
`

const HeaderGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;
  justify-items: center;

  a {
    color: #ffffff;
    font-weight: 700;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(4, auto);
  }
`
const HeaderButton = styled.button`
  padding: 8px 20px;
  font-style: 20px;
  background: #56ccf2;
  border: none;
  font-weight: 700;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    background: #ffffff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import React from "react"
import styled from "styled-components"

export default function WaveBackground() {
  return (
    <Wrapper>
      <Background></Background>
      <Wave src="/images/waves/hero-wave1.svg" className="wave1" />
      <Wave src="/images/waves/hero-wave2.svg" className="wave2" />
      <BottomWave src="/images/waves/hero-wave3.svg" className="wave3" />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
`
const Wave = styled.img`
  position: absolute;
  z-index: -1;

  @media (min-width: 1440px) {
    width: 100%;
  }
  &.wave1 {
    top: 100px;
    filter: blur(60px);
  }
  &.wave2 {
    top: 350px;
  }
  &.wave3 {
    top: 550px;
  }
`
const BottomWave = styled(Wave)`
  @media (prefers-color-scheme: dark) {
    content: url("/images/waves/hero-wave3-dark.svg");
  }
`
const Background = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
`

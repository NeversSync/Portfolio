import styled, { keyframes } from 'styled-components';
import { animated } from 'react-spring';
const heroImgUrl = 'https://res.cloudinary.com/nicky-cloudinary/image/upload/c_scale,dpr_auto,f_auto,q_auto:eco,w_1412/v1519770562/Portfolio/aerial-forest-hero-img.jpg';

const Wrapper = styled.div`
color: white;
`;

const Background = styled.div`
background: linear-gradient(rgba(255,255,255,0) 0%, rgba(255,255,255,0) 60%, rgba(255,255,255, .5) 80%, rgba(255,255,255,1) 100%), url(${heroImgUrl});
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;
  text-shadow: 3px 3px 14px black;
  font-size: 6.5vw;
  text-align: center;
`;

const Title = styled(animated.h1)`
  font-size: 1.8em;
  margin: 0;
  font-weight: 400;

  @media(min-width: 768px) {
    margin: .5vw;
    font-size: .6em;
  }
`;

const SubTitle = styled(animated.h2)`
  font-size: .9em;
  font-weight: 300;

  @media(min-width: 768px) {
    font-size: .38em;
  }
`;

const arrowBounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
    transform:translateY(0);
  }
  40% {
    transform:translateY(-30px);
  }
  60% {
    transform:translateY(-15px);
  }
`;

const ArrowWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100px;
  animation: ${arrowBounce} 2s;
  animation-delay: 400ms;
  animation-iteration-count: 2;
`;

export { Wrapper, Background, Header, SubTitle, Title, ArrowWrapper };

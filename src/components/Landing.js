import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import ArrowIcon from 'react-material-icons/icons/hardware/keyboard-arrow-down';
import { Wrapper, Background, Header, SubTitle, Title, ArrowWrapper } from './styles/Landing.style';
// import backgroundImg4 from '../assets/img/aerial-forest-compressed.jpg';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'hsla(187, 55%, 50%, 1)',
      size: '100px',
      imageLoaded: false
    };

    this.hoverToggle = this.hoverToggle.bind(this);
  }

  // imageHasLoaded() {
  //   console.log('loaded');
  //   this.setState({ imageLoaded: true });
  // }

  componentDidMount() {
    this.setState({ imageLoaded: true });
  }

  hoverToggle() {
    this.state.color === 'hsla(187, 55%, 50%, 1)' ? this.setState({ color: 'hsla(187, 70%, 35%, 1)' }) : this.setState({ color: 'hsla(187, 55%, 50%, 1)' });
    this.state.size === '100px' ? this.setState({ size: '110px' }) : this.setState({ size: '100px' });
  }

  render() {
    
    return (
      <Wrapper>
          {
            this.state.imageLoaded === false ? (<Header />) : (
              <div>
            <Background>
                <Header>
                  <SubTitle>Web Developer</SubTitle>
                  <Title>Nicky Evers</Title>
                </Header>
                <ArrowWrapper>
                  <Scrollchor to="#about" animate={{ duration: 900 }}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}>
                    <ArrowIcon
                      onMouseEnter={this.hoverToggle} onMouseLeave={this.hoverToggle}
                      style={{
                        color: this.state.color,
                        width: this.state.size,
                        height: this.state.size
                      }} />
                  </Scrollchor>
                </ArrowWrapper>
        </Background>
              </div>
            )
          }
      </Wrapper>
    );
  }
}

export default Landing;

import React from 'react';
import styled from 'styled-components';
import {colors, breakPoints, fontSizes} from '../../theme/Variables';
import CustomLink from '../link';
import SocialLinks from '../socialLinks';

const ModelMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 100;
  background-color: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props) => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;
  @media (${breakPoints.desktop}) {
    display: none;
  }
`

const ListItem = styled.li`
  padding: 0.5rem;
  font-size: ${fontSizes.medium};
`

const HeaderLink = styled(CustomLink)`
  background: none;
  transition: color .3s;
  &:hover {
    color: ${colors.red}
  }
`

const ModalSocialLinks = styled(SocialLinks)`
  position: fixed;
  bottom: 10px;
  display: flex;
  > a {
    margin: 10px;
  }
`

const ModelMenu = ({isOpen, onClickHandler}) => {
    return (
        <ModelMenuWrapper isOpen={isOpen}>
          <nav>
            <ul>
              <ListItem>
                <HeaderLink 
                  to="/skills"
                  color={colors.white}
                  type={'none'}
                  onClick={onClickHandler}
                >
                  Skills
                </HeaderLink>
              </ListItem>
              <ListItem>
                <HeaderLink 
                  to="/projects"
                  color={colors.white}
                  type={'none'}
                  onClick={onClickHandler}
                >
                  Projects
                </HeaderLink>
              </ListItem> 
              <ListItem>
                <HeaderLink
                  to="/about"
                  color={colors.white}
                  type={'none'}
                  onClick={onClickHandler}
                >
                  About
                </HeaderLink>
              </ListItem>
              <ListItem>
                <HeaderLink
                  to="/contact"
                  color={colors.white}
                  type={'none'}
                  onClick={onClickHandler}
                >
                  Contact
                </HeaderLink>
              </ListItem>           
            </ul>
          </nav>
          <ModalSocialLinks/>
        </ModelMenuWrapper>
    );
}
 
export default ModelMenu;
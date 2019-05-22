import React from 'react';
import styled from 'styled-components'
import {colors, breakPoints} from '../../theme/Variables';

const Wrapper = styled.div`
    height: 4.5rem;
    width: 4.5rem;
    padding: ${(props) => props.isOpen ? `0rem` : `0.25rem`};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media (${breakPoints.desktop}) {
        display: none;
    }
`

const Line = styled.div`
    position: relative;
    width: 100%;
    height: 2px;
    transform: ${(props) => props.isOpen ? `rotate(135deg)` : `rotate(0deg)`};
    transition: transform 0.5s ease;
    background-color: ${(props) => props.isOpen ? `${colors.white}` : `${colors.black}`};
    ${Wrapper}:hover & {
        transform: ${(props) => props.isOpen && `rotate(225deg)`};
    }
    :before,
    :after {
        content: '';
        position: absolute;
        top: ${(props) => props.isOpen ? `0` : `-20px`};
        width: 100%;
        height: 2px;
        background-color: inherit;
        transform: ${(props) => props.isOpen ? `rotate(90deg)` : `rotate(0deg)`}
    }
    :after {
        top: ${(props) => props.isOpen ? `0` : `20px`};
    }
`

const Hamburger = ({onClickHandler, isOpen}) => {
    return ( 
        <Wrapper onClick={onClickHandler} isOpen={isOpen}>
            <Line isOpen={isOpen}/>
        </Wrapper>
    );
}
 
export default Hamburger;
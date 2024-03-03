import React from 'react';
import styled from "styled-components";

export const SwitcherOff = () => {
    return (
        <Wrapper>
            <NonActiveSwitcherStyled>On</NonActiveSwitcherStyled>
            <OffSwitcherStyled>Off</OffSwitcherStyled>
            <NonActiveCircle></NonActiveCircle>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    width: 300px;
    align-items: center;
    justify-content: space-between;
`

const OffSwitcherStyled = styled.div`
    width: 100px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    border: 1px solid black;
`

const NonActiveSwitcherStyled = styled.div`
    width: 100px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 1px solid black;
`

const NonActiveCircle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
`
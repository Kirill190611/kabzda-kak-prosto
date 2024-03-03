import React from 'react';
import styled from "styled-components";

export const SwitcherOn = () => {
    return (
        <Wrapper>
            <OnSwitcherStyled>On</OnSwitcherStyled>
            <NonActiveSwitcherStyled>Off</NonActiveSwitcherStyled>
            <ActiveCircle></ActiveCircle>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    width: 300px;
    align-items: center;
    justify-content: space-between;
`

const OnSwitcherStyled = styled.div`
    width: 100px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: green;
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

const ActiveCircle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: green;
`
import React from 'react';
import styled from 'styled-components'
import MainSidebar from './Compnents/MainSidebar'
import HeadBar from './Compnents/HeadBar'
import './App.css';
import OverviewMainPage from './Compnents/OverviewMainPage';
const MainDiv = styled.div`
  width: 1440px;
  height: 980px;
  background-color: #f3f5f8;
   flex-flow : row nowrap; 
   display:flex;
`;
const SecondDiv = styled.div`
  width: 1130;
  height: 980px;
  background-color: #f3f5f8;
   flex-flow : column nowrap; 
    display:flex;
`;
export default class MainPage extends React.Component {

  render() {
    return (
      <MainDiv >
        <MainSidebar />
        <SecondDiv>
          <HeadBar />
          <OverviewMainPage />
        </SecondDiv>
      </MainDiv>
    );
  }
}

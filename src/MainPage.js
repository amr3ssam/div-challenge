import React from 'react';
import {Route , Switch} from 'react-router-dom'
import {MainDiv,SecondDiv} from './Style';
import MainSidebar from './Compnents/MainSidebar'
import HeadBar from './Compnents/HeadBar'
import BankAccountComponent from './Compnents/BankAccountComponent'
import './App.css';
import OverviewMainPage from './Compnents/OverviewMainPage';
export default class MainPage extends React.Component {

  render() {
    return (
      <MainDiv >
        <MainSidebar />
        <SecondDiv>
          <HeadBar />
          <Switch>
             <Route path="/overview" component={OverviewMainPage} />
             <Route path="/bankaccounts" component={BankAccountComponent} />
          </Switch>
        </SecondDiv>
      </MainDiv>
    );
  }
}

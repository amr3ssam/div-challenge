import React from 'react';
import styled from 'styled-components'
import TotalsComponent from './TotalsComponent'
import TransactionFooterComponent from './TransactionFooterComponent'
import ChartHeaderComponent from './ChartHeaderComponent'

const MainSecondaryDiv = styled.div`
  width: 1139px;
  height: 900px;
  background-color: #f3f5f8;
`;

const TotalsDiv = styled.div`
  width: 1139px;
  height: 160px;
  background-color: #f3f5f8;
  margin-top : 20px;
`;
const TransactionChartDiv = styled.div`
  width: 1060px;
  height: 464px;
  border-radius: 2px;
  box-shadow: 0 6px 16px 0 rgba(194, 199, 215, 0.3);
  border: solid 1px #d9dfe7;
  background-color: #ffffff;
   margin-top : 20px;
   margin-left: 40px;
`;
const FooterDiv = styled.div`
   width: 1060px;
  height: 210px;
  border-radius: 2px;
  box-shadow: 0 6px 16px 0 rgba(194, 199, 215, 0.3);
  border: solid 1px #d9dfe7;
  background-color: #ffffff;
   margin-top : 20px;
    margin-left: 40px;
`;
export default class OverviewMainPage extends React.Component {

    render() {
        return (
            <MainSecondaryDiv >
                <TotalsDiv >
                    <TotalsComponent />
                </TotalsDiv>
                <TransactionChartDiv >
                    <ChartHeaderComponent />
                </TransactionChartDiv>
                <FooterDiv >
                    <TransactionFooterComponent />
                </FooterDiv>
            </MainSecondaryDiv>
        );
    }
}

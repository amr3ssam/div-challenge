import React from 'react';
import styled from 'styled-components'

const TotalsDiv = styled.div`
  width: 1139px;
  height: 160px;
  background-color: #f3f5f8;
   flex-flow : row nowrap; 
   display:flex;
`;
const AnyTotalDiv = styled.div`
   width: 342px;
  height: 157px;
  border-radius: 2px;
  box-shadow: 0 6px 16px 0 rgba(194, 199, 215, 0.3);
  border: solid 1px #d9dfe7;
  border-top: ${props => props.accountBalance ? "solid 3px #ff8d36" : props.lastTrade ? "solid 3px #ff213f" : props.lastTradeTotal ? "solid 3px #2c78ff" : "solid 1px #d9dfe7"}; 
  background-color: #ffffff;
  margin-left :  ${props => props.accountBalance ? "35px" : "24px"};
  flex-flow : column nowrap; 
 
   display:flex;
`;
const DivLabel = styled.label`
    width: 300px;
  height: 19px;
  font-family: Roboto;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: #525f7f;
  padding-top:23px;
   padding-left : 20px;
`;
const MainLabel = styled.label`
    width: 300.2px;
  height: 24px;
  font-family: Roboto;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.92;
  letter-spacing: normal;
  color: #003171;
  margin-top:8px;
   padding-left : 20px;
`;
const SecondaryLabel = styled.label`
    width: 300px;
  height: 16px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.83;
  letter-spacing: normal;
  color: #525f7f;
  margin-top:9px;
   padding-left : 20px;
`;
export default class TotalsComponent extends React.Component {

    render() {
        return (
            <TotalsDiv >
                <AnyTotalDiv accountBalance>
                    <DivLabel>
                        Aggregated account balance
                    </DivLabel>
                    <MainLabel>
                        ₦1.314.395.760
                    </MainLabel>
                </AnyTotalDiv>
                <AnyTotalDiv lastTrade >
                    <DivLabel>
                        Last Trade
                    </DivLabel>
                </AnyTotalDiv>
                <AnyTotalDiv lastTradeTotal>
                    <DivLabel>
                        Last trade
                    </DivLabel>
                    <MainLabel>
                        $ 8.332,00
                    </MainLabel>
                    <SecondaryLabel>
                        2.965.836.000 NGN
                    </SecondaryLabel>
                </AnyTotalDiv>
            </TotalsDiv>
        );
    }
}

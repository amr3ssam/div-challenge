import React from 'react';
import { TotalsDiv, AnyTotalDiv, DivLabel, MainLabel, SecondaryLabel } from '../Style'

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

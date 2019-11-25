import React from 'react';
import { FooterHeaderComponent, FooterHeaderLabel, FooterDiv } from '../Style'

export default class TransactionFooterComponent extends React.Component {

    render() {
        return (
            <FooterDiv >
                <FooterHeaderComponent>
                    <FooterHeaderLabel>
                        This is a title
                    </FooterHeaderLabel>
                </FooterHeaderComponent>
                <div />
            </FooterDiv>
        );
    }
}

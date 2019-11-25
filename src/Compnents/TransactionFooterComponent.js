import React from 'react';
import styled from 'styled-components'
const FooterComponent = styled.div`
   width: 1060px;
  height: 210px;
  opacity: 0.6;
  border-radius: 2px;
  box-shadow: 0 6px 16px 0 rgba(194, 199, 215, 0.3);
  border: solid 1px #d9dfe7;
  background-color: #ffffff;
    flex-flow : column nowrap; 
   display:flex;
`;
const FooterHeaderComponent = styled.div`
  width: 1058px;
  height: 44px;
  opacity: 0.6;
  border-radius: 2px;
  box-shadow: 0 1px 0 0 rgba(194, 199, 215, 0.3);
  background-color: #ffffff;
  padding-top:20px;
`;
const FooterHeaderLabel = styled.label`
   width: 362px;
  height: 24px;
  opacity: 0.6;
  font-family: Roboto;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  color: #8f9db4;
  margin-left: 20px;
`;
export default class TransactionFooterComponent extends React.Component {

    render() {
        return (
            <FooterComponent >
                <FooterHeaderComponent>
                    <FooterHeaderLabel>
                        This is a title
                    </FooterHeaderLabel>
                </FooterHeaderComponent>
                <div />
            </FooterComponent>
        );
    }
}

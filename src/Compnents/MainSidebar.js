import React from 'react';
import styled from 'styled-components'
import MenuIcon from '../Images/MenuIcon.svg'
import dashboard from '../Images/dashboard.svg'
import account from '../Images/account.svg'
import trade from '../Images/trade.svg'
import transaction from '../Images/transaction.svg'
import tsettings from '../Images/tsettings.svg'
import { Link } from 'react-router-dom'

const MainSidebarComponent = styled.nav`
   width: 300px;
  height: 980px;
  box-shadow: 0 2px 16px 0 rgba(59, 62, 80, 0.1), 1px 0 0 0 #d9dfe7;
  background-color: #ffffff;

  .nav-links{
      display:flex;
      justify-content: space-evenly;
      align-items:center;
      flex-flow : column nowrap;
      list-style : none;
  }
  .link{
        width: 300px;
        height: 56px; 
        flex-flow : row nowrap;
          text-decoration: none;
  }
  .li{
     width: 300px;
        height: 56px;  
          flex-flow : row nowrap; 
  }
  .moduleLabel{
        width: 300px;
        height: 56px;  
          flex-flow : row nowrap; 
  }
  .Label{
        width: 132px;
        height: 22px;
        font-family: Roboto;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.1;
        letter-spacing: normal;
        color: #8f9db4;
        text-decoration: none;
  }
  .icon{
       width: 24px;
       height: 24px;
       object-fit: contain;
       
        color: #8f9db4;
  }
`;

export default class MainSidebar extends React.Component {

    render() {
        return (
            <MainSidebarComponent>
                <div>
                    <img src={MenuIcon} alt='' />
                </div>
                <ul className='nav-links'>
                    <li className="li">
                        <Link to="/" className="link">
                            <img src={dashboard} className="icon" alt='dashboard' />
                            <label className="Label">OverView</label>

                        </Link>
                    </li>
                    <li className="li">
                        <Link to="/bankaccounts" className="link">
                            <img src={account} className="icon" alt='account' />
                            <label className="Label">Bank accounts</label>
                        </Link>
                    </li>
                    <li className="li">
                        <Link to="/tradeFX" className="link">
                            <img src={trade} className="icon" alt='trade' />
                            <label className="Label">TradeFX</label>
                        </Link>
                    </li>
                    <li className="li">
                        <Link to="/transactions" className="link">
                            <img src={transaction} className="icon" alt='transaction' />
                            <label className="Label">Transactions</label>
                        </Link>
                    </li>
                    <li className="li">
                        <Link to="/setting" className="link">
                            <img src={tsettings} className="icon" alt='tsettings' />
                            <label className="Label">Settings</label>
                        </Link>
                    </li>
                </ul>

            </MainSidebarComponent>
        );
    }
}

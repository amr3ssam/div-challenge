import React from 'react';
import MenuIcon from '../Images/MenuIcon.svg'
import dashboard from '../Images/dashboard.svg'
import account from '../Images/account.svg'
import trade from '../Images/trade.svg'
import transaction from '../Images/transaction.svg'
import tsettings from '../Images/tsettings.svg'
import symbol from '../Images/symbol.svg'
import { Link } from 'react-router-dom'
import { MainSidebarComponent, CompanyNameLabel, SideBarHeader , LiSideBar, LabelSideBar, ImgSideBar} from '../Style'


export default class MainSidebar extends React.Component {

    render() {
        return (
            <MainSidebarComponent>
                <SideBarHeader>
                    <img src={MenuIcon} className="menuIcon" alt='' />
                    <img src={symbol} className="symbol" alt='' />
                    <CompanyNameLabel>
                        Omniview
                    </CompanyNameLabel>
                </SideBarHeader>
                <ul className='nav-links'>
                    <LiSideBar selected={true}  >
                        <Link selected to="/overview" className="link">
                            <ImgSideBar selected={true}   src={dashboard}  alt='dashboard' />
                            <LabelSideBar selected={true}>OverView</LabelSideBar>

                        </Link>
                    </LiSideBar>
                     <LiSideBar   >
                        <Link to="/bankaccounts" className="link">
                            <ImgSideBar src={account}  alt='account' />
                            <LabelSideBar >Bank accounts</LabelSideBar>
                        </Link>
                           </LiSideBar   >
                       <LiSideBar   >
                        <Link to="/tradeFX" className="link">
                            <ImgSideBar src={trade}  alt='trade' />
                            <LabelSideBar >TradeFX</LabelSideBar>
                        </Link>
                           </LiSideBar   >
                      <LiSideBar   >
                        <Link to="/transactions" className="link">
                            <ImgSideBar src={transaction}  alt='transaction' />
                            <LabelSideBar >Transactions</LabelSideBar>
                        </Link>
                          </LiSideBar   >
                     <LiSideBar   >
                        <Link to="/setting" className="link">
                            <ImgSideBar src={tsettings}  alt='tsettings' />
                            <LabelSideBar >Settings</LabelSideBar>
                        </Link>
                        </LiSideBar   >
                </ul>

            </MainSidebarComponent>
        );
    }
}

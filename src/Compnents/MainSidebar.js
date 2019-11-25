import React from 'react';
import MenuIcon from '../Images/MenuIcon.svg'
import dashboard from '../Images/dashboard.svg'
import account from '../Images/account.svg'
import trade from '../Images/trade.svg'
import transaction from '../Images/transaction.svg'
import tsettings from '../Images/tsettings.svg'
import symbol from '../Images/symbol.svg'
import { Link } from 'react-router-dom'
import { MainSidebarComponent, CompanyNameLabel, SideBarHeader, LiSideBar, LabelSideBar, ImgSideBar, SideBarLinkDiv } from '../Style'


export default class MainSidebar extends React.Component {
    state = {
        selectedId: 0
    }
    handleChangeSelectedCompnent = (index) => {
        this.setState({
            selectedId: index
        })
    }
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
                    <LiSideBar selected={this.state.selectedId === 1}  >
                        <Link selected to="/overview" className="link" onClick={() => this.handleChangeSelectedCompnent(1)}>
                            <SideBarLinkDiv >
                                <ImgSideBar selected={this.state.selectedId === 1} src={dashboard} alt='dashboard' />

                                <LabelSideBar selected={this.state.selectedId === 1}>OverView</LabelSideBar>
                            </SideBarLinkDiv>
                        </Link>
                    </LiSideBar>
                    <LiSideBar selected={this.state.selectedId === 2} >
                        <Link to="/bankaccounts" className="link" onClick={() => this.handleChangeSelectedCompnent(2)}>
                            <SideBarLinkDiv >
                                <ImgSideBar selected={this.state.selectedId === 2} src={account} alt='account' />
                                <LabelSideBar selected={this.state.selectedId === 2}>Bank accounts</LabelSideBar>
                            </SideBarLinkDiv>
                        </Link>
                    </LiSideBar   >
                    <LiSideBar selected={this.state.selectedId === 3}>
                        <Link to="/tradeFX" className="link" onClick={() => this.handleChangeSelectedCompnent(3)}>
                            <SideBarLinkDiv >
                                <ImgSideBar selected={this.state.selectedId === 3}  src={trade} alt='trade' />
                                <LabelSideBar selected={this.state.selectedId === 3}>TradeFX</LabelSideBar>
                            </SideBarLinkDiv>
                        </Link>
                    </LiSideBar   >
                    <LiSideBar selected={this.state.selectedId === 4}>
                        <Link to="/transactions" className="link" onClick={() => this.handleChangeSelectedCompnent(4)}>
                            <SideBarLinkDiv >
                                <ImgSideBar selected={this.state.selectedId === 4} src={transaction} alt='transaction' />
                                <LabelSideBar selected={this.state.selectedId === 4}>Transactions</LabelSideBar>
                            </SideBarLinkDiv>
                        </Link>
                    </LiSideBar   >
                    <LiSideBar setting selected={this.state.selectedId === 5} >
                        <Link to="/setting" className="link" onClick={() => this.handleChangeSelectedCompnent(5)}>
                            <SideBarLinkDiv >
                                <ImgSideBar selected={this.state.selectedId === 5}  src={tsettings} alt='tsettings' />
                                <LabelSideBar selected={this.state.selectedId === 5} >Settings</LabelSideBar>
                            </SideBarLinkDiv>
                        </Link>
                    </LiSideBar   >
                </ul>

            </MainSidebarComponent>
        );
    }
}

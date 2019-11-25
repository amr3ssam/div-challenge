import styled from 'styled-components'

export const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  min-height: 686px;
  background-color: #f3f5f8;
   flex-flow : row nowrap; 
   display:flex;
`;
export const SecondDiv = styled.div`
  width: 78.9%
  height: 100%;
  background-color: #f3f5f8;
   flex-flow : column nowrap; 
    display:flex;
`;

export const HeadBarComponent = styled.div`
   width: 100%;
  height: 50px;
  box-shadow: 0 2px 8px 0 rgba(59, 62, 80, 0.05), 0 1px 0 0 #d9dfe7;
  background-color: #ffffff;
  margin-left:1px;
    flex-flow : row nowrap;
    display: flex;
    text-align: right;
    .search{
            width: 3%;
            height: 50%;
            object-fit: contain;
             margin-top:1%;
             float: right;
             margin-left : 65%
    }
    .support{
             width: 3%;
            height: 50%;
            object-fit: contain;
             margin-top:1%;
             float: right;
             margin-left : 1.5%
    }
`;
export const MainButton = styled.button`
    width: 15%;
    height: 55%;
    background-color: #2c78ff;
    padding:0px;
    margin:0px;
    margin-left:1%;
    margin-top:1%;
    flex-flow : row nowrap;
    display: flex; 
    border  : 0px;
    border-radius: 3px;

    .icon{
        width: 16px;
        height: 16px;
        object-fit: contain;
        fill: #ffffff;
        margin-left:1%;
        margin-top: 0.2%
    }
`;
export const MainButtonLabel = styled.label`
 width: 70%;
  height: 50%;
  font-family: PostGrotesk;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #ffffff;
  margin-left:20px;
  margin-top:0px;
`;

export const ChartHeader = styled.div`
  width: 99%;
  height: 30px;
  border-radius: 2px;
  box-shadow: 0 1px 0 0 rgba(194, 199, 215, 0.3);
  background-color: #ffffff;
  margin-left:1px;
  margin-top:1%;
`;
export const DivTitle = styled.label`
   width: 362px;
  height: 20px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  color: #8f9db4;
  padding-left:20px;
`;
export const AvatarButton = styled.button`
      width: 4%;
    height: 70%;
    font-family: PostGrotesk;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.85px;
    text-align: center;
    color: #8f9db4;
    padding:0px;
    margin:0px;
    margin-left:2%;
    margin-top:0.6%;
    flex-flow : row nowrap;
    display: flex; 
    border  : 0px;
    border-radius: 50%;

`;
export const AvatarButtonLabel = styled.label`
    font-family: PostGrotesk;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.85px;
    text-align: center;
    color: #8f9db4;
    padding:16%;
`;

export const MainSecondaryDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f3f5f8;
`;

export const TotalsDiv = styled.div`
  width: 100%;
  height: 150px;
  background-color: #f3f5f8;
  margin-top : 1%;
  flex-flow : row nowrap; 
   display:flex;
`;
export const TransactionChartDiv = styled.div`
  width: 97%;
  height: 330px;
  border-radius: 2px;
  box-shadow: 0 6px 16px 0 rgba(194, 199, 215, 0.3);
  border: solid 1px #d9dfe7;
  background-color: #ffffff;
   margin-top : 1%;
   margin-left: 1.5%;
    flex-flow : column nowrap; 
   display:flex;
`;
export const FooterDiv = styled.div`
   width: 97%;
  height: 120px;
  border-radius: 2px;
  box-shadow: 0 6px 16px 0 rgba(194, 199, 215, 0.3);
  border: solid 1px #d9dfe7;
  background-color: #ffffff;
   margin-top : 1%;
    margin-left: 1.5%;
    flex-flow : column nowrap; 
   display:flex;
`;

export const AnyTotalDiv = styled.div`
   width: 31.5%;
  height: 97;
  border-radius: 2px;
  box-shadow: 0 6px 16px 0 rgba(194, 199, 215, 0.3);
  border: solid 1px #d9dfe7;
  border-top: ${props => props.accountBalance ? "solid 3px #ff8d36" : props.lastTrade ? "solid 3px #ff213f" : props.lastTradeTotal ? "solid 3px #2c78ff" : "solid 1px #d9dfe7"}; 
  background-color: #ffffff;
  margin-left :  ${props => props.accountBalance ? "1.2%" : "1%"};
  flex-flow : column nowrap; 
 
   display:flex;
`;

export const DivLabel = styled.label`
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

export const MainLabel = styled.label`
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
export const SecondaryLabel = styled.label`
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
export const MainSidebarComponent = styled.nav`
   width: 21%;
  height: 100%;
   min-height: 686px;
  box-shadow: 0 2px 16px 0 rgba(59, 62, 80, 0.1), 1px 0 0 0 #d9dfe7;
  background-color: #ffffff;

  .nav-links{
      display:flex;
      justify-content: space-evenly;
      align-items:center;
      flex-flow : column nowrap;
      list-style : none;
      padding:0px
  }
  .link{
        width: 100%;
        height: ${props => (props.selected ? '64px' : '56px')} ; 
        flex-flow : row nowrap;
          text-decoration: none;
         margin-top : ${props => (props.setting ? "30%" : "0px")};
          
  }
  .link:hover{
        width: 100%;
        flex-flow : row nowrap;
          text-decoration: none;
        background-color: '#2c78ff';
          
  }
  .moduleLabel{
        width: 100%;
        height: 56px;  
          flex-flow : row nowrap; 
  }
  
`;
export const ChartHeaderComponent = styled.div`
  width: 97%;
  height: 30px;
  border-radius: 2px;
  box-shadow: 0 1px 0 0 rgba(194, 199, 215, 0.3);
  background-color: #ffffff;
`;
export const FooterHeaderComponent = styled.div`
 width: 99%;
  height: 25px;
  border-radius: 2px;
  box-shadow: 0 1px 0 0 rgba(194, 199, 215, 0.3);
  background-color: #ffffff;
  margin-left:1px;
`;
export const FooterHeaderLabel = styled.label`
   width: 362px;
  height: 20px;
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
export const CompanyNameLabel = styled.label`
    width: 35%;
  height: 31px;
  font-family: Exo;
  font-size: 23.3px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #003171;
 margin-top:4%;
            margin-left:0px;
`;

export const SideBarHeader = styled.div`
   width: 100%;
  height: 50px;
  box-shadow: 0 2px 8px 0 rgba(59, 62, 80, 0.05), 0 1px 0 0 #d9dfe7;
  background-color: #ffffff;
  margin-left:1px;
    flex-flow : row nowrap;
    display: flex;
    text-align: right;
    .menuIcon{
            width: 10%;
            height: 55%;
            object-fit: contain;
            margin-top:4%;
            margin-left:10%;
    }
     .symbol{
             width: 10%;
            height: 55%;
            object-fit: contain;
            margin-top:4%;
            margin-left:10%;
  }
`;
export const LiSideBar = styled.li`
  width: ${props => (props.selected ? '104%' : '100%')} ; 
        height: ${props => (props.selected ? '64px' : '56px')} ; 
          flex-flow : row nowrap; 
          background-color:  ${props => (props.selected ? '#2c78ff' : '#ffffff')} ; 
          z-index:500;
          margin-top: ${props => (props.setting ? '114%' : '0px')} ; 
`;
export const LabelSideBar = styled.label`
  width: 100%;
         width: 44%;
        height: ${props => (props.selected ? '24px' : '22px')} ; 
        font-family: Roboto;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.1;
        letter-spacing: normal;
        color:  ${props => (props.selected ? ' #ffffff' : ' #8f9db4')} ;  
        text-decoration: none;
        margin-left : 16px;
         margin-top : ${props => (props.selected ? '20px' : '17px')} ; 
`;


export const ImgSideBar = styled.img`
  width: 100%;
         width: 24px;
       height: 24px;
       object-fit: contain;
          margin-top: ${props => (props.selected ? '20px' : '16px')} ; 
            margin-left: ${props => (props.selected ? '37px' : '32px')} ; 
             color:  ${props => (props.selected ? ' #ffffff' : ' #8f9db4')} ;  
             fill:  ${props => (props.selected ? ' #ffffff' : ' #8f9db4')} ;  
      
`;
export const SideBarLinkDiv = styled.div`
 flex-flow : row nowrap;
    display: flex;
`;
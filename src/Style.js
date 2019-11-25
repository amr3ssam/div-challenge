import styled from 'styled-components'


export const HeadBarComponent = styled.div`
   width: 1139px;
  height: 80px;
  box-shadow: 0 2px 8px 0 rgba(59, 62, 80, 0.05), 0 1px 0 0 #d9dfe7;
  background-color: #ffffff;
  margin-left:1px;
    flex-flow : row nowrap;
    display: flex;
    text-align: right;
    .search{
            width: 32px;
            height: 32px;
            object-fit: contain;
             margin-top:23px;
             float: right;
             margin-left : 60%
    }
    .support{
            width: 32px;
            height: 32px;
            object-fit: contain;
             margin-top:23px;
             float: right;
             margin-left : 32px
    }
`;
export const MainButton = styled.button`
    width: 183px;
    height: 36px;
    background-color: #2c78ff;
    padding:0px;
    margin:0px;
    margin-left:20px;
    margin-top:22px;
    flex-flow : row nowrap;
    display: flex; 
    border  : 0px;
    border-radius: 3px;

    .icon{
        width: 16px;
        height: 16px;
        object-fit: contain;
        fill: #ffffff;
        margin-left:10px;
        margin-top: 3px
    }
`;
export const MainButtonLabel = styled.label`
 width: 114px;
  height: 20px;
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
  width: 1058px;
  height: 44px;
  border-radius: 2px;
  box-shadow: 0 1px 0 0 rgba(194, 199, 215, 0.3);
  background-color: #ffffff;
  margin-left:1px;
  margin-top:20px;
`;
export const DivTitle = styled.label`
   width: 362px;
  height: 24px;
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
      width: 48px;
    height: 48px;
    font-family: PostGrotesk;
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.85px;
    text-align: center;
    color: #8f9db4;
    padding:0px;
    margin:0px;
    margin-left:32px;
    margin-top:16px;
    flex-flow : row nowrap;
    display: flex; 
    border  : 0px;
    border-radius: 50%;

`;
export const AvatarButtonLabel = styled.label`
    font-family: PostGrotesk;
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.85px;
    text-align: center;
    color: #8f9db4;
    padding:15%
`;
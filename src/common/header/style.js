import styled from 'styled-components';
import logo from '../../statics/logo.png';

export const HeaderWrapper = styled.header`
  z-index:1;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`;

export const Logo = styled.a`
  position:absolute;
  top:0;
  left: 0;
  height: 56px;
  width: 100px;
  display: block;
  background: url(${logo});
  background-size: contain;
`;

export const Nav = styled.nav`
  width: 960px;
  margin: 0 auto;
  height: 100%;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-zise: 17px;
  color: #333;
  &.left {
      float: left;
  }
  &.right {
      float: right;
      color: #969696;
  }
  &.active {
      color:#ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  float: left;
   position: relative;
   .iconfont {
     position: absolute;
     right: 5px;
     bottom: 5px;
     width: 30px;
     line-height:30px;
     border-radius: 15px;
     text-align: center;
     &.focused {
       background: #777;
       color: #fff;
     }
   }
`;

export const SearchInfo = styled.div`
  position: absolute;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  background-color: white;
  box-shadow: 0 0 8px rgba(0,0,0, 0.2);
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.a`
  text-decoration: none;
  float: right;
  font-size: 12px;
  line-height: 20px;
  .iconspin {
    line-height: 20px;
    width: 20px;
    display: block;
    position: static;
    float: left;
    transition: all .25s ease-in;
    transform-origin: center center;
  }
`;

export const SearchInfoList = styled.div`
  text-align: justify;
  margin-right: -10px;
`;

export const SearchInfoItem = styled.span`
  font-size: 12px;
  padding: 3px 7px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 4px;
  display: inline-block;
  text-decoration: none;
`;

export const NavSearch = styled.input`
  width:160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px ;
  background: #eee;
  font-size: 14px;
  margin-top: 9px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  margin-left: 20px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  
  &.slide-enter {
    width: 160px;
    transition: all .25s ease-out;
  }
  &.slide-enter-active{
   width: 240px;
  }
  &.slide-exit {
   transition: all .25s ease-out;
  }
  &.slide-exit-active {
   width: 160px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right:0;
  top:0;
  height: 56px;
`;

export const Button = styled.button`
  line-height: 38px;
  border-radius: 19px;
  margin:9px 10px 0;
  padding: 0 20px;
  border: 1px solid #ec4169;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
  cursor: pointer;
  &:focus{
    outline: 0;
    box-shadow: 0 0 5px #ec4169a1;
  }
`;
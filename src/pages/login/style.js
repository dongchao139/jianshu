import styled from 'styled-components';

export const LoginWrapper = styled.div`
  z-index:0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
`

export const LoginBox = styled.div`
  width: 400px;
  margin: 100px auto;
  background: #fff;
  padding: 50px 0;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  border-radius: 4px;
`

export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  margin: 10px auto;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
  border: 1px solid #999;
  border-radius: 4px;
  &:focus{
    outline: 0;
    border: 1px solid #ec4169;
    box-shadow: 0 0 5px #ec4169a1
  }
`

export const Button = styled.button`
  display: block;
  width: 220px;
  line-height: 30px;
  margin: 10px auto;
  color: #fff;
  background-color: skyblue;
  border: 0;
  border-radius: 999px;
  text-align: center;
  cursor: pointer;
  &:focus{
    outline: 0;
    box-shadow: 0 0 5px skyblue;
  }
`

export const Lable = styled.label`
 display: block;
 width: 220px;
 line-height: 50px;
 margin: -15px auto 20px;
 color: #333;
 background-color: #fff;
 text-align: center;
 font-size: 24px;
`
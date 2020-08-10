import styled from 'styled-components';

export const HomeWrapper = styled.main`
  max-width: 960px;
  width: 95%;
  margin: 0 auto;
  display: table;
`;

export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top:30px;
  overflow: hidden;
  float: left;
`;

export const HomeRight = styled.div`
  width: 240px;
  float: right;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  margin-right: -20px;
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  margin-bottom: 15px;
`

export const TopicItem = styled.div`
  display: inline-block;
  line-height: 32px;
  font-size: 14px;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin-right: 20px;
  margin-bottom:18px;
  padding-right: 10px;
  overflow: hidden;
  .topic-img {
    width: 32px;
    display: inline-block;
    vertical-align: top;
    margin-right: 10px;
  }
`

export const ListItem = styled.section`
  with: 100%;
  box-sizing: border-box;
  margin-bottom: 15px;
  padding: 10px 0 15px 0;
  border-bottom: 1px solid #dcdcdc;
  img{
    float: right;
    border-radius: 4px;
    width: 150px;
  }
`

export const ListInfo = styled.div`
  padding-right: 165px;
  h3{
    font-size: 18px;
    font-weight: 800;
    line-height: 27px;
  }
  p{
    font-size: 13px;
    line-height: 24px;
    color: #999;
    span{
      margin: 0 10px 0 0;
      i{
        vertical-align: -2px;
      }
    }
  }
  p:last-child{
    margin-top: 8px;
    font-size: 12px;
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 260px;
`

export const RecommendItem = styled.div`
  width: 260px;
  height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
  overflow: hidden;
  background-size: contain;
  a{
    display: block;
    height: 100%;
  }
`

export const WriterWrapper = styled.div`
  width: 260px;
  border: 1px solid #999;
  border-radius: 4px;
  line-height: 300px;
  text-align: center;
`

export const LoadMore = styled.div`
  width: 100%;
  line-height: 40px;
  background-color: #a5a5a5;
  text-align: center;
  border-radius: 9999px;
  color: #fff;
  margin: 30px 0;
  cursor:pointer;
  border: 0px;
`

export const BackTop = styled.div`
  position:fixed;
  width: 60px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
  padding: 0 15px;
  right: 40px;
  bottom: 50px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 1px 1px 1px #999;
`
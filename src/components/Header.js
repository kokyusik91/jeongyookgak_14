import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

const Header = () => {
  const history = useHistory();
  return (
    <>
      <Grid width='100%' height='96px' isFlex padding='10px'>
        <Grid width='1200px' isFlex margin='auto'>
          <Grid isFlex>
            <Grid margin='0px 14px 0px 0px'>
              <Image
                src={logo}
                onClick={() => {
                  //메인페이지로
                }}
                cursor='pointer'
              />
            </Grid>
            <Text
              color='white'
              onClick={() => {
                // 쇼핑하기로
              }}
              cursor='pointer'
            >
              쇼핑하기
            </Text>
            <Text color='white'>배송안내</Text>
            <Text color='white'>이벤트</Text>
          </Grid>

          <Grid isFlex>
            <Text color='white'>공지사항</Text>
            <Text color='white'>고객센터 |</Text>
            <Text
              color='white'
              onClick={() => {
                history.push('/Login');
              }}
              cursor='pointer'
            >
              로그인
            </Text>
            <Text
              color='white'
              onClick={() => {
                history.push('/Signup');
              }}
              cursor='pointer'
            >
              회원가입
            </Text>
            <FontAwesomeIcon
              icon={faShoppingCart}
              color='white'
              size='2x'
              onClick={() => {
                //장바구니로
              }}
              cursor='pointer'
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;

const Grid = styled.div`
  ${(props) =>
    props.isFlex
      ? `display : flex; align-items : center ; justify-content : space-between;`
      : ''};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: black;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

const Text = styled.p`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin: 10px;
  ${(props) => (props.cursor ? `cursor : pointer` : '')}
`;

const Image = styled.img`
  width: 129px;
  height: 48px;
  src: '';
  ${(props) => (props.cursor ? `cursor : pointer` : '')}
`;

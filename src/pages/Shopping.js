/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import Grid from '../elements/Grid';

import Post from '../components/Post';
import shopping_image1 from '../images/shopping_image1.png';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as useActions } from '../redux/modules/post';

const Shopping = () => {
  const dispatch = useDispatch();
  const category_list = useSelector((state) => state.post.category_list);
  const category_image = useSelector((state) => state.post.category_image);
  // console.log('쇼핑하기페이지 자료', category_list);
  // console.log('쇼핑하기페이지 이미지', category_image);

  let category = null;
  // const [category, setCategory] = React.useState();
  const handleCategory = (e) => {
    // setCategory(e.target.value)
    category = e.target.value;
    dispatch(useActions.getCategoryDB(category));
  };

  React.useEffect(() => {
    dispatch(useActions.getCategoryDB('PORK'));
  }, []);

  return (
    <React.Fragment>
      <Grid>
        <Image bg='green' bgi={category_image} width='13vw' />
      </Grid>

      <Grid width='60vw' margin='4rem auto' flex>
        <Button value='PORK' margin='0 5px 0 0px' onClick={handleCategory}>
          돼지
        </Button>
        <Button value='BEEF' margin='0 5px 0 0' onClick={handleCategory}>
          소
        </Button>
        <Button value='CHICKEN' margin='0 5px 0 0' onClick={handleCategory}>
          닭
        </Button>
        <Button value='SEAFOOD' margin='0 5px 0 0' onClick={handleCategory}>
          수산
        </Button>
        <Button value='MEALKIT' margin='0 5px 0 0' onClick={handleCategory}>
          밀키트
        </Button>
        <Button value='MILK' margin='0 5px 0 0' onClick={handleCategory}>
          우유
        </Button>
        <Button value='EGG' margin='0 5px 0 0' onClick={handleCategory}>
          달걀
        </Button>
        <Button value='BABY' margin='0 5px 0 0' onClick={handleCategory}>
          이유식
        </Button>
      </Grid>

      <Grid width='60vw' margin='4rem auto' flex wrap>
        {category_list.map((p, idx) => {
          return <Post key={p.id} {...p} />;
        })}
      </Grid>
    </React.Fragment>
  );
};

const Button = styled.button`
  font-weight: bold;
  cursor: pointer;
  border-style: none;
  width: 143.63px;
  height: 56px;
  background-color: #f5f5f5;
  ${(props) => (props.padding ? `padding:${props.padding}` : '')};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.bg ? `background-color:${props.bg}` : '')};
`;

const Text = styled.p`
  color: black;
  ${(props) => (props.size ? `font-size:${props.size}` : '')};
  ${(props) => (props.bold ? `font-weight:800 ` : `font-weight:600`)};
`;

const Image = styled.div`
  ${(props) => (props.height ? `padding:${props.height}` : '')};
  ${(props) => (props.width ? `padding:${props.width}` : '')};
  ${(props) => (props.padding ? `padding:${props.padding}` : '')};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.pointer ? `cursor: pointer;` : '')};
  ${(props) => (props.bg ? `background-color:${props.bg}` : '')};
  ${(props) => (props.radius ? `background-radius:${props.radius}` : '')};
  ${(props) => (props.bgi ? `background-image: url(${props.bgi})` : '')};

  background-position: center;
  background-size: cover;
`;

export default Shopping;

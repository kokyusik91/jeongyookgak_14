import React from 'react';
import Grid from '../elements/Grid';
import styled from 'styled-components';
import image1 from '../images/main_image1.png';
import button_image from '../images/button_image.png';
import { apis } from '../shared/axios';
import Modal from '../components/Modal';
import { history } from '../redux/configureStore';

const Post = (props) => {
  const { id, category, title, price, image, imageDetail } = props;
  console.log('각각의 프롭스', props.id);
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // const handleMouseEnter = (e) => {
  //   e.target.style.background = 'black';
  // };
  // const handleMouseLeave = (e) => {
  //   e.target.style.background = 'white';
  // };

  const movePage = () => {
    history.push(`/detail/${props.id}`);

    // 이동할때 scroll top으로 맞춰주기.
    window.scrollTo(0, 0);
  };

  return (
    <React.Fragment>
      <Grid margin='0 20px 15px 0' flexBasis>
        <Grid bg='#f9f7f8' width='100%' _onClick={movePage}>
          <Grid>
            <Image bgi={image} width='140px' margin='0px 30px'></Image>
          </Grid>

          <Grid is_flex4 margin='0px 20px 0px 0px' padding='10px 0px'>
            <Button
              onClick={() => {
                console.log('안녕');
              }}
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
            ></Button>
          </Grid>
        </Grid>

        <Grid margin='20px 0 0 0'>
          <Text size='20px' bold color='black'>
            {title}
          </Text>
          <Text size='20px' color='black'>
            가격 : {price}
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Image = styled.div`
  ${(props) => (props.height ? `padding:${props.height}` : '')};
  ${(props) => (props.width ? `padding:${props.width}` : '')};
  ${(props) => (props.padding ? `padding:${props.padding}` : '')};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.pointer ? `cursor: pointer;` : '')};
  ${(props) => (props.bgi ? `background-image: url(${props.bgi})` : '')};
  ${(props) => (props.bg ? `background-color:${props.bg}` : '')};
  ${(props) => (props.radius ? `background-radius:${props.radius}` : '')};
  max-width: 400px;
  background-position: center;
  background-size: cover;
`;

const Button = styled.button`
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 2px solid #eee;
  box-shadow: 0 25px 10px -15px rgb(0 0 0 / 12%);
  background-color: #fff;
  cursor: pointer;
  background-image: url(${button_image});
  background-size: cover;
  background-position: center;
`;

const Text = styled.p`
  ${(props) => (props.color ? `color:${props.color}` : '')};
  ${(props) => (props.size ? `font-size:${props.size}` : '')};
  ${(props) => (props.bold ? `font-weight:800 ` : `font-weight:400`)};
`;

export default Post;

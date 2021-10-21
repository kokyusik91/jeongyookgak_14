import React from 'react';
import Grid from '../elements/Grid2';
import Text from '../elements/Text';
import Textarea from '../elements/Textarea';

const Comment = () => {
  return (
    <React.Fragment>
      <Grid
        width='80vw'
        // height='314px'
        border='1px solid #e0e0e0'
        margin='20px auto'
        bg='#fff'
        padding='30px'
      >
        <Text size='16px' margin='10px 0' color='black'>
          타이틀
        </Text>
        <Textarea placeholder='내용을 입력해주세요' />
        <Grid
          margin='10px 0'
          width='100%'
          bg='#fff'
          is_flex
          justify='space-between'
        >
          <Text size='15px' color='#9b9b9b'>
            유저 닉네임
          </Text>
          <Text size='15px' color='#9b9b9b'>
            2021-10-23
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Comment;

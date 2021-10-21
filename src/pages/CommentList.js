import React from 'react';
import Grid from '../elements/Grid';
import Comment from '../components/Comment';

const CommentList = () => {
  return (
    <React.Fragment>
      <Grid bg='#fff'>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Grid>
    </React.Fragment>
  );
};

export default CommentList;

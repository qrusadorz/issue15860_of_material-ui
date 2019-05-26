import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from './ProTip';
import Link from '@material-ui/core/Link';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          ご利用されているユーザーの方へ
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          本ページは5/25から実施している内部問題解決のためのテストページです。6：00以降のアクセスでこのページが表示された場合、一度タブを閉じて再度アクセスしてください。
        </Typography>
        <div style={{marginBottom: 50}}/>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
        </Typography>
        <ProTip />
        <MadeWithLove />
      </Box>
    </Container>
  );
}

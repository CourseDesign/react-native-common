import * as React from 'react';

import {
  ThemeProvider, Typography, useSize, Box,
} from '@course-design/react-native-common';

const App = (): JSX.Element => {
  const width = useSize('app-width');

  return (
    <ThemeProvider>
      <Box
        width={'100%'}
        height={'100%'}
        padding={'10%'}
        gravity={'center-center'}
        align={'vertical'}
      >
        <Typography type={'h1'}>
          app width:
          {' '}
          {width}
        </Typography>
        <Box
          scrollEnabled
          align={'horizontal'}
          style={{ backgroundColor: 'black' }}
        >
          <Box width={'100px'} height={'100px'} style={{ backgroundColor: 'red' }} />
          <Box width={'100px'} height={'100px'} style={{ backgroundColor: 'aqua' }} />
          <Box width={'100px'} height={'100px'} style={{ backgroundColor: 'brown' }} />
          <Box width={'100px'} height={'100px'} style={{ backgroundColor: 'blue' }} />
          <Box width={'100px'} height={'100px'} style={{ backgroundColor: 'yellow' }} />
          <Box width={'100px'} height={'100px'} style={{ backgroundColor: 'green' }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;

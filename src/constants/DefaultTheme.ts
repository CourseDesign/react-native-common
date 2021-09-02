import { Color, Theme } from '../types/theme';

const grey: Color = {
  100: '#FCFCFF',
  200: '#F5F5FA',
  300: '#EDEDF4',
  400: '#D3D3DE',
  500: '#A0A0B4',
  600: '#55556E',
  700: '#323243',
  800: '#252536',
  900: '#191927',
};

const DefaultTheme: Theme = {
  palette: {
    common: {
      white: grey[100],
      black: grey[900],
    },
    primary: {
      main: '#3D83FF',
      light: '#77A8FF',
      dark: '#114DB5',
      contrastText: grey[100],
    },
    secondary: {
      main: '#5C4EF6',
      light: '#978EF7',
      dark: '#331B98',
      contrastText: grey[100],
    },
    error: {
      main: '#F86155',
      light: '#F4847B',
      dark: '#C34940',
      contrastText: grey[100],
    },
    success: {
      main: '#51BE88',
      light: '#7BCEA5',
      dark: '#3F9A6D',
      contrastText: grey[100],
    },
    text: {
      h1: grey[900],
      h2: grey[900],
      h3: grey[900],
      h4: grey[900],
      h5: grey[900],
      h6: grey[900],
      body1: grey[900],
      body2: grey[900],
      body3: grey[900],
      body4: grey[900],
      body5: grey[900],
      body6: grey[900],
      button1: grey[900],
      button2: grey[900],
      button3: grey[900],
      caption1: grey[500],
      caption2: grey[500],
    },
    grey,
  },
  typography: {
    h1: {
      font: 'NanumSquareB',
      weight: 'bold',
      size: 22,
      spacing: 0.264,
      height: 33,
    },
    h2: {
      font: 'NanumSquareB',
      weight: 'bold',
      size: 18,
      spacing: -0.45,
      height: 28,
    },
    h3: {
      font: 'NanumSquareB',
      weight: 'bold',
      size: 16,
      spacing: -0.32,
      height: 24,
    },
    h4: {
      font: 'NanumSquareB',
      weight: 'bold',
      size: 14,
      spacing: -0.154,
      height: 22,
    },
    h5: {
      font: 'NanumSquareB',
      weight: 'bold',
      size: 12,
      spacing: 0,
      height: 18,
    },
    h6: {
      font: 'NanumSquareB',
      weight: 'bold',
      size: 10,
      spacing: 0.12,
      height: 16,
    },

    body1: {
      font: 'NanumSquareR',
      weight: 'normal',
      size: 16,
      spacing: -0.32,
      height: 24,
    },
    body2: {
      font: 'NanumSquareR',
      weight: 'normal',
      size: 14,
      spacing: -0.154,
      height: 22,
    },
    body3: {
      font: 'NanumSquareR',
      weight: 'normal',
      size: 12,
      spacing: 0,
      height: 18,
    },
    body4: {
      font: 'NanumSquareR',
      weight: 'normal',
      size: 11,
      spacing: 0.066,
      height: 16,
    },
    body5: {
      font: 'NanumSquareR',
      weight: 'normal',
      size: 10,
      spacing: 0.12,
      height: 16,
    },
    body6: {
      font: 'NanumSquareR',
      weight: 'normal',
      size: 8,
      spacing: 0,
      height: 14,
    },

    button1: {
      font: 'NanumSquareR',
      weight: 'normal',
      size: 12,
      spacing: 0,
      height: 18,
    },
    button2: {
      font: 'NanumSquareR',
      weight: 'normal',
      size: 11,
      spacing: 0.066,
      height: 16,
    },
    button3: {
      font: 'NanumSquareR',
      weight: 'normal',
      size: 10,
      spacing: 0.12,
      height: 16,
    },

    caption1: {
      font: 'NanumSquareR',
      weight: 'normal',
      size: 12,
      spacing: 0,
      height: 18,
    },
    caption2: {
      font: 'NanumSquareR',
      weight: 'normal',
      size: 10,
      spacing: 0.12,
      height: 16,
    },
  },
  spacing: 2,
  animation: {
    duration: {
      fastest: 150,
      faster: 200,
      fast: 250,
      normal: 300,
      slow: 400,
      slower: 500,
      slowest: 1000,

      screenPush: 225,
      screenPop: 195,
    },

    spring: {
      damping: 60,
      mass: 1,
      stiffness: 500,
      overshootClamping: false,
      restDisplacementThreshold: 0.001,
      restSpeedThreshold: 0.001,
    },

    easing: {
      in: {
        x1: 0.4,
        y1: 0,
        x2: 0.2,
        y2: 1,
      },
      out: {
        x1: 0,
        y1: 0,
        x2: 0.2,
        y2: 1,
      },
      inout: {
        x1: 0.4,
        y1: 0,
        x2: 1,
        y2: 1,
      },
      linear: {
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 1,
      },
    },
  },
  shadow: {
    default: {
      color: 'rgba(0, 0, 0, 0.16)',
      offset: {
        x: 0,
        y: 0,
      },
      opacity: 1,
      radius: 4,
    },
  },
  shape: {
    radius: {
      large: {
        corner: {
          leftBottom: 16,
          leftTop: 16,
          rightBottom: 16,
          rightTop: 16,
        },
      },
      regular: {
        corner: {
          leftBottom: 10,
          leftTop: 10,
          rightBottom: 10,
          rightTop: 10,
        },
      },
      small: {
        corner: {
          leftBottom: 5,
          leftTop: 5,
          rightBottom: 5,
          rightTop: 5,
        },
      },
    },
  },
};

export default DefaultTheme;

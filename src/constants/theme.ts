import {extendTheme} from 'native-base';

const customTheme = extendTheme({
  colors: {
    primary: {
      100: '#334FFA',
      200: '#CFD6FF',
    },
    text: {
      title: '#020202',
      subtitle: '#9B9898',
      normal: '#000000',
    },
  },
});

export {customTheme};

import styled from '@emotion/native';
import {Box, Button} from 'native-base';
import {Image} from 'react-native';

export const MainContainer = styled(Box)`
  background-color: white;
`;

export const ProductDetailContainer = styled(Box)`
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 150px;
  background-color: #fff;
`;

export const ProductImage = styled(Image)`
  width: 100%;
  height: 340px;
`;

export const AcceptButton = styled(Button)`
  border-radius: 10px;
`;

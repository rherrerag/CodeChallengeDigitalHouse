import styled from '@emotion/native';
import {Text, HStack, Box, ChevronRightIcon} from 'native-base';
import {Image} from 'react-native';

export const MinusText = styled(Text)`
  color: red;
  font-size: 16px;
  font-weight: 800;
  line-height: 22px;
`;

export const PlusText = styled(Text)`
  color: green;
  font-size: 16px;
  font-weight: 800;
  line-height: 22px;
`;

export const PointValue = styled(Text)`
  font-size: 16px;
  font-weight: 800;
  line-height: 22px;
  align-self: center;
  justify-content: center;
`;

export const ProductTitle = styled(Text)`
  font-size: 14px;
  font-weight: 800;
  line-height: 19px;
  padding-bottom: 7px;
`;

export const DateSubtitle = styled(Text)`
  font-size: 12px;
  line-height: 16px;
`;

export const ThumbnailImage = styled(Image)`
  width: 55px;
  height: 55px;
  border-radius: 10px;
`;

export const ItemContainer = styled(HStack)`
  padding-bottom: 4px;
  padding-top: 4px;
  flex-direction: row;
`;

export const ImageContainer = styled(Box)`
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
`;

export const LeftContainer = styled(Box)`
  flex: 2;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
`;

export const RightContainer = styled(Box)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-self: center;
`;

export const ItemChevron = styled(ChevronRightIcon)`
  align-self: center;
  margin-top: 2px;
  margin-left: 4px;
  line-height: 22px;
  font-size: 16px;
`;

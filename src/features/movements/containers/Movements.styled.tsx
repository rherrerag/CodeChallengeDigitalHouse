import styled from '@emotion/native';
import {Button, Box, Text} from 'native-base';

export const EarnedTotalButton = styled(Button)`
  margin-top: 20px;
  margin-bottom: 40px;
  width: 48%;
  height: 50px;
  border-radius: 10px;
  margin-right: 13px;
`;

export const RedeemedTotalButton = styled(Button)`
  margin-top: 20px;
  margin-bottom: 40px;
  width: 48%;
  height: 50px;
  border-radius: 10px;
`;

export const TotalButton = styled(Button)`
  margin-top: 20px;
  margin-bottom: 40px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
`;

export const FlatListContainer = styled(Box)`
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 16px;
  padding-top: 16px;
`;

export const FullContainer = styled(Box)`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  flex-direction: column;
`;

export const CardContainer = styled(Box)`
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
`;

export const CardPadding = styled(Box)`
  padding-left: 34px;
  padding-right: 34px;
`;

export const ButtonsContainer = styled(Box)`
  justify-content: flex-end;
`;

export const Subtitle = styled(Text)`
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const CardMonth = styled(Text)`
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  color: white;
  padding-bottom: 7px;
`;

export const CardPointsTotal = styled(Text)`
  font-weight: 800;
  font-size: 32px;
  line-height: 44px;
  color: white;
  padding-bottom: 20px;
`;

export const WelcomeText = styled(Text)`
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
`;

export const WelcomeName = styled(Text)`
  font-size: 16px;
  line-height: 27px;
`;

import React from 'react';
import {Box, ScrollView} from 'native-base';
import {Movement} from '../../movements/interfaces/movement.interface';
import {useRoute} from '@react-navigation/native';
import {useNavigation, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {monthNames} from '../../../common/utils/dateUtils';
import {
  ProductDetailContainer,
  MainContainer,
  ProductImage,
  AcceptButton,
} from './ProductDetail.styled';
import labels from '../constants/labels';
import ProductTitle from '../components/ProductTitle';
import ProductInfo from '../components/ProductInfo';

export type RootStackParamList = {
  Movements: {item: Movement | undefined};
};

type MovementsScreenRouteProp = RouteProp<RootStackParamList, 'Movements'>;

const ProductDetail = () => {
  const route = useRoute<MovementsScreenRouteProp>();
  const {item} = route.params;
  const movement = item;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  let date = new Date(movement?.createdAt);
  let dateFormat: string = `${
    labels.PRODUCT_DETAIL.DATE_SUBSTRING
  } ${date.getDay()} de ${monthNames[date.getMonth()]}, ${date.getFullYear()}`;

  const goToMovements = () => navigation.navigate('Movements');
  const pointSummaryString =
    movement?.points.toLocaleString('es-MX') +
    ' ' +
    labels.PRODUCT_DETAIL.POINTS_TEXT;

  return (
    <MainContainer flex="1">
      <ProductTitle title={movement?.product} />
      <SafeAreaView>
        <ScrollView>
          <ProductDetailContainer>
            <Box shadow="9">
              <ProductImage source={{uri: movement?.image}} />
            </Box>
            <ProductInfo
              productDetailTitle={labels.PRODUCT_DETAIL.SUBTITLE_DETAIL}
              pointsSummaryTitle={labels.PRODUCT_DETAIL.SUBTITLE_SUMMARY}
              pointsSummary={pointSummaryString}
              dateFormatted={dateFormat}
            />
            <AcceptButton
              bgColor="primary.100"
              _text={{
                fontSize: 16,
                fontWeight: 800,
                color: 'white',
                lineHeight: 22,
              }}
              onPress={() => goToMovements()}>
              {labels.ACCEPT_BUTTON.TITLE}
            </AcceptButton>
          </ProductDetailContainer>
        </ScrollView>
      </SafeAreaView>
    </MainContainer>
  );
};

export default ProductDetail;

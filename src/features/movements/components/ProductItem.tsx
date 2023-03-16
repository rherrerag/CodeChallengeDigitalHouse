import React, {memo} from 'react';
import {connect} from 'react-redux';
import {VStack} from 'native-base';
import {Movement} from '../interfaces/movement.interface';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {monthNames} from '../../../common/utils/dateUtils';
import {
  MinusText,
  PlusText,
  ThumbnailImage,
  ItemContainer,
  PointValue,
  ProductTitle,
  DateSubtitle,
  ImageContainer,
  LeftContainer,
  RightContainer,
  ItemChevron,
} from './ProductItem.styled';

type ProductItemProps = {
  movement?: Movement | null;
};

export type RootStackParamList = {
  ProductDetail: {item: Movement | undefined | null};
};

const ProductItem: React.FC<ProductItemProps> = ({movement}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const goToProductDetail = (item: Movement | undefined | null) =>
    navigation.navigate('ProductDetail', {item: item});

  let fecha = new Date(movement?.createdAt);
  let fechaFormat: string = `${fecha.getDay()} de ${
    monthNames[fecha.getMonth()]
  }, ${fecha.getFullYear()}`;

  const renderMinus = () => <MinusText>-</MinusText>;
  const renderPlus = () => <PlusText>+</PlusText>;
  const sign = movement?.is_redemption ? renderMinus() : renderPlus();

  return (
    <TouchableOpacity onPress={() => goToProductDetail(movement)}>
      <ItemContainer space={2}>
        <ImageContainer>
          <ThumbnailImage source={{uri: movement?.image}} resizeMode="cover" />
        </ImageContainer>
        <LeftContainer>
          <VStack>
            <ProductTitle testID={movement?.product}>
              {movement?.product}
            </ProductTitle>
            <DateSubtitle>{fechaFormat}</DateSubtitle>
          </VStack>
        </LeftContainer>
        <RightContainer>
          <PointValue>
            {sign}
            {movement?.points.toLocaleString('es-MX')}
          </PointValue>
          <ItemChevron />
        </RightContainer>
      </ItemContainer>
    </TouchableOpacity>
  );
};

export default connect()(memo(ProductItem));

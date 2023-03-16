import React from 'react';
import {ProductTitleContainer, ProductTitleText} from './ProductTitle.styled';

type ProductTitleProps = {
  title?: string;
};

const ProductTitle: React.FC<ProductTitleProps> = ({title}) => {
  return (
    <ProductTitleContainer bg="primary.200">
      <ProductTitleText>{title}</ProductTitleText>
    </ProductTitleContainer>
  );
};
export default ProductTitle;

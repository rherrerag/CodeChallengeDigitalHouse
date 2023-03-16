import React from 'react';
import {
  SubtitleText,
  SubtitleTextBig,
  DateText,
  PointsText,
} from './ProductInfo.styled';

type ProductInfoProps = {
  productDetailTitle?: string;
  dateFormatted?: string;
  pointsSummaryTitle?: string;
  pointsSummary?: string;
};

const ProductInfo: React.FC<ProductInfoProps> = ({
  productDetailTitle,
  dateFormatted,
  pointsSummaryTitle,
  pointsSummary,
}) => {
  return (
    <>
      <SubtitleTextBig color="text.subtitle">
        {productDetailTitle}
      </SubtitleTextBig>
      <DateText>{dateFormatted}</DateText>
      <SubtitleText color="text.subtitle">{pointsSummaryTitle}</SubtitleText>
      <PointsText>{pointsSummary}</PointsText>
    </>
  );
};
export default ProductInfo;

import styled from '@emotion/styled';

const Root = styled.section`
  padding: 60px 0;
`;

const OrderList = styled.ul`
  margin: 55px 0;
  padding: 0;
  list-style: none;
`;

const Order = styled.li`
  border: 1px solid ${(props) => props.theme.borderColor.lightGrey};
  border-bottom: none;
  margin-bottom: 74px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 36px 30px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor.lightGrey};
  background-color: ${(props) => props.theme.bgColor.secondary};
`;

const OrderNumber = styled.span`
  font-size: 20px;
  letter-spacing: 0.5px;
`;

const DetailButton = styled.span`
  font-size: 20px;
  letter-spacing: 0.5px;
`;

const PurchasedList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Product = styled.li``;

const PriceOverviewWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const HighlightTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
`;

export default {
  Root,
  OrderList,
  Order,
  OrderHeader,
  OrderNumber,
  DetailButton,
  PurchasedList,
  Product,
  PriceOverviewWrapper,
  HighlightTextWrapper,
};

import React from "react";
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./transaction-card.styles";

type Category = {
  name: string;
  icon: string;
};

export type TransactionProps = {
  id: string;
  type: "positive" | "negative";
  title: string;
  amount: string;
  category: Category;
  date: string;
};
type Props = {
  transaction: TransactionProps;
};

export default function TransactionCard({ transaction }: Props) {
  const { type, title, amount, category, date } = transaction;

  const amountFormatted = type === "positive" ? amount : `- ${amount}`;
  return (
    <Container>
      <Title>{title}</Title>

      <Amount type={type}>{amountFormatted}</Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{date}</Date>
      </Footer>
    </Container>
  );
}

import * as React from "react";
import { HighLightCard, TransactionCard } from "../../components";
import { TransactionProps } from "../../components/transaction-card/transaction-card";
import { useAuth } from "../../hooks";

import {
  Container,
  Header,
  UserInformation,
  Photo,
  User,
  GreetingMessage,
  UserName,
  UserWrapper,
  PowerIcon,
  HighLightCardS,
  Transactions,
  Title,
  TransactionList,
  LogOutButton,
} from "./dashboard.styles";

export interface TransactionListProps extends TransactionProps {
  id: string;
}

const transactions: TransactionListProps[] = [
  {
    id: "1",
    type: "positive",
    title: "Desenvolvimento de site",
    amount: "AOA 100.000,00",
    category: {
      name: "Vendas",
      icon: "dollar-sign",
    },
    date: "13/03/2022",
  },
  {
    id: "2",
    type: "negative",
    title: "Desenvolvimento de site",
    amount: "AOA 100.000,00",
    category: {
      name: "Vendas",
      icon: "dollar-sign",
    },
    date: "13/03/2022",
  },
  {
    id: "3",
    type: "positive",
    title: "Desenvolvimento de site",
    amount: "AOA 100.000,00",
    category: {
      name: "Vendas",
      icon: "coffee",
    },
    date: "13/03/2022",
  },
  {
    id: "4",
    type: "negative",
    title: "Desenvolvimento de site",
    amount: "AOA 100.000,00",
    category: {
      name: "Vendas",
      icon: "shopping-bag",
    },
    date: "13/03/2022",
  },
];

export function Dashboard() {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInformation>
            <Photo source={{ uri: user?.avatar }} />
            <User>
              <GreetingMessage>Olá,</GreetingMessage>
              <UserName>{user?.name}</UserName>
            </User>
          </UserInformation>
          <LogOutButton onPress={signOut}>
            <PowerIcon name="power" />
          </LogOutButton>
        </UserWrapper>
      </Header>

      <HighLightCardS>
        <HighLightCard
          type="up"
          title="Entradas"
          amount="AOA 18.000,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighLightCard
          type="down"
          title="Saidas"
          amount="AOA 18.000,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighLightCard
          type="total"
          title="Total"
          amount="AOA 18.000,00"
          lastTransaction="01 a 16 de abril"
        />
      </HighLightCardS>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard transaction={item} />}
        />
      </Transactions>
    </Container>
  );
}

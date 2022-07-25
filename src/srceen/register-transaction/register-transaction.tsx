import React, { useState } from "react";
import { Modal } from "react-native";
import {
  Button,
  CategorySelectButton,
  Input,
  TransactionTypeButton,
} from "../../components";
import { CategorySelect } from "../category-select/category-select";
import {
  Contaienr,
  Fields,
  Form,
  Header,
  Title,
  TransactionType,
} from "./register-transaction.styles";

export function RegisterTransition() {
  const [transactionType, setTransactionType] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "categoria",
  });

  function handleTransactionTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setModalOpen(false);
  }

  return (
    <Contaienr>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Name" />
          <Input placeholder="Enter price" />
          <Input placeholder="Description" multiline />

          <TransactionType>
            <TransactionTypeButton
              title="Entrada"
              type="up"
              isActive={transactionType === "up"}
              onPress={() => handleTransactionTypeSelect("up")}
            />
            <TransactionTypeButton
              title="Saída"
              type="down"
              isActive={transactionType === "down"}
              onPress={() => handleTransactionTypeSelect("down")}
            />
          </TransactionType>

          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
            activeOpacity={0.7}
          />

          <Modal visible={modalOpen}>
            <CategorySelect
              category={category}
              setCategory={setCategory}
              closeSelectCategory={handleCloseSelectCategoryModal}
            />
          </Modal>
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Contaienr>
  );
}

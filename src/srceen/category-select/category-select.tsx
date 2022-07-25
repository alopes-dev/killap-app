import React from "react";
import { FlatList } from "react-native";
import { Button } from "../../components";
import { categories } from "../../utils/categories";
import {
  Contaienr,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,
} from "./category-select.styles";

type Category = {
  key: string;
  name: string;
};

type Props = {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
};

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: Props) {
  function handleCategorySelect(category: Category) {
    setCategory(category);
  }
  return (
    <Contaienr>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.key}
        style={{ flex: 1, width: "100%" }}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
      />

      <Footer>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </Footer>
    </Contaienr>
  );
}

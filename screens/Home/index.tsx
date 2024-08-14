import React from "react";
import { Character } from "../../@types/character";
import { CharacterCard } from "../../components/CharacterCard";
import { Container, Header, List, LoadingItem } from "./styles";
import { useHome } from "./useHome";

export const Home = () => {
  const { characters, fetchMoreCharacters, loading } = useHome();
  return (
    <Container>
      <Header>Ricky and Morty API</Header>

      <List
        removeClippedSubviews
        onEndReached={fetchMoreCharacters}
        data={characters}
        keyExtractor={(item) => (item as Character).id.toString()}
        renderItem={({ item }) => (
          <CharacterCard character={item as Character} />
        )}
        contentContainerStyle={{ gap: 16, paddingBottom: 24 }}
        ListFooterComponent={
          loading ? <LoadingItem>Carregando...</LoadingItem> : null
        }
      />
    </Container>
  );
};

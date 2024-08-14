import React from "react";
import { Character } from "../../@types/character";
import { Avatar, Container, Content, Id, Title } from "./styles";

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => (
  <Container>
    <Avatar source={{ uri: character.image }} />

    <Content>
      <Id>#{character.id}</Id>
      <Title>{character.name}</Title>
    </Content>
  </Container>
);

import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: #3a3a3a;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  gap: 16px;
`;

export const Id = styled.Text`
  color: #999999;
  font-size: 14px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Avatar = styled.Image`
  border-radius: 56px;
  height: 56px;
  width: 56px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

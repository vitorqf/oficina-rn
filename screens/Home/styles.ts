import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === "ios" ? "0" : "16px"};
  background-color: #0f0f0f;
`;

export const Header = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  padding: 24px;
`;

export const List = styled.FlatList`
  flex: 1;
  width: 100%;
  padding: 0 24px;
`;

export const LoadingItem = styled.Text`
  text-align: center;
  padding: 16px;
  font-size: 18px;
  color: #999;
`;

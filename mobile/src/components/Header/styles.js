import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const HeaderContainer = styled.View`
  margin-top: ${getStatusBarHeight() + 20}px;
  flex-direction: row;
  margin-bottom: 30px;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const TextTotalCases = styled.Text`
  color: #333;
`;

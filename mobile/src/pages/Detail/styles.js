import styled from 'styled-components/native';

export const DetailContainer = styled.View`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
  background: #f5f5f5;
`;
export const DetailTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin: 0px 0px 5px 0px;
`;
export const DetailSubtitle = styled.Text`
  font-size: 16px;
  color: #666;
  margin-bottom: 25px;
  margin-top: 10px;
`;
export const IncidentCard = styled.View`
  background: #ffffff;
  padding: 20px;
  margin-bottom: 15px;
`;
export const TextStrong = styled.Text`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const TextParagraph = styled.Text`
  margin-bottom: 12px;
`;

export const Contact = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonTouch = styled.TouchableOpacity`
  background: #e02041;
  height: 50px;
  border-radius: 8px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-weight: bold;
  color: #fff;
`;

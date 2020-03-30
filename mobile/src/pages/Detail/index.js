import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Button} from 'react-native';
import Header from '../../components/Header';
import {
  DetailContainer,
  IncidentCard,
  TextStrong,
  TextParagraph,
  ButtonTouch,
  TextButton,
  DetailTitle,
  DetailSubtitle,
  Contact,
} from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;

  function navigateToIncidents() {
    navigation.goBack();
  }

  return (
    <>
      <Header />
      <DetailContainer>
        <IncidentCard>
          <TextStrong>ONG</TextStrong>
          <TextParagraph>{incident.name}</TextParagraph>
          <TextStrong>CASO</TextStrong>
          <TextParagraph>{incident.title}</TextParagraph>
          <TextStrong>DESCRIÇÃO</TextStrong>
          <TextParagraph>{incident.description}</TextParagraph>
          <TextStrong>VALOR</TextStrong>
          <TextParagraph>{incident.value}</TextParagraph>
        </IncidentCard>

        <IncidentCard>
          <DetailTitle>Salve o dia!</DetailTitle>
          <DetailTitle>Seja o herói desse caso.</DetailTitle>
          <DetailSubtitle>Entre em contato</DetailSubtitle>
          <Contact>
            <ButtonTouch>
              <TextButton>Whatsapp</TextButton>
            </ButtonTouch>
            <ButtonTouch>
              <TextButton>E-mail</TextButton>
            </ButtonTouch>
          </Contact>
        </IncidentCard>
        <View>
          <Button title="Voltar" onPress={navigateToIncidents} />
        </View>
      </DetailContainer>
    </>
  );
}

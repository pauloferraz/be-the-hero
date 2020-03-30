/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import Header from '../../components/Header';
import {
  IncidentsContainer,
  IncidentTitle,
  IncidentSubtitle,
  IncidentCard,
  TextStrong,
  TextParagraph,
  ButtonTouch,
  TextButton,
} from './styles';

export default function Incident() {
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function navigateToDetail(incident) {
    navigation.navigate('Detail', {incident});
  }

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('incidents', {
      params: {page},
    });
    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);

    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <>
      <Header />
      <IncidentsContainer>
        <View>
          <IncidentTitle>Bem vindo!</IncidentTitle>
          <IncidentSubtitle>
            Escolha um dos {total} casos abaixo e salve o dia!
          </IncidentSubtitle>
        </View>

        <FlatList
          data={incidents}
          keyExtractor={incident => String(incident.id)}
          onEndReached={loadIncidents}
          onEndReachedThreshold={0.2}
          showsVerticalScrollIndicator={false}
          renderItem={({item: incident}) => (
            <IncidentCard>
              <TextStrong>ONG</TextStrong>
              <TextParagraph>{incident.name}</TextParagraph>
              <TextStrong>CASO</TextStrong>
              <TextParagraph>{incident.title}</TextParagraph>
              <TextStrong>VALOR</TextStrong>
              <TextParagraph>{incident.value}</TextParagraph>

              <ButtonTouch onPress={() => navigateToDetail(incident)}>
                <TextButton>Ver mais informações</TextButton>
              </ButtonTouch>
            </IncidentCard>
          )}
        />
      </IncidentsContainer>
    </>
  );
}

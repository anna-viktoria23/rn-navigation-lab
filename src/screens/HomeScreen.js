
import { useState, useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// TODO: substituir pelos jogos que voce escolheu
const jogos = [
  {
    id: '1',
    titulo: 'The Legend of Zelda: Breath of the Wild',
    genero: 'Aventura / Mundo Aberto',
    plataforma: 'Nintendo Switch',
    nota: '10/10',
    sinopse:
      'Explore um vasto mundo aberto em Hyrule. Resolva puzzles, enfrente inimigos e descubra segredos em uma das aventuras mais aclamadas da historia dos games.',
  },
  {
    id: '2',
    titulo: 'Red Dead Redemption 2',
    genero: 'Acao / Mundo Aberto',
    plataforma: 'PS4 / Xbox / PC',
    nota: '10/10',
    sinopse:
      'Uma epica historia sobre a vida fora da lei no coracao da America. Viva a aventura de Arthur Morgan no velho oeste em um mundo detalhado e imersivo.',
  },
  {
    id: '3',
    titulo: 'God of War',
    genero: 'Acao / Aventura',
    plataforma: 'PS4 / PC',
    nota: '10/10',
    sinopse:
      'Kratos e seu filho Atreus embarcam em uma jornada pelos Nove Reinos da mitologia nordica. Um dos jogos mais premiados de sua geracao.',
  },
  {
    id: '4',
    titulo: 'Hollow Knight',
    genero: 'Metroidvania / Plataforma',
    plataforma: 'PC / Switch / PS4',
    nota: '9/10',
    sinopse:
      'Explore um vasto reino subterraneo habitado por insetos. Um desafio preciso e belo, com um mundo imenso para descobrir.',
  },
  {
    id: '5',
    titulo: 'Celeste',
    genero: 'Plataforma / Indie',
    plataforma: 'PC / Switch / PS4',
    nota: '9/10',
    sinopse:
      'Ajude Madeline a sobreviver sua viagem interior pela montanha Celeste. Um platformer desafiador com uma historia tocante sobre superacao.',
  },
  {
    id: '6',
    titulo: 'Stardew Valley',
    genero: 'Simulacao / RPG',
    plataforma: 'PC / Switch / Mobile',
    nota: '9/10',
    sinopse:
      'Herde a fazenda do seu avo e comece uma nova vida. Plante, colete, construa relacionamentos e explore cavernas neste mundo relaxante.',
  },
];

// TODO: adicionar { navigation } como parametro quando a navegacao estiver configurada
export default function HomeScreen() {
  // TODO: estado para o texto digitado na busca
  const [busca, setBusca] = useState('');

  // TODO: estado com os jogos exibidos na lista — inicia com todos
  const [jogosFiltrados, setJogosFiltrados] = useState(jogos);

  // TODO: filtrar os jogos sempre que o valor de 'busca' mudar
  useEffect(() => {
    const resultado = jogos.filter((jogo) =>
       jogo.titulo.toLowerCase().includes(busca.toLowerCase())
     );
     setJogosFiltrados(resultado);
   }, [busca]);

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.card}
        // TODO: implementar onPress com navigation.navigate passando os dados do jogo
         onPress={() => navigation.navigate('Detalhe', { ...item })}
      >
        <View style={styles.cardIcone}>
          {/* TODO: substituir pela inicial do titulo ou outro elemento do seu tema */}
          <Text style={styles.cardIconeTexto}>{item.titulo[0]}</Text>
        </View>
        <View style={styles.cardInfo}>
          {/* TODO: substituir pelos campos do seu tema */}
          <Text style={styles.cardTitulo}>{item.titulo}</Text>
          <Text style={styles.cardSubtitulo}>{item.genero}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* TODO: colocar o nome do seu app e subtitulo */}
        <Text style={styles.headerTitulo}>Catalogo de Games</Text>
        <Text style={styles.headerSubtitulo}>
          Escolha um jogo para ver os detalhes
        </Text>
      </View>

      {/* Campo de busca — TODO: adicionar value={busca} e onChangeText={setBusca} */}
      <View style={styles.buscaContainer}>
        <TextInput
          style={styles.buscaInput}
          placeholder="Buscar jogo..."
          placeholderTextColor="#999"
          value={setBusca}
          onChangeText={setBusca}
        />
      </View>

      {/* TODO: trocar data={jogos} por data={jogosFiltrados} apos implementar o estado */}
      <FlatList
        data={jogosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

// TODO: estilizar com as cores e identidade visual do seu tema
const styles = StyleSheet.create({
  buscaContainer: {
    backgroundColor: '#2C0E1A', // Bordô profundo acompanhando o cabeçalho
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#421625', // Linha divisória sutil em tom de vinho
  },
  buscaInput: {
    backgroundColor: '#3D1525', // Tom de bordô um pouco mais claro para destacar o campo de input
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: '#FFFFFF', // Texto digitado em branco para contraste perfeito
  },
  container: {
    flex: 1,
    backgroundColor: '#1A0B11', // Vinho bem escuro padrão para o fundo do app
  },
  header: {
    backgroundColor: '#2C0E1A', // Bordô profundo para o cabeçalho principal
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },
  headerTitulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF', // Branco puro
  },
  headerSubtitulo: {
    fontSize: 13,
    color: '#A8929B', // Cinza-vinho suave para o subtítulo do catálogo
    marginTop: 4,
  },
  lista: {
    padding: 16,
    gap: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C0E1A', // Bordô nos cards para "saltarem" sobre o fundo vinho escuro
    borderRadius: 12,
    padding: 14,
    // Sombra adaptada e mais suave para interfaces escuras
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 4,
  },
  cardIcone: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#421625', // Fundo do ícone em vinho intermediário
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    borderWidth: 1,
    borderColor: '#FF9F63', // Detalhe fino em laranja claro simulando um "slot" de jogo ativo
  },
  cardIconeTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF9F63', // Texto/Iniciais do jogo em laranja claro
  },
  cardInfo: {
    flex: 1,
  },
  cardTitulo: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF', // Nome do jogo em destaque com branco puro
    marginBottom: 4,
  },
  cardSubtitulo: {
    fontSize: 13,
    color: '#FFBF94', // Categoria/Plataforma do jogo em laranja claro pastel
  },
});

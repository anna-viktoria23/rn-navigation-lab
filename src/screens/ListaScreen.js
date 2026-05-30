
// TODO: estilizar esta tela com as cores e identidade visual do seu tema

import { useState, useEffect } from "react"; // 1. Importado o useEffect
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
// TODO: apos criar o componente CardJogo, importe-o aqui:
import { CardJogo } from '../components';

const jogosMock = [
  {
    id: "1",
    titulo: "The Legend of Zelda: Breath of the Wild",
    genero: "Aventura / Mundo Aberto",
    plataforma: "Nintendo Switch",
    nota: "10/10",
  },
  {
    id: "3",
    titulo: "God of War",
    genero: "Acao / Aventura",
    plataforma: "PS4 / PC",
    nota: "10/10",
  },
];

export default function ListaScreen({ route, navigation }) {
  const [itensSalvos, setItensSalvos] = useState(jogosMock);

  // 2. CORREÇÃO DO LOOP: Captura o novo jogo de forma segura usando useEffect
  useEffect(() => {
    if (route.params?.novoJogo) {
      const jogoExiste = itensSalvos.some(jogo => jogo.id === route.params.novoJogo.id);
      
      if (!jogoExiste) {
        setItensSalvos(prev => [...prev, route.params.novoJogo]);
      }

      // Limpa os parâmetros para não adicionar o mesmo jogo se a tela resetar
      navigation.setParams({ novoJogo: undefined });
    }
  }, [route.params?.novoJogo]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* TODO: renomeie o titulo para o seu tema */}
        <Text style={styles.headerTitulo}>Minha Lista</Text>
      </View>

      <FlatList
        data={itensSalvos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          // 3. OTIMIZAÇÃO: O estilo de card idealmente vai dentro do próprio componente,
          // mas mantive a View externa caso precise controlar margens na lista.
          <View style={styles.cardContainer}>
            <CardJogo 
              titulo={item.titulo} 
              genero={item.genero} 
              plataforma={item.plataforma} 
              nota={item.nota} 
            />
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.conteudo}>
            <View style={styles.iconeContainer}>
              {/* TODO: troque pela inicial do seu tema */}
              <Text style={styles.icone}>G</Text>
            </View>
            <Text style={styles.titulo}>Nenhum jogo salvo</Text>
            <Text style={styles.descricao}>Sua lista aparecera aqui</Text>
            <Text style={styles.dica}>
              Acesse um jogo e toque em "Adicionar a Lista" para salva-lo aqui.
            </Text>
          </View>
        }
        contentContainerStyle={itensSalvos.length === 0 && styles.listaVazia}
      />
    </SafeAreaView>
  );
}

// TODO: ajuste as cores para o tema do seu app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A0B11", // Vinho bem escuro para o fundo da lista
  },
  header: {
    backgroundColor: "#2C0E1A", // Bordô profundo para o cabeçalho
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },
  headerTitulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF", // Branco puro para destaque total do título
  },
  listaVazia: {
    flex: 1,
  },
  conteudo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  iconeContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#2C0E1A", // Recipiente em bordô para contrastar com o fundo
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#421625", // Borda sutil de acabamento
  },
  icone: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FF9F63", // Laranja claro para dar o destaque de "alerta" ou vazio
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF", // Branco para contraste e leitura imediata
    marginBottom: 8,
    textAlign: "center",
  },
  descricao: {
    fontSize: 16,
    color: "#FFBF94", // Laranja claro pastel para chamar atenção suavemente
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 12,
  },
  dica: {
    fontSize: 13,
    color: "#A8929B", // Cinza-vinho suave para o texto secundário/dica de suporte
    textAlign: "center",
    lineHeight: 20,
  },
  cardContainer: {
    marginHorizontal: 16,
    marginTop: 12,
  },
});
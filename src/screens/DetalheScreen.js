// TODO: estilizar esta tela com as cores e identidade visual do seu tema
// TODO: importar useState — adicione a linha abaixo no topo:
// import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Dados de fallback — usados enquanto a navegacao nao estiver configurada
const jogoMock = {
  titulo: "The Legend of Zelda: Breath of the Wild",
  genero: "Aventura / Mundo Aberto",
  plataforma: "Nintendo Switch",
  nota: "10/10",
  sinopse:
    "Explore um vasto mundo aberto em Hyrule. Resolva puzzles, enfrente inimigos e descubra segredos em uma das aventuras mais aclamadas da historia dos games.",
};

// TODO: adicionar { route, navigation } como parametros quando a navegacao estiver configurada
// Os dados chegam via route.params quando o usuario toca em um jogo na HomeScreen
export default function DetalheScreen(route, navigation) {
  // Defina os parâmetros de rota, pegando todos os campos presentes no objeto JOGOS definido na HomeScreen
  const { titulo } = route?.params ?? jogoMock;

  // TODO: estado booleano para controlar se o jogo foi salvo na lista
  const [isSalvo, setIsSalvo] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          {/* TODO: substituir pela inicial do titulo ou outro elemento do seu tema */}
          <View style={styles.heroIcone}>
            <Text style={styles.heroIconeTexto}>{titulo[0]}</Text>
          </View>
          <Text style={styles.heroTitulo}>{titulo}</Text>
          <Text style={styles.heroSubtitulo}>{genero}</Text>
          <View style={styles.heroMeta}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Plataforma</Text>
              <Text style={styles.metaValor}>{plataforma}</Text>
            </View>
            <View style={styles.metaSeparador} />
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Nota</Text>
              <Text style={styles.metaValor}>{nota}</Text>
            </View>
          </View>
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Sinopse</Text>
          <Text style={styles.detalheTexto}>{sinopse}</Text>
        </View>


       <Button 
        onPress={() => setIsSalvo(prev => !prev)}
        style={[styles.botao, isSalvo && styles.botaoAtivo]}
        title={isSalvo ? 'Remover da Lista' : 'Adicionar a Lista'} 
        />
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Adicionar a Lista</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// TODO: estilizar com as cores e identidade visual do seu tema
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A0B11", // Vinho bem escuro para o fundo geral da tela
  },
  hero: {
    backgroundColor: "#2C0E1A", // Bordô profundo para o bloco de destaque do topo
    alignItems: "center",
    paddingVertical: 28,
    paddingHorizontal: 20,
  },
  heroIcone: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#421625", // Vinho intermediário para a moldura do ícone
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    borderWidth: 2,
    borderColor: "#FF9F63", // Borda em laranja claro para destacar a logo/ícone do jogo
  },
  heroIconeTexto: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FF9F63", // Letra inicial do jogo em laranja claro
  },
  heroTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF", // Branco puro para legibilidade máxima do nome do jogo
    textAlign: "center",
    marginBottom: 6,
  },
  heroSubtitulo: {
    fontSize: 14,
    color: "#FFBF94", // Laranja claro pastel para a categoria/desenvolvedora
    marginBottom: 16,
  },
  heroMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    backgroundColor: "rgba(0, 0, 0, 0.25)", // Fundo escurecido translúcido para a barra de notas/plataforma
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  metaItem: {
    alignItems: "center",
  },
  metaLabel: {
    fontSize: 11,
    color: "#A8929B", // Texto secundário em cinza-vinho suave
    marginBottom: 2,
  },
  metaValor: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF", // Valores de metadados em branco
  },
  metaSeparador: {
    width: 1,
    height: 28,
    backgroundColor: "rgba(255, 255, 255, 0.15)", // Linha separadora sutil e clara
  },
  secao: {
    margin: 16,
    backgroundColor: "#2C0E1A", // Caixa de conteúdo em bordô, destacando-se do fundo da tela
    borderRadius: 12,
    padding: 16,
    // Sombra adaptada para o modo escuro
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  secaoTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFBF94", // Título da seção (ex: "Sinopse") em laranja claro pastel
    marginBottom: 10,
  },
  detalheTexto: {
    fontSize: 14,
    color: "#D6C5CB", // Cinza claro levemente rosado para leitura confortável de textos longos
    lineHeight: 22,
  },
  botao: {
    margin: 16,
    marginTop: 4,
    backgroundColor: "#421625", // Estado padrão do botão: vinho sóbrio
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 32,
    borderWidth: 1,
    borderColor: "#FF9F63", // Borda laranja para indicar que é clicável
  },
  botaoAtivo: {
    backgroundColor: "#FF8A47", // Botão principal / ativado brilha em laranja claro (CTA)
    borderColor: "transparent",
  },
  botaoTexto: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF", // Cor do texto quando o botão está no estado padrão
  },
});

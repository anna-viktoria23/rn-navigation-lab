// TODO: escolher um tema e personalizar os dados e estilizacao desta tela
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Perfil</Text>
      </View>

      <View style={styles.cartao}>
        {/* TODO: personalizar o avatar com a inicial do nome do usuario */}
        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>U</Text>
        </View>
        {/* TODO: personalizar nome e e-mail */}
        <Text style={styles.nome}>Nome do Usuario</Text>
        <Text style={styles.email}>usuario@email.com</Text>

        <View style={styles.separador} />

        {/* TODO: substituir pelas estatisticas que fazem sentido no seu tema */}
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Itens salvos</Text>
          <Text style={styles.infoValor}>0</Text>
        </View>
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Itens favoritos</Text>
          <Text style={styles.infoValor}>0</Text>
        </View>
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Membro desde</Text>
          <Text style={styles.infoValor}>Maio 2026</Text>
        </View>
      </View>

      {/* TODO: mudar o texto do botao para o contexto do seu tema */}
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Editar perfil</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// TODO: estilizar com as cores e identidade visual do seu tema
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A0B11", // Vinho bem escuro/fechado para o fundo do app
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
  cartao: {
    margin: 16,
    backgroundColor: "#2C0E1A", // Bordô profundo para destacar do container
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    // Sombra adaptada para o tema escuro (mais sutil para dar profundidade)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#421625", // Tom de vinho intermediário
    alignItems: "center",
    justify: "center",
    borderWidth: 3,
    borderColor: "#FF9F63", // Laranja claro vibrante na borda para o "glow" gamer
    marginBottom: 16,
  },
  avatarTexto: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FF9F63", // Letras iniciais em laranja claro
  },
  nome: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF", // Branco para contraste no tema escuro
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: "#D6C5CB", // Cinza levemente rosado/vinho para leitura suave
    marginBottom: 20,
  },
  separador: {
    width: "100%",
    height: 1,
    backgroundColor: "#421625", // Linha sutil separando as informações
    marginBottom: 16,
  },
  infoLinha: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: "#A8929B", // Texto secundário atenuado
  },
  infoValor: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFBF94", // Laranja claro pastel para os dados de perfil se destacarem
  },
  botao: {
    marginHorizontal: 16,
    backgroundColor: "#FF8A47", // Laranja claro principal (Call to Action)
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  botaoTexto: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1A0B11", // Texto escuro dentro do botão claro para garantir leitura
  },
});
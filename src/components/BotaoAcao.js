// Componente reutilizavel: BotaoAcao
// Exemplo de componente extraido para a pasta components/
// TODO: estilizar com as cores do seu tema
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function BotaoAcao({ texto, onPress, ativo }) {
  return (
    <TouchableOpacity
      style={[styles.botao, ativo && styles.botaoAtivo]}
      onPress={onPress}
    >
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

// TODO: ajustar as cores para o tema do seu app
const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#421625', // Estado padrão: Vinho intermediário sóbrio
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#FF9F63', // Borda em laranja claro para indicar interatividade
  },
  botaoAtivo: {
    backgroundColor: '#FF8A47', // Estado ativo (Call to Action): Laranja claro vibrante preenchido
    borderColor: 'transparent',  // Remove a necessidade da borda antiga ao preencher
  },
  texto: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FF9F63', // Texto em laranja claro para contrastar com o fundo vinho padrão
  },
  textoAtivo: {
    color: '#1A0B11', // Texto em vinho bem escuro para contrastar com o botão todo laranja
  },
});
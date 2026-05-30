import { Text, View } from "react-native";

// Passe os parametros de forma correta e realize a estilização do componente
export default function CardJogo(titulo, genero, plataforma, nota) {
  return (
    <View>
      <Text>{titulo}</Text>
      <Text>{genero}</Text>
      <Text>{plataforma}</Text>
      <Text>{nota}</Text>
    </View>
  );
}

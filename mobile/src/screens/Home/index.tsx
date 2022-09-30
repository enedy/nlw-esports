import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import logoImg from "../../assets/logo-nlw-esports.png";
import { Background } from "../../components/Background";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { Heading } from "../../components/Heading";
import { GAMES } from "../../utils/games";

import { styles } from "./styles";

export function Home() {
  const { navigate } = useNavigation();

  const handleOpenGame = (item: GameCardProps) => navigate("game", item);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />

        <Heading
          title={"Encontre seu duo!"}
          subtitle={"Selecione o game que deseja jogar..."}
        />

        <FlatList
          data={GAMES}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}

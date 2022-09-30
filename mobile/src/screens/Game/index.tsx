import { TouchableOpacity, View, Image, FlatList, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import logoImg from "../../assets/logo-nlw-esports.png";
import { Background } from "../../components/Background";

import { GameParams } from "../../@types/navigation";

import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";
import { THEME } from "../../theme";
import { Heading } from "../../components/Heading";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";
import { useState } from "react";
import { DuoMatch } from "../../components/DuoMatch";

export function Game() {
  const { goBack } = useNavigation();
  const route = useRoute();

  const game = route.params as GameParams;

  const [discordDuoSelected, setDiscordDuoSelected] = useState<string>("");
  const [duo, setDuo] = useState<DuoCardProps[]>([
    {
      hourEnd: "12:00",
      hourStart: "08:00",
      id: "1",
      name: "Enedy",
      useVoiceChannel: false,
      weekDays: ["1", "2", "3"],
      yearsPlaying: 5,
    },
    {
      hourEnd: "12:00",
      hourStart: "08:00",
      id: "2",
      name: "Allan",
      useVoiceChannel: true,
      weekDays: ["1", "2", "3"],
      yearsPlaying: 5,
    },
    {
      hourEnd: "12:00",
      hourStart: "08:00",
      id: "3",
      name: "Cordeiro",
      useVoiceChannel: true,
      weekDays: ["1", "2", "3"],
      yearsPlaying: 5,
    },
  ]);

  function getDiscordUser(adsId: string) {
    var element = duo.find((x) => x.id == adsId)?.name;

    if (element) setDiscordDuoSelected(element);
  }

  const handleGoBack = () => {
    goBack();
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} />

          <View style={styles.right} />
        </View>

        <Image source={game.cover} style={styles.cover} resizeMode="cover" />
        {/* <Image source={{uri: game.cover}} /> caso seja somente uma url (imagem nao esta na pasta assets)  */}

        <Heading title={game.name} subtitle="Conecte-se e comece a jogar!" />

        <FlatList
          style={styles.containerList}
          data={duo}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DuoCard data={item} onConnect={() => getDiscordUser(item.id)} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[
            duo.length > 0 ? styles.contentList : styles.emptyListContent,
          ]}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados ainda
            </Text>
          )}
        />

        <DuoMatch
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          onClose={() => setDiscordDuoSelected("")}
        />
      </SafeAreaView>
    </Background>
  );
}

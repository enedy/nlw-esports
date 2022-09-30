import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Other } from "../screens/Other";
import { AppRoutes } from "./app.routes";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {/* <Screen name="home" component={Home} options={{ headerShown: false }} /> */}
      <Screen name="tab-home" component={AppRoutes} />
      <Screen name="tab-other" component={Other} />
    </Navigator>
  );
}

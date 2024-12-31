import TabBar from "@/components/TabBar";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Ventas",
        }}
      />
      <Tabs.Screen
        name="inventory"
        options={{
          title: "Inventario",
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: "Reportes",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
        }}
      />
    </Tabs>
  );
}

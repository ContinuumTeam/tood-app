/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import { View } from "../components/Themed";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabFiveScreen from "../screens/TabFiveScreen";
import TabFourScreen from "../screens/TabFourScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabThreeScreen from "../screens/TabThreeScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
	RootStackParamList,
	RootTabParamList,
	RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
	colorScheme,
}: {
	colorScheme: ColorSchemeName;
}) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	);
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Root"
				component={BottomTabNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="NotFound"
				component={NotFoundScreen}
				options={{ title: "Oops!" }}
			/>
			<Stack.Group screenOptions={{ presentation: "modal" }}>
				<Stack.Screen name="Modal" component={ModalScreen} />
			</Stack.Group>
		</Stack.Navigator>
	);
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="TabOne"
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme].tint,
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					position: "absolute",
					height: 60,
					bottom: 30,
					marginHorizontal: 20,
					borderRadius: 10,
					shadowColor: "#000",
					shadowOffset: {
						width: 10,
						height: 10,
					},
					shadowOpacity: 0.06,
					paddingHorizontal: 20,
				},
			}}
		>
			<BottomTab.Screen
				name="TabOne"
				component={TabOneScreen}
				options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
					title: "Home",
					tabBarIcon: ({ color }) => (
						<View
							style={{
								backgroundColor: "yellow",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<MaterialIcons name="library-add-check" color={color} size={30} />
						</View>
					),
					// headerRight: () => (
					// 	<Pressable
					// 		onPress={() => navigation.navigate("Modal")}
					// 		style={({ pressed }) => ({
					// 			opacity: pressed ? 0.5 : 1,
					// 		})}
					// 	>
					// 		<FontAwesome
					// 			name="info-circle"
					// 			size={25}
					// 			color={Colors[colorScheme].text}
					// 			style={{ marginRight: 15 }}
					// 		/>
					// 	</Pressable>
					// ),
				})}
			/>
			<BottomTab.Screen
				name="TabTwo"
				component={TabTwoScreen}
				options={{
					title: "Assigned",
					tabBarIcon: ({ color }) => (
						<View style={{}}>
							<MaterialIcons name="people-alt" color={color} size={30} />
						</View>
					),
				}}
			/>
			<BottomTab.Screen
				name="TabCreateTask"
				component={ModalScreen}
				listeners={({ navigation }) => ({
					tabPress: (event) => {
						event.preventDefault();
						navigation.navigate("Modal");
					},
				})}
				options={{
					title: "Create Task",
					tabBarIcon: ({ color }) => (
						<View
							style={{
								width: 60,
								height: 60,
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#03DAC6",
								borderRadius: 50,
								marginBottom: 20,
							}}
						>
							<MaterialIcons name="add" color="#FFF" size={30} />
						</View>
					),
				}}
			/>
			<BottomTab.Screen
				name="TabThree"
				component={TabThreeScreen}
				options={{
					title: "analytics",
					tabBarIcon: ({ color }) => (
						<View style={{}}>
							<MaterialIcons
								name="insert-chart-outlined"
								color={color}
								size={30}
							/>
						</View>
					),
				}}
			/>
			<BottomTab.Screen
				name="TabFour"
				component={TabFourScreen}
				options={{
					title: "Settings",
					tabBarIcon: ({ color }) => (
						<View style={{}}>
							<MaterialIcons name="settings" color={color} size={30} />
						</View>
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

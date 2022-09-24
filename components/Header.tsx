import { StyleSheet, Image } from "react-native";
import { View, Text } from "./Themed";

import { FontAwesome } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import avatar from "../assets/images/avatar.jpeg";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";

export function Header() {
	const colorScheme = useColorScheme();
	return (
		<View style={styles.container}>
			<View style={styles.profileArea}>
				<Image source={avatar} style={styles.avatar} />
				<View style={styles.textArea}>
					<Text style={styles.title}>Hi, Matheus!👋 </Text>
					<Text style={styles.subtitle}>You have 24 tasks</Text>
				</View>
			</View>
			<View style={styles.settingsArea}>
				<RectButton style={styles.calendarButton}>
					<FontAwesome
						name="calendar"
						size={25}
						color={Colors[colorScheme].text}
					/>
				</RectButton>
				<RectButton>
					<FontAwesome
						name="bell-o"
						size={25}
						color={Colors[colorScheme].text}
					/>
				</RectButton>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		paddingHorizontal: 24,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",

		marginTop: getStatusBarHeight(),
		marginBottom: 20,
	},
	profileArea: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	textArea: {
		justifyContent: "center",
		marginLeft: 12,
	},
	title: {
		fontWeight: "bold",
		fontSize: 28,
	},
	subtitle: {
		marginTop: 6,
		fontSize: 14,
		color: "#c4c4c4",
	},
	avatar: {
		width: 60,
		height: 60,

		borderRadius: 50,
	},
	settingsArea: {
		flexDirection: "row",
		justifyContent: "flex-start",
	},
	calendarButton: {
		marginRight: 16,
	},
});

import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Header } from "../components";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
	navigation,
}: RootTabScreenProps<"TabOne">) {
	return (
		<View style={styles.container}>
			<Header />
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
			<RectButton
				style={styles.buttonRect}
				onPress={() => navigation.navigate("Modal")}
			>
				<Text style={styles.buttonText}>testesss</Text>
			</RectButton>
			<EditScreenInfo path="/screens/TabOneScreen.tsx" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
	buttonRect: {
		width: 120,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
		borderRadius: 8,
		marginBottom: 8,
	},
	buttonText: {
		color: "#000",
	},
});

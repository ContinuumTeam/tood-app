import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text } from "../components/Themed";

export default function TabTwoScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text>You have assigned</Text>
				<Text>50 Task</Text>
			</View>
		</SafeAreaView>
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
});

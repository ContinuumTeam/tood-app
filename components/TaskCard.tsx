import { ReactNode } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import avatar from "../assets/images/avatar.jpeg";

interface TaskCardProps {
	children: ReactNode;
}

export function TaskCard() {
	return (
		<View style={styles.container}>
			<View>
				<View>
					{/* <Text style={styles.category}>work</Text> */}
					{/* <Text style={styles.taskName}>work</Text> */}
				</View>
				<View style={styles.priority}>!!</View>
			</View>
			<View>
				<View>
					<FontAwesome name="address-book" size={20} />
					{/* <Text>17 August 2022</Text> */}
					<FontAwesome name="address-book" size={20} />
					{/* <Text>19:00 (Remaind at 18:00)</Text> */}
				</View>
				<Image source={avatar} style={styles.avatar} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 350,
		height: 120,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#312e38",
		marginBottom: 20,
		borderRadius: 6,
		borderLeftWidth: 4,
		borderLeftColor: "#FFFFE0",
	},
	title: {
		fontWeight: "bold",
		fontSize: 22,
		color: "#fff",
	},
	priority: {},
	category: {},
	taskName: {},
	avatar: {
		width: 60,
		height: 60,

		borderRadius: 50,
	},
});

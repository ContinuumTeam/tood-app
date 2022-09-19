import { ReactNode } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import avatar from "../assets/images/avatar.jpeg";

interface TaskCardProps {
	children: ReactNode;
}

export function TaskCard() {
	return (
		<View style={styles.cardTask}>
			<View style={styles.cardTaskContent}>
				<View style={styles.cardTaskContentHeader}>
					<Text style={styles.cardTaskHeaderCategory}>Work</Text>
					<Text style={styles.cardTaskHeaderTitle}>Meeting with client</Text>
				</View>
				<View style={styles.cardTaskPriority}>
					<Text style={styles.cardTaskPriorityTitle}>!!</Text>
				</View>
			</View>
			<View style={styles.cardTaskSchedule}>
				<View>
					<View style={styles.cardTaskScheduleDateTime}>
						<MaterialIcons name="calendar-today" size={16} />
						<Text style={styles.cardTaskScheduleDescription}>
							17 August 2022
						</Text>
					</View>
					<View style={styles.cardTaskScheduleDateTime}>
						<MaterialIcons name="alarm" size={16} />
						<Text style={styles.cardTaskScheduleDescription}>
							19:00 Remaind at 18:00
						</Text>
					</View>
				</View>
				<Image source={avatar} style={styles.avatar} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	cardTask: {
		marginVertical: 8,
		borderLeftWidth: 4,
		borderRadius: 4,
		borderLeftColor: "#000",
		padding: 12,

		shadowColor: "#171717",
		shadowOffset: { width: 1, height: 2 },
		shadowOpacity: 0.05,
		shadowRadius: 6,
	},
	cardTaskContent: {
		flexDirection: "row",
		alignItems: "flex-start",
	},
	cardTaskContentHeader: {
		flex: 1,
		justifyContent: "space-between",
		marginBottom: 8,
	},
	cardTaskHeaderCategory: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#c4c4c4",
	},
	cardTaskHeaderTitle: {
		fontSize: 22,
		fontWeight: "bold",
	},
	cardTaskPriority: {
		height: 25,
		width: 25,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "red",
		borderRadius: 50,
	},
	cardTaskPriorityTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#FFF",
	},
	cardTaskSchedule: {
		marginVertical: 4,
		justifyContent: "space-between",
		alignItems: "flex-end",
		flexDirection: "row",
	},
	cardTaskScheduleDateTime: {
		flexDirection: "row",
		marginTop: 4,
	},
	cardTaskScheduleDescription: {
		marginLeft: 8,
		fontSize: 16,
		fontWeight: "500",
	},
	avatar: {
		width: 30,
		height: 30,

		borderRadius: 50,
	},
});

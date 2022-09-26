import { ReactNode } from "react";
import {
	StyleSheet,
	Image,
	Animated,
	useColorScheme,
	View,
} from "react-native";
import { Text, Card } from "./Themed";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import avatar from "../assets/images/avatar.jpeg";
import { RectButton, Swipeable } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

interface TaskCardProps {
	children: ReactNode;
}

export function TaskCard() {
	const colorScheme = useColorScheme();

	return (
		<Swipeable
			friction={1.5}
			overshootRight={false}
			renderLeftActions={(progress, dragX) => {
				const scale = dragX.interpolate({
					inputRange: [0, 100],
					outputRange: [0, 1],
					extrapolate: "clamp",
				});
				return (
					<Animated.View style={[styles.completedTask]}>
						<Animated.View style={[styles.content]}>
							<Animated.View
								style={[styles.contentTextArea, { transform: [{ scale }] }]}
							>
								<Feather
									name="check-circle"
									color="#FFF"
									size={32}
									style={styles.contentIcon}
								/>
								<Text style={styles.contentText}>Completed</Text>
							</Animated.View>
						</Animated.View>
					</Animated.View>
				);
			}}
			renderRightActions={() => (
				<View style={styles.taskDeleteArea}>
					<RectButton style={styles.taskDelete}>
						<Feather name="trash" size={32} color="#FFF" />
					</RectButton>
				</View>
			)}
		>
			<Card style={styles.cardTask}>
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
							<MaterialIcons
								name="calendar-today"
								size={16}
								color={Colors[colorScheme].text}
							/>
							<Text style={styles.cardTaskScheduleDescription}>
								17 August 2022
							</Text>
						</View>
						<View style={styles.cardTaskScheduleDateTime}>
							<MaterialIcons
								name="alarm"
								size={16}
								color={Colors[colorScheme].text}
							/>
							<Text style={styles.cardTaskScheduleDescription}>
								19:00 Remaind at 18:00
							</Text>
						</View>
					</View>
					<Image source={avatar} style={styles.avatar} />
				</View>
			</Card>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	cardTask: {
		marginVertical: 8,
		borderLeftWidth: 4,
		borderRadius: 4,
		borderLeftColor: "#C38FFF",
		padding: 12,
		shadowColor: "#171717",
		shadowOffset: { width: 1, height: 2 },
		shadowOpacity: 0.05,
		shadowRadius: 8,
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
	completedTask: {
		width: "100%",
		paddingVertical: 12,
	},
	content: {
		backgroundColor: "#388e3c",
		justifyContent: "center",
		flex: 1,
		padding: 8,
		borderRadius: 8,
		paddingHorizontal: 8,
	},
	contentTextArea: {
		flexDirection: "row",
		alignItems: "center",
	},
	contentIcon: {
		marginLeft: 8,
	},
	contentText: {
		width: "100%",
		color: "#FFF",
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 12,
	},
	taskDeleteArea: { paddingVertical: 12 },
	taskDelete: {
		height: "100%",
		width: 100,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
		backgroundColor: "#dd2c00",
	},
});

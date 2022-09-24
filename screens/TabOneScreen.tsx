import { StyleSheet, FlatList, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { MaterialIcons } from "@expo/vector-icons";
import { Header, TaskCard } from "../components";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
	navigation,
}: RootTabScreenProps<"TabOne">) {
	const categories = [
		{
			id: 1,
			name: "today",
		},
		{
			id: 2,
			name: "upcomming",
		},
		{
			id: 3,
			name: "task done",
		},
		{
			id: 4,
			name: "today",
		},
		{
			id: 5,
			name: "upcomming",
		},
		{
			id: 6,
			name: "task done",
		},
		{
			id: 7,
			name: "today",
		},
		{
			id: 8,
			name: "upcomming",
		},
		{
			id: 9,
			name: "task done",
		},
	];

	return (
		<View style={styles.container}>
			<Header />

			<View style={styles.infoTaskArea}>
				<View style={[styles.infoTaskCard, styles.countAllTask]}>
					<MaterialIcons name="layers" size={28} color="#FFCBDB" />
					<Text style={[styles.infoTaskCardTitle, styles.countAllTaskTitle]}>
						Task
					</Text>
					<Text style={styles.countCardInfo}>80</Text>
				</View>

				<View style={[styles.infoTaskCard, styles.assignCountTask]}>
					<MaterialIcons name="assignment" size={28} color="#ADD8E6" />
					<Text style={[styles.infoTaskCardTitle, styles.assignCountTaskTitle]}>
						Assigned
					</Text>
					<Text style={styles.countCardInfo}>56</Text>
				</View>

				<View style={[styles.infoTaskCard, styles.completedCountTask]}>
					<MaterialIcons
						name="check-circle-outline"
						size={28}
						color="#F7F08E"
					/>
					<Text
						style={[styles.infoTaskCardTitle, styles.completedCountTaskTitle]}
					>
						Completed
					</Text>
					<Text style={styles.countCardInfo}>104</Text>
				</View>
			</View>

			<View style={styles.tagArea}>
				<FlatList
					data={categories}
					renderItem={(item: any) => (
						<RectButton style={styles.categoriesButton}>
							<Text style={styles.filterTag}>teste</Text>
						</RectButton>
					)}
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.categoriesArea}
				/>
			</View>

			<View style={styles.taskArea}>
				<FlatList
					data={categories}
					renderItem={(item: any) => <TaskCard />}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.taskCardArea}
				/>
			</View>

			<View style={styles.createTask}>
				<RectButton
					style={styles.buttonCreateTask}
					onPress={() => navigation.navigate("Modal")}
				>
					<MaterialIcons name="add" size={28} color="#FFF" />
				</RectButton>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
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
	createTask: {
		width: 70,
		height: 70,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#71c7ec",
		borderRadius: 50,
		position: "absolute",
		bottom: 35,
		right: 35,
	},
	buttonCreateTask: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		color: "#000",
	},
	infoTaskArea: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		marginVertical: 12,
	},
	infoTaskCard: {
		width: 120,
		height: 120,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
	},
	infoTaskCardTitle: {
		fontSize: 16,
		fontWeight: "bold",
		marginVertical: 10,
	},
	countCardInfo: {
		fontSize: 22,
		fontWeight: "bold",
	},
	countAllTask: {
		backgroundColor: "rgba(255,203,219,.2)",
	},
	countAllTaskTitle: {
		color: "#FFCBDB",
	},
	assignCountTask: {
		backgroundColor: "rgba(173,216,230, .2)",
	},
	assignCountTaskTitle: {
		color: "#ADD8E6",
	},
	completedCountTask: {
		backgroundColor: "rgba(247,240,142,.2)",
	},
	completedCountTaskTitle: {
		color: "#F7F08E",
	},
	tagArea: {
		justifyContent: "center",
	},
	filterTag: {
		fontSize: 16,
	},
	categoriesArea: {
		marginVertical: 12,
		paddingHorizontal: 12,
	},
	categoriesButton: {
		width: 80,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(173,216,230, .2)",
		marginRight: 8,
		borderRadius: 10,
		padding: 8,
	},
	taskArea: {
		justifyContent: "center",
		flex: 1,
	},
	taskCardArea: {
		marginHorizontal: 14,
		justifyContent: "center",
	},
});

import { StyleSheet, FlatList } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { MaterialIcons } from "@expo/vector-icons";
import { Header, TaskCard } from "../components";

import EditScreenInfo from "../components/EditScreenInfo";
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
						color="#FFFFE0"
					/>
					<Text
						style={[styles.infoTaskCardTitle, styles.completedCountTaskTitle]}
					>
						Completed
					</Text>
					<Text style={styles.countCardInfo}>104</Text>
				</View>
			</View>

			<View>
				<FlatList
					data={categories}
					renderItem={(item: any) => (
						<RectButton style={styles.categoriesButton}>
							<Text style={styles.countCardInfo}>teste</Text>
						</RectButton>
					)}
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.categoriesArea}
				/>
			</View>

			<View>
				<FlatList
					data={categories}
					renderItem={(item: any) => <TaskCard />}
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.taskArea}
				/>
			</View>

			<RectButton
				style={styles.buttonRect}
				onPress={() => navigation.navigate("Modal")}
			>
				<MaterialIcons name="add" size={28} color="#000" />
			</RectButton>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 24,
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
		width: 50,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
		borderRadius: 8,
		position: "absolute",
		bottom: 35,
		right: 35,
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
		width: 100,
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
		backgroundColor: "rgba(255,255,224, .2)",
	},
	completedCountTaskTitle: {
		color: "#FFFFE0",
	},
	categoriesArea: {
		width: "100%",
		height: 40,
		marginVertical: 12,
	},
	categoriesButton: {
		width: 80,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(173,216,230, .2)",
		marginLeft: 8,
		borderRadius: 10,
		padding: 8,
	},
	taskArea: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 20,
	},
});

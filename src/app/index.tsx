import { type CameraType, CameraView } from "expo-camera";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Page() {
	return (
		<View className="flex flex-1">
			<Content />
		</View>
	);
}

function Content() {
	const [facing, setFacing] = useState<CameraType>("front");

	function flip() {
		setFacing(facing === "front" ? "back" : "front");
	}

	return (
		<View className="flex flex-1">
			<CameraView className="flex-1 flex" facing={facing}>
				<View className="absolute bottom-0 left-0 right-0 p-4 flex flex-row justify-center">
					<TouchableOpacity className="" onPress={flip}>
						<Text className="text-foreground">Flip Camera</Text>
					</TouchableOpacity>
				</View>
			</CameraView>
		</View>
	);
}
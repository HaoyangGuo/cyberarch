import { useArchStore } from "../../store";
import { useEffect, useState } from "react";
import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";
import agent from "../../agent";
import Loading from "../loading/Loading";
import ModelCard from "./ModelCard";

const RemoteModelList = () => {

	const [loading, setLoading] = useState(true);
	const [models, setModels] = useState();

	useEffect(() => {
		agent.Sketchfab.getMyModels()
			.then((data) => {
				setModels(data.results);
			})
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <Loading />;
	if (!models) return <Text>no models</Text>;

	return (
		<Box mb={"32px"}>
			<Text fontSize={"2xl"} mb={4}>Remote Models</Text>
			<Wrap spacing={"20px"} justify={"start"}>
				{
					// @ts-ignore
					models.map((model) => {
						return (
							<WrapItem w={"40%"} key={model.uid}>
								<ModelCard {...model} />
							</WrapItem>
						);
					})
				}
			</Wrap>
		</Box>
	);
};

export default RemoteModelList;

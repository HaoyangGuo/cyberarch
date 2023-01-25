import { useArchStore } from "../../store";
import { useEffect, useState } from "react";
import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";
import agent from "../../agent";
import Loading from "../loading/Loading";
import ModelCard from "./ModelCard";

const ModelList = () => {

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

	console.log(models);

	if (loading) return <Loading />;
	if (!models) return <Text>no models</Text>;

	return (
		<Box>
			<Text fontSize={"2xl"} fontWeight={"semibold"} mb={4}>My Models</Text>
			<Wrap spacing={"20px"} justify={"center"}>
				{
					// @ts-ignore
					models.map((model) => {
						return (
							<WrapItem maxW={"25rem"} key={model.uid}>
								<ModelCard {...model} />
							</WrapItem>
						);
					})
				}
				{
					// @ts-ignore
					models.map((model) => {
						return (
							<WrapItem maxW={"25rem"} key={model.uid}>
								<ModelCard {...model} />
							</WrapItem>
						);
					})
				}
			</Wrap>
		</Box>
	);
};

export default ModelList;

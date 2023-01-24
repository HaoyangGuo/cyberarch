import { Box, Text, Heading } from "@chakra-ui/react";

const HomePage = () => {
	return (
		<Box
			w={"full"}
			h={"full"}
			display={"flex"}
			justifyContent="center"
      alignItems={"center"}
      flexDirection={"column"}
		>
      <Text fontSize={"4xl"} as={"h3"}>Welcome to Cyber-Arch Warehouse</Text>
		</Box>
	);
};

export default HomePage;

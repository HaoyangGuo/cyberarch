import { Badge, Box, Button, Divider, Heading, Text } from "@chakra-ui/react";
import useIsSketchfabAuth from "../../hooks/useIsSketchfabAuth";
import { NavLink, Outlet } from "react-router-dom";

const SketchfabPage = () => {
	useIsSketchfabAuth();

	return (
		<Box
			w={"full"}
			h={"full"}
			pt={8}
			px={10}
			display="flex"
			flexDir={"column"}
		>
			<Box w={"full"} display={"flex"} alignItems={"center"} mb={2}>
				<Text fontSize={"3xl"} mr={"auto"}>
					Sketchfab
				</Text>
				<Button as={NavLink} to="" mr={4} size={"lg"}>
					Remote Models
				</Button>
				<Button as={NavLink} to="local-models" mr={4} size={"lg"}>
					Local Models
				</Button>
				{/* <Button as={NavLink} to="search" size={"lg"}>
					Search
				</Button> */}
      </Box>
      <Divider />
			<Box mt={4} h="full" overflowY={"scroll"}>
				<Outlet />
			</Box>
		</Box>
	);
};

export default SketchfabPage;

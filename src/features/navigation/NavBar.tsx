import { useEffect } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import SketchfabIcon from "./SketchfabIcon";
import { useArchStore } from "../../store";
import { useNavigate, Link, NavLink } from "react-router-dom";
import axios from "axios";

const NavBar = () => {
	const navigate = useNavigate();
	const url = window.location.href;
	const sketchfabAccessToken = useArchStore(
		(state) => state.sketchfabAccessToken
	);
	const setSketchfabAccessToken = useArchStore(
		(state) => state.setSketchfabAccessToken
	);
	useEffect(() => {
		if (sketchfabAccessToken === null) {
			if (!url) return;
			const startIdx = url.indexOf("access_token=");
			if (startIdx === -1) return;
			const access_token = url.substring(
				url.indexOf("access_token=") + "access_token=".length,
				url.indexOf("&")
			);
			if (access_token) {
				console.log(access_token);
				setSketchfabAccessToken(access_token);
				axios.defaults.headers.common[
					"Authorization"
				] = `Bearer ${access_token}`;
				navigate("/sketchfab");
			}
		}
	}, [url]);

	return (
		<Box
			h={"full"}
			display={"flex"}
			flexDir={"column"}
			alignItems="center"
			py={8}
			px={10}
		>
			<Text fontSize={"3xl"} textAlign={"center"}>
				CyberArchWarehouse
			</Text>
			<Box mt={4} display="flex" flexDir={"column"} gap={4}>
				{sketchfabAccessToken === null ? (
					<Button
						as="a"
						href={import.meta.env.VITE_SKETCHFAB_OAUTH_URL}
						size={"lg"}
						leftIcon={<SketchfabIcon width={"18px"} />}
					>
						Sketchfab Login
					</Button>
				) : (
					<Button
						size={"lg"}
						leftIcon={<SketchfabIcon width={"18px"} />}
						as={NavLink}
						to="sketchfab"
					>
						Sketchfab
					</Button>
				)}
				<Button size="lg" as={NavLink} to="data-visualization">
					Data Visualization
				</Button>
			</Box>
		</Box>
	);
};

export default NavBar;

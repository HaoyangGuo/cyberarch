import { Box, Text } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
// @ts-ignore
// import * as Sketchfab from "@sketchfab/viewer-api";
import Sketchfab from "../../utils/Sketchfab";
import { useArchStore } from "../../store";
import { NavLink, useParams } from "react-router-dom";
import { IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const ModelDetail = () => {
	const { uid } = useParams<{ uid: string }>();
	const iframeRef = useRef<HTMLIFrameElement>(null);

	useEffect(() => {
		if (uid === undefined) return;
		// @ts-ignore
		var client = new Sketchfab(iframeRef.current);
		// @ts-ignore		
		client.init(uid, {
			success: function onSuccess(api: any) {
				api.start();
				api.addEventListener("viewerready", function () {
					console.log("Viewer is ready");
				});
			},
			error: function onError() {
				console.log("Viewer error");
			},
		});
	}, []);

	return (
		<Box>
			<Box display={"flex"} gap={4}>
				<IconButton
					aria-label="Search database"
					icon={<ArrowBackIcon />}
					as={NavLink}
					to={"/sketchfab"}
				/>
				<Text fontSize={"2xl"} fontWeight={"semibold"} mb={4}>
					Model Detail
				</Text>
			</Box>
			<Box>
				{/* <Text fontSize={"xl"} fontWeight={"semibold"} mb={4}>
					Model Detail
				</Text> */}
				<Box w={"50vw"} h={"25rem"}>
					<iframe
						style={{ width: "100%", height: "100%" }}
						ref={iframeRef}
						id="api-frame"
						allow="autoplay; fullscreen; xr-spatial-tracking"
						execution-while-out-of-viewport="true"
						execution-while-not-rendered="true"
						xr-spatial-tracking="true"
						web-share="true"
						allowFullScreen
					></iframe>
				</Box>
			</Box>
		</Box>
	);
};

export default ModelDetail;

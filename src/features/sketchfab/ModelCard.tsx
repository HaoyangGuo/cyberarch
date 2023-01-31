import {
	Box,
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Heading,
	Stack,
	Text,
	Image,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

interface ModelCardProps {
	thumbnails: any;
	name: string;
	uid: string;
	isDownloadable: boolean;
}

const ModelCard = ({
	thumbnails,
	name,
	uid,
	isDownloadable,
}: ModelCardProps) => {
	return (
		<>
			<Card w={"25rem"} h={"28rem"}>
				<CardBody>
					<Image
						src={thumbnails.images[0].url}
						alt={name}
						borderRadius="lg"
						maxH={"14rem"}
						w={"100%"}
					/>
					<Stack mt="6" spacing="3">
            <Heading size="md">{name}</Heading>
					</Stack>
				</CardBody>
				<Divider />
				<CardFooter>
					<ButtonGroup spacing="2">
						<Button variant="outline" colorScheme={"teal"}>
							Download
						</Button>
						<Button variant="ghost" as={NavLink} to={`model/${uid}`}>
							View
						</Button>
					</ButtonGroup>
				</CardFooter>
			</Card>
		</>
	);
};

export default ModelCard;

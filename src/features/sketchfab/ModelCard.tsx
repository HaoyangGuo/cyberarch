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
	ModalCloseButton,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import ue5 from "../../utils/ue5";

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
	console.log(isDownloadable);

	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleDownload = () => {
		onOpen();
		ue5("print", { message: "Downloading model..." });
	};

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
						{isDownloadable && (
							<Button
								variant="outline"
								colorScheme={"teal"}
								onClick={handleDownload}
							>
								Download
							</Button>
						)}
						<Button variant="ghost" as={NavLink} to={`model/${uid}`}>
							View
						</Button>
					</ButtonGroup>
				</CardFooter>
			</Card>
			<Modal isOpen={isOpen} onClose={onClose} isCentered size={"lg"}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{name}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						Download initiated. Please wait for this process to finish before
						starting another download.
					</ModalBody>
					<ModalFooter>
						<Button
							colorScheme="teal"
							variant={"outline"}
							mr={3}
							onClick={onClose}
						>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModelCard;

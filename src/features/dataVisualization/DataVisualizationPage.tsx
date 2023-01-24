import { Box, Text } from "@chakra-ui/react";
// @ts-ignore
import MultilineChart from "./MultilineChart.jsx";
import schc from "./SCHC.json";
import vcit from "./VCIT.json";
import portfolio from "./PORTFOLIO.json";

const portfolioData = {
  name: "Portfolio",
  color: "#ffffff",
  items: portfolio.map((d) => ({ ...d, date: new Date(d.date) }))
};
const schcData = {
  name: "SCHC",
  color: "#d53e4f",
  items: schc.map((d) => ({ ...d, date: new Date(d.date) }))
};
const vcitData = {
  name: "VCIT",
  color: "#5e4fa2",
  items: vcit.map((d) => ({ ...d, date: new Date(d.date) }))
};

const dimensions = {
  width: 600,
  height: 300,
  margin: {
    top: 30,
    right: 30,
    bottom: 30,
    left: 60
  }
};

const DataVisualizationPage = () => {
	return (
		<Box
			w={"full"}
			h={"full"}
			pt={12}
			px={12}
			display="flex"
			flexDir={"column"}
		>
			<Box w={"full"} display={"flex"} alignItems={"center"}>
				<Text fontSize={"3xl"} fontWeight={"semibold"} mr={"auto"}>
					Data Visualization
				</Text>
			</Box>
			<Box mt={8} h="full" overflow={"scroll"}>
				<MultilineChart
					data={[portfolioData, schcData, vcitData]}
					dimensions={dimensions}
				/>
			</Box>
		</Box>
	);
};

export default DataVisualizationPage;

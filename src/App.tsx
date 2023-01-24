import React, { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./features/navigation/NavBar";
import SketchfabPage from "./features/sketchfab/SketchfabPage";
import HomePage from "./features/home/HomePage";
import MyModelList from "./features/sketchfab/MyModelList";
import Search from "./features/sketchfab/Search";
import DataVisualizationPage from "./features/dataVisualization/DataVisualizationPage";

function App() {
	// const [count, setCount] = useState(0);
	// const [loading, setLoading] = useState(false);
	// const [imageUrl, setImageUrl] = useState();

	// const fetchModel = async () => {
	//   setLoading(true);
	//   const response = await fetch(
	//     "https://api.sketchfab.com/v3/models?user=ARtSSt&archives_flavours=false"
	//   );
	//   const data = await response.json();
	//   const randomIndex = Math.floor(Math.random() * data.results.length);
	//   setImageUrl(data.results[randomIndex].thumbnails.images[2].url);
	//   setLoading(false);
	//   // @ts-ignore
	//   ue5("print", { message: "HELLO FROM THE WEB BROWSER!" });
	//   // @ts-ignore
	//   hello();
	// };

	return (
		<div style={{ height: "100vh" }}>
			<Grid templateColumns="repeat(4, 1fr)">
				<GridItem w="100%" h="100vh" bg="blackAlpha.400" borderRight={"1px"}>
					<NavBar />
				</GridItem>
				<GridItem colSpan={3} h="100vh" bg="blackAlpha.400">
					<Routes>
						<Route index element={<HomePage />} />
						<Route path="sketchfab" element={<SketchfabPage />}>
							<Route index element={<MyModelList />} />
							<Route path="search" element={<Search />} />
						</Route>
						<Route
							path="data-visualization"
							element={<DataVisualizationPage />}
						></Route>
					</Routes>
				</GridItem>
			</Grid>
		</div>
	);
}

export default App;

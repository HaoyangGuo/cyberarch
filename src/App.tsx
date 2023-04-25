import { Box, Grid, GridItem, IconButton } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./features/navigation/NavBar";
import SketchfabPage from "./features/sketchfab/SketchfabPage";
import HomePage from "./features/home/HomePage";
import RemoteModelList from "./features/sketchfab/RemoteModelList";
import Search from "./features/sketchfab/Search";
import DataVisualizationPage from "./features/dataVisualization/DataVisualizationPage";
import ModelDetail from "./features/sketchfab/ModelDetail";
import ue5 from "./utils/ue5";
import LocalModelList from "./features/sketchfab/LocalModelList";

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

	const handleClose = () => {
		ue5("close", { message: "Closing..." });
	};

	return (
		<div style={{ height: "100vh" }}>
			<Box display={"flex"} h={"100vh"}>
				<Box h={"100vh"} borderRight={"1px"}>
					<NavBar />
				</Box>
				<Box w={"100%"} h={"100vh"}>
					<Routes>
							<Route index element={<HomePage />} />
							<Route path="sketchfab" element={<SketchfabPage />}>
								<Route index element={<RemoteModelList />} />
								<Route path="local-models" element={<LocalModelList />} />
								<Route path="search" element={<Search />} />
								<Route path="model/:uid" element={<ModelDetail />} />
							</Route>
							<Route
								path="data-visualization"
								element={<DataVisualizationPage />}
							></Route>
					</Routes>
				</Box>
			</Box>
		</div>
	);
}

export default App;

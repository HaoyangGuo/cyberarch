import { useArchStore } from "../store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import agent from "../agent";
import axios from "axios";

const useIsSketchfabAuth = () => {
	const navigate = useNavigate();
	const sketchfabAccessToken = useArchStore(
		(state) => state.sketchfabAccessToken
	);
	axios.defaults.headers.common[
		"Authorization"
	] = `Bearer ${sketchfabAccessToken}`;
	useEffect(() => {
		agent.Sketchfab.getMe().catch((err) => {
			console.log(err);
			navigate("/");
		});
	}, [sketchfabAccessToken]);
};

export default useIsSketchfabAuth;

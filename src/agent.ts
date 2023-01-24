import axios, { AxiosResponse } from "axios";
import { useArchStore } from "./store";
import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

axios.interceptors.response.use(
	async (response) => {
		return response;
	},
	(error) => {
		const { data, status } = error.response;
		switch (status) {
			case 401:
				toast({
					title: data.detail,
					status: "error",
					duration: 5000,
					isClosable: true,
					position: "bottom-right",
				});
				break;
			default:
				break;
		}
		return Promise.reject(error);
	}
);

const responseBody = (response: AxiosResponse) => response.data;
const requests = {
	get: (url: string) => axios.get(url).then(responseBody),
	post: (url: string) => axios.post(url).then(responseBody),
	put: (url: string) => axios.put(url).then(responseBody),
	del: (url: string) => axios.delete(url).then(responseBody),
};

const Sketchfab = {
  getMe: () => requests.get("https://api.sketchfab.com/v3/me"),
  getMyModels: () => requests.get("https://api.sketchfab.com/v3/me/models"),
};

const agent = {
	Sketchfab,
};

export default agent;

import { apiLinks } from "../utils/apiLinks";
import { ListParams, ListResponse, Gender } from "./../model/common";
// import { ListParams, ListResponse, Gender } from "models";
import axiosClient from "./axiosClient";

const genderApi = {
  getAll(params: ListParams): Promise<ListResponse<Gender>> {
    return axiosClient.get(apiLinks.gender, { params });
  },

  getById(id: string): Promise<Gender> {
    return axiosClient.get(`${apiLinks.gender}/${id}`);
  },

  add(data: Gender): Promise<Gender> {
    return axiosClient.post(apiLinks.gender, data);
  },

  update(data: Partial<Gender>): Promise<Gender> {
    const url = `${apiLinks.gender}`;
    return axiosClient.put(url, data);
  },

  remove(id: string): Promise<unknown> {
    return axiosClient.delete(`${apiLinks.gender}/${id}`);
  },
};

export default genderApi;

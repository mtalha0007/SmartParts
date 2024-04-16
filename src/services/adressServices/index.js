import { post, get, patch, deleted } from '../index';
import routes from './route';

const addressPostServices = {
  createAddress: async (params) => {
    const data = await post(routes.createAddress, params);
    return data;
  },
  getAddress: async (params) => {
    const data = await get(routes.getAddress, params);
    return data;
  },
}

export default addressPostServices
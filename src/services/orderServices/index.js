import { post, get, patch, deleted } from '../index';
import routes from './route';

const orderServices = {
  getOrders: async (params) => {
    const data = await get(routes.getOrders, params);
    return data;
  },
  getOrderById: async (id) => {
    const data = await get(routes.getOrderById  + `?id=${id}`);
    return data;
  },
//   updateAuctionHouse: async (obj) => {
//     const data = await patch(routes.updateAuctionHouse, obj);
//     return data;
//   },
//   deleteAuctionHouse: async (params) => {
//     const data = await deleted(routes.deleteAuctionHouse, params);
//     return data;
//   },
}

export default orderServices
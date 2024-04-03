import { post, get, patch, deleted } from '../index';
import routes from './route';

const authRegister = {
  registerUser: async (params) => {
    const data = await post(routes.registerUser, params);
    return data;
  },
//   createAuctionHouse: async (obj) => {
//     const data = await post(routes.createAuctionHouse, obj);
//     return data;
//   },
//   updateAuctionHouse: async (obj) => {
//     const data = await patch(routes.updateAuctionHouse, obj);
//     return data;
//   },
//   deleteAuctionHouse: async (params) => {
//     const data = await deleted(routes.deleteAuctionHouse, params);
//     return data;
//   },
}

export default authRegister
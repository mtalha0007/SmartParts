import { post, get, patch, deleted } from '../index';
import routes from './route';

const productServices = {
  getProductData: async (params) => {
    const data = await get(routes.getProductData, params);
    return data;
  },
//   createAuctionHouse: async (obj) => {
//     const data = await post(routes.createAuctionHouse, obj);
//     return data;
//   },

}

export default productServices
import { post, get, patch, deleted } from '../index';
import routes from './route';

const PlaceOrderServices = {
  postOrder: async (params) => {
    const data = await post(routes.postOrder, params);
    return data;
  },
//   createAuctionHouse: async (obj) => {
//     const data = await post(routes.createAuctionHouse, obj);
//     return data;
//   },

}

export default PlaceOrderServices
import instance from "../config/axios";


export const get = async (endPoint, params) => {
    try {
        const result = await instance.get(endPoint, { params: params });
        if (result.status === 200 || result.status === 206) return result.data;
        else throw result;
    } catch (e) {
        console.log(e)
    }
};

export const post = async (endPoint, data) => {
    try {
        const result = await instance.post(endPoint, data);
        if (result.status === 200 || result.status === 206) return result.data;
        else throw result;
    } catch (e) {
        console.log(e)
    }
};

export const patch = async (endPoint, data) => {
    try {
        const result = await instance.patch(endPoint, data);
        if (result.status === 200 || result.status === 206) return result.data;
        else throw result;
    } catch (e) {
        console.log(e)
    }
};

export const deleted = async (endPoint, params) => {
    try {
        const result = await instance.delete(endPoint, { params: params });
        if (result.status === 200 || result.status === 206) return result.data;
        else throw result;
    } catch (e) {
        console.log(e)
    }
};
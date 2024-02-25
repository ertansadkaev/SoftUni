import { api } from './api.js';

const dataEndpoints = {
    getAll: "data/fruits?sortBy=_createdOn%20desc",
    singleFruit: "data/fruits/"
}

async function getAllFruits () {
    return api.get(dataEndpoints.getAll);
}

async function getSingleFruit(id) {
    return api.get(dataEndpoints.singleFruit + id);
}

async function createFruit(data) {
    return api.post(dataEndpoints.singleFruit, data);
}

async function updateFruit(id, data) {
    return api.put(dataEndpoints.singleFruit + id, data);
}

async function delFruit(id) {
    return api.del(dataEndpoints.singleFruit + id);
}

async function search(query) {
    return api.get(`data/fruits?where=name%20LIKE%20%22${query}%22`);
}

export const dataService = {
    getAllFruits,
    getSingleFruit,
    createFruit,
    updateFruit,
    delFruit,
    search
}
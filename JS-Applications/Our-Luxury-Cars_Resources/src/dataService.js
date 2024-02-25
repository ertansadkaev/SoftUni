import { api } from './api.js';

const dataEndpoints = {
    getAll: "data/cars?sortBy=_createdOn%20desc",
    singleCar: "data/cars",
    singleCarGet: "data/cars/"
}

async function getAllCars () {
    return api.get(dataEndpoints.getAll);
}

async function getSingleCar(id) {
    return api.get(dataEndpoints.singleCarGet + id);
}

async function createCarCard(data) {
    return api.post(dataEndpoints.singleCar, data);
}

async function updateCar(id, data) {
    return api.put(dataEndpoints.singleCarGet + id, data);
}

async function delCar(id) {
    return api.del(dataEndpoints.singleCarGet + id);
}

async function search(query) {
    return api.get(`data/cars?where=model%20LIKE%20%22${query}%22`);
}

export const dataService = {
    getAllCars,
    getSingleCar,
    createCarCard,
    updateCar,
    delCar,
    search
}
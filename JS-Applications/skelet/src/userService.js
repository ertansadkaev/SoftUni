import { api } from "./api.js";
import { userHelper } from "./userHelper.js";

 const userEndpoints = {
    login: "**",
    register: "**",
    logout: "**"
 }

 async function register(email, username, password) {
    const data = await api.post(userEndpoints.register, {email, username, password});
    userHelper.setUserData(data);
 }

 async function login(email, password) {
    const data = await api.post(userEndpoints.login, {email, password});
    userHelper.setUserData(data);
 }

 async function logout() {
    await api.get(userEndpoints.logout);
    userHelper.removeUserData()
 }

 export const userService = {
    register,
    login,
    logout
 }
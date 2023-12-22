import { uuid } from "@/models"

export const saveUserLocalstorage = (userId: uuid) => {
    const userIdStringify = JSON.stringify(userId)
    localStorage.setItem("userId", userIdStringify);
}

export const removeUserLocalstorage = () => localStorage.removeItem("userId");

export const getUserLocalstorage = () : uuid => {
    const userIdLocal = localStorage.getItem("userId");
    if (userIdLocal) {
        const userIdParsed = JSON.parse(userIdLocal);
        return userIdParsed;
    } else {console.log("No existe usuario guardado")}
}
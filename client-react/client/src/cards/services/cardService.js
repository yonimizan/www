import axios from 'axios';
import { getToken } from '../../users/services/localStorageService';
const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8181';

const getHeader = () => ({headers: {"x-auth-token": localStorage.getItem("token")}})

export const getCards = async () => {


  try {
    const {data} = await axios.get (`${apiUrl}/cards`);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject (error.message);
  }
};

export const getCard = async id => {
  try {
    const {data} = await axios.get (`${apiUrl}/cards/${id}`);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject (error.messgae);
  }
};

export const getMyCards = async () => {
  try {
    const {data} = await axios.get (`${apiUrl}/cards/my-cards`);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject (error.messgae);
  }
};

export const creatCard = async card => {
  try {
    console.log(card)
    const {data} = await axios.post (`${apiUrl}/cards`, {...card, image: {url: card.imageUrl, alt: card.imageAlt}, imageUrl: undefined, imageAlt: undefined}, getHeader());
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject (error.messgae);
  }
};

export const editCard = async (card, id) => {
  try {
    const {data} = await axios.put (`${apiUrl}/cards/${id}`, card, getHeader());
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject (error.messgae);
  }
};

export const changeLikeStatus = async cardId => {
  try {
    const {data} = await axios.patch (`${apiUrl}/cards/${cardId}`,{} ,getHeader());
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject (error.messgae);
  }
};

export const deleteCard = async cardId => {
  try {
    const {data} = await axios.delete (`${apiUrl}/cards/${cardId}`, getHeader());
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject (error.messgae);
  }
};

import Axios from 'axios';
import api from './api';

export const getInsurance=(id)=>{
    return api.get(`/${id}`);
}
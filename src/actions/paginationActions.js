import { INCREMENT_PAGE_NUMBER, SET_PAGE } from '../types';

export const setPage = pageNumber => ({ type: SET_PAGE, payload: pageNumber });
export const incrementPagination = () => ({ type: INCREMENT_PAGE_NUMBER });

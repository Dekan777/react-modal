
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a85af220d32fb519177ae1885af75e44';
const TREND = 'trending/movie/day';
const DETAILS = 'movie/';
const SEARCH = 'search/movie';

export const fetchTrend = async () => {
    const params = new URLSearchParams({
        api_key: API_KEY,
        language: 'en-US',
        page: '1',
    });

    try {
        const response = await axios.get(`${BASE_URL}${TREND}?${params}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching trend:', error);
        throw error;
    }
};

export const fetchDetails = async (id) => {
    const params = new URLSearchParams({
        api_key: API_KEY,
        language: 'en-US',

    });

    try {
        const response = await axios.get(`${BASE_URL}${DETAILS}/${id}?${params}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching details:', error);
        throw error;
    }
};

// https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US
export const fetchCast = async (id) => {
    const params = new URLSearchParams({
        api_key: API_KEY,
        language: 'en-US',


    });

    try {
        const response = await axios.get(`${BASE_URL}${DETAILS}/${id}/credits?${params}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching details:', error);
        throw error;
    }
};


// https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1
export const fetchReviews = async (id) => {
    const params = new URLSearchParams({
        api_key: API_KEY,


    });

    try {
        const response = await axios.get(`${BASE_URL}${DETAILS}/${id}/reviews?${params}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching details:', error);
        throw error;
    }
};

// https://api.themoviedb.org/3/search/movie?query=termi&include_adult=false&language=en-US&page=1
export const fetchMuvies = async (query) => {
    const params = new URLSearchParams({
        api_key: API_KEY,
        language: 'en-US',
        include_adult: false,

        page: '1',

    });

    try {
        const response = await axios.get(`${BASE_URL}${SEARCH}?${params}&${query}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching details:', error);
        throw error;
    }
};
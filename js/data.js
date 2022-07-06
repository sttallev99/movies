import {beginRequest, endRequest} from './notification.js';
import API from './api.js';

const endpoints = {
    MOVIES: 'data/movies',
    MOVIE_BY_ID: 'data/movies/'
}

const api = new API('brainyhouse.backendless.app', beginRequest, endRequest);

export const register = api.register.bind(api);
export const login = api.login.bind(api);
export const logout = api.logout.bind(api);


export async function getMovies(search) {
    let result;
    if(!search) {
        result =  await api.get(endpoints.MOVIES);
    } else {
        result =  await api.get(endpoints.MOVIES);
    }
    return result;
}

export async function getMovieById(id) {
    return api.get(endpoints.MOVIE_BY_ID + id)
}

export async function createMovie(movie) {
    return post(endpoints.MOVIES, movie);

}

export async function updateMovie(id, updatedProps) {
    return api.put(endpoints.MOVIE_BY_ID + id, updatedProps);
}

export async function deleteMovie(id) {
    return api.delete(endpoints.MOVIE_BY_ID + id);
}

export async function buyTicket(movie) {
    const newTickets = movie.tickets - 1;
    const movieId = movie.objectId;

    return updateMovie(movieId, { tickets: newTickets});
}

export async function getMoviesByOwner() {
    const ownerId = localStorage.getItem('userId');
    return api.get(endpoints.MOVIES + `?where=ownerId%3D%27${ownerId}%27`);
}
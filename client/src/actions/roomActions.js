import {SET_CLIENT_ID, SET_GAME_ID, SET_GAME_ROOM, SET_CONNECTION, CLEAR_ROOMS, GET_ROOMS} from './types';
import axios from 'axios';
import store from '../store';

export const setClient = (clientId) => (dispatch) => {
    dispatch({
        type: SET_CLIENT_ID,
        payload:clientId
    })

}

export const setGame = (gameId) => (dispatch) => {
    dispatch({
        type: SET_GAME_ID,
        payload: gameId
    })
}

export const clearRooms = () => dispatch => {
    dispatch({ type: CLEAR_ROOMS })
}

export const setGameRoom = (game) => (dispatch) => {
    dispatch({
        type: SET_GAME_ROOM,
        payload: game.clients
    })
}

export const setConnection = (connection) => (dispatch) => {
    dispatch({
        type: SET_CONNECTION,
        payload: connection
    })
}

export const getRooms = () => (dispatch) => {
    axios.get('/api/rooms')
        .then(res => dispatch({
            type: GET_ROOMS,
            payload: Object.values(res.data.games)       
        }))
}

export const deleteRoom = () => (dispatch) => {
    axios.delete('/api/rooms/room/' + store.getState().room.gameRoom[0].gameId)
        .then(res => console.log("delete room res: ", res))
}
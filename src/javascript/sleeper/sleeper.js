import axios from '../axios/axios.js';

const LEAGUE_ID = process.env.SLEEPER_LEAGUE_ID;

async function getASpecificLeague() {
    const response = await axios.getRequest(`https://api.sleeper.app/v1/league/${LEAGUE_ID}`);
    return response;
}

async function getUsersInALeague() {
    const response = await axios.getRequest(`https://api.sleeper.app/v1/league/${LEAGUE_ID}/users`);
    return response;
}

async function getRostersInALeague() {
    const response = await axios.getRequest(`https://api.sleeper.app/v1/league/${LEAGUE_ID}/rosters`);
    return response;
}

export default {
    getASpecificLeague,
    getUsersInALeague,
    getRostersInALeague
};
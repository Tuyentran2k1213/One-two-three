import { PLAY, CHOOSE } from "../constant/index.js";

export const startPlay = payload => ({
    type: PLAY,
    payload
})

export const choose = payload => ({
    type: CHOOSE,
    payload
})
import { PLAY, CHOOSE } from "../constant/index.js.js";

const initialState = {
    player: 'keo',
    bot: 'keo',
    playNum: 0,
    winNum() {
        return 0;
    },
};

const reducer = (state=initialState, action) => {
    var newState;
    const { player } = state;
    const { payload, type } = action;
    switch(type){
        case PLAY:
            newState = {...state,
            bot: payload,
            playNum: ++state.playNum,
            winNum() {
                var win = state.winNum();
                if(player == 'keo' && payload == 'bao' || player == 'bua' && payload == 'keo' || player == 'bao' && payload == 'bua'){
                    ++win;
                }
                return win;
            }
            }
            break;
        case CHOOSE:
            newState = {...state, 
            player: payload}
            break;
        default:
            newState = {...state};
    }
    return newState;
}

export default reducer;
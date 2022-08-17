import { createSlice } from "@reduxjs/toolkit";
import { getArrows, getProgress, getRandom } from "../api/api";

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        start: null,
        fields: ['', '', '', '', '', '', '', '', ''],
        totalMoves: 3,
        moves: ['', '', '', '', '', '', '', '', '', ''],
        finish: null,
        isTimer: false,
        timer: 6,
        speed: 1,
        info: { message: 'Начать игру', color: '#fff', icon: 'play' },
    },
    reducers: {
        setStartField(state, action) {
            const start = getRandom(1, 9);
            const arr = getArrows(start, state.totalMoves);

            state.fields = ['', '', '', '', '', '', '', '', ''];
            state.start = start;
            state.fields[start - 1] = ['start', '#34495e'];
            state.moves = [...arr];
            state.finish = arr[state.totalMoves - 1][1];
            state.isTimer = true;
        },
        setFinishField(state, action) {
            state.fields[state.finish - 1] = ['finish', '#27ae61'];
            state.isTimer = false;
            if((state.finish - 1) === action.payload) {
                state.info = { message: 'Вы выиграли', color: '#27ae61', icon: 'refresh' };
                if(state.totalMoves < 10) {
                    state.totalMoves = state.totalMoves + 1;
                };
                state.timer = getProgress(state.totalMoves).timer;
                state.speed = getProgress(state.totalMoves).speed;
            } else {
                state.fields[action.payload] = ['times', '#ff5555'];
                state.info = { message: 'Вы проиграли', color: '#ff5555', icon: 'refresh' };
                state.totalMoves = 3;
                state.timer = getProgress(3).timer;
                state.speed = getProgress(3).speed;
            }
        },
        setIsTimer(state, action) {
            state.isTimer = action.payload;
            state.info = { message: 'Вы проиграли', color: '#ff5555', icon: 'refresh' };
            state.fields[state.finish - 1] = ['finish', '#ff5555'];
        },
        setReset(state, action) {
            state.totalMoves = 3;
            state.speed = getProgress(3).speed;
        }
    },
})

export const { setFinishField, setIsTimer, setReset, setStartField }  = gameSlice.actions;

export default gameSlice.reducer;
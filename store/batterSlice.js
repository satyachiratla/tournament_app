import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    batters: [],
    runs: 0
}

const batterSlice = createSlice({
    name: 'scorecard',
    initialState,
    reducers: {
        replaceBatters(state, action) {
            state.batters = action.payload.batters
        },
        scorecardHandler(state, action) {
            const newScore = action.payload;
            const player = state.batters.map(batter => batter.r);
            console.log(player)
        }
    }
})

export const batterActions = batterSlice.actions;

export default batterSlice;
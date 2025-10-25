import { createSlice } from "@reduxjs/toolkit";
import type { Airdrop } from "../../app/lib/data/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { airdrops } from "../../app/lib/data/sampleData";



type State = {
    airdrops: Airdrop[];
    selectedAirdrop: Airdrop | null;
    formOpen: boolean;
}

const initialState: State = {
    airdrops: airdrops,
    selectedAirdrop: null,
    formOpen: false,
}



export const airtropSlice = createSlice({
    name: 'airdrop',
    initialState,       
    reducers: {
        setAirdrops: (state, action: PayloadAction<Airdrop[]>) => {
            state.airdrops = action.payload;
        },
        createAirdrop: (state, action: PayloadAction<Airdrop>) => {
            state.airdrops.push(action.payload);
        },
        updateAirdrop: (state, action: PayloadAction<Airdrop>) => {
            state.airdrops = state.airdrops.map(airdrop => airdrop.id === action.payload.id ? action.payload : airdrop);
        },
        deleteAirdrop: (state, action: PayloadAction<string>) => {
            state.airdrops = state.airdrops.filter(airdrop => airdrop.id !== action.payload);
        },
        selectAirdrop: (state, action: PayloadAction<string | null>) => {
            state.selectedAirdrop = state.airdrops.find(airdrop => airdrop.id === action.payload) || null;
        }
    }
});

export const { setAirdrops, createAirdrop, updateAirdrop, deleteAirdrop, selectAirdrop } = airtropSlice.actions;
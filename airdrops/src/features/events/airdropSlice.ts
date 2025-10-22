import { createSlice } from "@reduxjs/toolkit";
import type { Airdrop } from "../../app/lib/data/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "../../app/lib/stores/store";



type State = {
    airdrops: Airdrop[];
    selectedAirdrop: Airdrop | null;
    formOpen: boolean;
}

const initialState: State = {
    airdrops: [],
    selectedAirdrop: null,
    formOpen: false,
}

export function toogleForm(airdrop: Airdrop | null){
    return function(dispatch: AppDispatch, getState: () => RootState) {
        const formOpen = getState().airdrop.formOpen;
         if(formOpen){
            dispatch(closeForm());
            setTimeout(() => {
            dispatch(selectAirdrop(airdrop));
            dispatch(openForm());
      }, 300);
    }   else{
        dispatch(selectAirdrop(airdrop));
        dispatch(openForm());
    }
    }
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
        selectAirdrop: (state, action: PayloadAction<Airdrop | null>) => {
            state.selectedAirdrop = action.payload;
        },
        openForm: (state) => {
            state.formOpen = true;
        },
        closeForm: (state) => {
            state.formOpen = false;
        },
    }
});

export const { setAirdrops, createAirdrop, updateAirdrop, deleteAirdrop, selectAirdrop, openForm, closeForm } = airtropSlice.actions;
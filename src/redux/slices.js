import { createSlice } from "@reduxjs/toolkit";

const skillsSlice = createSlice({
    name: 'skills',
    initialState: {
        items: [],
        isLoadind: false,
        error: null,
        search: ''
    },
    reducers: {
        searchSkillsRequest: (state) => {
            state.isLoadind = true;
            state.error = null;
        },
        searchSkillsSuccess: (state, action) => {
            state.isLoadind = false;
            state.items = action.payload;
        },
        searchSkillsFailure: (state,action) => {
            state.isLoadind = false;
            state.error = action.payload;
        },
        changeSearchField: (state, action) => {
            state.search = action.payload.search;
        },
        clearSearch: (state, action) => {
            state.items = [];
            state.isLoadind = false;
            state.error = null;
            state.search = ''
        }
    }
});

export const {
    searchSkillsRequest,
    searchSkillsSuccess,
    searchSkillsFailure,
    changeSearchField,
    clearSearch
} = skillsSlice.actions;

export default skillsSlice.reducer;
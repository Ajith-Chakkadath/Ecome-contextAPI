import { createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
    name: 'TabSlice',
    initialState: {
        currentTab: 'warehouseIn'
    },
    reducers: {
        setCurrentTab: (state, action) => {
            state.currentTab = action.payload
        }
    }
})

export const { setCurrentTab } = tabSlice.actions

export default tabSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	//  Открыть секцию с таблицей
	tableSectionOpen: false,
	// все данные для выводв
	tableData: [],
}

export const appSlice = createSlice({
	name: 'app',
	initialState: initialState,
	reducers: {
		setTableSectionOpen: (state, action) => {
			state.tableSectionOpen = action.payload
		},
		setTableData: (state, action) => {
			// state.tableData = [...state.tableData, action.payload]
			state.tableData = [action.payload]
		},
	},
})

export const { setTableSectionOpen, setTableData } = appSlice.actions
export default appSlice.reducer

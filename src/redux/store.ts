import { combineReducers, configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./nodes/slice";
import symptomsSlice from "./symptoms/slice";
import conditionSlice from "./conditions/slice";
import uiSlice from "./ui/slice";

const appReducer = combineReducers({
	layoutState: layoutSlice,
	symptomState: symptomsSlice,
	conditionState: conditionSlice,
	uiState: uiSlice,
});

const rootReducer = (state: any, action: any) => {
	if (action.type === "reset") {
		state = {
			layoutState: {
				nodes: [],
				edges: [],
			},
		};
	}

	return appReducer(state, action);
};

const store = configureStore({
	reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export default store;

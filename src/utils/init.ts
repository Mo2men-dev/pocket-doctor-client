import { ConditionType } from "../types/data";
import { evaluateConditions, generateSymptoms } from "./evaluate";
import { removeDuplicates } from "./utils";
import { setConditions } from "../redux/conditions/slice";
import { UnknownAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { addSymptom, setSymptoms } from "../redux/symptoms/slice";
import { setDisplayTitle, setDisplayInstructions } from "../redux/ui/slice";
import { generateRandomId, generateSymptomsNodes } from "./generate";
import { setNodeState } from "../redux/nodes/slice";

/**
 * Function that initializes the Conditions.
 * @param totalConditions an array of all the conditions fetched from the API call.
 * @param symptom the first symptom selected by the user.
 * @returns an object containing the conditions with no 0% similarity to the selected symptom, 
 * and the conditions evaluated by the similarity percentage.
 */
export function initConditions(totalConditions: ConditionType[], symptom: string, dispatch: Dispatch<UnknownAction>): ConditionType[] {
    // first evaluation of conditions based on the first symptom
	// and the conditions fetched from the API call.
	// this will return an array of conditions ordered by the percentage of similarity.
	const filteredConditions = evaluateConditions(totalConditions, [symptom]);

	// remove conditions with 0% similarity to the selected symptom.
	// this will return an array of conditions with a similarity greater than 0.
	// this will be used to know which conditions to display their symptoms.
	const noZeroSimilarity = filteredConditions.filter((condition: ConditionType) => condition.similarity !== 0);

	// evaluate the conditions with more than 0% similarity to the selected symptom.
	// this will return an array of conditions ordered by the percentage of similarity.
	// this will be used to set the conditions in the redux store.
	const initialConditions = evaluateConditions(noZeroSimilarity, [symptom]);

    // set the conditions in the redux store.
	dispatch(setConditions(initialConditions));

    return noZeroSimilarity
}

/**
 * Function that initializes the Symptoms.
 * @param conditions an array of conditions with no 0% similarity to the selected symptom.
 * @param symptom the first symptom selected by the user.
 * @returns an array of symptoms without duplicates and the selected symptom.
 */
export function initSymptoms(conditions: ConditionType[], symptom: string, dispatch: Dispatch<UnknownAction>): string[] {
    // remove duplicates from the generated symptoms.
	// this will return an array of strings (symptoms) without duplicates.
	const symptoms = removeDuplicates(generateSymptoms(conditions));

	// remove the selected symptom from the symptoms array.
	const noReapeat = symptoms.filter((s: string) => s !== symptom);

    // set the total symptoms in the redux store to the symptoms without duplicates and the selected symptom.
	dispatch(setSymptoms(noReapeat));

    return noReapeat;
}

/**
 * Function that initializes everything after submitting the first symptom.
 * @param totalConditions an array of all the conditions fetched from the API call.
 * @param symptom the first symptom selected by the user.
 * @param dispatch the dispatch function from the redux store.
 */
export function init(totalConditions: ConditionType[], symptom: string, dispatch: Dispatch<UnknownAction>) {
    const rootId = generateRandomId(5);
    const symptomUpperCase = symptom.toUpperCase();

    dispatch(
        setNodeState([
            {
                id: rootId,
                type: "symptomNode",
                data: { symptom: symptom, parentID: rootId, clickable: false },
                position: { x: 0, y: 0 },
            },
        ])
    );

    // initialize the conditions and symptoms.
    const noZeroSimilarity = initConditions(totalConditions, symptomUpperCase, dispatch);
    const noReapeat = initSymptoms(noZeroSimilarity, symptomUpperCase, dispatch);

    // add the selected symptom to the redux store.
	dispatch(addSymptom(symptom));

    // set the display instructions and title to false.
	dispatch(setDisplayTitle(false));
	dispatch(setDisplayInstructions(false));
	dispatch(setDisplayInstructions(false));

	// generate the next nodes to be displayed based on the total symptoms without duplicates and the selected symptom.
	generateSymptomsNodes(noReapeat, rootId, dispatch);
}
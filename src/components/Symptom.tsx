import React from 'react';
import { capitalizeFirstLetter } from '../utils/utils';

const Symptom = ({ symptom, onClick }: { symptom: string; onClick: () => void }) => (
    <div
        className="bg-blue-500 text-white rounded-sm p-2 shadow-lg cursor-pointer text-sm"
        onClick={onClick}
    >
        {capitalizeFirstLetter(symptom)}
    </div>
);

export default Symptom;
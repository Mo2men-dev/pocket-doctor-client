import React from 'react'
import { Link } from 'react-router-dom';
import { ConditionType } from '../types/data';

const ConditionsList = ({ conditions }: { conditions: Array<{ condition: ConditionType; symptoms: string[] }> }) => (
    <div className="bg-blue-500 rounded-md p-4">
        {conditions.length !== 0 ? (
            conditions.map((condition, index) => (
                <Link
                    to={`/conditions/${condition.condition.id}`}
                    reloadDocument={true}
                    key={index}
                >
                    <div className="bg-white my-1 p-2 rounded-md shadow-md">
                        <h3 className="text-lg text-blue-600 ">
                            {condition.condition.name}
                        </h3>
                    </div>
                </Link>
            ))
        ) : (
            <div className="text-white flex justify-center">Loading...</div>
        )}
    </div>
);


export default ConditionsList
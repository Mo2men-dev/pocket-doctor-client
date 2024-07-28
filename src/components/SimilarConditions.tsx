import React from 'react'
import { ConditionType } from '../types/data';
import { Link } from 'react-router-dom';

function SimilarConditions({ similarConditions }: { similarConditions: ConditionType[] }) {
  return (
    <div className="absolute bg-white my-1 p-1 w-full rounded-sm">
        <div className="bg-blue-500 p-2 rounded-sm">
            <h1 className="text-white font-bold text-xl">
                Other Possiable Conditions:{" "}
                <span className="text-xs font-mono">(click for more info)</span>
            </h1>
            <hr />
            <div className="w-fi">
                {similarConditions.map((condition) => {
                    return (
                        <Link
                            className="w-fit"
                            to={`/conditions/${condition.id}`}
                            key={condition.id}>
                            <div className="text-sm underline mr-1 hover:text-black">
                                {condition.name}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default SimilarConditions
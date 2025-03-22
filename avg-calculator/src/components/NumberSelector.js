import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NumberSelector = () => {
    const [selectedType, setSelectedType] = useState("p");
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate(`/result/${selectedType}`);
    };

    return (
        <div className="p-6 flex flex-col items-center">
            <h1 className="text-2xl font-bold">Average Calculator</h1>
            <label className="mt-4">Select Number Type:</label>
            <select
                className="mt-2 p-2 border rounded"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
            >
                <option value="p">Prime</option>
                <option value="f">Fibonacci</option>
                <option value="e">Even</option>
                <option value="r">Random</option>
            </select>
            <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleSubmit}
            >
                Fetch Numbers
            </button>
        </div>
    );
};

export default NumberSelector;

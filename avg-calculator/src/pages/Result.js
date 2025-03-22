import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchWindowedNumbers } from "../api";

const Result = () => {
    const { type } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchWindowedNumbers(type);
            setData(result);
            setLoading(false);
        };

        fetchData();
    }, [type]);

    if (loading) return <p className="text-center mt-6">Loading...</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Number Analysis</h1>
            <p className="mt-2"><strong>Previous Window:</strong> {JSON.stringify(data.windowPrevState)}</p>
            <p className="mt-2"><strong>Current Window:</strong> {JSON.stringify(data.windowCurrState)}</p>
            <p className="mt-2"><strong>Numbers Fetched:</strong> {JSON.stringify(data.numbers)}</p>
            <p className="mt-2"><strong>Average:</strong> {data.avg}</p>
        </div>
    );
};

export default Result;

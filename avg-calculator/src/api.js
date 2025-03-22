import axios from "axios";

const BASE_URL = "http://localhost:9876/numbers"; 
const TEST_SERVER = "http://20.244.56.144/test/numbers";  // Ensure correct URL

export const fetchNumbers = async (type) => {
    const endpoints = {
        p: "/primes",
        f: "/fibo",
        e: "/even",
        r: "/rand",
    };

    if (!endpoints[type]) return { numbers: [] };

    try {
        const response = await axios.get(`${TEST_SERVER}${endpoints[type]}`, {
            timeout: 3000,  // Increased timeout
            headers: {
                // Add API key if needed
                // Authorization: `Bearer YOUR_API_KEY`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching numbers:", error.response?.data || error.message);
        return { numbers: [] };
    }
};

export const fetchWindowedNumbers = async (type) => {
    try {
        const response = await axios.get(`${BASE_URL}/${type}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching stored numbers:", error.response?.data || error.message);
        return {};
    }
};

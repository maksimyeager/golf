import { client } from "../../sanity";
import { useState, useEffect } from "react";

const useGetOffers = () => {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const data = await client.fetch('*[_type == "destinationOffer"]');
                setOffers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOffers();
    }, []);

    return { offers, loading, error };
};

export default useGetOffers;

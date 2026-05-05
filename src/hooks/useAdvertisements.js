/**
 * Custom hook for fetching advertisements
 */

import { useEffect, useState } from 'react';
import { advertisementsAPI } from '../services/apiService';

/**
 * Custom hook for fetching advertisements by placement
 */
export const useAdvertisements = (placement = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await advertisementsAPI.getAll(placement);
        setData(result.data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching advertisements:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [placement]);

  return { data, loading, error };
};

/**
 * Custom hook for fetching advertisements by specific placement
 */
export const useAdvertisementsByPlacement = (placement) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await advertisementsAPI.getByPlacement(placement);
        setData(result.data);
      } catch (err) {
        setError(err.message);
        console.error(`Error fetching advertisements for placement ${placement}:`, err);
      } finally {
        setLoading(false);
      }
    };

    if (placement) {
      fetchData();
    }
  }, [placement]);

  return { data, loading, error };
};

/**
 * Custom hook for fetching posts
 * Handles loading, error states, and caching
 */

import { useEffect, useState } from 'react';
import { postsAPI } from '../services/apiService';

export const usePosts = (params = {}, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await postsAPI.getAll(params);
        setData(result.data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error };
};

/**
 * Custom hook for fetching featured posts
 */
export const useFeaturedPosts = (perPage = 10) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await postsAPI.getFeatured(perPage);
        setData(result.data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching featured posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [perPage]);

  return { data, loading, error };
};

/**
 * Custom hook for fetching posts by category
 */
export const usePostsByCategory = (category, page = 1, perPage = 10) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await postsAPI.getByCategory(category, page, perPage);
        setData(result.data);
      } catch (err) {
        setError(err.message);
        console.error(`Error fetching posts for category ${category}:`, err);
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchData();
    }
  }, [category, page, perPage]);

  return { data, loading, error };
};

/**
 * Custom hook for fetching single post by slug
 */
export const usePostBySlug = (slug) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await postsAPI.getBySlug(slug);
        setData(result.data);
      } catch (err) {
        setError(err.message);
        console.error(`Error fetching post ${slug}:`, err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  return { data, loading, error };
};

/**
 * Custom hook for searching posts
 */
export const useSearchPosts = (query, perPage = 10) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query || query.trim().length === 0) {
      setData(null);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await postsAPI.search(query, perPage);
        setData(result.data);
      } catch (err) {
        setError(err.message);
        console.error('Error searching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, perPage]);

  return { data, loading, error };
};

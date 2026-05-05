/**
 * Congo Times API Service
 * Centralized API calls for all frontend operations
 */

const API_BASE_URL = 'https://demo.thecongotimes.com/api';

/**
 * Helper function to handle API responses
 */
const handleResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'API Error');
  }

  return data;
};

/**
 * Posts API Endpoints
 */
export const postsAPI = {
  /**
   * Get all posts with optional filters
   * @param {Object} params - Query parameters
   * @param {string} params.category - Category slug (e.g., 'politics', 'sports')
   * @param {boolean} params.featured - Filter by featured posts (1 or 0)
   * @param {string} params.search - Search in title, excerpt, content
   * @param {number} params.per_page - Posts per page (default 10)
   * @param {number} params.page - Pagination page number
   * @returns {Promise<Object>} Posts data with pagination
   */
  getAll: async (params = {}) => {
    const queryParams = new URLSearchParams();

    if (params.category) queryParams.append('category', params.category);
    if (params.featured !== undefined) queryParams.append('featured', params.featured ? 1 : 0);
    if (params.search) queryParams.append('search', params.search);
    if (params.per_page) queryParams.append('per_page', params.per_page);
    if (params.page) queryParams.append('page', params.page);

    const url = `${API_BASE_URL}/posts?${queryParams.toString()}`;
    const response = await fetch(url);
    return handleResponse(response);
  },

  /**
   * Get featured posts
   * @param {number} perPage - Number of posts to fetch (default 10)
   * @returns {Promise<Object>} Featured posts
   */
  getFeatured: async (perPage = 10) => {
    return postsAPI.getAll({ featured: 1, per_page: perPage });
  },

  /**
   * Get posts by category
   * @param {string} category - Category slug
   * @param {number} page - Page number (default 1)
   * @param {number} perPage - Posts per page (default 10)
   * @returns {Promise<Object>} Posts for the category
   */
  getByCategory: async (category, page = 1, perPage = 10) => {
    return postsAPI.getAll({
      category,
      page,
      per_page: perPage,
    });
  },

  /**
   * Get single post by slug
   * @param {string} slug - Post slug
   * @returns {Promise<Object>} Single post data
   */
  getBySlug: async (slug) => {
    const response = await fetch(`${API_BASE_URL}/posts/${slug}`);
    return handleResponse(response);
  },

  /**
   * Search posts
   * @param {string} query - Search query
   * @param {number} perPage - Posts per page (default 10)
   * @returns {Promise<Object>} Search results
   */
  search: async (query, perPage = 10) => {
    return postsAPI.getAll({
      search: query,
      per_page: perPage,
    });
  },
};

/**
 * Advertisements API Endpoints
 */
export const advertisementsAPI = {
  /**
   * Get all active advertisements
   * @param {string} placement - Optional placement position (e.g., 'position_1')
   * @returns {Promise<Object>} Advertisements data
   */
  getAll: async (placement = null) => {
    const url = placement
      ? `${API_BASE_URL}/advertisements?placement=${placement}`
      : `${API_BASE_URL}/advertisements`;
    const response = await fetch(url);
    return handleResponse(response);
  },

  /**
   * Get advertisements for specific placement
   * @param {string} placement - Placement position (position_1 to position_10)
   * @returns {Promise<Object>} Advertisements for the placement
   */
  getByPlacement: async (placement) => {
    const response = await fetch(`${API_BASE_URL}/advertisements/${placement}`);
    return handleResponse(response);
  },
};

export default {
  postsAPI,
  advertisementsAPI,
};

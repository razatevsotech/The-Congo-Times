/**
 * Category utilities
 * Maps URL paths to API category slugs and provides category metadata
 */

/**
 * Category mapping from URL paths to API slugs
 * This ensures consistent category naming throughout the app
 */
export const CATEGORY_MAP = {
  world: 'world',
  africa: 'africa',
  'congo-drc': 'congo-drc',
  politics: 'politics',
  sports: 'sports',
  business: 'business',
  technology: 'technology',
  others: 'others',
  health: 'health',
};

/**
 * Reverse mapping from API slugs to URL paths
 */
export const SLUG_TO_PATH = {
  world: '/world',
  africa: '/africa',
  'congo-drc': '/congo-drc',
  politics: '/politics',
  sports: '/sports',
  business: '/business',
  technology: '/technology',
  others: '/others',
  health: '/health',
};

/**
 * Category display names
 */
export const CATEGORY_LABELS = {
  world: 'World',
  africa: 'Africa',
  'congo-drc': 'Congo DRC',
  politics: 'Politics',
  sports: 'Sports',
  business: 'Business',
  technology: 'Technology',
  others: 'Others',
  health: 'Health',
};

/**
 * Get API category slug from URL path
 * @param {string} path - URL path like "/politics"
 * @returns {string} API category slug like "politics"
 */
export const getApiCategory = (path) => {
  if (!path) return null;

  // Remove leading slash
  const cleanPath = path.replace(/^\//, '');

  // Check if it exists in our mapping
  return CATEGORY_MAP[cleanPath] || cleanPath;
};

/**
 * Get display label for category
 * @param {string} categorySlug - Category slug from API
 * @returns {string} Display label
 */
export const getCategoryLabel = (categorySlug) => {
  return CATEGORY_LABELS[categorySlug] || categorySlug;
};

/**
 * Advertisement placement mapping
 * Maps positions to UI sections
 */
export const AD_PLACEMENTS = {
  HEADER_TOP: 'position_1',
  HERO_SIDE: 'position_2',
  AFTER_HERO: 'position_3',
  HEALTH_SECTION: 'position_4',
  TECH_AD: 'position_5',
  TOP_STORIES: 'position_6',
  BUSINESS_SECTION: 'position_7',
  SIDEBAR_TOP: 'position_8',
  SIDEBAR_MIDDLE: 'position_9',
  FOOTER: 'position_10',
};

export default {
  CATEGORY_MAP,
  SLUG_TO_PATH,
  CATEGORY_LABELS,
  getApiCategory,
  getCategoryLabel,
  AD_PLACEMENTS,
};

# Congo Times - API Integration Documentation

## Overview

This project uses a RESTful API integration with **Congo Times API** to fetch news articles, advertisements, and manage content dynamically. The API is hosted at `https://demo.thecongotimes.com/api`.

## Architecture

### 1. **API Service Layer** (`src/services/apiService.js`)

Central hub for all API calls. Provides standardized methods for:

- **Posts API**
  - `getAll(params)` - Fetch posts with optional filters
  - `getFeatured(perPage)` - Get featured posts
  - `getByCategory(category, page, perPage)` - Get posts by category
  - `getBySlug(slug)` - Get single post
  - `search(query, perPage)` - Search posts

- **Advertisements API**
  - `getAll(placement)` - Get all advertisements
  - `getByPlacement(placement)` - Get ads for specific placement

**Usage:**

```javascript
import { postsAPI, advertisementsAPI } from '../../services/apiService';

// Get politics posts
const result = await postsAPI.getByCategory('politics', 1, 10);

// Get featured posts
const featured = await postsAPI.getFeatured(10);
```

### 2. **Custom Hooks** (`src/hooks/`)

#### `usePosts.js`

- `usePosts(params)` - Generic hook for fetching posts
- `useFeaturedPosts(perPage)` - Fetch featured posts
- `usePostsByCategory(category, page, perPage)` - Fetch category-specific posts
- `usePostBySlug(slug)` - Fetch single post
- `useSearchPosts(query, perPage)` - Search posts

#### `useAdvertisements.js`

- `useAdvertisements(placement)` - Fetch ads by placement
- `useAdvertisementsByPlacement(placement)` - Fetch specific placement ads

**Usage:**

```javascript
import { usePostsByCategory, useFeaturedPosts } from '../../hooks/usePosts';

const { data: posts, loading, error } = usePostsByCategory('health', 1, 10);
const { data: featured } = useFeaturedPosts(5);

// Render
{
  loading ? <Skeleton /> : posts.map((post) => <PostCard post={post} />);
}
```

### 3. **Category Utilities** (`src/utils/categoryUtils.js`)

Helper functions for category management:

```javascript
import {
  CATEGORY_MAP,
  getApiCategory,
  getCategoryLabel,
  AD_PLACEMENTS,
} from '../../utils/categoryUtils';

// Convert URL path to API category
const category = getApiCategory('/politics'); // returns 'politics'

// Get display label
const label = getCategoryLabel('politics'); // returns 'Politics'

// Advertisement placements
const placement = AD_PLACEMENTS.HERO_SIDE; // returns 'position_2'
```

## Supported Categories

| URL Path      | API Slug     | Display Label |
| ------------- | ------------ | ------------- |
| `/politics`   | `politics`   | Politics      |
| `/sports`     | `sports`     | Sports        |
| `/africa`     | `africa`     | Africa        |
| `/business`   | `business`   | Business      |
| `/technology` | `technology` | Technology    |
| `/world`      | `world`      | World         |
| `/health`     | `health`     | Health        |
| `/congo-drc`  | `congo-drc`  | Congo DRC     |
| `/others`     | `others`     | Others        |

## Advertisement Placements

| Constant           | Position      | Usage                   |
| ------------------ | ------------- | ----------------------- |
| `HEADER_TOP`       | `position_1`  | Header area             |
| `HERO_SIDE`        | `position_2`  | Side of hero section    |
| `AFTER_HERO`       | `position_3`  | After hero section      |
| `HEALTH_SECTION`   | `position_4`  | Health section          |
| `TECH_AD`          | `position_5`  | Tech advertisement area |
| `TOP_STORIES`      | `position_6`  | Top stories section     |
| `BUSINESS_SECTION` | `position_7`  | Business section        |
| `SIDEBAR_TOP`      | `position_8`  | Sidebar top             |
| `SIDEBAR_MIDDLE`   | `position_9`  | Sidebar middle          |
| `FOOTER`           | `position_10` | Footer                  |

## Components & API Integration

### 1. **NewsHeroSection** (`src/Components/Pages/NewsHeroSection.jsx`)

Displays hero news, categorized posts, and advertisements on the home page.

**API Integration:**

```javascript
// Fetches 10 featured posts for hero
const { data: topStories } = useFeaturedPosts(10);

// Fetches 10 posts per category
const { data: healthPosts } = usePostsByCategory('health', 1, 10);
const { data: worldPosts } = usePostsByCategory('world', 1, 10);

// Fetches advertisements for Tech Ad section
const { data: techAds } = useAdvertisementsByPlacement(AD_PLACEMENTS.TECH_AD);
```

**Features:**

- ✅ Displays first featured post as hero
- ✅ Shows 2 featured posts as side articles
- ✅ 10 health articles in grid
- ✅ Top stories section with ads
- ✅ Business posts
- ✅ World posts
- ✅ Rotating advertisements with Swiper

### 2. **CategoryPage** (`src/Components/Pages/CategoryPage.jsx`)

Reusable component for displaying category-specific news with pagination.

**Usage:**

```javascript
<CategoryPage category="politics" categoryTitle="Politics" categoryLabel="POLITICS" />
```

**Features:**

- ✅ Hero article from first post
- ✅ Grid of remaining posts (9 per page)
- ✅ Pagination with Previous/Next buttons
- ✅ Category advertisements
- ✅ Error handling
- ✅ Loading skeletons

### 3. **PostDetail** (`src/Components/Pages/PostDetail.jsx`)

Displays full article with content, related posts, and ads.

**Route:** `/news/:slug`

**API Integration:**

```javascript
// Fetch single post by slug
const { data: post } = usePostBySlug(slug);

// Fetch related posts from same category
const { data: relatedPosts } = usePostsByCategory(post?.category?.slug);

// Fetch advertisements
const { data: sideAds } = useAdvertisementsByPlacement(AD_PLACEMENTS.SIDEBAR_TOP);
```

**Features:**

- ✅ Full article display with HTML content
- ✅ Category and publication date
- ✅ Featured image
- ✅ Related posts (4 from same category)
- ✅ Side advertisements
- ✅ Subscribe box
- ✅ Error handling

### 4. **Category Pages** (Politics, Sports, Africa, etc.)

All category pages use the `CategoryPage` component:

```javascript
// src/Components/Pages/Politics.jsx
import { CategoryPage } from './CategoryPage';

const Politics = () => {
  return <CategoryPage category="politics" categoryTitle="Politics" categoryLabel="POLITICS" />;
};

export default Politics;
```

## API Response Format

### Successful Response

```json
{
  "success": true,
  "message": "Success message",
  "data": {
    "id": 1,
    "slug": "article-title",
    "title": "Article Title",
    "excerpt": "Article excerpt",
    "content": "<p>Article content...</p>",
    "featured_image": "https://example.com/image.jpg",
    "category": {
      "id": 1,
      "name": "Politics",
      "slug": "politics"
    },
    "published_at": "2025-02-24T10:00:00Z",
    "author": {
      "id": 1,
      "name": "Author Name"
    }
  }
}
```

### Error Response

```json
{
  "success": false,
  "message": "Error message",
  "errors": {}
}
```

## API Endpoints Reference

### Posts

- `GET /api/posts` - List all posts (with filters)
- `GET /api/posts/{slug}` - Get single post

**Query Parameters:**

- `category` (string) - Category slug
- `featured` (boolean) - Featured posts only (1 or 0)
- `search` (string) - Search in title, excerpt, content
- `per_page` (integer) - Posts per page (default: 10)
- `page` (integer) - Page number

**Examples:**

```
GET /api/posts?category=politics&per_page=10&page=1
GET /api/posts?featured=1&per_page=5
GET /api/posts?search=congo&per_page=10
GET /api/posts/article-title
```

### Advertisements

- `GET /api/advertisements` - List all active ads
- `GET /api/advertisements/{placement}` - Get ads for placement

**Valid Placements:** `position_1` through `position_10`

**Examples:**

```
GET /api/advertisements
GET /api/advertisements?placement=position_1
GET /api/advertisements/position_1
```

## Error Handling

All hooks include error handling:

```javascript
const { data, loading, error } = usePostsByCategory('politics');

if (loading) return <Skeleton />;
if (error) return <ErrorMessage message={error} />;
if (!data) return <NoContent />;

return <PostsList posts={data} />;
```

## Performance Optimization

### 1. **Caching Strategy**

- useMemo used to memoize transformed data
- Prevents unnecessary re-renders

### 2. **Pagination**

- Load only 10 posts per page
- Reduces initial load time

### 3. **Image Optimization**

- Use featured_image from API
- Fallback placeholder image
- Tailwind object-cover for consistent display

### 4. **Lazy Loading**

- Loading skeletons for better UX
- Incremental content display

## Common Issues & Solutions

### Issue: Posts not loading

**Solution:** Check API URL in `apiService.js` is correct

```javascript
const API_BASE_URL = 'https://demo.thecongotimes.com/api';
```

### Issue: Category pages showing wrong data

**Solution:** Verify category slug in `categoryUtils.js` matches API category names

### Issue: Advertisements not showing

**Solution:** Ensure placement positions are correct (position_1 to position_10)

### Issue: Images not loading

**Solution:** API returns full URLs. Check if `featured_image` field exists in response.

## Adding New Features

### Add a new category:

1. Update `categoryUtils.js` with new category mapping
2. Create new category page component
3. Add route in `App.jsx`
4. Add menu item in `Header.jsx`

### Add new advertisement placement:

1. Define placement constant in `categoryUtils.js`
2. Update component to fetch placement ads
3. Render Swiper with ad images

### Add search functionality:

```javascript
import { useSearchPosts } from '../../hooks/usePosts';

const [query, setQuery] = useState('');
const { data: results } = useSearchPosts(query);
```

## Testing the API

### Using curl:

```bash
# Get politics posts
curl "https://demo.thecongotimes.com/api/posts?category=politics&per_page=10"

# Get featured posts
curl "https://demo.thecongotimes.com/api/posts?featured=1"

# Get single post
curl "https://demo.thecongotimes.com/api/posts/article-slug"

# Get advertisements
curl "https://demo.thecongotimes.com/api/advertisements/position_1"
```

### Using browser console:

```javascript
// Fetch politics posts
fetch('https://demo.thecongotimes.com/api/posts?category=politics&per_page=10')
  .then((r) => r.json())
  .then((d) => console.log(d))
  .catch((e) => console.error(e));
```

## Best Practices

1. **Always handle loading and error states**
2. **Use pagination for large datasets**
3. **Cache category data when possible**
4. **Provide fallback images**
5. **Format dates consistently**
6. **Use semantic HTML for accessibility**
7. **Test API responses before rendering**
8. **Handle missing/null values gracefully**

## Support

For API documentation, visit: https://demo.thecongotimes.com/api-docs

For issues or questions, refer to the API documentation or contact the backend team.

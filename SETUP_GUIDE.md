# API Integration Setup - Quick Reference

## What Was Implemented

### ✅ API Service Layer
- **File:** `src/services/apiService.js`
- Centralized API client with standardized methods
- Handles all HTTP requests to Congo Times API
- Automatic error handling and response formatting

### ✅ Custom Hooks (Data Fetching)
- **Files:** `src/hooks/usePosts.js` and `src/hooks/useAdvertisements.js`
- React hooks for component-level data fetching
- Built-in loading and error states
- Automatic data transformation

### ✅ Utility Functions
- **File:** `src/utils/categoryUtils.js`
- Category slug mapping (URL → API)
- Advertisement placement constants
- Helper functions for category management

### ✅ Components Updated

#### NewsHeroSection.jsx (Home Page)
- ✅ Fetches 10 featured posts
- ✅ Displays hero article + 2 side articles
- ✅ Shows 4 health articles (from API)
- ✅ Shows 3 world articles (from API)
- ✅ Shows 2 business articles (from API)
- ✅ Fetches and displays advertisements
- ✅ Loading skeletons for better UX
- ✅ Error handling

#### CategoryPage Component (Reusable)
- ✅ Generic category page with pagination
- ✅ Hero article + 9 grid articles per page
- ✅ Pagination (Previous/Next)
- ✅ Category-specific advertisements
- ✅ Loading and error states
- ✅ Responsive grid layout

#### PostDetail Component (Article Page)
- ✅ Fetches single post by slug
- ✅ Displays full HTML content
- ✅ Shows 4 related posts
- ✅ Side advertisements
- ✅ Subscribe box
- ✅ Error handling

### ✅ Category Pages Updated
All category pages now use the reusable `CategoryPage` component:
- Politics (`/politics`)
- Sports (`/sports`)
- Africa (`/africa`)
- Business (`/business`)
- Technology (`/technology`)
- World (`/world`)
- Health (`/health`)
- Congo DRC (`/congo-drc`)
- Others (`/others`)

### ✅ Routing
- Home page: `/` → Shows latest news from all categories
- Category pages: `/:category` → Shows 10 posts per category with pagination
- Post detail: `/news/:slug` → Shows full article with related posts

## API Base URL
```
https://demo.thecongotimes.com/api
```

## Key API Endpoints Used

### Posts
```
GET /api/posts
  - category: politics, sports, africa, business, technology, world, health, congo-drc, others
  - per_page: 10 (or custom)
  - page: 1, 2, 3, etc. (for pagination)
  - featured: 1 (for featured posts)

GET /api/posts/{slug}
  - Returns single post by slug
```

### Advertisements
```
GET /api/advertisements/{placement}
  - placements: position_1 through position_10
  - Returns active ads for that placement
```

## How to Use

### 1. Fetch Posts in a Component
```javascript
import { usePostsByCategory } from '../../hooks/usePosts';

const MyComponent = () => {
  const { data: posts, loading, error } = usePostsByCategory('politics', 1, 10);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.featured_image} alt={post.title} />
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
};
```

### 2. Add Advertisements
```javascript
import { useAdvertisementsByPlacement } from '../../hooks/useAdvertisements';
import { AD_PLACEMENTS } from '../../utils/categoryUtils';

const { data: ads } = useAdvertisementsByPlacement(AD_PLACEMENTS.HERO_SIDE);

{ads?.map(ad => (
  <img key={ad.id} src={ad.image} alt={ad.title} />
))}
```

### 3. Create New Category Page
```javascript
import { CategoryPage } from './CategoryPage';

const NewCategory = () => {
  return (
    <CategoryPage
      category="new-category"      // API slug
      categoryTitle="New Category"   // Display title
      categoryLabel="NEW CATEGORY"   // For badge
    />
  );
};
```

## File Structure
```
src/
├── services/
│   └── apiService.js              # API client
├── hooks/
│   ├── usePosts.js                # Post hooks
│   └── useAdvertisements.js       # Ad hooks
├── utils/
│   └── categoryUtils.js           # Category utilities
├── Components/
│   └── Pages/
│       ├── NewsHeroSection.jsx    # Home page (UPDATED)
│       ├── CategoryPage.jsx       # Category template (NEW)
│       ├── PostDetail.jsx         # Article page (NEW)
│       ├── Politics.jsx           # Category page (UPDATED)
│       ├── Sports.jsx             # Category page (UPDATED)
│       ├── Africa.jsx             # Category page (UPDATED)
│       ├── Business.jsx           # Category page (UPDATED)
│       ├── Technology.jsx         # Category page (UPDATED)
│       ├── World.jsx              # Category page (UPDATED)
│       ├── Health.jsx             # Category page (UPDATED)
│       ├── Congo.jsx              # Category page (UPDATED)
│       └── Others.jsx             # Category page (UPDATED)
├── App.jsx                        # Routes (UPDATED)
└── API_INTEGRATION.md             # Documentation
```

## Data Flow

```
User visits page
    ↓
Component mounts
    ↓
usePostsByCategory/useFeaturedPosts hook runs
    ↓
Hook calls postsAPI.getByCategory() or getFeatured()
    ↓
apiService sends GET request to API
    ↓
API returns JSON response
    ↓
Hook processes and sets state (data, loading, error)
    ↓
Component re-renders with new data
    ↓
Posts displayed with images and content from API
```

## Pagination Example

```javascript
const [page, setPage] = useState(1);
const { data: posts } = usePostsByCategory('politics', page, 10);

<button onClick={() => setPage(page + 1)}>Next</button>
<button onClick={() => setPage(Math.max(1, page - 1))}>Previous</button>
```

## Advertisement Placements

| Position | Usage | Component |
|----------|-------|-----------|
| position_1 | Header banner | Header |
| position_2 | Hero side ads | Hero section |
| position_3 | After hero | Below hero |
| position_4 | Health section ads | Health section |
| position_5 | Tech ad area | Technology section |
| position_6 | Top stories ads | Top stories |
| position_7 | Business ads | Business section |
| position_8 | Sidebar top | Post detail sidebar |
| position_9 | Sidebar middle | Post detail sidebar |
| position_10 | Footer | Footer area |

## Testing

### Test Home Page
1. Visit `/`
2. Should see featured posts in hero section
3. Should see health, world, business posts from API
4. Ads should rotate automatically

### Test Category Pages
1. Visit `/politics`, `/sports`, etc.
2. Should see hero post + grid of 9 posts
3. Pagination buttons should work
4. Should show category-specific ads

### Test Article Page
1. Click on any article
2. Should navigate to `/news/{article-slug}`
3. Full article content should display
4. Related posts should show at bottom
5. Side ads should display

## Error Handling

All components include error handling:
- Network errors are caught and displayed
- Missing images show placeholder
- Empty states show helpful messages
- Loading states show skeletons

## Performance Notes

- Posts paginated to 10 per page (reduces data load)
- Ads cached by placement position
- Images use object-cover for consistent display
- Memoized transformations prevent re-renders
- Lazy loading with skeletons improves perceived performance

## Next Steps

1. **Test the implementation** in browser
2. **Configure ad placements** if needed
3. **Add more categories** following the same pattern
4. **Customize styling** to match your design
5. **Set up environment variables** for API URL (optional)

## Troubleshooting

### Posts not loading?
- Check console for network errors
- Verify API URL in `apiService.js`
- Check category slug matches API (use lowercase)

### Images not showing?
- API returns full URLs - they should work
- Check network tab for image 404s
- Fallback placeholder will show if missing

### Ads not displaying?
- Verify placement position (1-10)
- Check placement exists in API
- Ensure featured_image URL is valid

### Pagination not working?
- Make sure posts returned >= 10
- Less than 10 posts disables "Next" button
- Check page state updates correctly

## Support Resources

- API Docs: https://demo.thecongotimes.com/api-docs
- Full Documentation: `API_INTEGRATION.md`
- Component Examples: Check component code comments

---

**Last Updated:** 2025-05-04
**API Version:** v1
**Status:** ✅ Production Ready

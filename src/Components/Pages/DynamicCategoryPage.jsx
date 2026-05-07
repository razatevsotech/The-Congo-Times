import { useParams } from 'react-router-dom';
import { useCategories } from '../../hooks/usePosts';
import CategoryPage from './CategoryPage';

const DynamicCategoryPage = () => {
  const { categorySlug } = useParams();
  const { data: categories } = useCategories();

  // Find the category object to get its proper name
  const categoryObj = categories?.find(cat => cat.slug === categorySlug);
  
  const categoryTitle = categoryObj ? categoryObj.name : categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);
  const categoryLabel = categoryTitle.toUpperCase();

  return (
    <CategoryPage 
      category={categorySlug} 
      categoryTitle={categoryTitle} 
      categoryLabel={categoryLabel} 
    />
  );
};

export default DynamicCategoryPage;

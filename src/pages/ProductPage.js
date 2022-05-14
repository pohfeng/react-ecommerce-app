import ProductDetails from 'components/Product/ProductDetails';
import ProductFeatures from 'components/Product/ProductFeatures';
import RelatedProducts from 'components/Product/RelatedProducts';

const ProductPage = () => {
  return (
    <div>
      <ProductDetails />
      <ProductFeatures />
      <RelatedProducts />
    </div>
  );
};

export default ProductPage;

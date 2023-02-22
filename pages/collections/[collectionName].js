
import * as React from 'react';
import { useRouter } from 'next/router';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BreadcrumbsNavigation from '../../components/BreadcrumbsNavigation';
import ProductsList from '../../components/ProductsList';
import PRODUCTS from '../../data.js';

export default function CollectionPage() {
  const router = useRouter();
  const { collectionName } = router.query;
  const products = PRODUCTS.filter(
    (product) => product.collection === collectionName
  );
  return (
    <Box>
        <Container maxWidth="lg">
            <BreadcrumbsNavigation collection={collectionName} />
            <ProductsList products={products} />
        </Container>
    </Box>
  );
}
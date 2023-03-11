import React, { Fragment } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { useCategoriesContext } from "../../contexts/categories.context";

const CategoriesPreview = () => {
  const { categoriesMap } = useCategoriesContext();
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} products={products} title={title} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;

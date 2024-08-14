import React, { useEffect, useState } from "react";
import { useProductContext } from "../../store/ProductContext";
import ProductList from "../../components/ProductList";
import styles from "./Home.module.scss";
import classNames from "classnames";

const cx = classNames.bind(styles);

const Home = () => {
  const { state } = useProductContext();
  const { loading, products, error } = state;

  const [recipes, setRecipes] = useState([]);
  const [recipeLoading, setRecipeLoading] = useState(true);
  const [recipeError, setRecipeError] = useState(null);
  const [visibleRecipes, setVisibleRecipes] = useState(9); // Số lượng recipe hiển thị ban đầu

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        setRecipes(data.recipes);
        setRecipeLoading(false);
      } catch (error) {
        setRecipeError("Failed to load recipes");
        setRecipeLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const handleLoadMore = () => {
    setVisibleRecipes((prev) => prev + 9); // Tăng số lượng recipe hiển thị thêm 9 mỗi lần nhấn
  };

  return (
    <div className={cx("container")}>
      <div className={cx("home")}>
        <main>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <ProductList products={products} />
          )}
        </main>
      </div>

      <div className={cx("recipe-container")}>
        {recipeLoading ? (
          <p>Loading recipes...</p>
        ) : recipeError ? (
          <p>{recipeError}</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-5">
            {recipes.slice(0, visibleRecipes).map((recipe) => (
              <div
                key={recipe.id}
                className="w-[calc(33.33%-20px)] flex flex-col items-center text-center bg-gray-100 p-2 rounded-lg"
              >
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-[232px] h-[232px] object-cover rounded-lg"
                />
                <h3 className="mt-2 text-sm text-gray-800">{recipe.name}</h3>
              </div>
            ))}
          </div>
        )}
        {visibleRecipes < recipes.length && (
          <button onClick={handleLoadMore} className={cx("load-more")}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;

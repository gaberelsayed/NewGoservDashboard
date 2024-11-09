import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  products: [],
  loading: false,
  error: null,
};

export const ProductContext = createContext(INITIAL_STATE);

const ProductReducer = (state, action) => {
  switch (action.type) {
    case "fetchProducts":
      return {
        ...state,
        products: action.payload,
      };
    case "addNewProduct":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "addProducrForm":
      return {
        ...state,
        products: [{ ...action.payload }, ...state.products],
      };
    case "updateMainImages":
      return {
        ...state,
        products: [
          ...state.products.map((product) => {
            if (!product.form && product.id == action.payload.id) {
              return {
                ...product,
                photos: action.payload.files,
                firstPhoto: action.payload.files[0],
                updated: true,
              };
            } else if (product.form && product.id == action.payload.id) {
              return {
                ...product,
                photos: action.payload.files,
                firstPhoto: action.payload.files[0],
                updated: true,
              };
            } else {
              return product;
            }
          }),
        ],
      };
    default:
      return state;
  }
};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, INITIAL_STATE);

  useEffect(() => {}, [state]);

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

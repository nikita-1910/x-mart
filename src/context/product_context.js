import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {}, 
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const getProducts = async (url) => {
        dispatch({type:"SET_LOADING"});
        try {
            const res = await axios.get(url);
            const products = await res.data;
            // console.log(products);
            dispatch({ type: "MY_PRODUCTS", payload: products });
        }
        catch (error) {
            dispatch({ type: "ERROR" });
        }
    };

    const getSingleProduct=async(url)=>{
        dispatch({type:"SET_SINGLEPRODUCT_LOADING"});
        try{
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({ type: "MY_SINGLE_PRODUCT", payload: singleProduct });
        }
        catch(error){
            dispatch({ type: "SINGLEPRODUCT_ERROR" });
        }
    }

    useEffect(() => {
        getProducts(API);
    }, [])

    return <AppContext.Provider value={{ ...state, getSingleProduct}}>{children}</AppContext.Provider>
};

const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };
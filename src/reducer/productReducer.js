const ProductReducer=(state, action)=>{
    if(action.type === "SET_LOADING"){
        return{
            ...state, isLoading:true,
        };
    }

    if(action.type === "ERROR"){
        return{
            ...state, isLoading:false, isError:true,
        };
    }

    if(action.type === "MY_PRODUCTS"){
        const featureData=action.payload.filter((curElem)=>{
            return curElem.featured===true;
        });
        return{
            ...state, isLoading:false, products: action.payload, featureProducts: featureData,
        }
    }

    if(action.type === "SET_SINGLEPRODUCT_LOADING"){
        return{
            ...state, isSingleLoading:true,
        };
    }

    if(action.type === "SINGLEPRODUCT_ERROR"){
        return{
            ...state, isSingleLoading:false, isError:true,
        };
    }

    if(action.type === "MY_SINGLE_PRODUCT"){
        return{
            ...state, isSingleLoading:false, singleProduct: action.payload, 
        }
    }
};

export default ProductReducer;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { service } from '../../service/service';


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, {dispatch}) => {
        
      const response = await service.fetchProducts();
      dispatch(SetUpListProducts(response));
    }
  );

const initialState = {
    products: []
}



export const productSlice = createSlice({
    name: 'prodcts/productSlice',
    initialState,
    reducers: {
  
      addProduct: (state, action) => {
          return  {
              ...state,
              products: [...state.products, {
                  
                ...action.payload,
                size: {
                    width: 200,
                    height: 200
                }
              }]
          }
      },

      SetUpListProducts: (state, action) => {
       return {
            ...state,
            products: [...action.payload]
        }
    },

    deleteProduct: (state, action) => {
        return {
             ...state,
             products: state.products.filter(product => product.id !== action.payload)
         }
     },

     changeProductData: (state, action) => {
        return {
             ...state,
             products: state.products.map(product => {
                 if (action.payload.id == product.id) {
                     return {
                         ...action.payload
                     }
                 }

                 return action.payload
             })
         }
     },

    
  

     
    }
 
  })

  
  export const { addProduct, SetUpListProducts, deleteProduct, changeProductData} = productSlice.actions;
  
  export default productSlice.reducer;
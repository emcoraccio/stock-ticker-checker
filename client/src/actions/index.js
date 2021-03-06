import { GET_STOCKS, ADD_STOCK, UPDATE_STOCK, REMOVE_STOCK, STOCKS_ERROR } from './types';
import API from '../utils/API';


// GETS STOCKS FROM DB
export const getStocks = () => async dispatch => {

  try {

    let dbStocks = await API.getStocks();
    let stockData = await dbStocks.data;
    console.log(stockData);

    dispatch({
      type: GET_STOCKS,
      payload: stockData
    });
  } catch (error) {
    dispatch({
      type: STOCKS_ERROR,
      payload: error
    })
  }

}

// ADDS STOCK
export const addStock = (payload) => {
  return { type: ADD_STOCK, payload };
};

// UPDATES STOCK'S PRICE
export const updateStock = (payload) => {
  return { type: UPDATE_STOCK, payload }
};

export const removeStock = (id) => async dispatch => {
  try {
    let removedStock = await API.removeStock(id);
    let removedId = await removedStock.data._id;

    dispatch({
      type: REMOVE_STOCK,
      id: removedId
    })

  }
  catch (error) {
    dispatch({
      type: STOCKS_ERROR,
      payload: error
    })
  }
}


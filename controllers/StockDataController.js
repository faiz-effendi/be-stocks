import StockModel from '../models/StockDataModel.js';

async function getStocks(req, res) {
  try {
    const response = await StockModel.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(204).json(error);
  }
}

export { getStocks };

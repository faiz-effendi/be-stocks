import CoinModel from '../models/CoinDataModel.js';

async function getCoins(req, res) {
  try {
    const response = await CoinModel.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(204).json(error);
  }
}

export { getCoins };

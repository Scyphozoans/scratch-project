const Board = require('../models/boardModel');
const User = require('../models/userModel');

const boardController = {};

// find the associated user from
boardController.getBoardNames = async (req, res, next) => {
  const { userID } = req.params;
  try {
    const user = await User.find({ _id: userID });
    const { boards } = user;
    res.locals.boards = boards;
    return next();
  } catch (error) {
    console.log(error);
    return next({ err: 'Error finding user data' });
  }
};

boardController.getBoardData = async (req, res, next) => {
  const { boardID } = req.params;
  try {
    const boardData = await Board.find({ _id: boardID });
    const { board, storage, users } = boardData;
    res.locals.boardData = { board, storage, users };
    return next();
  } catch (error) {
    console.log(error);
    return next({ err: 'Error getting board data' });
  }
};

boardController.deleteBoard = async (req, res, next) => {
  const { boardID } = req.params;

  try {
    await Board.findOneAndDelete({ boardID });
    return next();
  } catch (error) {
    console.log(error);
    return next({ err: 'Error deleting board.' });
  }
};

boardController.createBoard = async (req, res, next) => {
  const { boardname } = req.body;
  console.log('***********boardname: ' + boardname);

  // const boardExists = await Board.findOne({ boardName: boardName });
  // if (boardExists) {
  //   res.status(400).send('Board already exists, choose a new board name.');
  // }

  try {
    const board = await Board.create({ boardname });
    res.locals.board = board;
    return next();
  } catch (error) {
    console.log('Error creating new board.');
    return next({ error });
  }
};

boardController.updateBoard = async (req, res, next) => {
  const { boardID, storage } = req.body;
  try {
    const board = await Board.findByIdAndUpdate(boardID, { storage: storage });
    res.locals.board = board;
    return next();
  } catch (error) {
    console.log(error);
    return next({ err: 'Error updating board data.' });
  }
};

module.exports = boardController;

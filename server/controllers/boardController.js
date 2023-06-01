const Board = require('../models/boardModel');
const User = require('../models/userModel');
const Session = require('../models/sessionModel')
const boardController = {};

boardController.createBoard = async (req, res, next) => {

  // pull board name from request body
  const { boardName } = req.body;

  // pull ssid from cookies
  const { ssid } = req.cookies;
   
  try {
    
    // create new board with board name
    const board = await Board.create({boardName});

    // destructure board id
    const { id } = board;

    // find user that created the board
    const user = await User.findById({_id: ssid});

    // add board id and name to user 
    user.boards[id] = boardName;

    // send board info on res locals
    res.locals.board = board;
    return next();
  } catch (error) {
    console.log(error);
    return next({err: 'error in createBoard'});
  }
};

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

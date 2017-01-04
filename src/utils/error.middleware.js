
const errorHandler = (store) => (next) => (action) => {
  try {
    next(action);
  } catch(e) {
    console.log(action.type, "ACTION");
  }
};

export default errorHandler;

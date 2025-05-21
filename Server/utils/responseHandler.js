export const successResponse = (res, status = 200, message = '', data = null) => {
  res.status(status).json({
    success: true,
    message,
    data
  });
};

export const errorResponse = (res, status = 400, error = 'Bad request') => {
  res.status(status).json({
    success: false,
    error: typeof error === 'object' ? error : { message: error }
  });
};
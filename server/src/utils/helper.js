exports.setError = (res, error) => {
  if (error.errors.length > 0) {
    res.status(500).json({ message: error.errors[0].message, error: error.original.sqlMessage });
  } else {
    res.status(500).json({ message: error.original.sqlMessage, error: error.original.code });
  }
};

exports.setResult = (res, result) => {
  res.status(200).json(result);
};

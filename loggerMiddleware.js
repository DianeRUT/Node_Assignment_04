export const logger = (req, res, next) => {
  console.log('URL:', req.url)
  console.log('METHOD:', req.method)
  console.log('BODY:', req.body)
  console.log('QUERY:', req.query)
  console.log('PARAMS:', req.params)
  console.log('TIMESTAMP:', new Date())

  next()
};

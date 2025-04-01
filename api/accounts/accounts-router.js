const router = require('express').Router()
const md = require('./accounts-middleware')

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('get accounts')
  } catch (err) {
    next(err)
  }
})

router.get('/:id', md.checkAccountId,  (req, res, next) => {
  // DO YOUR MAGIC
  try {

  }
})

router.post(
  '/', 
  md.checkAccountPayload, 
  md.checkAccountNameUnique, 
  (req, res, next) => {
  // DO YOUR MAGIC
  try {

  }
})

router.put(
  '/:id', 
  md.checkAccountId, 
  md.checkAccountPayload, 
  md.checkAccountNameUnique, 
  (req, res, next) => {
  // DO YOUR MAGIC
  try {

  }
});

router.delete('/:id', md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {

  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = router;

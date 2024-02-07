import joi from 'joi'

const user = joi.object({
  username: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(4).required(),
})

export = { user }

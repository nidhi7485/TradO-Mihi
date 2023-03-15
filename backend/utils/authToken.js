import jwt from 'jsonwebtoken'

export const generateToken = (user) => {
  return jwt.sign(
    { _id: user._id, email: user.email, isAdmin: user.isAdmin },
    'SECRET',
    {
      expiresIn: '1d',
    }
  )
}

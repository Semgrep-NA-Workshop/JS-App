import { Request, Response } from 'express'
import { UserModel } from '../models/user'

export function getUserProfile (req: Request, res: Response) {
  UserModel.findOne({ where: { id: req.params.id } }).then((user) => {
    res.json(user)
  })
  // no .catch(), no error handling if findOne rejects or user is null
}

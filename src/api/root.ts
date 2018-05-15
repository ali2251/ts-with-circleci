import { IRoute, Request, Response } from 'express'

function sendMessage(req: Request, res: Response) {
  res.send('You look nice.')
}

export default (route: IRoute) => {
  route.get(sendMessage)
}

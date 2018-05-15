import { IRoute, Request, Response } from 'express'

function session(req: Request, res: Response) {
  res.jsonp({ code: 200 })
}

function login(req: Request, res: Response) {
  res.jsonp({ code: 200 })
}

function logout(req: Request, res: Response) {
  res.jsonp({ code: 200 })
}

export default (route: IRoute) => {
  route.get(session)
  route.post(login)
  route.delete(logout)
}

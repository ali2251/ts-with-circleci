import { IRoute, Request, Response } from 'express'

function getProfile(req: Request, res: Response) {
  res.jsonp({ name: 'Joe Blogs' })
}

export default (route: IRoute) => {
  route.get(getProfile)
}

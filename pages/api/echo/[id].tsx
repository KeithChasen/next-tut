import { NextApiRequest, NextApiResponse } from "next";

interface GetNextApiRequest extends NextApiRequest {
  query: {
    id?: string
  }
}

export default function getById(req: GetNextApiRequest, res: NextApiResponse) {
  res.json({'user_id': req.query.id})
}

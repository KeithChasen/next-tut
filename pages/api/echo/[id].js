export default function getById(req, res) {
  res.json({'user_id': req.query.id})
}

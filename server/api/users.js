import { Router } from 'express';
import axios from 'axios';

const router = Router()

// Mock Users
const users = [
  { name: '23mofang' },
  { name: '23cube' }
]

router.get('/users', function (req, res, next) {
  res.status(200).json(users);
})

router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

router.post('/login', async function (req, res, next) {
  const { password, username } = req.body;

  async function login() {
    const response = await axios.post(`/v2/login?username=${username}&password=${password}`)
    return response;
  }

  login().then((e) => {
    const { token } = e.data;
    if (token) {
      res.cookie('token', token, {
        maxAge: 60000 * 60 * 24
      })
    }
    return res.json(e)
  }).catch((error) => {
    return res.json(error)
  })
})

export default router

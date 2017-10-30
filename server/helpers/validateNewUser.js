const validateNewUser = (req, res) => {
  /* eslint-disable no-useless-escape */
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(req.body.email)) {
    return res.status(400)
    .send({ error: 'Invalid email', status: 400 });
  }

  if (!req.body.email || req.body.email.trim() === '') {
    return res.status(400)
    .send({ error: 'Email cannot be empty', status: 400 });
  }

  if (!req.body.username || req.body.username.trim() === '') {
    return res.status(400)
    .send({ error: 'Username cannot be empty', status: 400 });
  }

  if (!req.body.password || req.body.password.trim() === '') {
    return res.status(400)
    .send({ error: 'Password cannot be empty', status: 400 });
  }

  if (!req.body.phone || req.body.phone.trim() === '') {
    return res.status(400)
    .send({ error: 'Phone cannot be empty', status: 400 });
  }

  if (!req.body.password || req.body.password.trim() === '') {
    return res.status(400)
    .send({ error: 'Password cannot be empty', status: 400 });
  }

  if (!req.body.phone || req.body.phone.trim() === '') {
    return res.status(400)
    .send({ error: 'Phone cannot be empty', status: 400 });
  }

  return 'valid';
};

export default validateNewUser;

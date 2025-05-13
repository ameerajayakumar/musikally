import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('get user route hit');
});

export default router;

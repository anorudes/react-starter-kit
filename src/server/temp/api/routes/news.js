import express from 'express';

const router = new express.Router();

router.get('/', (req, res) => (
  res.json({
    news: [
      { id: 1, text: 'example 1' },
      { id: 2, text: 'example 2' },
      { id: 3, text: 'example 3' },
      { id: 4, text: 'example 4' },
      { id: 5, text: 'example 5' },
    ],
  })
));

export default router;

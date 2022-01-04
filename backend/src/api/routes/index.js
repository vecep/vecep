import express from 'express';
import exerciseController from '../controllers/exercise.js';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('Welcome to VECEP-API :)');
});

router.post('/api/exercise', exerciseController.create);
router.get('/api/exercises', exerciseController.list);
router.get('/api/exercise/:id', exerciseController.show);
router.put('/api/exercise/:id', exerciseController.update);
router.patch('/api/exercise/:id', exerciseController.update);
router.delete('/api/exercise/:id', exerciseController.destroy);

export default router;

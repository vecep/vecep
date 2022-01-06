import express from 'express';
import exerciseController from '../controllers/exercise.js';
import imageController from '../controllers/cloudinary.js';
import userController from '../controllers/user.js';
import answerController from '../controllers/answer.js';

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

router.post('/api/image', imageController.create);
router.get('/api/images', imageController.list);
router.get('/api/image/:id', imageController.show);
router.patch('/api/image/:id', imageController.update);
router.delete('/api/image/:id', imageController.destroy);

router.post('/api/user', userController.create);
router.get('/api/users', userController.list);
router.get('/api/user/:id', userController.show);
router.put('/api/user/:id', userController.update);
router.patch('/api/user/:id', userController.update);
router.delete('/api/user/:id', userController.destroy);

router.post('/api/answer', answerController.create);
router.get('/api/answers', answerController.list);
router.get('/api/answer/:id', answerController.show);
router.put('/api/answer/:id', answerController.update);
router.patch('/api/answer/:id', answerController.update);
router.delete('/api/answer/:id', answerController.destroy);
router.delete('/api/answers/:userId', answerController.destroyAll);

export default router;

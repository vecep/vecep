import express from 'express';
import exerciseController from '../controllers/exercise.js';
import imageController from '../controllers/cloudinary.js';
import userController from '../controllers/user.js';
import answerController from '../controllers/answer.js';
import authController from '../controllers/auth.js';
import subjectController from '../controllers/subject.js';
import { verifySignUp, authJwt } from '../middlewares/index.js';

const router = express.Router();
const { verifyToken, isAdmin } = authJwt;

router.get('/', (req, res) => {
	res.send('Welcome to VECEP-API :)');
});

router.post('/api/exercise', [verifyToken, isAdmin], exerciseController.create);
router.get('/api/exercises', exerciseController.list);
router.get('/api/exercise/:id', exerciseController.show);
router.put('/api/exercise/:id', [verifyToken, isAdmin], exerciseController.update);
router.patch('/api/exercise/:id', [verifyToken, isAdmin], exerciseController.update);
router.delete('/api/exercise/:id', [verifyToken, isAdmin], exerciseController.destroy);

router.post('/api/image', [verifyToken], imageController.create);
router.get('/api/images', imageController.list);
router.get('/api/image/:id', imageController.show);
router.patch('/api/image/:id', [verifyToken, isAdmin], imageController.update);
router.delete('/api/image/:id', [verifyToken], imageController.destroy);

router.post('/api/user', [verifyToken, isAdmin], userController.create);
router.get('/api/users', [verifyToken, isAdmin], userController.list);
router.get('/api/user/:id', [verifyToken, isAdmin], userController.show);
router.put('/api/user/:id', [verifyToken, isAdmin], userController.update);
router.patch('/api/user/:id', [verifyToken, isAdmin], userController.update);
router.delete('/api/user/:id', [verifyToken, isAdmin], userController.destroy);

router.post('/api/answer', [verifyToken], answerController.create);
router.get('/api/answers', [verifyToken], answerController.list);
router.get('/api/answer/:id', [verifyToken], answerController.show);
router.put('/api/answer/:id', [verifyToken], answerController.update);
router.patch('/api/answer/:id', [verifyToken], answerController.update);
router.delete('/api/answer/:id', [verifyToken], answerController.destroy);
router.delete('/api/answers', [verifyToken], answerController.destroyAll);

router.post('/api/subject', [verifyToken, isAdmin], subjectController.create);
router.get('/api/subjects', subjectController.list);
router.get('/api/subject/:id', [verifyToken, isAdmin], subjectController.show);
router.put('/api/subject/:id', [verifyToken, isAdmin], subjectController.update);
router.patch('/api/subject/:id', [verifyToken, isAdmin], subjectController.update);
router.delete('/api/subject/:id', [verifyToken, isAdmin], subjectController.destroy);

router.post(
	'/api/auth/signup',
	[verifySignUp.checkDuplicateUsernameAndEmail, verifySignUp.checkRole],
	authController.signup
);
router.post('/api/auth/signin', authController.signin);

export default router;

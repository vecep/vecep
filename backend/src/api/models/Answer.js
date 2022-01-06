import mongoose from 'mongoose';

const AnswerSchema = new mongoose.Schema({
	user: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
	},
	exercise: {
		type: mongoose.Types.ObjectId,
		ref: 'Exercise'
	},
	answerId: mongoose.Types.ObjectId
});

const Answer = mongoose.model('Answer', AnswerSchema);

export default Answer;

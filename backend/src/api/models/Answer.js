import mongoose from 'mongoose';

const AnswerSchema = new mongoose.Schema({
	userId: mongoose.Types.ObjectId,
	exerciseId: mongoose.Types.ObjectId,
	answerId: mongoose.Types.ObjectId,
	isCorrect: {
		type: Boolean,
		required: true
	}
});

const Answer = mongoose.model('Answer', AnswerSchema);

export default Answer;

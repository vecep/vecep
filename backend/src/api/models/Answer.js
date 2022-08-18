import mongoose from 'mongoose';

const AnswerSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	exerciseId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	answerPosition: {
		type: Number,
		required: true
	},
	isCorrect: {
		type: Boolean,
		required: true
	}
});

const Answer = mongoose.model('Answer', AnswerSchema);

export default Answer;

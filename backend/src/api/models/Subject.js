import mongoose from 'mongoose';

const SubjectSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	active: {
		type: Boolean,
		default: true
	}
});

const Subject = mongoose.model('Subject', SubjectSchema);

export default Subject;

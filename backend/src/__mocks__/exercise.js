import { faker } from '@faker-js/faker';
import { imageFactory } from './image';

export const optionFactory = ({ text, isCorrect, image } = {}) => ({
	text: text || faker.lorem.sentence(),
	isCorrect: isCorrect || false,
	image: image || imageFactory({ randomize: true })
});

export const exercise = {
	exam: {
		year: 2022,
		stage: 1
	},
	question: faker.lorem.sentences(4),
	subject: faker.lorem.word(),
	topics: [faker.word.adjective(), faker.word.adjective(), faker.word.adjective()],
	options: [
		optionFactory(),
		optionFactory(),
		optionFactory(),
		optionFactory({ isCorrect: true }),
		optionFactory()
	],
	references: [
		{
			text: faker.lorem.sentence(5),
			author: faker.name.findName(),
			source: faker.internet.url(),
			image: imageFactory({ randomize: true })
		}
	]
};

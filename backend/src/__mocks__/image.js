import { faker } from '@faker-js/faker';

export const imageFactory = ({ description, cloudId, randomize } = {}) => {
	const image = {
		description: description || faker.lorem.sentence(5),
		cloudId: cloudId || faker.database.mongodbObjectId()
	};

	if (randomize) return faker.helpers.arrayElement([image, null]);

	return image;
};

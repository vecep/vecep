import Cloudinary from '../../config/cloudinary.js';
import 'dotenv/config.js';

const create = ({ image }) =>
	Cloudinary.uploader.upload(image, {
		upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET
	});

const list = () => Cloudinary.api.resources();

const show = ({ public_id }) => Cloudinary.api.resources_by_ids(public_id);

const update = ({ from_public_id, to_public_id }) =>
	Cloudinary.uploader.rename(from_public_id, to_public_id);

const destroy = ({ public_id }) => Cloudinary.uploader.destroy(public_id);

export default {
	create,
	list,
	show,
	update,
	destroy
};

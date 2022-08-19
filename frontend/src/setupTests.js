import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

jest.mock('@cloudinary/url-gen', () => ({
	Cloudinary: () => ({
		image: () => ({
			toURL: () => 'https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
		})
	})
}));

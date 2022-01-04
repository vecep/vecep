import app from './app.js';
import 'dotenv/config.js';

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log('VECEP-API running on port ' + PORT);
});



require('dotenv').config();

// config.js
module.exports = {
	app: {
		port: process.env.DEV_APP_PORT || 5000,
		appName: process.env.APP_NAME || 'lockey',
		env: process.env.NODE_ENV || 'development',
	},
	db: {
		port: process.env.DB_PORT || 8000,
		database: process.env.DB_NAME || 'lockey',
		password: process.env.DB_PASS || '',
		username: process.env.DB_USER || '',
		host: process.env.DB_HOST || '',
		dialect: 'mongodb',
		logging: true,
	},
	winston: {
		logpath: '/lockeyLogs/logs/',
	},
	auth: {
		jwt_secret: process.env.JWT_SECRET,
		jwt_expiresin: process.env.JWT_EXPIRES_IN || '1d',
		saltRounds: process.env.SALT_ROUND || 10,
		refresh_token_secret: process.env.REFRESH_TOKEN_SECRET || 'VmVyeVBvd2VyZnVsbFNlY3JldA==',
		refresh_token_expiresin: process.env.REFRESH_TOKEN_EXPIRES_IN || '2d', // 2 days
	},
	sendgrid: {
		api_key: process.env.SEND_GRID_API_KEY,
		api_user: process.env.USERNAME,
		from_email: process.env.FROM_EMAIL || 'mobileapp.5sd1@gmail.com',
	},
};

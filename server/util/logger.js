/**
 * Logging utility
 *
 * @author	Sebastian Wirkijowski <sebastian@wirkijowski.dev>
 * @since	0.0.0
 */

export default {
	info: (data) => {
		console.log('\x1b[1m\x1b[36m[INFO]     ' + data + '\x1b[0m');
	},
	help: (data) => {
		console.log('\x1b[1m\x1b[35m[HELP]     ' + data + '\x1b[0m');
	},
	warn: (data) => {
		console.log('\x1b[1m\x1b[33m[WARN]     ' + data + '\x1b[0m');
	},
	success: (data) => {
		console.log('\x1b[1m\x1b[32m[SUCCESS]  ' + data + '\x1b[0m');
	},
	error: (data) => {
		console.log('\x1b[1m\x1b[31m[ERROR]    ' + data + '\x1b[0m');
	}
};
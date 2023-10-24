module.exports = {
	extends: [
		// add more generic rulesets here, such as:
		'plugin:vue/essential',
		'eslint:recommended',
		// 'plugin:vue/vue3-recommended',
		'plugin:vue/recommended', // Use this if you are using Vue.js 2.x.
		'@vue/typescript/recommended',
	],
	rules: {
		// override/add rules settings here, such as:
		// 'vue/no-unused-vars': 'error'
		'vue/html-indent': ['error', 'tab'],
		'vue/script-indent': ['error', 'tab'],
		'vue/multi-word-component-names': [
			'error',
			{
				ignores: ['Dialog'],
			},
		],
	},
}

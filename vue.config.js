const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
	configureWebpack:  {
		plugins: process.env.NODE_ENV === 'production' ? [
			new PrerenderSPAPlugin({
				staticDir: path.join(__dirname, 'dist'),
				routes: [ '/', '/contact', '/me', '/projects'],
				renderer: new Renderer({
					headless: true,
				})
			})
		] : []
	}
}

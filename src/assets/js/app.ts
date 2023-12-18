const App = new class AppClass {

	path: string[] = ['/']
	page: string = 'home'
	pages: {
		name: string,
		path: string,
		view: any,
	}[] = []

	constructor() {
		this.pages.push({ name: 'Home', path: '/', view: null })
		this.pages.push({ name: 'Sign in', path: '/signin', view: null })
		this.router()
	}

	router() {
		this.path = document.location.pathname.replace(/^\/|\/$/g, '').split('/')
		if (this.path[0] == '') this.path = ['/']

		const i = this.pages.findIndex(v => v.path == '/' + this.path[0].replace(/^\/|\/$/g, ''))
		if (i < 0) return false

		this.page = this.pages[i].name
		this.pages[i].view ? this.pages[i].view.init(this.path) : null

		console.log(`App::router started!\nPath: ${this.path}\nPage: ${this.page}`)
	}
}

export default App
document.addEventListener("astro:page-load", () => App.router())
	
	
// Extras ...
// document.addEventListener("load", () => App.router())
// document.addEventListener("astro:before-preparation", e => console.log('astro:before-preparation', e))
// document.addEventListener("astro:after-preparation", e => console.log('astro:after-preparation', e))
// document.addEventListener("astro:before-swap", e => console.log('astro:before-swap', e))
// document.addEventListener("astro:after-swap", e => console.log('astro:after-swap', e))
// document.addEventListener("astro:after-swap", e => console.log('astro:after-swap', e))
export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","images/.DS_Store","images/background.webp","images/book.webp","images/line/.DS_Store","images/line/line1.svg","images/line/line2.svg","images/line/line3.svg","images/line/line4.svg","images/line/line5.svg","images/logo/amazon.svg","images/logo/arrow.svg","images/logo/cross.svg","images/logo/externe.svg","images/logo/facebook.svg","images/logo/hamburger.svg","images/logo/instagram.svg","images/logo/linkedin.svg","images/logo/mail.svg","images/logo/maya.svg","images/logo/quotation.svg","images/logo/quotationEnd.svg","images/logo.webp","images/mariane.webp","images/opinion/.DS_Store","images/opinion/1.webp","images/opinion/10.webp","images/opinion/11.webp","images/opinion/12.webp","images/opinion/13.webp","images/opinion/14.webp","images/opinion/15.webp","images/opinion/16.webp","images/opinion/17.webp","images/opinion/18.webp","images/opinion/19.webp","images/opinion/2.webp","images/opinion/20.webp","images/opinion/21.webp","images/opinion/22.webp","images/opinion/23.webp","images/opinion/24.webp","images/opinion/25.webp","images/opinion/26.webp","images/opinion/27.webp","images/opinion/28.webp","images/opinion/29.webp","images/opinion/3.webp","images/opinion/30.webp","images/opinion/31.webp","images/opinion/32.webp","images/opinion/33.webp","images/opinion/34.webp","images/opinion/4.webp","images/opinion/5.webp","images/opinion/6.webp","images/opinion/7.webp","images/opinion/8.webp","images/opinion/9.webp","images/painting/.DS_Store","images/painting/leshuiles/.DS_Store","images/painting/leshuiles/1.webp","images/painting/leshuiles/2.webp","images/painting/leshuiles/3.webp","images/painting/lesnoirsetblancs/.DS_Store","images/painting/lesnoirsetblancs/1.webp","images/painting/lesnoirsetblancs/2.webp","images/painting/lesnoirsetblancs/3.webp","images/painting/mecanique/.DS_Store","images/painting/mecanique/1.webp","images/painting/mecanique/2.webp","images/painting/mecanique/3.webp","images/painting/paysage/.DS_Store","images/painting/paysage/1.webp","images/painting/paysage/2.webp","images/painting/paysage/3.webp","images/photoCreationSerge/.DS_Store","images/photoCreationSerge/img1.webp","images/photoCreationSerge/img10.webp","images/photoCreationSerge/img11.webp","images/photoCreationSerge/img12.webp","images/photoCreationSerge/img2.webp","images/photoCreationSerge/img3.webp","images/photoCreationSerge/img4.webp","images/photoCreationSerge/img5.webp","images/photoCreationSerge/img6.webp","images/photoCreationSerge/img7.webp","images/photoCreationSerge/img8.webp","images/photoCreationSerge/img9.webp","images/saga/.DS_Store","images/saga/tome2.webp","images/serge.webp","images/tableau1.webp","images/tableau2.webp","images/tableau3.webp","robots.txt"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.0b621935.js","app":"_app/immutable/entry/app.2bd5ee77.js","imports":["_app/immutable/entry/start.0b621935.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.1741ea0b.js","_app/immutable/entry/app.2bd5ee77.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.2226f978.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/creationSerge",
				pattern: /^\/creationSerge\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/creationSerge/leshuiles",
				pattern: /^\/creationSerge\/leshuiles\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/creationSerge/lesnoirsetblancs",
				pattern: /^\/creationSerge\/lesnoirsetblancs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/creationSerge/mecanique",
				pattern: /^\/creationSerge\/mecanique\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/creationSerge/paysage",
				pattern: /^\/creationSerge\/paysage\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/saga",
				pattern: /^\/saga\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

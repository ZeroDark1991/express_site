import RouterMap from './map'

const RouterSet = function(app){
	Object.keys(RouterMap).forEach((key)=>{
		app.use(key,RouterMap[key])
	})
}

export default RouterSet
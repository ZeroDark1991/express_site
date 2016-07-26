export const map = function(app,config,route){
	route = route || ''
	
	Object.keys(config).forEach((key)=>{
		switch(typeof config[key]){
            case 'object':
                map(app, config[key], route + key)
                break;
            case 'function':
                app[key](route,config[key])
                break;              
		}
	})
}
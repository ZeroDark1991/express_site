import express from 'express'
const router = express.Router()

import { map } from '../util'

// router.get('/',(req, res, next)=>{
// 	res.render('home',{title: '首页'})
// })

const index = {
	get: function(req,res){
		res.render('home', { title: 'home' })
	}
}

const talk = {
	get: function(req,res){
		res.send('hehehe')
	},
	detail: function(req, res){
		res.send('product list!')
	}
}

const config = {
	'\/': {
		get: index.get,
	},
	'/talk':{
		get: talk.get,
		'/:id': {
			get: talk.detail
		}
	}
}

map(router,config)

export default router
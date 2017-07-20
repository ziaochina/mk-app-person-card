import { config, start, componentFactory } from 'mk-meta-engine'
import myConfig  from './config'

import mk_app_person_card from './apps/mk-app-person-card/index.js'

const apps = {
	[mk_app_person_card.name]:mk_app_person_card,	
}


config(myConfig({apps}))


import * as mkComponents from 'mk-component'

Object.keys(mkComponents).forEach(key=>{
	componentFactory.registerComponent(key, mkComponents[key])
})
	

start()
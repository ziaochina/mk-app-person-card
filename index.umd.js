__webpack_public_path__ = window["__pub_mk-app-person-card__"];

const data = require('./data')
const config = require('./config')
require('./mock.js')
require('./style.less')

export default {
    name: "mk-app-person-card",
    version: "1.0.10",
    description: "mk-app-person-card",
    meta: data.getMeta(),
    components: [],
    config: config,
    load: (cb) => {
        cb(require('./component'), require('./action'), require('./reducer'))
	}
}
const render = require('inferno').render
const Application = require('./containers/Application')
const h = require('inferno-hyperscript')

render(<Application/>, document.getElementById('app'))

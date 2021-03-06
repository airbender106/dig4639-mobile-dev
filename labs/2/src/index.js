import Card from './components/Card/index.js'

function runOnLoad () {
  // Create a container for us
  const element = document.createElement('div')
  element.id = 'container'
  document.body.appendChild(element)
  var newTask = new Card({ content: 'Sample value provided' })
  element.appendChild(newTask.render())
}

window.addEventListener('DOMContentLoaded', runOnLoad)

let addTodo = document.querySelector('#addtodo')
let input = document.querySelector('#input')
let list = document.querySelector('#list')
addTodo.addEventListener('click', function (e) {
  e.preventDefault()
  addtodo(input.value)
  input.value = ''
})
let html
// DOMContentLoaded
window.addEventListener('load', function (e) {
  e.preventDefault()
  let data = JSON.parse(localStorage.getItem('todos'))
  data.forEach(function (item, index) {
    html += `<p id="delete-item">${item}<button class="deleted" onclick="deleteItem(${index})">deleted</button></p>`
    list.innerHTML = html
  })
})
function deleteItem (index) {
  var store = JSON.parse(localStorage.getItem('todos')) || []
  store.splice(index, 1)
  localStorage.setItem('todos', JSON.stringify(store))
  location.reload()
}

function addtodo (todos) {
  if (todos === '') {
    alert('Please Enter value')
  } else {
    storeLocalStorage(todos)
    location.reload()
  }
}

function storeLocalStorage (data) {
  var todos = data
  let dataList = JSON.parse(localStorage.getItem('todos')) || []
  dataList.push(todos)
  localStorage.setItem('todos', JSON.stringify(dataList))
}

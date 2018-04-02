import * as sub from './sub'

import '../css/main.css'

import wali from '../imgs/wali.jpg'
//extract-text-webpack-plugin@next
const a = [1,2,3,4,6]
const b = [...a]
console.log(b)
sub.logSub()
const asyncPromise = new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve('promise')
  },1000)
})
asyncPromise.then((res) =>{
  console.log(res)
})

var vImg = new Image()
vImg.src = wali
vImg.onload = function() {
  document.querySelector('.js-addimg').appendChild(this)
}
import * as sub from './sub'

import '../css/main.css'
const a = [1,2,3]
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

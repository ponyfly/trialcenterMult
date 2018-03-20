// import * as sub from './sub'
const a = [1,2,3]
const b = [...a]
console.log(b)
const asyncSub = () => import('./sub')
setTimeout(()=>{
  asyncSub().then((res)=>{
    res.logSub()
  })
},2000)
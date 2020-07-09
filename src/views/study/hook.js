import React, { useState, useEffect } from 'react'

export default function HookExample(props) {
  var timer = null
  const [count, setCount] = useState(100)
  const [msg, setMsg] = useState('hello hook')
  const [list, setList] = useState([])

  function click() {
    var c = count + 1
    setCount(c)
  }
  // useEffect = componentDidMount + componentDidUpdate + componentWillUnmount
  // useEffect 的第二参数，进行性能优化，只有当参数列表中数据变化时才执行Effect
  useEffect(()=>{
    console.log('调接口')
    setCount(count*100)
    return undefined
  }, [list])

  useEffect(()=>{
    timer = setInterval(()=>{
      setCount(count+1)
    }, 1000)
    // 一定要返回一个函数，用于清除那些需要被清除的Effect
    return ()=>{
      console.log('clear')
      clearInterval(timer)
    }
  }, [msg, count])

  return (
    <div>
      <h1>{msg}</h1>
      <h3 onClick={click}>{count}</h3>
    </div>
  )
}

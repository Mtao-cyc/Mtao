import React from 'react'; //react 提供最核心的react组件功能
import ReactDOM from 'react-dom'; //配合react把react元素渲染到dom上
import App from './App';
// 2.创建一个 react元素
// const h1 = React.createElement('p',{id:'myH1'},'1.react程序')
// const app = React.createElement('div',{},h1)
// 1.导入包:React，ReactDOM
// 2.创建react元素
// 3.渲染元素到某个dom上 

// const content=<h1>react</h1>  


ReactDOM.render(<App/>,document.getElementById('root'));

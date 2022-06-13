import React,{Component}  from 'react';
// import './Hello.css'
import hello from './Hello.module.css'
export default class Hello extends Component{
    render(){
        return(
            <div>
                <h1 className={hello.title}>hello</h1> 
            </div> 
        )
    }
}
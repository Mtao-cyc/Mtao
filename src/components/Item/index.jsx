import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
    handleMouse = (flag)=>{
        return ()=>{
            console.log(flag);
        }
    }
    render() {
        const {id,name,done}=this.props
        return (
            <li onMouseEnter={this.handleMouse(true)}  onMouseLeave={this.handleMouse(false)}>
                <label>
                    {/* 
                        defaultChecked=>一上来就判断到底勾不勾选后续可以修改的 只在初次渲染时生效，更新时不受控制   
                        Checked=>后续不可以修改 始终受到控制，必须通过绑定 onChange 事件来控制选中情况 
                    */}
                    <input type="checkbox" defaultChecked={done}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: 'none' }}>删除</button>
            </li>
        )
    }
}

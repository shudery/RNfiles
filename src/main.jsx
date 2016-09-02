/*
 * 20160902 
 */


import React from 'react';
import ReactDOM from 'react-dom';
import {
  DatePicker, 
  message, 
  Carousel, 
  Menu, 
  Icon, 
  Steps,
  BackTop, 
  Button
} from 'antd';
import './style.scss';
import 'antd/dist/antd.min.css';
import TweenOne from 'rc-tween-one';
import Animate from 'rc-animate';
import QueueAnim  from 'rc-queue-anim';
import ScrollAnim from 'rc-scroll-anim';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Step = Steps.Step;

const Nav = React.createClass({
    render: function() {
      return (
        <div id="nav">
         <Menu mode="horizontal" theme="dark">
        <Menu.Item key="mail">
          <Icon type="mail" />home
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="appstore" />page
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />more</span>}>
          <MenuItemGroup title="分组1">
            <Menu.Item key="setting:1">选项1</Menu.Item>
            <Menu.Item key="setting:2">选项2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="分组2">
            <Menu.Item key="setting:3">选项3</Menu.Item>
            <Menu.Item key="setting:4">选项4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="http://www.alipay.com/" target="_blank">about</a>
        </Menu.Item>
        <Menu.Item key="user" style={{'float':'right'}}>
          <a href="http://www.alipay.com/" target="_blank">about</a>
        </Menu.Item>
      </Menu>
      </div>
      );
    }
})
const Img = React.createClass({
  render(){
    return(
    <div id="img"></div>
      )
  }
})
const MyList = React.createClass({
  render(){
    return(
      <div id="steps">
      <Steps current={1}>
        <Step title="已完成" description="大三" />
        <Step title="进行中" description="找工作" />
        <Step title="待运行" description="毕业设计" />
        <Step title="待运行" description="步入社会" />
        <Step title="待运行" description="职业发展" />
      </Steps>
      </div>
      )
  }
})
const Cover = React.createClass({
  render(){
    return(
      <div id="cover"></div>
      )
  }
})
ReactDOM.render(
  <div id="react-app">
    <Nav />
    <Img />
    <Cover />
    <MyList />
    <BackTop />
  </div>
  , document.getElementById('root'))
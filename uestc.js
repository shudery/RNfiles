
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  TextInput,
  ListView,
  Image,
  View
} from 'react-native';

var REQUEST_URL = 'http://uestc-home-json.herokuapp.com/'

class firstRN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //ListView组件必备函数
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this); 
  }
  //不知为何 要点击一下屏幕才能触发加载
   componentDidMount() {
    this.fetchData();
  } 

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        this.setState({
          //ListView必须字段
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true,
        });
      })
      //结束Promise链后若出错抛出错误
      .done();
  }

   render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View>
       <Image
        style={styles.logo}
        source={{uri: 'http://www.uestc.edu.cn/images/logo.png'}}/>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}/>
       </View> 
    );
  }
  renderLoadingView() {
    return (
      <View>
        <Text style={styles.loading}>
          正在加载uestc官网数据……
        </Text>
      </View>
    )
  }

  renderMovie(data) {
    return (

      <View style={styles.container}>
          <Text style={styles.title}>{data.text}</Text>
          <Text style={styles.href} href={styles.href}>{data.href}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loading:{
    marginTop:300,
    textAlign:'center',
  },
  href:{
    color:'blue',
  },
  logo:{
    margin:10,
    height:100,
  },
   listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  container: {
    margin:10,
    backgroundColor: '#F5FCFF',
  },
 
});

AppRegistry.registerComponent('firstRN', () => firstRN);
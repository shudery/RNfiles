
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  BackAndroid,
  Text,
  View
} from 'react-native'; 

var SampleApp = React.createClass({
//场景转换动画配置，这里用淡入淡出
    configureScene(route){
      return Navigator.SceneConfigs.FadeAndroid;
    },
//对路由进行判断 渲染不同的组件 
    renderScene(router, navigator){
      var Component = null;
      //抛出当前的场景navigator
      this._navigator = navigator;
      switch(router.name){
        case "welcome":
          Component = WelcomeView;
          break;
        case "feed":
          Component = FeedView;
          break;
        default: //default view
          Component = DefaultView;
      }
//将navigator传入组件，使组件可以切换场景
      return <Component navigator={navigator} />
    },
//监听返回键，如果场景大于1，那么返回上一个场景
    componentDidMount() {
      var navigator = this._navigator;
      BackAndroid.addEventListener('hardwareBackPress', function() {
          if (navigator && navigator.getCurrentRoutes().length > 1) {
            //返回上一个场景
            navigator.pop();
            return true;
          }
          return false;
      });
    },


    componentWillUnmount() {
      BackAndroid.removeEventListener('hardwareBackPress');
    },

    render() {
      //initialRoute 第一次加载时选择的内容
        return (
            <Navigator
                initialRoute={{name: 'welcome'}}
                configureScene={this.configureScene}
                renderScene={this.renderScene} />
        );
    }

});

var FeedView = React.createClass({
    goBack(){
      //触发renderscene
      this.props.navigator.push({name:"default"});
    },

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.goBack} >
                    I am Feed View! Tab to default view!
                </Text>
            </View>  
        )
    }
});


var WelcomeView = React.createClass({
    onPressFeed() {
        this.props.navigator.push({name: 'feed'});
    },


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.onPressFeed} >
                    This is welcome view.Tap to go to feed view.
                </Text>
            </View>
        );
    }

});

var DefaultView = React.createClass({

    render(){
      return (
          <View style={styles.container}>
              <Text style={styles.welcome}>Default view</Text>
          </View>
      )
    }
});

const styles = StyleSheet.create({
  container:{
    borderColor:'red',
    borderWidth:1,
    margin:10,
    height:100,
  },
  welcome:{
    fontSize:20,
    flex:1,
  }
})

AppRegistry.registerComponent('firstRN', () => SampleApp);

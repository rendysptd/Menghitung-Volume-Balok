/**
 * Resika
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class HitungLuasSegitiga extends Component {
  constructor(props){
    super(props)
    this.state = {
      panjang:0,
      lebar:0,
      tinggi:0,
      volume:0
    };
  }

  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#607D8B'}}>

        <View style={{backgroundColor:'#455A64'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Menghitung Volume Balok
          </Text>
         </View>

        <View style={{margin:20,padding: 10, backgroundColor:'#B0BEC5'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Panjang Balok"
              onChangeText={(panjang)=>this.setState({panjang})}
              keyboardType='numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Lebar Balok"
              onChangeText={(lebar)=>this.setState({lebar})}
              keyboardType='numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Tinggi Balok"
              onChangeText={(tinggi)=>this.setState({tinggi})}
              keyboardType='numeric'
            />
            <Button
              onPress={()=>this.setState({
                volume: (this.state.panjang*this.state.tinggi*this.state.lebar)
              })}

              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
              color='black'
            />
       </View>

        <View style={{margin:20, backgroundColor:'#B0BEC5'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              Panjang Balok{'\t'}= {this.state.panjang} {"\n"}
              Lebar Balok{'\t'}{'\t'}= {this.state.lebar} {"\n"}
              Tinggi Balok{'\t'}{'\t'}= {this.state.tinggi} {"\n"}
              Volume Balok{'\t'}= {this.state.volume}
          </Text>
         </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungLuasSegitiga);
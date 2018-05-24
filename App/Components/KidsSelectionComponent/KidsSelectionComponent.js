import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    AsyncStorage,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Dimensions,
    TouchableWithoutFeedback
}  from 'react-native';
import {Button } from 'native-base';
import Header from "../Common/Header"
import Colors from '../../Constants/Colors';
import Strings from '../../Constants/Strings';

import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
// import AppIntro from "../AppIntro/AppIntro"


class KidsSelectionComponent extends Component {

    constructor() {
        super();
        this.state = {
         
        };
    }

componentWillMount() {
 }
 
 goBack(){
     Actions.pop()
 }

  render() {
      return (
             <View style={{flex:1,backgroundColor:Colors.BACKGROUND_COLOR_GENERAL}}>
             <Header headerText={Strings.SERVICE_PREFERENCE} screenCount="02" />
             <ScrollView style={{flex:1}}>
             <Text style={{textAlign: "center",marginTop:40,marginBottom:40,fontSize:18,fontWeight:"600"}}>HOW MANY KIDS DO YOU HAVE ?</Text>
             <View style={{justifyContent:"center",alignItems:"center",margin:20}}>
             <Image  source={require('../../Assets/clothing.png')}/>
             </View>

             <View style={{flexDirection:"row",marginLeft:20,marginRight:20}}>
            
             <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center"}}>
             <Image source={require('../../Assets/pregnantsle.png')}/> 
             <Text style={{marginTop:5}}>Pregnant</Text>
             </View>
              <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center"}}>
              <Image source={require('../../Assets/1kidsel.png')}/>
              <Text style={{marginTop:5}}>1 kid</Text>
               </View>
             <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center"}}>
             <Image source={require('../../Assets/2kidsel.png')}/>
             <Text style={{marginTop:5}}>2 kid</Text>
             </View>
             <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center"}}>
             <Image source={require('../../Assets/3kidsel.png')}/>
             <Text style={{marginTop:5}}>3 Kid</Text>
             </View>

             <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center"}}>
             {/* {/ <Image source={require('../../Assets/3kidUnsel.png')}/> /} */}
             <Text>More</Text>
             </View>
             
            </View>

            <Text style={{textAlign: "center",marginTop:40,marginBottom:40,fontSize:18,fontWeight:"600"}}>HOW MANY KIDS DO YOU WANT TO ENROLL ?</Text>

             <View style={{flexDirection:"row",marginLeft:20,marginRight:20}}>
             <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center"}}>
             <Image source={require('../../Assets/pregnantsle.png')}/> 
             <Text style={{marginTop:5}}>Pregnant</Text>
             </View>
              <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center"}}>
              <Image source={require('../../Assets/1kidsel.png')}/>
              <Text style={{marginTop:5}}>1 kid</Text>
               </View>
             <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center"}}>
             <Image source={require('../../Assets/2kidsel.png')}/>
             <Text style={{marginTop:5}}>2 kid</Text>
             </View>
             <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center"}}>
             <Image source={require('../../Assets/3kidsel.png')}/>
             <Text style={{marginTop:5}}>3 Kid</Text>
             </View>
             
             <View style={{flexDirection:"column",margin:10,justifyContent:"center",alignItems:"center"}}>
             {/* {/ <Image source={require('../../Assets/3kidUnsel.png')}/> /} */}
             <Text>More</Text>
             </View>
             </View>

             <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
             <Button rounded  style={{width:width/2.4,justifyContent:"center",margin:15,alignItems:"center",backgroundColor:Colors.BUTTON_COLOR}} onPress={()=> Actions.childSizeInformation()}>
             <Text style={{color:"white",textAlign:"center",fontWeight:"400", fontSize: 16}}>NEXT</Text>
             </Button>
             </View>
             
             <TouchableWithoutFeedback onPress={this.goBack}>
             <View>
             <Text style={{textAlign:"center"}}>Home</Text></View>
             </TouchableWithoutFeedback>
            
            </ScrollView>
            </View>
    
         
        );
    }

}



export default KidsSelectionComponent
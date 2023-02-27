import React from 'react'
import {Text,View,StyleSheet,Image,TouchableOpacity,StatusBar,ScrollView, Touchable, FlatList} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/FontAwesome'
import {dummyData} from '../constants'
import { ProfitIndicator,ActionCenter } from '../components'
import { Vibration } from 'react-native/Libraries/Vibration/Vibration'
const Dashboard = () => {
  return (
    
    <View style={{flex:1}} >
      <StatusBar  barStyle='light-content' translucent={true} backgroundColor='transparent' ></StatusBar>
    <LinearGradient start={{x:0.0,y:0.4}} end={{x:0.5,y:1.0}} location={[0,1]} colors={['#2D97DA','#2249D6']} style={{flex:1.2,flexDirection:'column'}}>
<View style={{flexDirection:'column',marginTop:hp('10%'),paddingHorizontal:'5%'}}>
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'}}>
<View style={{flexDirection:'column'}} >
<Text style={{fontFamily:'Roboto-Regular',fontSize:26,color:'#fff',fontWeight:'700'}} >Welcome Back</Text>
  <Text style={{fontFamily:'Roboto-Medium',color:'#fff',fontSize:15}} >Ranim</Text>
</View>
<View style={{flexDirection:'row',alignItems:'center'}}>
  <Icon name='bell' size={20} color="#fff"> </Icon>

</View>
</View>
<View style={{flexDirection:'row',marginTop:25,justifyContent:'space-between',alignItems:'center'}}>
  <View  style={{flexDirection:'column'}}>
  <Text style={{color:'#fff',fontSize:25,fontFamily:'Roboto-Bold'}} >$32,7456.68</Text>
       <Text style={{color:'rgba(255,255,255,0.3)',fontFamily:'Roboto-Regular-Italic',fontSize:14}} >Updated 2 mins ago</Text> 


  </View>
  <ProfitIndicator type="I" percentage_change={dummyData.portfolio.changes}  ></ProfitIndicator>
</View>
</View>
    </LinearGradient>
   <View style={{flex:2.5,backgroundColor:'#fff',paddingHorizontal:wp('5%')}}>
<View style={{flexDirection:'row',backgroundColor:'#fff',height:hp('13%'),width:'100%',alignItems:'center',justifyContent:'space-around',borderRadius:10,borderWidth:1,borderColor:'rgba(255,255,255,0.1)',elevation:10,shadowColor:'#000',shadowRadius:10,marginTop:-25}}>

                    
    <ActionCenter img_src={require('../assets/icons/top-up.png')} img_text="Top-Up" />

    <ActionCenter img_src={require('../assets/icons/buy.png')} img_text="Buy" />

    <ActionCenter img_src={require('../assets/icons/withdraw.png')} img_text="WithDraw" />
                   
                    
</View>
<ScrollView>
<View style={{flexDirection:'column'}}> 
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
<Text style={{fontFamily:'Roboto-Medium',color:'#333',fontSize:18,fontWeight:700,}} >My Assets</Text>
<TouchableOpacity onPress={()=>console.log('see all')} >
  <Text style={{fontFamily:'Roboto-Medium',color:'#2249DA',fontSize:15,fontWeight:700,}} >See All</Text>
   </TouchableOpacity>
</View>
<FlatList
 keyExtractor={(item)=>item.id}
data={dummyData.coins}
renderItem={({item})=>( <View style={{position:'relative',flexDirection:'column',height:hp('20%'),width:wp('65%'),borderWidth:1,borderColor:'#ddd',backgroundColor:'#fff',borderRadius:15,marginRight:10,marginTop:10}}  >
                       
<View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:10,paddingTop:20}} >
 <Image style={{height:25,width:25}} source={item.image} />
<Text style={{fontFamily:'Roboto-Bold',color:'#333',fontSize:18}} > {item.currency}/USDT</Text>
</View>


                               
 <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-around',alignItems:'center'}} >
                                   

<View style={{flexDirection:'column'}} >
  <Text style={{fontFamily:'Roboto-Bold',color:'#333',fontSize:20}} > ${item.amount}</Text>
 <Text>0.0256 BNB</Text>
 </View>

                                    
   <ProfitIndicator type={item.type} percentage_change={item.changes} />

   </View>

  </View>
   )}
 horizontal={true}
  />
                
              
</View>
<View style={{flex:1,flexDirection:'column'}}>
<Text style={{fontFamily:'Roboto-Bold',fontSize:19,color:'#333',fontWeight:'700'}} >Market</Text>
<FlatList
   keyExtractor={(item)=>item.id}
    data={dummyData.coins}
  renderItem={({item})=>(
 <View style={{flexDirection:'row',height:hp('10%'),width:'100%',borderWidth:1,borderColor:'#ddd',borderRadius:15,justifyContent:'space-between',paddingRight:10,marginBottom:10}} >
                            
  <View style={{flexDirection:'row',alignItems:'center'}} >
                                    
   <Image style={{height:'65%'}} resizeMode="contain" source={item.image} />

                                    
 <View style={{flexDirection:'column',justifyContent:'flex-start'}} >
  <Text style={{fontFamily:'Roboto-Medium',color:'#333',fontSize:20}} >{item.currency}</Text>
   <Text>BNB/USDT</Text>
   </View>
    </View>



   <View style={{flexDirection:'column',backgroundColor:'#fff',alignContent:'center',justifyContent:'center'}} >
                                    
   <Text style={{fontFamily:'Roboto-Medium',fontSize:14,color:'#333'}} >${item.amount}</Text>
     <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}} >
     <Text style={{color: item.type =="I" ? 'green':'red',fontFamily:'Roboto-Bold',fontSize:12}} >{item.changes}</Text>
                             
    <Icon name={item.type == "I" ? 'chevron-circle-up':'chevron-circle-down'} color={item.type == "I" ? 'green':'red'} />

           </View>
       </View>
   </View>
   )}
     />
</View>
</ScrollView>
   </View>

    </View>
   
    
  )
}

export default Dashboard

const styles = StyleSheet.create({})
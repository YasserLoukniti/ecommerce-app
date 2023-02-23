import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Product({index,item,nav}) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        marginLeft: index == 0 ? 3 : 0,
        marginRight: 10
      }}
      onPress={()=>nav({product: item})}
    >
      <View
        resizeMode="cover"
        style={{
          width: 160,
          height: 200,
          borderRadius: 20,
          marginLeft: 18,
          marginRight: 14,
          marginTop: 40,
          backgroundColor: item.color
        }}
      >
        <Image
        source={item.image}
        style={{width:100,height:130,borderRadius:50,marginTop:-40,marginLeft:60,
            transform: [{rotate: '20deg'}]}}
        />
        <View style={{padding:20,marginTop:-15}}>
            <Text style={{color:"white",fontSize: 18,
    fontWeight: 'bold',}}>{item.title}</Text>
            <Text style={{color:"white",fontSize: 10}}>{item.categorie}</Text>
            <Text style={{color:"white",fontSize: 10,
    fontWeight: 'bold',}}>{item.prix}€</Text>
        </View>
       
    </View>
    </TouchableOpacity >

  )
}


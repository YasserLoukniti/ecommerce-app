import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function FlatProduct({ index, item }) {
    return (
        <TouchableOpacity
            style={{
                flex: 1,
                marginLeft: index == 0 ? 3 : 0,
                marginRight: 10
            }}
        >
            <ImageBackground source={item.image}  
                resizeMode="cover"
                imageStyle={{ borderRadius: 10}}
                style={{
                    width: 300,
                    height: 150,
                    borderRadius: 10,
                    marginLeft: 18,
                    marginRight: 14,
                    marginTop: 14,
                }}>
            
                <View style={{ padding: 20, marginTop: -15 }}/>
                        
                    
                    
                
            </ImageBackground>
        </TouchableOpacity >

    )
}


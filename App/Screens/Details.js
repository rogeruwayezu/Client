import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import DetailCard from "../Components/DetailCard"
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

export default class GridView extends Component {
  

    render() {
      // const data = [{ Company: "GoodLife",
      //     Email: "boom@gmail.com",
      //     Phone: "+34342343",
      //     Address: "KG 11Av 183",
      //     Open: "Monday to Frida",
      //     Rates: 50,
      //     baseCurrency: 'Rwf'
      //   },
      //   { Company: "Limitless",
      //     Email: "boom@gmail.com",
      //     Phone: "+34342343",
      //     Address: "KG 11Av 183",
      //     Open: "Monday to Frida",
      //     Rates: 500,
      //     baseCurrency: 'Rwf',
      //   },
      //   { Company: "Boom",
      //     Email: "boom@gmail.com",
      //     Phone: "+34342343",
      //     Address: "KG 11Av 183",
      //     Open: "Monday to Frida",
      //     Rates: 1000,
      //     baseCurrency: 'Rwf'
      //   }]
      
      const data = this.props.navigation.state.params
      const datado = Object.values(data)
      const itemArray = datado.splice(-1, 1)
      for (var i = 0; i < datado.length; i++){
        if(itemArray.includes(datado[i])){
          continue
        }
        itemArray.push(datado[i])
      }
      // console.log(itemArray)
     return (
       
      <Container>
      <Header />
      <View>
        <DeckSwiper
          dataSource={itemArray}
          renderItem={(item) =>
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  <Body>
                    <Text>{item.Company}</Text>
                  </Body>
                </Left>
              </CardItem>
  
              <CardItem>
                <Icon name="heart" style={{ color: '#ED4A6A' }} />
                <Text>{item.name}</Text>
              </CardItem>
            </Card>
          }
        />
      </View>
    </Container>
        
         );
    }
  }


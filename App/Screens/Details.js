import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import DetailCard from "../Components/DetailCard"
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

export default class GridView extends Component {
  
    componentDidMount(){
      //  const data = this.props.navigation.state.params
       
    }
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
      
      const data = this.props.navigation.state.params["data"]
      const currentItem = this.props.navigation.state.params["currentItem"]      
      for (var i = 0; i < data.length; i++){
        if(currentItem.includes(data[i])){
          continue
        }
        currentItem.push(data[i])
      }
      console.log(currentItem)
     return (
       
      <Container>
      <Header />
      <View>
        <DeckSwiper
          dataSource={currentItem}
          renderItem={(item) =>
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  <Body>
                    <Text>{item.user.companyName}</Text>
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
        {/* <Text>Hello</Text> */}
      </View>
    </Container>
        
         );
    }
  }


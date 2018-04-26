import React from 'react';
import PropTypes from 'prop-types'
import {Text, View, Button, TouchableOpacity, FlatList, Image, Animated, TextInput, AsyncStorage } from 'react-native';
import {Header} from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons'
import {graphql, compose} from 'react-apollo'
import gql from 'graphql-tag'

import HeaderIcon from '../Components/HeaderIcon'
import Card from '../Components/Card'
import InputButton from '../Components/InputButton'
import styles from './Style/CurrencyStyle'

// const data = []

const initialState = {
  id: '',
  credentials:{
    currency: '',
        rate: '',
  },
  isSubmitting: false,
  errors: {}
}

class Listcreen extends React.Component {

  static navigationOptions = ({navigation})=>{
    return{
        headerTitle: 'Currency rate',
        headerStyle: {
            paddingLeft: 10,
            paddingRight: 10
            // padding: 20
        },
        headerTitleStyle: {
            marginLeft: 50
        }
    }
  };
  
  constructor(props){
    super(props);{
    this.state = initialState
    }
  }

  async componentDidMount(){
    const BureauId = await AsyncStorage.getItem('bureauID')
    this.setState({ id: BureauId })
    // console.log(this.state.id)
  }
  
  keyExtractor = (item, index) => index.toString()

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  _handleTextInput = (key, input) => {
    this.setState(state =>({
        credentials: {
            ...state.credentials,
            [key]: input,
        }
    }))
  }

  showCurrency = async ()=> {
    const {id, credentials: {currency, rate}} = this.state
    // console.log({credentials, id})
    let response;
    try {
        response = await this.props.CurrencyMutation({
        variables: {id, currency, rate}
        });
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.textHead}>type the amount that you want to convert</Text>
          <TextInput  
            style={styles.input}
            placeholder="Currency eg: USD"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            placeholderTextColor='#99A3A4'
            underlineColorAndroid='transparent'
            onChangeText={input => this._handleTextInput('currency', input)}
          />
          <TextInput  
            style={styles.input}
            placeholder="rate eg: 892"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            placeholderTextColor='#99A3A4'
            underlineColorAndroid='transparent'
            onChangeText={input => this._handleTextInput('rate', input)}
          />
          <Button 
            title="Add"
            onPress={this.showCurrency}/>
            {/* <InputButton  
                onPress={() => this.props.navigation.navigate('CurrencyList')}
                buttonText={code}
                editable= {true}
                keyboardType="numeric"
                placeholder="Currency rate"
            /> */}
        </View>
        <FlatList
          contentContainerStyle={styles.listContent}
          // data={this.props.query.allCurrencies}
          renderItem={({ item }) => (
            <Card 
              // source={item.image} 
              text={item.currencies} 
              text2={item.rate}
              // text3={item.description}
              // onPress={() => this.props.navigation.navigate('Detail', {...item})}
            />
          )}
          numColumns={1}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListEmptyComponent={this.renderEmpty}
          // ItemSeparatorComponent={this.renderSeparator}
          />
      </View>
      </View>
    );
  }
}
Listcreen.propType={
data: PropTypes.shape({
  loading: PropTypes.bool,
  error: PropTypes.object,
  allCurrencies: PropTypes.object,
}).isRequired,
}

const query = gql`
query{
  allCurrencies{
    currencies
    rate
  }
}
  `;

const CurrencyMutation = gql`
mutation ($id: ID!, $currency: String!, $rate: String!){
  updateAllInfo(id: $id, currencies:{currencies:$currency, rate: $rate}){
    id
    currencies{
      id
      currencies
      rate
    }
  }
}
  `;

// export default compose(
//   graphql(query,{name: 'query'}),
//   graphql(CurrencyMutation, {name:'CurrencyMutation'})
// )(Listcreen);

export default Listcreen;
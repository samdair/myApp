import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import Footer from './Footer';
const { height, width } = Dimensions.get('screen');


export default class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }
  onLearnMore = (item) => {
    this.props.navigation.navigate('Details', { ...item });
  };


  makeRemoteRequest = () => {
    const url = `https://randomuser.me/api/?results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false,
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };


  handleLoadMore = () => {
    this.makeRemoteRequest();
  };

  

  

  renderItem = ({item}) => {
    return (
    	<TouchableOpacity 
    	style={styles.imageContainer}
    	onPress={() => this.onLearnMore(item)}>
    		<Image
	          style={[styles.feedImage, {resizeMode: 'contain'}]}
	          source={{uri: item.picture.large}}
	        />
        </TouchableOpacity>
    	);
  };

  render() {
    return (
    	<View>
	        <FlatList
	          //contentContainerStyle={styles.list}
	          data={this.state.data}
	          renderItem={this.renderItem}
	          keyExtractor={(item, i) => i }
	          onRefresh={this.handleRefresh}
	          refreshing={this.state.refreshing}
	          numColumns={2}
	          onEndReached={this.handleLoadMore}
	          onEndReachedThreshold={50}
	        />
        </View>

    );
  }
}

const styles = StyleSheet.create({
  list: {
    

  },
  feedImage:{
  	width: '98%',
  	height: '95%',
  	borderRadius: 10
  },
  imageContainer: {
  	flexDirection: 'row',
  	width: width * 0.5,
  	height: height * 0.27
  },
  
})


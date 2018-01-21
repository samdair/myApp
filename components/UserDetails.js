import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
const { height, width } = Dimensions.get('screen');

class UserDetail extends Component {
  render() {
    const { name, picture } = this.props.navigation.state.params;

    return (
      	<View style={styles.imageContainer}>
    		<Image
	          style={[styles.detailImage, {resizeMode: 'contain'}]}
	          source={{uri: picture.large}}
	        />
		</View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    

  },
  detailImage:{
  	width: '98%',
  	height: '95%',
  },
  imageContainer: {
  	flexDirection: 'row',
  	width: width,
  	height: height * 0.5
  },
  
})


export default UserDetail;
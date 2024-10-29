import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import RNPickerSelect from 'react-native-picker-select';

const Quiz = () => {
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [third, setThird] = useState('');
    return (
        <View style={{margin: 10, padding: 10}}>
          <ScrollView>
              <Text style={{fontSize: 20, color: '#0000ff'}}>
                <Icon name="clipboard-question" size={20} />
            Quiz
              </Text>
              <Text style={{margin: 10}}>
                  What is the background colour of this image?
              </Text>
              <Image source={require('./img/deer.jpg')} style={{width: 400, height: 400}} />
              <RNPickerSelect
                  onValueChange={(value) => console.log(value)}
                  items={[
                      {label: 'Red', value: 'Red'},
                      {label: 'Green', value: 'Green'},
                      {label: 'Blue', value: 'Blue'},
                  ]}
              />
              <Text style={{margin: 10}}>
                  What is the background colour of this image?
              </Text>
              <Image source={require('./img/turtle.jpg')} style={{width: 400, height: 400}} />
              <RNPickerSelect
                  onValueChange={(value) => console.log(value)}
                  items={[
                      {label: 'Blue', value: 'Blue'},
                      {label: 'Green', value: 'Green'},
                      {label: 'Red', value: 'Red'},
                  ]}
              />
              <Text style={{margin: 10}}>
                      What is the colour of this animal eye?
              </Text>
              <Image source={require('./img/owl.jpg')} style={{width: 400, height: 400}} />
              <RNPickerSelect
                  onValueChange={(value) => console.log(value)}
                  items={[
                      {label: 'Orange', value: 'Orange'},
                      {label: 'Red', value: 'Red'},
                      {label: 'Black', value: 'Black'},
                  ]}
              />
              <Text style={{margin: 10}}>
                  What is the colour of this animal eye?
              </Text>
              <Image source={require('./img/tiger.jpg')} style={{width: 400, height: 400}} />
              <RNPickerSelect
                  onValueChange={(value) => console.log(value)}
                  items={[
                      {label: 'Red', value: 'Red'},
                      {label: 'Yellow', value: 'Yellow'},
                      {label: 'Orange', value: 'Orange'},
                  ]}
              />
          </ScrollView>
        </View>
    )
}

export default Quiz;

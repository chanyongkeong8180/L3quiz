import React, {useState} from 'react';
import {View, Text, Image, ScrollView, Button, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import RNPickerSelect from 'react-native-picker-select';

const Quiz = () => {
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [third, setThird] = useState('');
    const [forth, setForth] = useState('');
    return (
        <View style={{margin: 10}}>
          <ScrollView>
              <Text style={{margin: 10, fontSize: 20, color: '#0000ff'}}>
                <Icon name="clipboard-question" size={20} />
            Quiz
              </Text>
              <Text style={{margin: 10}}>
                  What is the background colour of this image?
              </Text>
              <Image source={require('./img/deer.jpg')} style={{width: 400, height: 400}} />
              <RNPickerSelect
                  onValueChange={(value) => setFirst(value)}
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
                  onValueChange={(value) => setSecond(value)}
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
                  onValueChange={(value) => setThird(value)}
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
                  onValueChange={(value) => setForth(value)}
                  items={[
                      {label: 'Red', value: 'Red'},
                      {label: 'Yellow', value: 'Yellow'},
                      {label: 'Orange', value: 'Orange'},
                  ]}
              />
              <Button onPress={()=> {
                  let message = ''
                  let score = 0;
                  const total = 4;
                  const firstAnswer = 'Green';
                  if (first === firstAnswer) {
                      score += 1;
                  }
                  const secondAnswer = 'Blue';
                  if (second === secondAnswer) {
                      score += 1;
                  }
                  const thirdAnswer = 'Orange';
                  if (third === thirdAnswer) {
                      score += 1;
                  }
                  const forthAnswer = 'Yellow';
                  if (forth === forthAnswer) {
                      score += 1;
                  }

                  if (score < total / 2) {
                      message = 'Please try again! '
                  }
                  if (score >= total / 2) {
                      message = 'Congratulations! '
                  }
                  Alert.alert(message + 'You score ' + score + '/'
                  + total + ' for the quiz.')
              }} title="Submit Answers" color="#00ff00" />
          </ScrollView>
        </View>
    )
}

export default Quiz;

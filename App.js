import React, {useState} from 'react';
import {StatusBar, View, Text, Image, ScrollView, Button, ToastAndroid, Alert, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import RNPickerSelect from 'react-native-picker-select';
import {useAudioPlayer} from 'expo-audio';

const congrats = require('./congrats.wav')
const failed = require('./failed.wav')

const Quiz = () => {
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [third, setThird] = useState('');
    const [forth, setForth] = useState('');

    const player = useAudioPlayer()

    return (
        <View style={styles.exterior}>
         <StatusBar/>
          <ScrollView>
              <View>
                  <Text style={[styles.text, {textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center'}]}>
                      <Icon name='clipboard-question' size={20} />
                      Colour Quiz
                      <Icon name='clipboard-question' size={20} />
                  </Text>
              </View>

              <View style={[styles.interior]}>
                  <Text style={[styles.text]}>
                      What is the background colour of this image?
                  </Text>
                  <Image source={require('./img/deer.jpg')} style={styles.image} />
                  <RNPickerSelect
                      onValueChange={(value) => setFirst(value)}
                      items={[
                          {label: 'Red', value: 'Red'},
                          {label: 'Green', value: 'Green'},
                          {label: 'Blue', value: 'Blue'},
                      ]}
                  />
              </View>

              <View style={[styles.interior]}>
                  <Text style={[styles.text]}>
                      What is the background colour of this image?
                  </Text>
                  <Image source={require('./img/turtle.jpg')} style={styles.image} />
                  <RNPickerSelect
                      onValueChange={(value) => setSecond(value)}
                      items={[
                          {label: 'Blue', value: 'Blue'},
                          {label: 'Green', value: 'Green'},
                          {label: 'Red', value: 'Red'},
                      ]}
                  />
              </View>

              <View style={[styles.interior]}>
                  <Text style={[styles.text]}>
                      What is the colour of this animal eye?
                  </Text>
                  <Image source={require('./img/owl.jpg')} style={styles.image} />
                  <RNPickerSelect
                      onValueChange={(value) => setThird(value)}
                      items={[
                          {label: 'Orange', value: 'Orange'},
                          {label: 'Red', value: 'Red'},
                          {label: 'Black', value: 'Black'},
                      ]}
                  />
              </View>

              <View style={[styles.interior]}>
                  <Text style={[styles.text]}>
                      What is the colour of this animal eye?
                  </Text>
                  <Image source={require('./img/tiger.jpg')} style={styles.image} />
                  <RNPickerSelect
                      onValueChange={(value) => setForth(value)}
                      items={[
                          {label: 'Red', value: 'Red'},
                          {label: 'Yellow', value: 'Yellow'},
                          {label: 'Orange', value: 'Orange'},
                      ]}
                  />
              </View>

              <View>
                  <Button onPress={()=> {
                      let message = ''
                      let score = 0;
                      const total = 4;
                      const firstAnswer = 'Green';
                      if (first === '' || second === '' || third === '' || forth === '') {
                          ToastAndroid.show('Please answer all questions.', ToastAndroid.LONG);
                      }
                      else {
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
                              player.replace(failed)
                              player.play()
                              message = 'Please try again! '
                          }
                          if (score >= total / 2) {
                              player.replace(congrats)
                              player.play()
                              message = 'Congratulations! '
                          }
                          Alert.alert(message + 'You score ' + score + '/'
                              + total + ' for the quiz.')
                      }
                  }} title="Submit Answers" color="#566756" />
              </View>
          </ScrollView>
        </View>
    )
}

export default Quiz;

const styles = StyleSheet.create({
    exterior: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#006362',
    },
    interior: {
        borderWidth: 2,
        borderColor: 'skyblue',
        margin: 10
    },
    text: {
        color: '#e9e9e9',
        margin: 10
    },
    image: {
        maxWidth: '100%',
        height: 400
    }
});

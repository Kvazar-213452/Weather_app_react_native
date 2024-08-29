import React, { useState, useEffect } from 'react';
import {Text, View, TextInput, Keyboard, ScrollView } from 'react-native';
import { styles } from './app/Style'; 

const api = {
  key: "fcc8de7015bbb202209bbf0261babf4c",
  base: "https://api.openweathermap.org/data/2.5/"
};

export default function App() {
  const [query, setQuery] = useState('London'); 
  const [weather, setWeather] = useState({});

  useEffect(() => {
    search(); 
  }, []);

  const search = () => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        Keyboard.dismiss(); 
      });
  };

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <View style={styles.body}>
      <Text style={styles.color}>Done Consolas</Text>
      <View style={styles.main}>
        <ScrollView contentContainerStyle={styles.container}>
          <TextInput
            style={styles.searchBox}
            placeholder="Search for a city..."
            value={query}
            onChangeText={(text) => setQuery(text)}
            onSubmitEditing={search} 
            autoCorrect={false}
          />

          {typeof weather.main !== "undefined" && (
            <View style={styles.results}>
              <View style={styles.location}>
                <Text style={styles.city}>{weather.name}, {weather.sys.country}</Text>
                <Text style={styles.date}>{dateBuilder(new Date())}</Text>
              </View>
              <View style={styles.current}>
                <Text style={styles.temp}>{Math.round(weather.main.temp)}°c</Text>
                <Text style={styles.weather}>{weather.weather[0].main}</Text>
                <Text style={styles.hiLow}>{Math.round(weather.main.temp_min)}°c / {Math.round(weather.main.temp_max)}°c</Text>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}
import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ImageBackground, Image } from 'react-native';
import { A, B, D, E, F, G, H, I, J, K, L, M } from '../../assets/images';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 0,
    flexDirection: 'row',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 0,
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 0,
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: '180%',
    alignSelf: 'center',
    marginTop: 200,
    top: -80,
  },
  background: {
    width: '100%',
    height: '220%',
    justifyContent: 'flex-end',
    marginTop: 20,
    top: 220,
  },
  plus: {
    width: '80%',
    height: '30%',
    alignSelf: 'center',
    marginTop: 10,
    top: 41,
  },
  chat: {
    width: '8%',
    height: '25%',
    alignSelf: 'flex-end',
    marginTop: 30,
    top: 70,
    marginRight: 100,
  },
  bottomBarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',  
  },
  upperBarButton: {
    flex: 1,
    height: 100,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',  
  },
  upperBarButton2: {
    height: 100,
    marginTop: -100,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    color: 'black',
    marginRight: 55,  
  },
  poto: {
    width: 30,
    height: 30,
    marginTop: 90,
  },
  poto2: {
    width: 30,
    height: 30,
    marginBottom: 450,
    top: -40,
    marginRight: -350,
  },
  poto3: {
    width: 30,
    height: 30,
    marginBottom: 60,
    top: -40,
    marginRight: -350,
  },
});

const Home = () => {
  return (
    <>
      
      <View style={styles.container3}>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Text style={styles.upperBarButton}>Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Text style={styles.upperBarButton}>Following</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Text style={styles.upperBarButton}>For you</Text>
        </TouchableOpacity>
        {/* Tempatkan komponen TextInput, TouchableOpacity, dan Text lainnya di sini */}
      </View>
      <Text style={styles.upperBarButton2}>____</Text>
      <View style={styles.container2}>
        <Image source={B} style={styles.image} />
        {/* Tempatkan komponen TextInput, TouchableOpacity, dan Text lainnya di sini */}
      </View>
      <View style={styles.container2}>
        <Image source={A} style={styles.background} />
        {/* Tempatkan komponen TextInput, TouchableOpacity, dan Text lainnya di sini */}
      </View>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Image source={M} style={styles.poto2} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Image source={J} style={styles.poto2} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Image source={K} style={styles.poto2} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Image source={I} style={styles.poto2} />
        </TouchableOpacity>
        {/* Tempatkan komponen TextInput, TouchableOpacity, dan Text lainnya di sini */}
      </View>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Image source={L} style={styles.poto3} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Image source={J} style={styles.poto3} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Image source={K} style={styles.poto3} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Image source={I} style={styles.poto3} />
        </TouchableOpacity>
        {/* Tempatkan komponen TextInput, TouchableOpacity, dan Text lainnya di sini */}
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Image source={H} style={styles.poto} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Image source={G} style={styles.poto} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Image source={D} style={styles.plus} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Image source={F} style={styles.poto} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Image source={E} style={styles.poto} />
        </TouchableOpacity>
        {/* Tempatkan komponen TextInput, TouchableOpacity, dan Text lainnya di sini */}
      </View>
      
    </>
  );
};

export default Home;

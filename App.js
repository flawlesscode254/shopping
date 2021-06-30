import React from "react";
import {
  ImageBackground,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Ionicons} from '@expo/vector-icons'

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;
const App = ({navigation}) => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#FFF",
      }}
    >
      <ImageBackground
        source={{ uri: "https://images.unsplash.com/photo-1624708882315-9909cbe5676f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" }}
        style={{
          height: 0.8 * h
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginTop: 60,
            alignItems: "center",
          }}
        >
          <View style={{
            backgroundColor: "black",
            padding: 7,
            borderRadius: 999
          }}>
            <Ionicons name="arrow-back" size={24} color="#FFF" />
          </View>
          <View style={{
            backgroundColor: "black",
            padding: 7,
            borderRadius: 999
          }}>
            <Ionicons name="git-network" size={24} color="#FFF" />
          </View>
          
        </View>
        <LinearGradient
          colors={["white", "#FFF", "transparent"]}
          style={{
            transform: [{ rotate: "180deg" }],
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            height: 0.16 * h,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
        </LinearGradient>
      </ImageBackground>
      <View
        style={{
          display: 'flex',
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 20
        }}
      >
        <View
          style={{
            justifyContent: "center",
            display: 'flex',
            marginTop: -60
          }}
        >
          <Text style={{
            color: "black",
            marginBottom: 10
          }}>Color</Text>
          <View style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}>
            <View style={{
              backgroundColor: "black",
              height: 30,
              width: 30,
              borderRadius: 999,
              marginRight: 20
            }}></View>
            <View style={{
              backgroundColor: "gray",
              height: 30,
              width: 30,
              borderRadius: 999,
              marginRight: 20
            }}></View>
            <View style={{
              backgroundColor: "#14db46",
              height: 30,
              width: 30,
              borderRadius: 999
            }}></View>
          </View>
          <View style={{
            marginTop: 20
          }}>
            <Text style={{
              fontWeight: "bold",
              fontSize: 20
            }}>
              Classic
            </Text>
            <Text style={{
              fontWeight: "bold",
              fontSize: 20
            }}>
              Cotton Jacket
            </Text>
          </View>
          <Text style={{
            marginTop: 10,
            marginBottom: 5,
            textDecorationLine: "line-through",
            fontWeight: "bold",
            color: "red"
          }}>
            $239
          </Text>
          <Text style={{
            fontWeight: "bold"
          }}>
            $208.99
          </Text>
          
        </View>
        <View style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <View style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            padding: 7,
            borderRadius: 999,
            marginBottom: 30
          }}>
            <Ionicons name="heart" size={24} color="red" />
          </View>
          <View style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            padding: 7,
            borderRadius: 999
          }}>
            <Ionicons name="cart-outline" size={24} color="#FFF" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
 
});

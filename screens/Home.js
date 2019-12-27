import React, { useState } from "react";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import { FlatGrid } from "react-native-super-grid";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { Letters } from "../shared/Data";
import Modal from "../components/Modal";

const Home = () => {
  const [isActive, setIsActive] = useState("none");
  const [letter, setLetter] = useState(require("../assets/For_A.png"));
  return (
    <Container>
      <Modal isModal={isActive} letter={letter} />
      <LinearGradient
        colors={["#fbd859", "#ff7800"]}
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flex: 1
        }}
      >
        <SafeAreaView>
          <FlatGrid
            itemDimension={130}
            items={Letters}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setIsActive("flex");
                  setLetter(Letters[index].for);
                  console.log("You clicked", index);
                }}
              >
                <Card>
                  <Image source={item.letter} />
                </Card>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </LinearGradient>
    </Container>
  );
};

export default Home;

const Container = styled.View`
  flex: 1;
`;

const Card = styled.View`
  justify-content: center;
  align-items: center;
  border: 1px solid #fdc960;
  border-radius: 10px;
  padding-top: 10;
  padding-bottom: 8px;
`;

const Image = styled.Image`
  height: 100px;
  width: 100px;
`;

const Text = styled.Text``;

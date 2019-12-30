import React, { useState } from "react";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import { FlatGrid } from "react-native-super-grid";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Letters } from "../shared/Data";
import Modal from "../components/Modal";

const Home = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.isOpen);

  return (
    <>
      <Container>
        <>{isOpen && <Modal />}</>
        <LinearGradient
          colors={["#fbd859", "#ff7800"]}
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            paddingTop: 30
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
                    dispatch({
                      type: "OPEN_MODAL",
                      payload: { letter: item.for, audio: item.audio }
                    });
                    console.log("[Home] Display ", isOpen);
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
    </>
  );
};

export default Home;

const Container = styled.View`
  position: relative;
  flex: 1;
  height: 100%;
  width: 100%;
  z-index: 10;
`;

const ExtraComponent = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
`;

const Mod = styled.View`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  z-index: 100;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const Button = styled.Text`
  background: white;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 12px;
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

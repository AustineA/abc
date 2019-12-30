import React, { useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { Animated, Easing, TouchableWithoutFeedback } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Audio } from "expo-av";

const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.isOpen);
  const letter = useSelector(state => state.letter);
  const audio = useSelector(state => state.audio);

  const [modal, setScale] = useState({
    scale: new Animated.Value(0),
    opacity: new Animated.Value(0)
  });

  const closeModal = () => {
    dispatch({
      type: "CLOSE_MODAL"
    });
  };

  useLayoutEffect(() => {
    toggleScale();
    playAudio(audio);
    console.log("Display is ", isOpen);

    return async () => {
      await soundObject.unloadAsync();
    };
  }, [isOpen]);

  const toggleScale = () => {
    Animated.timing(modal.scale, {
      toValue: 1,
      duration: 300,
      easing: Easing.in()
    }).start();

    Animated.timing(modal.opacity, {
      toValue: 1,
      duration: 400,
      easing: Easing.in()
    }).start();
  };

  const soundObject = new Audio.Sound();
  const playAudio = async audio => {
    try {
      await soundObject.loadAsync(audio);
      await soundObject.playAsync();
    } catch (error) {
      console.log("Audio no found");
    }
  };

  return (
    <Container>
      <TouchableWithoutFeedback
        onPress={() => {
          closeModal();
          soundObject.unloadAsync();
        }}
      >
        <ModalView>
          <ModalBody>
            <Letter source={letter} />
          </ModalBody>
        </ModalView>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default Modal;

const Letter = styled.Image`
  width: 100%;
  height: 100%;
`;

const ModalBody = styled.View`
  width: 458px;
  height: 458px;
  background: white;
  border-radius: 20px;
`;

const AnimatedModal = new Animated.createAnimatedComponent(ModalBody);

const Container = styled.View`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

const AnimatedContainer = new Animated.createAnimatedComponent(Container);

const ModalView = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

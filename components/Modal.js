import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Animated, Easing } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Modal = ({ isModal, letter, action }) => {
  const [modal, setScale] = useState({
    scale: new Animated.Value(0),
    opacity: new Animated.Value(0)
  });

  useEffect(() => {
    toggleScale();
  });

  const toggleScale = () => {
    Animated.timing(modal.scale, {
      toValue: 1,
      duration: 1000,
      easing: Easing.in()
    }).start();

    Animated.timing(modal.opacity, {
      toValue: 1,
      duration: 1200,
      easing: Easing.in()
    }).start();
  };

  return (
    <AnimatedContainer style={{ display: isModal, opacity: modal.opacity }}>
      <ModalView>
        <AnimatedModal style={{ transform: [{ scale: modal.scale }] }}>
          <Letter source={letter} />
        </AnimatedModal>
      </ModalView>
    </AnimatedContainer>
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

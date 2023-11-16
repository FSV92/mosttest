import React from 'react';
import {Dimensions, Platform} from 'react-native';
import Modal from 'react-native-modal';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

type PropTypes = {
  children: JSX.Element;
  isVisible: boolean;
  setVisible: (bool: boolean) => void;
};

const ModalComponent: React.FC<PropTypes> = ({
  children,
  isVisible,
  setVisible,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={() => setVisible(false)}
      swipeDirection="left">
      {children}
    </Modal>
  );
};

export default ModalComponent;

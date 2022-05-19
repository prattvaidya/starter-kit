'use strict';

import React, {useState} from 'react';

import {
  ViroARScene,
  ViroTrackingStateConstants,
  ViroText,
  ViroAnimations,
  ViroNode,
} from '@viro-community/react-viro';
import CardFront from './CardFront';
import CardBack from './CardBack';

export const BusinessCard = () => {
  const [isTracking, setIsTracking] = useState(true);
  const [initialized, setInitialized] = useState(false);

  const getNoTrackingUI = () => {
    return (
      <ViroText text={initialized ? 'Initializing AR...' : 'No Tracking'} />
    );
  };

  const getARScene = () => {
    return (
      <ViroNode>
        <CardFront />
        <CardBack />
      </ViroNode>
    );
  };

  const _onInitialized = (state, reason) => {
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setIsTracking(false);
      setInitialized(true);
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      setInitialized(false);
    }
  };

  return (
    <ViroARScene onTrackingUpdated={_onInitialized}>
      {isTracking ? getNoTrackingUI() : getARScene()}
    </ViroARScene>
  );
};

ViroAnimations.registerAnimations({
  animateImage: {
    properties: {
      positionX: 0.05,
      opacity: 1.0,
    },
    easing: 'Bounce',
    duration: 500,
  },
  animateViro: {
    properties: {
      positionZ: 0.02,
      opacity: 1.0,
    },
    easing: 'Bounce',
    duration: 500,
  },
});

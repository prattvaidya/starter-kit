'use strict';

import React, {useState} from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroDirectionalLight,
  ViroBox,
  ViroTrackingStateConstants,
  ViroARTrackingTargets,
  ViroMaterials,
  ViroText,
  ViroImage,
  ViroFlexView,
  ViroARImageMarker,
  ViroARObjectMarker,
  ViroAmbientLight,
  ViroARPlane,
  ViroAnimatedImage,
  ViroAnimations,
  ViroNode,
  Viro3DObject,
  ViroQuad,
} from '@viro-community/react-viro';

export const BusinessCard = () => {
  const [isTracking, setIsTracking] = useState(true);
  const [initialized, setInitialized] = useState(false);
  const [runAnimation, setRunAnimation] = useState(false);

  const getNoTrackingUI = () => {
    return (
      <ViroText text={initialized ? 'Initializing AR...' : 'No Tracking'} />
    );
  };

  const getARScene = () => {
    return (
      <ViroNode>
        <ViroARImageMarker
          target={'businessCard'}
          onAnchorFound={() => setRunAnimation(true)}>
          <ViroNode key="card">
            <ViroNode
              opacity={0}
              position={[0, -0.02, 0]}
              animation={{
                name: 'animateImage',
                run: runAnimation,
              }}>
              <ViroFlexView
                rotation={[-90, 0, 0]}
                height={0.03}
                width={0.05}
                style={styles.card}>
                <ViroFlexView style={styles.cardWrapper}>
                  <ViroImage
                    height={0.015}
                    width={0.015}
                    style={styles.image}
                    source={require('./assets/avatar.jpg')}
                  />
                  <ViroText
                    textClipMode="None"
                    text="Pratt Vaidya"
                    scale={[0.015, 0.015, 0.015]}
                    style={styles.textStyle}
                  />
                </ViroFlexView>
                <ViroFlexView
                  // onTouch={() => alert('twitter')}
                  style={styles.subText}>
                  <ViroText
                    width={0.01}
                    height={0.01}
                    textAlign="left"
                    textClipMode="None"
                    text="@pratttttstudios"
                    scale={[0.01, 0.01, 0.01]}
                    style={styles.textStyle}
                  />
                  <ViroAnimatedImage
                    height={0.01}
                    width={0.01}
                    loop={true}
                    source={require('./assets/tweet.gif')}
                  />
                </ViroFlexView>
              </ViroFlexView>
            </ViroNode>
            <ViroNode
              opacity={0}
              position={[0, 0, 0]}
              animation={{
                name: 'animateViro',
                run: runAnimation,
              }}>
              <ViroText
                text="www.ttt.studio"
                rotation={[-90, 0, 0]}
                scale={[0.01, 0.01, 0.01]}
                style={styles.textStyle}
              />
            </ViroNode>
          </ViroNode>
        </ViroARImageMarker>
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

var styles = StyleSheet.create({
  textStyle: {
    flex: 0.5,
    fontFamily: 'Roboto',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'top',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'column',
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0.001,
    flex: 0.5,
  },
  subText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 0.5,
  },
});

ViroARTrackingTargets.createTargets({
  businessCard: {
    source: require('./assets/tttBusinessCard.jpeg'),
    orientation: 'Up',
    physicalWidth: 0.05, // real world width in meters
  },
});

ViroMaterials.createMaterials({
  imagePlaceholder: {
    diffuseColor: 'rgba(255,255,255,1)',
  },
  quad: {
    diffuseColor: 'rgba(0,0,0,0.5)',
  },
});

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

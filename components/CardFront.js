import React, {useState} from 'react';
import {
  ViroAnimatedImage,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroFlexView,
  ViroImage,
  ViroNode,
  ViroText,
} from '@viro-community/react-viro';
import {styles} from '../styles/businessCard';

ViroARTrackingTargets.createTargets({
  businessCardFront: {
    source: require('../assets/tttBusinessCard-front.png'),
    orientation: 'Up',
    physicalWidth: 0.05, // real world width in meters
    type: 'Image',
  },
});

const CardFront = () => {
  const [runAnimation, setRunAnimation] = useState(false);

  return (
    <ViroARImageMarker
      target={'businessCardFront'}
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
                source={require('../assets/avatar.jpg')}
              />
              <ViroText
                textClipMode="None"
                text="Pratt Vaidya FRONT"
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
                source={require('../assets/tweet.gif')}
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
  );
};

export default CardFront;

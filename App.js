import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroTrackingStateConstants,
  ViroARSceneNavigator,
  Viro360Image,
  ViroSkyBox,
  ViroNode,
  Viro3DObject,
  ViroMaterials,
  ViroAmbientLight,
} from '@viro-community/react-viro';

const imageSource = {
  uri: 'https://thumbs.dreamstime.com/b/vr-image-futuristic-sci-fi-city-modern-fiction-skyscrapers-buildings-galaxy-discover-spacescape-119014727.jpg',
};

const skyBoxSource = {
  nx: {
    uri: 'https://instagram.fcxh3-1.fna.fbcdn.net/v/t51.2885-15/279839372_1950700588460465_6071677883828520550_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fcxh3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=-Slj4fZn1uMAX_5qjln&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-13lVyoFi69Sr9ZPnoFxJbwZlhYfu-DcY27cNoHL1j4g&oe=6282A1EC&_nc_sid=7bff83',
  },
  px: {
    uri: 'https://instagram.fcxh3-1.fna.fbcdn.net/v/t51.2885-15/279780982_111020178170173_2243021259054954215_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fcxh3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=GJRmQ2KDNwUAX_o72Kl&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-_qEFkYJPLE7JW3uBfWl5-ZPFLMqhXBWaYMcq3owVPxg&oe=62823248&_nc_sid=7bff83',
  },
  ny: {
    uri: 'https://instagram.fcxh3-1.fna.fbcdn.net/v/t51.2885-15/280138591_736178197748185_224515020155430281_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fcxh3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=wa-IWKJC6FwAX-jw3D0&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT9rPoPhcH088nEmwTQWbCd4vCykF_c9SsLD9StItI40VA&oe=628216FA&_nc_sid=7bff83',
  },
  py: {
    uri: 'https://instagram.fcxh3-1.fna.fbcdn.net/v/t51.2885-15/279930706_515861076683498_4582059367124827750_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fcxh3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=I8r1EiomkEcAX8cKkPj&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-lXowN_Pn-5S6tZYv0GzZ8NKHQ2yyNrYihRV5xtx-CpA&oe=6281DF40&_nc_sid=7bff83',
  },
  nz: {
    uri: 'https://instagram.fcxh3-1.fna.fbcdn.net/v/t51.2885-15/279781161_383248960482261_7903002199844203305_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fcxh3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=uK-9nCs9dvMAX8pI7EF&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT9ONt1JabYTbNZHDqNKTa6RxaM7kURRXoq4YL2mV0xXsQ&oe=628259A9&_nc_sid=7bff83',
  },
  pz: {
    uri: 'https://instagram.fcxh3-1.fna.fbcdn.net/v/t51.2885-15/279889249_768934091148546_199051599905806634_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fcxh3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=rt5XE-fJL6UAX_E3M3D&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_Pc5PBqwQb9G9Pg3kRgx0OKkVE7gKh2_Wsp3FCB83kYw&oe=628108B2&_nc_sid=7bff83',
  },
};

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText('Welcome to Grouse');
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      // Handle loss of tracking
    }
  }

  const handleClick = (position, source) => {
    console.log('element clicked', position, source);
  };

  const handleClickState = (state, position, source) => {
    console.log('clickstate called', state, position, source);
  };

  const handleHover = (isHovering, position, source) => {
    console.log('hover called', isHovering, position, source);
  };

  const handleDrag = (position, source) => {
    console.log('drag called', position, source);
  };

  const handleFuse = source => {
    console.log('fuse called', source);
  };

  const handleScroll = (scrollPosition, source) => {
    console.log('scroll called', scrollPosition, source);
  };

  const handleSwipe = (swipeState, source) => {
    console.log('swipe called', swipeState, source);
  };

  const handleLoadStart = () => {
    console.log('OBJ loading has started');
  };
  const handleLoadEnd = () => {
    console.log('OBJ loading has finished');
  };
  const handleError = event => {
    console.log('OBJ loading failed with error: ' + event.nativeEvent.error);
  };

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      {/* <Viro360Image source={imageSource} /> */}
      {/* <ViroSkyBox source={skyBoxSource} /> */}
      {/* <ViroNode position={[0, 0, -1]} scale={[2, 2, 2]}>
        <ViroText
          text="Text A"
          position={[0, 0, -1]}
          onClick={handleClick}
          onClickState={handleClickState}
          onHover={handleHover}
          onDrag={handleDrag}
          onFuse={handleFuse}
          onScroll={handleScroll}
          onSwipe={handleSwipe}
        />
        <ViroNode position={[1, 0, 0]} scale={[4, 4, 4]}>
          <ViroText text="Text B" />
        </ViroNode>
      </ViroNode> */}
      <Viro3DObject
        source={require('./assets/heart.obj')}
        position={[0, 0, -1.15]}
        materials={['heart']}
        type="OBJ"
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
      />
      <ViroAmbientLight color="#FFFFFF" />
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

ViroMaterials.createMaterials({
  heart: {
    lightingModel: 'Blinn',
    diffuseTexture: require('./assets/Heart_D3.jpeg'),
    specularTexture: require('./assets/Heart_S2.jpeg'),
    writesToDepthBuffer: true,
    readsFromDepthBuffer: true,
  },
});

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#000000',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

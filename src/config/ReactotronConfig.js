import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect({ host: 'xxx.xxx.x.xxx' });

  tron.clear();

  console.tron = tron;
}

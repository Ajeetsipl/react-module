import { NativeModules, Platform } from 'react-native';
const LINKING_ERROR = `The package 'sample-react-native-module' doesn't seem to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo managed workflow\n';
const SampleReactNativeModule = NativeModules.SampleReactNativeModule ? NativeModules.SampleReactNativeModule : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }

});
export function multiply(a, b) {
  return SampleReactNativeModule.multiply(a, b);
}
//# sourceMappingURL=index.js.map
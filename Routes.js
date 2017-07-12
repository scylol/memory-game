import Expo from 'expo';
import { createRouter } from '@expo/ex-navigation';
import HomeScreen from './src/components/homeScreen';
import MainScreen from './src/components/mainScreen';
import UserTurnScreen from './src/components/userTurnScreen';

const Routes = createRouter(() => ({
  home: () => HomeScreen,
  main: () => MainScreen,
  userTurn: () => UserTurnScreen
}));

export default Routes;
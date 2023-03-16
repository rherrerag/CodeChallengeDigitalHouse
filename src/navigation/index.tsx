import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MovementsScreen from '../features/movements/containers/Movements';
import ProductDetailScreen from '../features/product/containers/ProductDetail';

type RootStackParamList = {
  Movements: undefined;
  ProductDetail: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const AppStackNavigator = () => (
  <RootStack.Navigator
    initialRouteName="Movements"
    screenOptions={{
      headerShown: false,
    }}>
    <RootStack.Screen name="Movements" component={MovementsScreen} />
    <RootStack.Screen name="ProductDetail" component={ProductDetailScreen} />
  </RootStack.Navigator>
);

export default AppStackNavigator;

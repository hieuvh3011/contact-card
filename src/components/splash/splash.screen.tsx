import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@app/route/type.navigator';

type Props = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<Props>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SplashScreen;

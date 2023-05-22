import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {ContactEntities} from '@app/entities/contact.entities';

export type RootStackParamList = {
  Home: undefined;
  Splash: undefined;
  ContactDetail: {
    contact: ContactEntities;
  };
  AddContact: undefined;
};

export type MessageNavigationProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};

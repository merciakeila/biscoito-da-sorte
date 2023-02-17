import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from 'app/interfaces/types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Repair: {
            screens: {
              RepairScreen: 'repair',
            },
          },
          Shop: {
            screens: {
              ShopScreen: 'shop',
            },
          },
          History: {
            screens: {
              HistoryScreen: 'history',
            },
          },
          Settings: {
            screens: {
              SettingsScreen: 'settings',
            },
          },
        },
      },
    },
  },
};

export default linking;

/* eslint class-methods-use-this: "off" */

//import PushNotification from 'react-native-push-notification';
var PushNotification = require('react-native-push-notification');
import { Platform, PushNotificationIOS } from 'react-native';

export default class Push {
  constructor(onTokenReceived) {
    this.wrappedLibrary = 'react-native-push-notification';
    PushNotification.configure({
      onRegister: (token) => {
        alert(token)
        onTokenReceived(token.token);
      },
      onNotification: (notification) => {
         console.log( 'NOTIFICATION:', notification )
      },
      senderID: '396607131841',
      popInitialNotification: true,

    });
  }

  registerNotificationListener(listener) {
    console.log(listener, 'listenerrrrrrrrrr')
    if (Platform.OS === 'ios') {
      PushNotification.onNotification = (notification) => {
        console.log(notification, 'notificationnnnnnnnn')
        listener(notification);
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      };
    } else {
      PushNotification.onNotification = listener;
    }
  }

  unregister() {
    PushNotification.unregister();
  }

}

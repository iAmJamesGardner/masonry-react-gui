import { Dark } from './variables/Dark'
import { Light } from './variables/Light'

export const cbConfig: AppConfig = {
  appId: 'com.connetquot838.app',
  appName: 'Connetquot838',
  appNameShort: 'Connetquot',
  appStore: 'https://apps.apple.com/app/connetquot838/',
  backupAccountSite: 'https://connetquot838.org',
  configName: 'connetquot',
  darkTheme: Dark,
//   defaultWallets: [
//     { pluginId: 'bitcoin', tokenId: null },
//     { pluginId: 'fantom', tokenId: null },
//     { pluginId: 'ethereum', tokenId: null }
//   ],
  //forceCloseUrl: 'https://support.edge.app/hc/en-us/articles/26702768694811-How-to-force-close-Edge-Android-and-iOS',
  forceCloseUrl: '',
  //ip2faSite: 'https://support.edge.app/hc/en-us/articles/7018106439579-Edge-Security-IP-Validation-and-2FA',
  ip2faSite: '',
  //knowledgeBase: 'https://cryptobaseatm.com',
  knowledgeBase: '',
  lightTheme: Light,
  //notificationServers: ['https://push2.edge.app'],
  notificationServers: [''],
  phoneNumber: '+1-307-702-0115',
  //referralServers: ['https://referral1.edge.app'],
  referralServers: [''],

  supportEmail: 'support@connetquot838.org',
  supportContactSite: 'https://connetquot838.org',
  supportSite: 'https://connetquot838.org',
  //termsOfServiceSite: 'https://cryptobaseatm.com/terms-and-conditions/',
  termsOfServiceSite: '',
  website: 'https://connetquot838.org',
  extraTab: {
    tabTitleKey: 'title_map',
    tabType: 'edgeProvider',
    //webviewUrl: 'https://www.cryptobaseatm.com/cryptobase-bitcoin-atms-locations',
    webviewUrl: '',
    extraTabBarIconFont: 'Feather',
    extraTabBarIconName: 'map-pin'
  }
}

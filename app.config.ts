interface AppConfig {
  expo: {
    name: string
    slug: string
    version: string
    orientation: 'portrait' | 'landscape'
    icon: string
    userInterfaceStyle: 'light' | 'dark' | 'automatic'
    splash: {
      image: string
      resizeMode: 'cover' | 'contain' | 'native'
      backgroundColor: string
    }
    assetBundlePatterns: string[]
    ios: {
      supportsTablet: boolean
      bundleIdentifier: string
    }
    android: {
      adaptiveIcon: {
        foregroundImage: string
        backgroundColor: string
      }
      package: string
    }
    web: {
      favicon: string
    }
    extra: {
      eas: {
        projectId: string
      }
    }
  }
}

const appConfig: AppConfig = {
  expo: {
    name: 'gametracker-mobile',
    slug: 'gametracker-mobile',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'dark',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#0D1117'
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.elvisdev2280.gametrackermobile'
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#0D1117'
      },
      package: 'com.elvisdev2280.gametrackermobile'
    },
    web: {
      favicon: './assets/favicon.png'
    },
    extra: {
      eas: {
        projectId: '0cfae3dd-bf6f-485d-a534-ffa6e728da3f'
      }
    }
  }
}

export default appConfig

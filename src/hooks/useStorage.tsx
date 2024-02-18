import * as SecureStore from 'expo-secure-store'

export default function useSecureStorage(): {
  handleSetSecureValue: (key: string, value: string) => Promise<void>
  getSecureStorage: (key: string) => Promise<string | null | undefined>
  handleDeleteSecureValue: (key: string) => Promise<void>
} {
  const handleSetSecureValue = async (
    key: string,
    value: string
  ): Promise<void> => {
    await SecureStore.setItemAsync(key, value)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getSecureStorage = async (
    key: string
  ): Promise<string | null | undefined> => {
    try {
      return await SecureStore.getItemAsync(key)
    } catch (e) {
      console.log(e)
    }
  }

  const handleDeleteSecureValue = async (key: string): Promise<void> => {
    await SecureStore.deleteItemAsync(key)
  }
  return {
    handleSetSecureValue,
    getSecureStorage,
    handleDeleteSecureValue
  }
}

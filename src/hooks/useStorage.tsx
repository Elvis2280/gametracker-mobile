import * as SecureStore from 'expo-secure-store'

export default function useSecureStorage(): {
  handleSetSecureValue: (key: string, value: string) => Promise<void>
  getSecureStorage: (key: string) => Promise<string | null | undefined>
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
      const value = await SecureStore.getItemAsync(key)
      return value
    } catch (e) {
      console.log(e)
    }
  }
  return {
    handleSetSecureValue,
    getSecureStorage
  }
}

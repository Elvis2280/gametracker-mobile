import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from '../../utils/theme';
import Input from '../../components/Input/Input';

type Props = {};

export default function Login({}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>GameTracker</Text>
      <View style={styles.inputsContainer}>
        <Text style={styles.textWelcome}>Welcome Back!</Text>
        <Input type="text" />
        <Input type="password" />
      </View>
      <View>
        <Text style={styles.textWelcome}>Button</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    color: colors.text,
    fontSize: sizes.text.xlarge,
    fontWeight: 'bold',
  },
  textWelcome: {
    color: colors.text,
    fontSize: sizes.text.large,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: sizes.spacing.small,
  },
  inputsContainer: {
    width: '100%',
    paddingHorizontal: sizes.spacing.medium,
    rowGap: sizes.spacing.medium,
  },
});

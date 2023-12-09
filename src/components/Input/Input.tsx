import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, sizes } from '../../utils/theme';
import { RadixIcon } from 'radix-ui-react-native-icons';

type Props = {
  type: 'text' | 'password' | 'number';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  inputProps?: React.ComponentProps<typeof TextInput>;
};

export default function Input({
  type,
  startIcon = null,
  endIcon = null,
}: Props) {
  switch (type) {
    case 'text':
      return (
        <View style={styles.inputContainer}>
          {startIcon && <View style={styles.iconContainer}>{startIcon}</View>}
          <TextInput style={styles.input} inputMode="text" />
          {endIcon && <View style={styles.iconContainer}>{endIcon}</View>}
        </View>
      );
    case 'password':
      return (
        <View style={styles.inputContainer}>
          {startIcon && <View style={styles.iconContainer}>{startIcon}</View>}
          <TextInput style={styles.input} inputMode="text" />
          <View style={styles.iconContainer}>
            <RadixIcon name="eye-open" size={24} color="white" />
          </View>
        </View>
      );
    case 'number':
      return <input type="number" />;
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: sizes.spacing.medium,
    color: colors.text,
    fontSize: sizes.text.medium,
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    rowGap: sizes.spacing.medium,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: colors.primary[500],
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: sizes.spacing.small,
    width: 50,
    height: 50,
  },

  testText: {
    color: colors.text,
  },
});

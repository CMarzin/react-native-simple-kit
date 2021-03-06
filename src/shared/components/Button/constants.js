/* @flow */

import {
  BRAND_COLOR_BLUE,
  BRAND_COLOR_GREEN,
  BRAND_COLOR_RED,
  BRAND_COLOR_YELLOW,
  NEUTRAL_COLOR_00,
} from '@theme/colors'

export type DefaultProps = {
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'white',
  children?: ?React$Element<any>,
  inactive?: ?boolean,
  onPress?: ?Function,
  replace?: ?boolean,
  routeState: ?Object,
  style?: ?StyleSheet,
  text?: ?string,
  to?: ?string,
}

export type Props = DefaultProps

export const brandColors = {
  blue: BRAND_COLOR_BLUE,
  green: BRAND_COLOR_GREEN,
  red: BRAND_COLOR_RED,
  yellow: BRAND_COLOR_YELLOW,
  white: NEUTRAL_COLOR_00,
}

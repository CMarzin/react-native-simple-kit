# Button 🔘

A generic button component that handles simple functions or navigation paths into React Router v4 based apps.

### API

* color?: `'blue' | 'green' | 'red' | 'yellow' | 'white'`
* children?: `React$Element<any>`
* inactive?: `boolean`
* onPress?: `Function`
* replace?: `boolean`
* routeState?: `Object`
* style?: `StyleSheet`
* text?: `string`
* to?: `string`

### Example

```js
import React from 'react'
import { SafeAreaView } from 'react-native'
import Button from '@components/Button'

const MyComponent = (): React$Element<any> => (
  <SafeAreaView style={{ flex: 1 }}>
    <Button
      inactive color="red"
      to="/auth/connection"
      text="Connection"
    />
    <Button
      onPress={() => console.warn('Success! 👍')}
      replace to="/app"
      text="Welcome!"
    />
  </SafeAreaView>
)

export default MyComponent
```

## Changelog
#### Monday, November 20th
- Add `blue` as a supported color.

#### Thursday, November 16th
- Initial release. We didn't track changes before this version.

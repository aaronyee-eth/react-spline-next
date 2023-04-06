# 🖲️ React Spline Next

Modified from '@splinetool/viewer' and wrapped to React component to allow remove logo and customize scroll anchor element.

## Quickstart

```bash
yarn add react-spline-next
```

```jsx
import React from 'react';
import Spline from 'react-spline-next';

const App = () => {
  return (
    <Spline
      url={url}
      loading={'eager'}
      style={{ width: '100%', height: '100%' }}
      hideLogo={true}
      anchorElement={anchorRef.current}
    />
  );
};
```

## Notes

### Dependencies

- Cocoapods https://guides.cocoapods.org/using/getting-started.html#installation
- xcode https://developer.apple.com/xcode/

```npm install -g cordova```

```cordova platform add ios```

```cordova run ios```

Ensure assets are fetched using relative path, add to package json

```"homepage": "./"```

Wait for react project to be built

```
<hook type="before_prepare" src="scripts/prebuild.js" />
```

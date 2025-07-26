# Shared Ride Hatch Types Library

## Push new version

```sh
yarn version --patch
yarn build
git commit -am "New release"
git push --follow-tags
```

## 1 Shot
```sh
yarn version --patch && yarn build && git commit -am "New release" && git push --follow-tags
```
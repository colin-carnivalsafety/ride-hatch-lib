# Shared Ride Hatch Types Library

## Add dependency to your project

`"ride-hatch-lib": "github:colin-carnivalsafety/ride-hatch-lib#f3987f0"`

## Push new version

```sh
yarn version --patch
yarn build
git commit -am "New release"
git push --follow-tags

yarn version --patch && yarn build && git commit -am "New release" && git push --follow-tags

```

## Dependencies for deployment & Tarball deployment (Currently not in use. Here for note taking.)

`brew install gh`

`gh auth login # Follow the prompts (choose GitHub.com, HTTPS, browser auth).` 

```sh
yarn version --patch && yarn build && yarn pack

gh release create v1.0.24 ride-hatch-lib-v1.0.24.tgz \
  --title "v1.0.24" \
  --notes "First public release"

`"ride-hatch-lib": "https://github.com/colin-carnivalsafety/ride-hatch-lib/releases/download/v1.0.0/ride-hatch-lib-v1.0.0.tgz"`

```


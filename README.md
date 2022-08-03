# Screeps arena autocomplete (progress ~15%)

Package for helping you ide autocomplete code

[Screeps: Arena game](https://store.steampowered.com/app/1137320/Screeps_Arena/)

## How to use

1. Clone this repository in any directory
2. Create in your screeps scripts folder `package.json`
3. In `package.json` add 
```json
{
  // ...
  "dependencies": {
    "game": "file:../SceepsArenaAutocomplite" // path to cloned repository
  },
  // ...
}
```
4. Run `npm install`
5. Start coding
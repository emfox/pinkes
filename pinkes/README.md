# Pinkes app-level files

`BrowserContentHandler.sys.mjs` is the thin-app shim. It is not part of the
upstream Zotero app build; packaging can install it into the app's `omni.ja`
as `modules/BrowserContentHandler.sys.mjs` when running on system
`firefox-esr` instead of a private Gecko build.

The tested prototype is on the local `wip/thin-app-prototype` branch.

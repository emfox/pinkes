# Pinkes

Pinkes is an unofficial, Debian-oriented fork of Zotero. It is not affiliated
with or endorsed by the Zotero project or the Corporation for Digital Scholarship.

## Base

This branch is based on upstream `zotero/zotero` at the **11.0-beta.3**
release commit `212a7d6a585d1209bc4e698a904490205f139500` (2026-10-29).
`upstream/main` is kept as a remote for future rebases.

## Changes on top of 11.0-beta.3

- app identity: Vendor/Name/ID changed to `Pinkes` / `pinkes@pinkes.org`
- data directory: `CLIENT_NAME` changed to `Pinkes` (database remains
  `zotero.sqlite`; `ID` remains `zotero` for format compatibility)
- UI branding and locales changed from Zotero to Pinkes
- update URL removed; `app.update.auto` disabled
- local server default port changed from 23119 to 23120
- sync to zotero.org is opt-in: `extensions.zotero.sync.enabled` defaults to
  `false`, with a checkbox in Sync preferences
- first-run Zotero/Firefox popups disabled
- request header changed from `X-Zotero-Version` to `X-Pinkes-Version`
- URI scheme changed from `zotero://` to `pinkes://`
- `pinkes/BrowserContentHandler.sys.mjs` thin-app shim for running on system
  `firefox-esr` without patching Gecko

## Not done yet

- LibreOffice integration
- full build/package integration of the thin-app path
- sync/reader/note validation on this base

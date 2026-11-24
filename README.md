# Pinkes

**Pinkes** is an unofficial, Debian-oriented fork of
[Zotero](https://www.zotero.org/). It is not affiliated with or endorsed by the
Zotero project or the Corporation for Digital Scholarship.

This branch is based on upstream Zotero **11.0-beta.3** (commit
`212a7d6a585d1209bc4e698a904490205f139500`).

See [PINKES.md](PINKES.md) for the full fork notes and the list of changes.

## Status

- Source tree mirrors Zotero 11.0-beta.3.
- Pinkes changes: app identity/branding, isolated data directory, opt-in sync,
  first-run popup removal, local server port 23120, and the app-level
  `BrowserContentHandler` shim in `pinkes/`.
- A thin-app prototype has been tested locally; it is not merged into this
  source branch yet.
- LibreOffice integration is not included yet.

## Building

The build follows upstream Zotero. Initialize submodules first:

```sh
git submodule update --init --recursive
```

For upstream build documentation, see
<https://www.zotero.org/support/dev/source_code>.

## License

AGPL-3.0-or-later, matching upstream Zotero. See [COPYING](COPYING).

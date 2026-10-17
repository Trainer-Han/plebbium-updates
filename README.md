# Plebbium updates

The files every installed Plebbium updates itself from. Plebbium's source
lives elsewhere: this repository holds only its releases.

| Release | Holds |
| --- | --- |
| `stable`, `beta` | `update.json` for that channel: a manifest signed with Plebbium's update key (ECDSA P-256) |
| `builds` | the browser installers |
| `core` | Pleb's features (pleb_core) for the fast lane |

Plebbium fetches them through `https://updates.plebbian.com/<release>/<file>`.
It installs nothing that is not signed with its key, nothing older than what
runs, and no file whose SHA-256 differs from the one the signed manifest names.

# Plebbium

**The browser that gets more done.** A Chromium browser for Windows, built
from source, with Pleb's features built in rather than bolted on.

### [Download Plebbium for Windows](https://updates.plebbian.com/download/Plebbium-Setup.exe)

Free · Windows 10 and 11, 64-bit · about 170 MB ·
[every feature, shown](https://plebbian.com/plebbium.html) ·
[all downloads](https://github.com/Trainer-Han/plebbium-updates/releases/tag/download)

This is where every computer gets Plebbium, a second one of your own
included: the same installer, always the current Stable version.

## Install it

1. **Download and run `Plebbium-Setup.exe`.** It installs for you only, into
   your user folder; no admin rights needed. It is not code-signed yet, so
   Windows SmartScreen asks once: choose **More info**, then **Run anyway**.
2. **Bring your things over and make it the default.** Chromium's own import
   (Settings → Import bookmarks and settings) brings bookmarks, passwords and
   history from Chrome, Edge or Firefox. Then press `Ctrl+Shift+A`, type
   `default` and press Enter: Windows opens on Plebbium's page, where you
   choose **Set default**.
3. **Optional: Pleb AI.** For Pleb AI, link previews, Tidy and asking your
   tabs, download
   [`Pleb-AI.zip`](https://updates.plebbian.com/download/Pleb-AI.zip), unzip
   it and run **Set up Pleb AI.cmd**. It needs Python 3.11+, and offers to
   install [Ollama](https://ollama.com) and the models it uses (about 5 GB).
   Everything runs on your own computer.

To uninstall: Windows Settings → Apps → Installed apps → Plebbium. Your
profile stays unless you tick *Also delete your browsing data*.

## What it does

| | | Key |
|---|---|---|
| **Everything bar** | One box in the middle of the window for commands, open tabs, bookmarks, history, the Archive, sums and unit or currency conversions. A question goes to ChatGPT on Enter, or to Claude, or to Pleb AI on your computer | `Ctrl+Shift+A` |
| **Ask ChatGPT or Claude** | `gpt` or `clau` and a space in the address bar. Right-click a selection or a page to ask about it, with its source | `gpt` / `clau` |
| **Blocker** | Ads, trackers, cookie notices and pop-ups blocked by Chromium itself, from EasyList, EasyPrivacy and the annoyance lists. The count sits on the Pleb button; one switch turns it off for a site | Pleb button |
| **Workspaces** | Named sets of tabs in one window - Work, Home, a project. Switching reloads nothing | `Ctrl+Shift+1` to `9` |
| **Separate logins** | A workspace can keep its own cookies and sign-ins: your work account in Work, your personal one in Home, side by side | right-click a workspace |
| **Link previews** | Hold `Alt` over a link for three lines on what is behind it, summarised on your computer | `Alt` |
| **Tidy** | Duplicates closed, topics grouped, forgotten tabs archived - proposed first, with Undo | `tidy` |
| **Ask your tabs** | A question answered from your open tabs, what you read and the Archive, saying which tab it came from | `?` |
| **Pleb AI** | A side panel that summarises the page, explains a selection and searches your reading history, on your own computer. It never acts on a page by itself | `Alt+Shift+A` |
| **Calm tabs** | Idle tabs fall asleep, then close into the Archive after 12 hours. Nothing is lost | `Alt+Shift+W` |
| **Peek, Boosts, Highlights, Convert** | Open a link in a floating window; restyle a site with your own CSS; keep highlights on any page; select `$49.99` or `5 ft 11 in` to convert it | `Alt`+click · right-click · select |
| **New tab** | A clock, one search box with `!bangs`, your workspaces and where you left off | |

## It keeps itself up to date

A few times a day Plebbium checks for a new version - Chrome's security fixes
and new Pleb features - installs it in the background and uses it the next
time you start it. It installs only what is signed with Plebbium's own key,
never an older version than the one you run, and only files whose SHA-256
matches the signed manifest. Plebbium settings → **Updates**: Stable or Beta,
or check right away.

## What is in this repository

Plebbium's source lives elsewhere and is private. This repository holds only
what installed browsers download, as release files:

| Release | Holds |
|---|---|
| [`download`](https://github.com/Trainer-Han/plebbium-updates/releases/tag/download) | `Plebbium-Setup.exe` and `Pleb-AI.zip`: the current Stable version, for new installs |
| `stable`, `beta` | `update.json` for that channel: a manifest signed with Plebbium's update key (ECDSA P-256) |
| `builds` | the browser installers updates point to |
| `core` | Pleb's features (pleb_core) for the fast lane |

Browsers reach them through `https://updates.plebbian.com/<release>/<file>`,
which forwards here.

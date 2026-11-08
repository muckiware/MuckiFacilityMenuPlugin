# MuckiFacilityMenuPlugin — Claude context

Adds dedicated administration main menu entries for the
[MuckiFacilityPlugin](https://github.com/muckiware/MuckiFacilityPlugin). The plugin itself has no
business logic, entities or API routes; it only registers the admin module `muwa-facility-menu`
with a top-level navigation entry (`muwa-facility`) and links into the modules of
MuckiFacilityPlugin.

**Important:** This is not a LightsOn plugin — the namespace is `MuckiFacilityMenuPlugin\`, **not**
`LightsOn\`. Code style follows MuckiFacilityPlugin (the template this plugin was built from).

This directory is a Git checkout of the upstream repo
(`git@github.com:muckiware/MuckiFacilityMenuPlugin.git`, branch `main`). Changes go as normal
commits into this repo; bump the version and `CHANGELOG.md` with every release.

## Facts

| | |
|---|---|
| Composer package | `muckiware/facility-menu-plugin`, version `1.0.0` |
| Plugin class | `MuckiFacilityMenuPlugin\MuckiFacilityMenuPlugin` |
| Depends on | `muckiware/facility-plugin` `^0.8 || ^1.0` (must be installed and active) |
| Supported | Shopware 6.6.x + 6.7.x, PHP 8.2–8.4 |

## Structure

```
src/MuckiFacilityMenuPlugin.php                       Plugin class (no lifecycle logic yet)
src/Resources/config/services.xml                     Empty, add services here
src/Resources/app/administration/src/main.js          Admin entry point
src/Resources/app/administration/src/module/muwa-facility-menu/
    index.js                                          Module + navigation entries
    page/muwa-facility-menu-index/                    Overview page (route muwa.facility.menu.index)
    snippet/{de-DE,en-GB}.json                        Admin snippets
```

## Adding a menu entry

Add an item to `navigation` in `module/muwa-facility-menu/index.js` with
`parent: 'muwa-facility'`, the target route name as `path` and the matching ACL `privilege` of
the target module (MuckiFacilityPlugin ACL keys live in its
`module/muwa-backup-repository/acl/index.js`). Add the label to both snippet files.

## Build & test

```bash
bin/build-administration.sh                                   # from the project root
./vendor/bin/phpunit --configuration=custom/muckiware/MuckiFacilityMenuPlugin/phpunit.unit.xml
```

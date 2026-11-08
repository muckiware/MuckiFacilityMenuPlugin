# MuckiFacilityMenuPlugin
Muckiware Facility Menu Plugin for Shopware 6. Adds dedicated main menu entries in the
administration for the [MuckiFacilityPlugin](https://github.com/muckiware/MuckiFacilityPlugin).

By default, the MuckiFacilityPlugin is only reachable via
Settings -> Extensions -> Backup Repositories. This plugin adds a top-level main menu entry
**Facility** with direct links to the facility modules.

## Requirements
- Shopware 6.6.x or 6.7.x
- PHP 8.2.x or greater
- MuckiFacilityPlugin 0.8.0 or greater, installed and active

## Installation
```shell
composer require muckiware/facility-menu-plugin
bin/console plugin:install -a MuckiFacilityMenuPlugin
bin/build-administration.sh
```

## Menu entries
| Entry                         | Target                                       | Privilege                        |
|:------------------------------|:---------------------------------------------|:---------------------------------|
| Facility -> Overview          | `muwa.facility.menu.index`                   | `muwa_backup_repository.viewer`  |
| Facility -> Backup Repositories | `muwa.backup.repository.index` (MuckiFacilityPlugin) | `muwa_backup_repository.viewer`  |

## Testing
```shell
./vendor/bin/phpunit --configuration=custom/muckiware/MuckiFacilityMenuPlugin/phpunit.unit.xml
```

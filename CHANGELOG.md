# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]
### Added
- Sub entries "Database Connections" and "S3 Connections" in the "Facility" menu. They open the
  matching tabs of the backup repository module of `MuckiFacilityPlugin` and require the
  `muwa_backup_repository.viewer` privilege. Both tabs only exist in `MuckiFacilityPlugin`
  versions with database and S3 connections; with older versions the entries do not show them.
- Overview page: instead of a single short sentence it now explains what Facility does and the
  typical workflow (connections, repository, backup, check, restore), has one card each for
  backup repositories, database connections and S3 connections with a link to the matching tab,
  and a card with important notes (repository password, message worker, dashboard cards, CLI
  cleanup). Texts in de-DE and en-GB.

### Changed
- Icon of the "Facility" main menu entry and module changed from a cog (`regular-cog`) to a floppy
  disk (`regular-save`).
- Requirement `muckiware/facility-plugin` changed from `^0.8 || ^0.9 || ^1.0` to `~0.8 || ^1.0`,
  so 0.10 and later 0.x versions are allowed as well.

### Removed
- Snippet `muwa-facility-menu.index.backupRepositoriesDescription`, replaced by the new
  `muwa-facility-menu.index.*` texts of the overview page.

## [1.0.1] - 2026-11-15
### Changed
- PHP requirement changed from `~8.2.0 || ~8.3.0 || ~8.4.0` to `~8.3.0 || ~8.4.0 || ~8.5.0`.
- Requirement `muckiware/facility-plugin` extended to `^0.8 || ^0.9 || ^1.0`.

### Removed
- Direct requirement `shopware/core`; the supported Shopware versions now come from
  `muckiware/facility-plugin`.

## [1.0.0] - 2026-11-08
### Added
- Initial plugin skeleton.
- Main menu entry "Facility" in the administration with the sub entries "Overview" and
  "Backup Repositories" (links to the backup repository module of `MuckiFacilityPlugin`).
  Both entries require the `muwa_backup_repository.viewer` privilege.

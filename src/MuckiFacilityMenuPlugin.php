<?php declare(strict_types=1);
/**
 * MuckiFacilityMenuPlugin
 *
 * @category   SW6 Plugin
 * @package    MuckiFacilityMenu
 * @copyright  Copyright (c) 2026 by Muckiware
 * @license    MIT
 * @author     Muckiware
 *
 */
namespace MuckiFacilityMenuPlugin;

use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\InstallContext;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;

/**
 * Add dependencies from composer
 */
if(file_exists(dirname(__DIR__) . "/vendor/autoload.php")) {
    require_once dirname(__DIR__) . '/vendor/autoload.php';
}

class MuckiFacilityMenuPlugin extends Plugin
{
    public function install(InstallContext $installContext): void
    {
        parent::install($installContext);
    }

    public function uninstall(UninstallContext $uninstallContext): void
    {
        parent::uninstall($uninstallContext);

        if ($uninstallContext->keepUserData()) {
            return;
        }

        // The plugin has no own tables or data yet
    }
}

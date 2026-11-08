<?php declare(strict_types=1);

namespace MuckiFacilityMenuPlugin\tests;

use PHPUnit\Framework\TestCase;
use Shopware\Core\Framework\Plugin;

use MuckiFacilityMenuPlugin\MuckiFacilityMenuPlugin;

class MuckiFacilityMenuPluginTest extends TestCase
{
    public function testPluginClassExtendsShopwarePlugin(): void
    {
        $plugin = new MuckiFacilityMenuPlugin(true, dirname(__DIR__));

        static::assertInstanceOf(Plugin::class, $plugin);
    }
}

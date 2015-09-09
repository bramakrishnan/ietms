<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace frontend\assets;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/font-awesome.min.css',
		'css/select2.css',
		'css/selectbox.css',
		'css/styles.css',
    ];
    public $js = [
		//'js/jquery-1.11.2.js',
		//'js/angular-1.4.1.js',
		//'js/angular-resource.js',
		//'js/angular-ui-router.min.js',
		//'js/app.js',
		'js/bootstrap.min.js',
		//'js/common.js',
		//'js/controllers.js',
		//'js/directives.js',
		//'js/filters.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}

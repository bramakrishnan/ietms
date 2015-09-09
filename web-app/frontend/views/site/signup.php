<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\SignupForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;

$this->title = 'Signup';
$this->params['breadcrumbs'][] = $this->title;
?>
    <div class="row mt" ng-controller="signUpController">
	
    <div class="row mt">
        <div class="col-lg-4 col-lg-offset-4 contactForm">
			<?=Yii::$app->getSession()->getFlash('msg');?>
            <h3>Register Company</h3>
            <div class="well">
                <p>Please fill in the fields below to register as a company owner with Takisi.com. </p>
                <p>After registering you can enter information about your company.</p>
                <p class="text-muted">Already registered? <a ui-sref="login">Sign in</a></p>
            </div>
        <div class="col-lg-10">
		   <?php $form = ActiveForm::begin(); ?>
			<div class="form-group">
                <?= $form->field($Compnay_model, 'comp_name') ?>
            </div>
            <div class="form-group">
                 <?= $form->field($Compnay_model, 'comp_mail') ?>
            </div>
            <div class="form-group">
                <?= $form->field($Compnay_model, 'web_site') ?>
            </div>
            <div class="form-group">
                <?= $form->field($Compnay_model, 'comp_phone') ?>
            </div>
            <div class="form-group">
				<?= $form->field($model, 'username') ?>
			 </div>
			<div class="form-group">
                <?= $form->field($model, 'email') ?>
			 </div>
			<div class="form-group">
			<?= $form->field($model, 'password')->passwordInput() ?>
			</div>
                <div class="form-group">
                    <?= Html::submitButton('Signup', ['class' => 'btn btn-primary', 'name' => 'signup-button']) ?>
                </div>

            <?php ActiveForm::end(); ?>
        </div>
    </div>
</div>

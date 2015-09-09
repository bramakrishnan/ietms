<?php

namespace frontend\models;


use Yii;
use yii\base\Model;

/**
 * This is the model class for table "profile".
 *
 * @property string $id
 * @property string $user_id
 * @property string $first_name
 * @property string $last_name
 * @property string $gender
 * @property integer $lanline_number
 * @property integer $mobile
 * @property string $address
 * @property string $company_id
 * @property integer $is_logged_in
 * @property string $updated_at
 * @property string $created_by
 * @property string $updated_by
 *
 * @property User $user
 * @property Profile $id0
 * @property Profile $profile
 */
class Profile extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'profile';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            //[['id'], 'required'],
            [['user_id', 'lanline_number', 'mobile', 'company_id', 'is_logged_in', 'created_by', 'updated_by'], 'integer'],
            [['address'], 'string'],
            [['updated_at'], 'safe'],
            [['first_name', 'last_name'], 'string', 'max' => 250],
            [['gender'], 'string', 'max' => 20]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'user_id' => 'User ID',
            'first_name' => 'First Name',
            'last_name' => 'Last Name',
            'gender' => 'Gender',
            'lanline_number' => 'Lanline Number',
            'mobile' => 'Mobile',
            'address' => 'Address',
            'company_id' => 'Company ID',
            'is_logged_in' => 'Is Logged In',
            'updated_at' => 'Updated At',
            'created_by' => 'Created By',
            'updated_by' => 'Updated By',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUser()
    {
        return $this->hasOne(User::className(), ['id' => 'user_id']);
    }



}

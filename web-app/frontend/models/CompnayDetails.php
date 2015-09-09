<?php
namespace frontend\models;
use Yii;
use yii\base\Model;


/**
 * This is the model class for table "compnay_details".
 *
 * @property string $id
 * @property string $user_id
 * @property string $comp_name
 * @property string $comp_mail
 * @property string $web_site
 * @property integer $comp_phone
 * @property integer $comp_type
 * @property string $created_at
 * @property string $updated_at
 * @property string $create_by
 * @property string $update_by
 *
 * @property User $user
 */
class CompnayDetails extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'compnay_details';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['user_id', 'comp_name', 'comp_mail', 'web_site', 'comp_phone'], 'required'],
            [['user_id', 'comp_phone', 'comp_type'], 'integer'],
            [['created_at', 'updated_at'], 'safe'],
            [['comp_name', 'comp_mail'], 'string', 'max' => 250],
            [['web_site'], 'string', 'max' => 300]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'user_id' => 'User ID',
            'comp_name' => 'Company Name',
            'comp_mail' => 'Company Mail',
            'web_site' => 'Web Site',
            'comp_phone' => 'Company Phone',
            'comp_type' => 'Company Type',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
            'create_by' => 'Create By',
            'update_by' => 'Update By',
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

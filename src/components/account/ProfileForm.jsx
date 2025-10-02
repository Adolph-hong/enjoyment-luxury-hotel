import { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormInput from '../ui/FormInput'
import BirthdayGroup from '../ui/form/BirthdayGroup'
import AddressGroup from '../ui/form/AddressGroup'
import Button from '../ui/Button'

const ProfileForm = () => {
  const [isEditingPassword, setIsEditingPassword] = useState(false)
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'jessica@example.com',
      name: 'Jessica Wang',
      phone: '0912345678',
      address: '六合路 123 號'
    }
  })

  const onSubmitPassword = (data) => {
    console.log('Password change:', data)
    setIsEditingPassword(false)
  }

  const onSubmitProfile = (data) => {
    console.log('Profile update:', data)
    setIsEditingProfile(false)
  }

  const password = watch('password')

  return (
    <div className="mt-8 flex flex-col md:flex-row gap-6">
      {/* 修改密碼卡片 */}
      <div className="bg-white w-full md:w-2/5 mb-auto text-black rounded-lg p-8">
        <h3 className="text-2xl font-bold mb-6">修改密碼</h3>

        {!isEditingPassword ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-[#4B4B4B] mb-2">電子信箱</label>
              <p className="text-[#000000]">Jessica@exsample.com</p>
            </div>

            <div>
              <label className="block text-sm text-[#4B4B4B] mb-2">密碼</label>
              <div className="flex items-center justify-between">
                <p className="text-[#000000]">••••••••••</p>
                <button
                  onClick={() => setIsEditingPassword(true)}
                  className="text-sm text-[#BF9D7D] hover:underline"
                >
                  重設
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmitPassword)}>
            <FormInput
              labelContent="電子信箱"
              inputId="email"
              inputType="email"
              placeholder="hello@exsample.com"
              register={register('email', {
                required: '電子信箱為必填',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: '請輸入有效的電子信箱',
                },
              })}
              error={errors.email}
            />
            <FormInput
              labelContent="舊密碼"
              inputId="oldPassword"
              inputType="password"
              placeholder="請輸入舊密碼"
              register={register('oldPassword', {
                required: '舊密碼為必填',
              })}
              error={errors.oldPassword}
            />
            <FormInput
              labelContent="新密碼"
              inputId="password"
              inputType="password"
              placeholder="請輸入新密碼"
              register={register('password', {
                required: '新密碼為必填',
                minLength: {
                  value: 6,
                  message: '密碼至少需要 6 個字元',
                },
              })}
              error={errors.password}
            />
            <FormInput
              labelContent="確認新密碼"
              inputId="confirmPassword"
              inputType="password"
              placeholder="請再輸入一次新密碼"
              register={register('confirmPassword', {
                required: '請確認密碼',
                validate: value => value === password || '密碼不一致'
              })}
              error={errors.confirmPassword}
            />
            <div className="flex gap-4">
              <Button
                bg="bg-white"
                color="text-[#BF9D7D]"
                hoverBg="hover:bg-gray-100"
                content={'取消'}
                onClick={() => setIsEditingPassword(false)}
                textSize="max-sm:text-[14px]"
                type="button"
              />
              <Button
                bg="bg-[#BF9D7D]"
                color="text-[#FFFFFF]"
                hoverBg="hover:bg-[#8B7355]"
                content={'儲存設定'}
                textSize="max-sm:text-[14px]"
                type="submit"
              />
            </div>
          </form>
        )}
      </div>

      {/* 基本資料卡片 */}
      <div className="bg-white w-full md:w-3/5 text-black rounded-lg p-8">
        <h3 className="text-2xl font-bold mb-6">基本資料</h3>

        {!isEditingProfile ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-[#4B4B4B] mb-2">姓名</label>
              <p className="text-[#000000]">Jessica Wang</p>
            </div>

            <div>
              <label className="block text-sm text-[#4B4B4B] mb-2">手機號碼</label>
              <p className="text-[#000000]">+886 912 345 678</p>
            </div>

            <div>
              <label className="block text-sm text-[#4B4B4B] mb-2">生日</label>
              <p className="text-[#000000]">1990 年 8 月 15 日</p>
            </div>

            <div>
              <label className="block text-sm text-[#4B4B4B] mb-2">地址</label>
              <p className="text-[#000000]">高雄市新興區六合路 123 號</p>
            </div>

            <button
              onClick={() => setIsEditingProfile(true)}
              className="mt-4 px-8 py-3 border-2 border-[#BF9D7D] text-[#BF9D7D] rounded hover:bg-[#BF9D7D] hover:text-white transition-colors"
            >
              編輯
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmitProfile)}>
            <FormInput
              labelContent="姓名"
              inputId="name"
              inputType="text"
              placeholder="請輸入姓名"
              register={register('name', {
                required: '姓名為必填'
              })}
              error={errors.name}
            />
            <FormInput
              labelContent="手機號碼"
              inputId="phone"
              inputType="tel"
              placeholder="請輸入手機號碼"
              register={register('phone', {
                required: '手機號碼為必填',
                pattern: {
                  value: /^09[0-9]{8}$/,
                  message: '請輸入有效的手機號碼'
                }
              })}
              error={errors.phone}
            />
            <BirthdayGroup
              className="w-full mb-[16px]"
              register={register}
              errors={errors}
            />
            <AddressGroup
              className="w-full mb-[16px]"
              register={register}
              watch={watch}
              errors={errors}
            />
            <FormInput
              labelContent="詳細地址"
              inputId="address"
              inputType="text"
              placeholder="請輸入詳細地址"
              register={register('address', {
                required: '詳細地址為必填'
              })}
              error={errors.address}
            />

            <div className="flex gap-4 mt-6">
              <Button
                bg="bg-white"
                color="text-[#BF9D7D]"
                hoverBg="hover:bg-gray-100"
                content={'取消'}
                onClick={() => setIsEditingProfile(false)}
                textSize="max-sm:text-[14px]"
                type="button"
              />
              <Button
                bg="bg-[#BF9D7D]"
                color="text-[#FFFFFF]"
                hoverBg="hover:bg-[#8B7355]"
                content={'儲存設定'}
                textSize="max-sm:text-[14px]"
                type="submit"
              />
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default ProfileForm

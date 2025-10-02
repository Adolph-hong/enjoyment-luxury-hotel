import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { updateUserInfo } from '../../api/usersApi'
import Button from '../ui/Button'
import Select from '../ui/form/Select'
import { years, months, days } from '../auth/dateOptions'
import { cities, districts, zipcodes } from '../auth/addressOptions'

const ProfileForm = () => {
  const { user, fetchUser } = useAuth()
  const [isLoading, setIsLoading] = useState(false)

  // 編輯模式控制
  const [isEditingPassword, setIsEditingPassword] = useState(false)
  const [isEditingProfile, setIsEditingProfile] = useState(false)

  // 密碼表單
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  // 個人資料表單
  const [name, setName] = useState(user?.name || '')
  const [phone, setPhone] = useState(user?.phone || '')

  // 生日
  const birthdayDate = user?.birthday ? new Date(user.birthday) : new Date('1990-08-15')
  const [year, setYear] = useState(birthdayDate.getFullYear())
  const [month, setMonth] = useState(birthdayDate.getMonth() + 1)
  const [day, setDay] = useState(birthdayDate.getDate())

  // 地址
  const [selectedCity, setSelectedCity] = useState(user?.address?.city || cities[0].value)
  const [selectedDistrict, setSelectedDistrict] = useState(user?.address?.county || '')
  const [addressDetail, setAddressDetail] = useState(user?.address?.detail || '')

  // 修改密碼
  const handleChangePassword = async () => {
    if (!oldPassword || !newPassword || !confirmNewPassword) {
      alert('請填寫所有密碼欄位')
      return
    }

    if (newPassword !== confirmNewPassword) {
      alert('新密碼與確認密碼不一致')
      return
    }

    if (newPassword.length < 8) {
      alert('新密碼至少需要 8 個字元')
      return
    }

    try {
      setIsLoading(true)
      await updateUserInfo({
        userId: user._id,
        oldPassword,
        newPassword
      })
      setOldPassword('')
      setNewPassword('')
      setConfirmNewPassword('')
      setIsEditingPassword(false)
      alert('密碼修改成功！')
    } catch (error) {
      console.error('修改密碼失敗:', error)
      alert(error.message || '修改密碼失敗')
    } finally {
      setIsLoading(false)
    }
  }

  // 更新個人資料
  const handleUpdateProfile = async () => {
    // 驗證必填欄位
    if (!name || !phone || !selectedCity || !selectedDistrict || !addressDetail) {
      alert('請填寫所有必填欄位')
      return
    }

    try {
      setIsLoading(true)

      // 從 zipcodes 取得對應的郵遞區號
      const zipcode = zipcodes[selectedCity]?.[selectedDistrict] || 800

      await updateUserInfo({
        userId: user._id,
        name,
        phone,
        birthday: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
        address: {
          zipcode: zipcode,
          city: selectedCity,
          county: selectedDistrict,
          detail: addressDetail
        }
      })
      await fetchUser()
      setIsEditingProfile(false)
      alert('資料更新成功！')
    } catch (error) {
      console.error('更新失敗:', error)
      alert(error.message || '更新失敗')
    } finally {
      setIsLoading(false)
    }
  }

  if (!user) {
    return <div className="mt-8 text-center text-white">載入中...</div>
  }
  
  return (
    <div className="mt-8 flex gap-6 max-xl:flex-col">
      {/* 修改密碼卡片 */}
      <div className="bg-white w-2/5 mb-auto text-black rounded-lg p-8 max-xl:w-full">
        <h3 className="text-2xl font-bold mb-6">修改密碼</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2">電子信箱</label>
            <p className="text-gray-700">{user.email}</p>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">密碼</label>
            <div className="flex items-center justify-between">
              <p className="text-gray-700">•••••••••</p>
              {!isEditingPassword && (
                <button
                  onClick={() => setIsEditingPassword(true)}
                  className="text-[#BF9D7D] underline hover:text-[#A68968] cursor-pointer"
                >
                  重設
                </button>
              )}
            </div>
          </div>

          {isEditingPassword && (
            <>
              <div>
                <label className="block text-sm font-bold mb-2">舊密碼</label>
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full h-[56px] px-4 border rounded-[8px]"
                  placeholder="請輸入舊密碼"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">新密碼</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full h-[56px] px-4 border rounded-[8px]"
                  placeholder="請輸入新密碼"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">確認新密碼</label>
                <input
                  type="password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  className="w-full h-[56px] px-4 border rounded-[8px]"
                  placeholder="請再輸入一次新密碼"
                />
              </div>

              <button
                onClick={handleChangePassword}
                disabled={isLoading}
                className="w-[129px] h-[56px] rounded-[8px] bg-[#ECECEC] text-[#909090] font-bold hover:bg-[#D5D5D5] disabled:opacity-50 max-lg:w-full"
              >
                {isLoading ? '儲存中...' : '儲存設定'}
              </button>
            </>
          )}
        </div>
      </div>

      {/* 基本資料卡片 */}
      <div className="bg-white w-3/5 text-black rounded-lg p-8 max-xl:w-full">
        <h3 className="text-2xl font-bold mb-6">基本資料</h3>

        {isEditingProfile ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">姓名</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-[56px] px-4 border rounded-[8px]"
                placeholder="請輸入姓名"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">手機號碼</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full h-[56px] px-4 border rounded-[8px]"
                placeholder="請輸入手機號碼"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">生日</label>
              <div className="flex gap-2">
                <Select
                  className="flex-1 h-[56px] text-[#4B4B4B] bg-[#FFFFFF] rounded-[8px] border"
                  options={years}
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                />
                <Select
                  className="flex-1 h-[56px] text-[#4B4B4B] bg-[#FFFFFF] rounded-[8px] border"
                  options={months}
                  value={month}
                  onChange={(e) => setMonth(Number(e.target.value))}
                />
                <Select
                  className="flex-1 h-[56px] text-[#4B4B4B] bg-[#FFFFFF] rounded-[8px] border"
                  options={days}
                  value={day}
                  onChange={(e) => setDay(Number(e.target.value))}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">地址</label>
              <div className="flex gap-4 mb-4">
                <Select
                  className="flex-1 h-[56px] text-[#4B4B4B] bg-[#FFFFFF] rounded-[8px] border"
                  options={cities}
                  value={selectedCity}
                  onChange={(e) => {
                    setSelectedCity(e.target.value)
                    setSelectedDistrict('')
                  }}
                />
                <Select
                  className="flex-1 h-[56px] text-[#4B4B4B] bg-[#FFFFFF] rounded-[8px] border"
                  options={districts[selectedCity] || []}
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                />
              </div>
              <input
                type="text"
                value={addressDetail}
                onChange={(e) => setAddressDetail(e.target.value)}
                className="w-full h-[56px] px-4 border rounded-[8px]"
                placeholder="請輸入詳細地址"
              />
            </div>

            <button
              onClick={handleUpdateProfile}
              disabled={isLoading}
              className="w-[129px] max-lg:w-full h-[56px] rounded-[8px] bg-[#ECECEC] text-[#909090] font-bold hover:bg-[#D5D5D5] disabled:opacity-50"
            >
              {isLoading ? '儲存中...' : '儲存設定'}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">姓名</label>
              <p className="text-gray-700">{user.name}</p>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">手機號碼</label>
              <p className="text-gray-700">{user.phone}</p>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">生日</label>
              <p className="text-gray-700">
                {year} 年 {month} 月 {day} 日
              </p>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">地址</label>
              <p className="text-gray-700">
                {user.address?.city}{user.address?.county} {user.address?.detail}
              </p>
            </div>

            <button
              onClick={() => {
                // 載入原始資料
                setName(user.name || '')
                setPhone(user.phone || '')
                const bd = user.birthday ? new Date(user.birthday) : new Date('1990-08-15')
                setYear(bd.getFullYear())
                setMonth(bd.getMonth() + 1)
                setDay(bd.getDate())
                setSelectedCity(user.address?.city || cities[0].value)
                setSelectedDistrict(user.address?.county || '')
                setAddressDetail(user.address?.detail || '')
                setIsEditingProfile(true)
              }}
              className="w-[97px] h-[56px] border border-[#BF9D7D] rounded-[8px] text-[#BF9D7D] font-bold hover:bg-[#BF9D7D] hover:text-white transition-colors cursor-pointer"
            >
              編輯
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileForm

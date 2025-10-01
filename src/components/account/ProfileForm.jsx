const ProfileForm = () => {
  return (
    <div className="mt-8 grid grid-cols-2 gap-6">
      {/* 修改密碼卡片 */}
      <div className="bg-white text-black rounded-lg p-8">
        <h3 className="text-2xl font-bold mb-6">修改密碼</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2">電子信箱</label>
            <p className="text-gray-700">jessica@example.com</p>
          </div>

          <div>
            <label className="block text-sm mb-2">密碼</label>
            <div className="flex items-center justify-between">
              <p className="text-gray-700">••••••••••</p>
              <button className="text-sm text-gray-500 hover:text-black">
                重設
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 基本資料卡片 */}
      <div className="bg-white text-black rounded-lg p-8">
        <h3 className="text-2xl font-bold mb-6">基本資料</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2">姓名</label>
            <p className="text-gray-700">Jessica Wang</p>
          </div>

          <div>
            <label className="block text-sm mb-2">手機號碼</label>
            <p className="text-gray-700">+886 912 345 678</p>
          </div>

          <div>
            <label className="block text-sm mb-2">生日</label>
            <p className="text-gray-700">1990 年 1 月 15 日</p>
          </div>

          <div>
            <label className="block text-sm mb-2">地址</label>
            <p className="text-gray-700">高雄市新興區六合路 123 號</p>
          </div>

          <button className="mt-4 px-6 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
            編輯
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileForm

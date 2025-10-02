import AccountLayout from '../shared/AccountLayout'
import ProfileForm from '../account/ProfileForm'
import OrderList from '../account/OrderList'

const Account = () => {
  return (
    <AccountLayout>
      {(activeTab) => (
        <>
          {activeTab === 'profile' && <ProfileForm />}
          {activeTab === 'orders' && <OrderList />}
        </>
      )}
    </AccountLayout>
  )
}

export default Account

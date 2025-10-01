const AccountLayout = ({ children }) => {
  return (
    <section className="flex w-full">
      <div className="flex flex-row w-full justify-center items-center py-10 bg-[image:var(--bg-image-account)] bg-cover bg-center">
        <img src="../../assets/account/headshot-1.png" alt="" />
        <h2 className="text-4xl font-bold">Hello，Jessica</h2>
      </div>
      {children}
    </section>
  )
}

export default AccountLayout

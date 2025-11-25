

const NavbarLeft = () => {
  return (
    <div className=' bg-gray-200 border-r-4 rounded-lg  h-dvh w-auto  flex justify-between flex-col '>
      <div className="h-fit text-center p-4">
        <img className="border-2 w-auto" src="../img/logo1.png" width={100}  />
        <p className="text-2xl border-2">EasyEng Read</p>
      </div>
      {/* icon */}
      <div className=" w-full h-full">
        icon
      </div>
      {/* icon */}
      {/*  close btn  */}
      <div className="w-full text-center text-2xl border-t-2 rounded-sm bg-orange-300 ">
        close
      </div>
      {/*  close btn  */}
    </div>
  )
}

export default NavbarLeft

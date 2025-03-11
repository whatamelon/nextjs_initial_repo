export default function AppHeader() {
  return (
    <nav className="z-40 flex justify-between bg-gray-100 py-[14px]">
      <div className="flex space-x-3 pl-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="cursor-pointer"
        >
          <path
            d="M14.4377 16.0009L21.0374 22.6005L19.1518 24.4861L10.6665 16.0009L19.1518 7.51562L21.0374 9.40124L14.4377 16.0009Z"
            fill="#111827"
          />
        </svg>

        <p className="headline-b my-auto text-black">
          {/* 여기에 title 넣기 */}
          <span>{}</span>
          {/* 여기에 ID 넣기 */}
          <span className="cursor-pointer">ID : {}</span>
        </p>

        <div className="w-[140px]">{/* active brand select menu */}</div>
      </div>

      <div className="flex space-x-4">
        <div className="h-8 w-8 cursor-pointer rounded-full bg-black">
          <i className="ri-filter-line text-20xl mx-auto my-auto flex w-fit text-center text-white" />
        </div>
      </div>
    </nav>
  )
}

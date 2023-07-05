type Item = {
  text: String
  icon: JSX.Element
  active?: Boolean
}

export default function Item({ text, icon, active }: Item) {

  return (
    <>
      <div className="flex cursor-pointer">
        <div className="flex hover:bg-black/5 dark:hover:bg-light/5 hover:rounded-full lg:pr-6 gap-2">
          <div className="w-12 h-12 grid place-items-center text-black dark:text-light/90">
            {icon}
          </div>
          <h2 className={`py-2 text-xl hidden lg:block text-black dark:text-light/90 ${active ? 'font-bold':''}`}>{text}</h2>
        </div>
      </div>
    </>
  );
}

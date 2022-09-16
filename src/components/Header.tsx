import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-5 border-b md:mb-10">
      <Logo />
      <div>
        <p className="cursor-pointer ml-auto text-xs md:text-sm text-opacity-40 hover:text-black/100 hover:font-bold tracking-[2px] uppercase">
          start slideshow
        </p>
        <div className="hidden">
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
}

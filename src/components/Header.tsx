import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { isPlaying } from "store/slidesSlice";
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";

export default function Header() {
    const router = useRouter();
    const isSlideshowPlaying = useSelector(isPlaying);

    return (
        <header className="flex items-center justify-between py-5 border-b md:mb-10">
            <Logo />
            <div>
                <Link href={"/slideshow"}>
                    <a className="cursor-pointer ml-auto  md:text-lg text-opacity-40 hover:text-black/100 hover:font-bold tracking-[2px] uppercase">
                        {isSlideshowPlaying ? "Stop Slideshow" : "Start Slideshow"}
                    </a>
                </Link>
                <div className="hidden">
                    <ThemeToggler />
                </div>
            </div>
        </header>
    );
}

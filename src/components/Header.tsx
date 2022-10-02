import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { isPlaying, toggleIsPlaying } from "store/slidesSlice";
import Logo from "./Logo";

export default function Header() {
    const isSlideshowPlaying = useSelector(isPlaying);
    const router = useRouter();
    const dispatch = useDispatch();
    const handleClick = () => {
        router.push("/slideshow");
        dispatch(toggleIsPlaying());
    };

    return (
        <header className="flex items-center justify-between py-5 border-b md:mb-10">
            <Logo />
            <div
                onClick={handleClick}
                className="cursor-pointer text-end text-sm text-opacity-40 hover:text-black/100 hover:font-bold tracking-[2px] uppercase">
                {isSlideshowPlaying ? "Stop Slideshow" : "Start Slideshow"}
            </div>
        </header>
    );
}

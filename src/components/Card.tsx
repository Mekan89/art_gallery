import { Gallery } from "helper/interface";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setCurrentSlide } from "store/slidesSlice";

export default function Card({ name, artist, images, id }: Gallery): JSX.Element {
    const dispatch = useDispatch();

    return (
        <Link href="/slideshow">
            <div
                onClick={() => dispatch(setCurrentSlide(id ? id : 0))}
                className="relative transition-opacity duration-300 transform cursor-pointer hover:opacity-50"
                // onClick={e => setSlideId(state => ({ ...state, currentSlideIndex: id! }))}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={images.thumbnail} alt={name} className="relative top-0 left-0 w-full h-full" />

                <div className="absolute bottom-0 z-10 w-full px-6 pb-6 text-white">
                    <h1 className="mb-2 text-2xl font-bold">{name}</h1>
                    <p className="text-[0.8rem] opacity-70">{artist.name}</p>
                </div>
            </div>
        </Link>
    );
}

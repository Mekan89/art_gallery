import { Gallery } from "helper/interface";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { slide } from "state/atoms";

export default function Card({ name, artist, images, id }: Gallery) {
  const setSlideId = useSetRecoilState(slide);
  return (
    <Link href={`/gallery/${id}`}>
      <div
        className="relative transition-opacity duration-300 transform cursor-pointer hover:opacity-50"
        onClick={e => setSlideId(id!)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={images.thumbnail} alt={name} className="relative top-0 left-0 w-full h-full" />

        <div className="absolute bottom-0 z-10 w-full px-8 pb-8 text-white">
          <h1 className="mb-2 text-2xl font-bold">{name}</h1>
          <p className="text-[0.8rem] opacity-70">{artist.name}</p>
        </div>
      </div>
    </Link>
  );
}

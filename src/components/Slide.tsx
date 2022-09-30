/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

import ViewIcon from "components/ViewIcon";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentSlide, currentSlideIndex, slidesDirection } from "store/slidesSlice";

const INTERVAL = 6000;

export default function Slide() {
    const currentIndex = useSelector(currentSlideIndex);
    const direction = useSelector(slidesDirection);
    const { name, artist, images, year, description, source } = useSelector(currentSlide);
    const dispatch = useDispatch();

    const variants = {
        inital: { opacity: 0, x: 1000 },
        animate: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 1.3, type: "tween" } },
        exit: { opacity: 0, x: 1000, transition: { duration: 0.5 } },
    };

    const [show, setShow] = useState(false);

    return (
        <motion.article
            variants={variants}
            initial="inital"
            animate="animate"
            exit="exit"
            className="flex flex-col py-12 overflow-hidden lg:px-4 xl:px-0 xl:flex-row xl:justify-between">
            <div className="flex">
                <div>
                    <div className="relative ">
                        <img className="sm:w-[400px] md:w-[500px]" src={images.hero.large} alt="" key={name} />
                        <div className="z-10 max-w-sm pb-8 bg-white sm:absolute sm:pl-16 sm:-right-2/4 sm:top-0">
                            <h1 className="pb-4 text-[2rem] md:text-[3rem] leading-tight font-bold">{name}</h1>
                            <h4 className="opacity-60">{artist.name}</h4>
                        </div>
                        <button
                            type="button"
                            onClick={() => setShow(true)}
                            className="absolute flex items-center justify-center w-40 h-10 p-5 transition duration-200 bg-black cursor-pointer sm:bottom-4 left-3 sm:top-auto top-2 sm:left-5 hover:bg-gray-400">
                            <ViewIcon />
                            <p className="text-[10px] font-bold pointer-events-none tracking-wider text-white uppercase ml-2">
                                View Image
                            </p>
                        </button>
                        <img
                            className="absolute w-16 md:w-28 sm:-bottom-20 left-0 -bottom-8 md:bottom-auto md:left-auto md:top-[17rem] md:-right-36 "
                            src={artist.image}
                            alt={artist.name}
                            width={128}
                            height={128}
                            key={artist.name}
                        />
                    </div>
                </div>
            </div>

            <div className="relative z-10 mt-44 md:mt-32 xl:max-w-md h-fit">
                <div className="-z-10 text-[8rem] md:text-[10rem] font-bold text-gray-100 lg:-left-38 xl:left-auto  absolute -top-24 lg:-top-32 xl:right-0">
                    {year}
                </div>
                <h6 className=" md:px-5 text-[1rem]  text-[#7d7d7d] tracking-wider ">{description}</h6>
                <a
                    href={source}
                    className="block text-xs tracking-wide font-bold text-[#7d7d7d] underline uppercase pt-8 xl:pt-20 md:pl-4 hover:text-black"
                    target="blank">
                    go to source
                </a>
            </div>
        </motion.article>
    );
}

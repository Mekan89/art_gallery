/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

import ViewIcon from "components/ViewIcon";
import { useSelector } from "react-redux";
import { currentSlide, currentSlideIndex, slidesDirection } from "store/slidesSlice";
import { slideAnimation } from "utils/animations";

export default function Slide({ setShow }: { setShow: (state: boolean) => void }) {
    const { name, artist, images, year, description, source } = useSelector(currentSlide);
    const currentIndex = useSelector(currentSlideIndex);
    const direction = useSelector(slidesDirection);

    return (
        <motion.article
            key={currentIndex}
            custom={direction}
            variants={slideAnimation}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="flex flex-col py-12 overflow-hidden lg:px-4 xl:px-0 xl:flex-row xl:justify-between">
            <div className="flex">
                <div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="relative ">
                        <img className="w-[400px] md:w-[500px]" src={images.hero.large} alt="" key={name} />
                        <div className="z-10 max-w-sm pb-8 bg-white sm:absolute sm:pl-16 sm:-right-2/4 sm:top-0">
                            <h1 className="pb-4 text-[2rem] md:text-[3rem] leading-tight font-bold">{name}</h1>
                            <h4 className="text-lg lg:text-base opacity-60">{artist.name}</h4>
                        </div>
                        <button
                            type="button"
                            onClick={() => setShow(true)}
                            className="absolute flex items-center justify-center w-40 h-10 p-5 transition duration-200 bg-black cursor-pointer sm:bottom-4 left-3 sm:top-auto top-2 sm:left-5 hover:bg-gray-400">
                            <ViewIcon />
                            <p className="ml-2 text-[0.6rem] font-bold tracking-wider text-white uppercase pointer-events-none">
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
                    </motion.div>
                </div>
            </div>

            <div className="relative z-10 mt-44 md:mt-32 xl:max-w-md h-fit">
                <div className="-z-10 text-[8rem] md:text-[10rem] font-bold text-gray-100 lg:-left-38 xl:left-auto  absolute -top-24 lg:-top-32 xl:right-0">
                    {year}
                </div>
                <h6 className=" md:px-5  sm:text-lg  lg:text-base  text-[#7d7d7d] tracking-wider ">{description}</h6>
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

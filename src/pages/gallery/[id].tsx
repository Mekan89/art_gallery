/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

import Link from "next/link";

import ArrowBack from "components/ArrowBack";
import ArrowNext from "components/ArrowNext";
import Layout from "components/Layout";
import Modal from "components/Modal";
import ViewIcon from "components/ViewIcon";
import { data } from "data/data";
import { Gallery } from "helper/interface";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { slide } from "state/atoms";

export default function Post() {
  const variants = {
    inital: { opacity: 0, x: 1000 },
    animate: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 1.3, type: "tween" } },
    exit: { opacity: 0, x: 1000, transition: { duration: 0.5 } },
  };

  const slideId = useRecoilValue(slide);
  const router = useRouter();
  const { id } = router.query;

  const [show, setShow] = useState(false);

  const { name, description, year, source, artist, images } = data.find((_, index) => index === +id!) as Gallery;
  const percent = Math.floor(((+id! + 1) / 15) * 100);
  const next = +id! === 14 ? 0 : +id! + 1;
  const previous = +id! > 0 ? +id! - 1 : 14;

  return (
    <Layout>
      <motion.article
        key={name}
        variants={variants}
        initial="inital"
        animate="animate"
        exit="exit"
        className="flex flex-col py-12 overflow-hidden lg:px-20 xl:flex-row xl:justify-between">
        <div className="flex">
          <div>
            <div className="relative ">
              <img className="sm:w-[400px] md:w-[500px]" src={`/${images.hero.large}`} alt={name} key={name} />
              <div className="z-10 max-w-sm pb-4 bg-white sm:absolute sm:pl-16 sm:-right-2/4 sm:top-0">
                <h1 className="pb-4 text-[2rem] md:text-[3rem] leading-tight font-bold">{name}</h1>
                <h4 className="pb-8 opacity-60">{artist.name}</h4>
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
                src={`/${artist.image}`}
                alt={artist.name}
                width={128}
                height={128}
                // blurDataURL={artist.image}
                // placeholder="blur"
                // priority="true"
                key={artist.name}
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-full mt-44 md:mt-32 xl:max-w-sm h-fit">
          <div className="-z-10 text-[8rem] md:text-[10rem] font-bold text-gray-100  absolute -top-24 lg:-top-32 xl:right-0">
            {year}
          </div>
          {/* xxl:col-[17/25] col-[1/25] md:col-[6/20] lg:col-[6/20] lg:row-start-2 row-start-1  */}
          <h6 className=" md:px-5 text-[1rem]  text-[#7d7d7d] ">{description}</h6>
          <a
            href={source}
            className="block text-xs tracking-wide font-bold text-[#7d7d7d] underline uppercase pt-8 xl:pt-20 md:pl-4 hover:text-black"
            target="blank">
            go to source
          </a>
        </div>
      </motion.article>
      <div
        className="flex items-center justify-between  h-24  py-6 border border-t-[2px] mt-8"
        style={{ borderImageSource: `linear-gradient(to right, #000000 ${percent}%, #E5E5E5 1%)` }}>
        <div>
          <h3 className="pb-1">{name}</h3>
          <h5 className="pb-1">{artist.name}</h5>
        </div>
        <div className="flex justify-between w-20">
          <Link scroll={false} href={`/gallery/${previous}`} passHref>
            <a
              onClick={() => {
                setExitDirection(1000);
                setDirection(-1000);
              }}>
              <ArrowBack />
            </a>
          </Link>
          <Link scroll={false} href={`/gallery/${next}`} passHref>
            <a
              onClick={() => {
                setExitDirection(-1000);
                setDirection(1000);
              }}>
              <ArrowNext />
            </a>
          </Link>
        </div>
      </div>
      {show && <Modal image={images.gallery} setShow={setShow} />}
    </Layout>
  );
}

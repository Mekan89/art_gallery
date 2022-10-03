/* eslint-disable @next/next/no-img-element */

import Layout from "components/Layout";
import Modal from "components/Modal";
import Slide from "components/Slide";
import SlideFooter from "components/SlideFooter";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentSlideIndex, isPlaying, paginate } from "store/slidesSlice";

const INTERVAL = 4000;

export default function Slideshow() {
    const [show, setShow] = useState(false);
    const id = useRef<number | undefined>();
    const dispatch = useDispatch();
    const isSlideshowPlaying = useSelector(isPlaying);
    const currentIndex = useSelector(currentSlideIndex);

    const clearInterval = () => window.clearInterval(id.current);

    const startInterval = useCallback(() => {
        id.current = window.setInterval(() => {
            dispatch(paginate(1));
        }, INTERVAL);
    }, [dispatch]);

    useEffect(() => {
        if (isSlideshowPlaying) {
            startInterval();
        } else {
            clearInterval();
        }

        return clearInterval;
    }, [currentIndex, isSlideshowPlaying, startInterval, dispatch]);

    return (
        <Layout title="Galleria">
            <Slide setShow={setShow} />
            <SlideFooter />
            {show && <Modal setShow={setShow} />}
        </Layout>
    );
}

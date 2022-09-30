/* eslint-disable @next/next/no-img-element */

import Layout from "components/Layout";
import Modal from "components/Modal";
import Slide from "components/Slide";
import SlideFooter from "components/SlideFooter";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentSlideIndex, isPlaying, paginate } from "store/slidesSlice";

const INTERVAL = 6000;

export default function Slideshow() {
    const slideRef = useRef<number | undefined>();
    const dispatch = useDispatch();
    const isSlideshowPlaying = useSelector(isPlaying);
    const currentIndex = useSelector(currentSlideIndex);

    const clearInterval = () => window.clearInterval(id);

    const startInterval = useCallback(() => {
        slideRef.current = window.setInterval(() => {
            dispatch(paginate(1));
        }, INTERVAL);
    }, [dispatch, slideRef]);

    useEffect(() => {
        if (isSlideshowPlaying) {
            startInterval();
        } else {
            clearInterval();
        }

        return clearInterval;
    }, [currentIndex, isSlideshowPlaying, startInterval, dispatch]);

    const [show, setShow] = useState(false);

    return (
        <Layout>
            <Slide />
            <SlideFooter />
            {show && <Modal />}
        </Layout>
    );
}

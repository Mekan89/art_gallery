import { data } from "data/data";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentSlide, currentSlideIndex, numberOfSlides, paginate } from "store/slidesSlice";
import ArrowBack from "./ArrowBack";
import ArrowNext from "./ArrowNext";
import ProgressBar from "./ProgressBar";

const SlideFooter = () => {
    const { name, artist } = useSelector(currentSlide);
    const currentIndex = useSelector(currentSlideIndex);
    const slidesLength = useSelector(numberOfSlides);
    const dispatch = useDispatch();

    const progressBarWidth = Math.round(((currentIndex + 1) / slidesLength) * 100);

    const [slideAnim, setSlideAnim] = useState({
        index: 1,
        inProgress: false,
    });

    const nextSlide = () => {
        if (slideAnim.index !== data.length && !slideAnim.inProgress) {
            setSlideAnim({ index: slideAnim.index + 1, inProgress: true });

            // Fonction pour éviter le spamm de clicks sur les boutons (on ne peut pas reclicker dessus tant que inProgress est à true)
            setTimeout(() => {
                setSlideAnim({ index: slideAnim.index + 1, inProgress: false });
            }, 400);
        } else if (slideAnim.index === data.length && !slideAnim.inProgress) {
            setSlideAnim({ index: 1, inProgress: true });

            setTimeout(() => {
                setSlideAnim({ index: 1, inProgress: false });
            }, 400);
        }
    };

    const prevSlide = () => {
        if (slideAnim.index !== 1 && !slideAnim.inProgress) {
            setSlideAnim({ index: slideAnim.index - 1, inProgress: true });

            setTimeout(() => {
                setSlideAnim({ index: slideAnim.index - 1, inProgress: false });
            }, 400);
        } else if (slideAnim.index === 1) {
            setSlideAnim({ index: data.length, inProgress: true });

            setTimeout(() => {
                setSlideAnim({ index: data.length, inProgress: false });
            }, 400);
        }
    };

    return (
        <div>
            <ProgressBar />
            <div className="space-y-2">
                <h3>{name}</h3>
                <h5>{artist.name}</h5>
            </div>
            <div className="flex justify-between w-20">
                <ArrowBack onClick={() => dispatch(paginate(-1))} />
                <ArrowNext onClick={() => dispatch(paginate(1))} />
            </div>
        </div>
    );
};

export default SlideFooter;

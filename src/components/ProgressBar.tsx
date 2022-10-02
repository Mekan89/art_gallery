import { useDispatch, useSelector } from "react-redux";
import { currentSlide, currentSlideIndex, numberOfSlides } from "store/slidesSlice";

export default function ProgressBar() {
    const current = useSelector(currentSlide);
    const currentIndex = useSelector(currentSlideIndex);
    const slidesLength = useSelector(numberOfSlides);
    const dispatch = useDispatch();

    const progressBarWidth = Math.round(((currentIndex + 1) / slidesLength) * 100);

    return (
        <div className="relative h-[2px] mt-8 bg-gray-100">
            <div className="absolute h-full bg-black after:content" style={{ width: `${progressBarWidth}%` }} />
        </div>
    );
}

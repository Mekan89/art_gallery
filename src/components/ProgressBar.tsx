import { useDispatch, useSelector } from "react-redux";
import { currentSlide, currentSlideIndex, numberOfSlides } from "store/slidesSlice";

export default function ProgressBar() {
    const current = useSelector(currentSlide);
    const currentIndex = useSelector(currentSlideIndex);
    const slidesLength = useSelector(numberOfSlides);
    const dispatch = useDispatch();

    const progressBarWidth = Math.round(((currentIndex + 1) / slidesLength) * 100);

    return (
        <div className="relative flex items-center justify-between  h-24  py-6 border-t-[2px] mt-8">
            <div className='absolute after:content-[""] bg-black h-full style={{ width: `${progressBarWidth}%` }}' />
        </div>
    );
}

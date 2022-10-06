import { useDispatch, useSelector } from "react-redux";
import { currentSlide, paginate } from "store/slidesSlice";
import ArrowBack from "./ArrowBack";
import ArrowNext from "./ArrowNext";
import ProgressBar from "./ProgressBar";

const SlideFooter = () => {
    const { name, artist } = useSelector(currentSlide);
    const dispatch = useDispatch();

    return (
        <div>
            <ProgressBar />
            <div className="flex items-center justify-between mt-6">
                <div className="space-y-2">
                    <h3 className="font-bold">{name}</h3>
                    <p className="text-sm">{artist.name}</p>
                </div>
                <div className="flex justify-between w-20">
                    <ArrowBack onClick={() => dispatch(paginate(-1))} />
                    <ArrowNext onClick={() => dispatch(paginate(1))} />
                </div>
            </div>
        </div>
    );
};

export default SlideFooter;

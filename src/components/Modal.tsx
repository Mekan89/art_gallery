import { useSelector } from "react-redux";
import { currentSlide } from "store/slidesSlice";

const Modal = ({ setShow }: { setShow: (state: boolean) => void }) => {
    const { images } = useSelector(currentSlide);

    return (
        <div className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-black/60 ">
            <div>
                <p className="text-right text-white cursor-pointer hover:font-bold" onClick={() => setShow(false)}>
                    X Close
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={images.hero.large} alt="img" className="md:h-[40rem] md:w-[30rem] h-[30rem]" />
            </div>
        </div>
    );
};

export default Modal;

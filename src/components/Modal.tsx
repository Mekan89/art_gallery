import { Dispatch, SetStateAction } from "react";

type IProps = {
  image: string;
  setShow: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ image, setShow }: IProps) => {
  return (
    <div className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-black/60 ">
      <div>
        <p className="text-right text-white cursor-pointer" onClick={() => setShow(false)}>
          X Close
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={"/" + image} alt="img" className="md:h-[40rem] md:w-[30rem] h-[30rem]" />
        {/* <Image src={"/" + image} width={500} height={712} objectFit="contain" className="" /> */}
      </div>
    </div>
  );
};

export default Modal;

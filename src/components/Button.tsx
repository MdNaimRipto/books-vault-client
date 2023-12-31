import { ICommonBtn } from '../types/CommonTypes';

const Button = ({ title }: ICommonBtn) => {
  // console.log(title, px, py);
  return (
    <button
      className={`py-3 px-5 bg-[#5870f9] text-white rounded font-semibold font-serif`}
    >
      {title}
    </button>
  );
};

export default Button;

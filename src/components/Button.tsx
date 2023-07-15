interface ITitle {
  title: string;
  py: number;
  px: number;
}

const Button: React.FC<ITitle> = ({ title, py, px }) => {
  return (
    <button
      className={`py-${py} px-${px} bg-[#5870f9] text-white rounded font-semibold font-serif`}
    >
      {title}
    </button>
  );
};

export default Button;

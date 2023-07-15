interface ITitle {
  title: string;
}

const Button: React.FC<ITitle> = ({ title }) => {
  return (
    <button className="py-3 px-5 bg-[#5870f9] text-white rounded font-semibold font-serif">
      {title}
    </button>
  );
};

export default Button;

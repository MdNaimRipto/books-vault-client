import { GiBookshelf } from 'react-icons/gi';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <GiBookshelf className="animate-pulse text-6xl text-[#3150ff]" />
    </div>
  );
};

export default Loader;

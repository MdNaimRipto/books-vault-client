import { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useCreateBookMutation } from '../../redux/features/books/booksApi';

const AddNewBook = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    // Handle the case when the context value is null
    throw new Error('AuthContext value is not available');
  }

  const { user } = authContextValue;

  const [booksData] = useCreateBookMutation();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleUploadBook = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const formData = new FormData(form);
    const title = formData.get('title') as string;
    const author = formData.get('author') as string;
    const genre = formData.get('genre') as string;
    const publicationDate = formData.get('publicationDate') as string;
    const description = formData.get('description') as string;
    const price = Number(formData.get('price'));
    const quantity = Number(formData.get('quantity'));
    const img = formData.get('img') as string;

    const formattedDate = new Date(publicationDate).toLocaleDateString(
      'en-US',
      {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }
    );

    const publishedYear = new Date(formattedDate).getFullYear();

    const options = {
      data: {
        title,
        author,
        genre,
        publicationDate: formattedDate,
        publicationYear: publishedYear.toString(),
        description,
        price,
        quantity,
        img,
        totalSale: 0,
        inStock: true,
        rating: 0,
        allRating: [0],
        reviews: [],
        sellerID: `${user._id}` as string,
      },
    };
    try {
      await booksData(options).unwrap();
      form.reset();
      toast.success('Book Created Successfully');
      navigate('/all-books');
      setIsLoading(false);
    } catch (error) {
      toast.error((error as { data?: { message: string } })?.data?.message);
      form.reset();
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-full mt-12 mb-10 px-4 lg:px-0">
      <div className="w-full lg:w-[60%]">
        <h2 className="text-center md:text-start text-2xl md:text-3xl font-serif">
          Add New Book
        </h2>
        <form onSubmit={handleUploadBook}>
          <label className="w-full mb-2 block mt-2 font-serif">Title</label>
          <input
            required
            className="w-full py-3 border border-gray-300 rounded px-2"
            name="title"
            type="text"
            placeholder="Enter Title Here"
          />

          <div className="flex items-center gap-2">
            <div className="w-1/2">
              <label className="w-full mb-2 block mt-2 font-serif">
                Author
              </label>
              <input
                required
                className="w-full py-3 border border-gray-300 rounded px-2"
                name="author"
                type="text"
                placeholder="Enter Books Author"
              />
            </div>

            <div className="w-1/2">
              <label className="w-full mb-2 block mt-2 font-serif">Genre</label>
              <input
                required
                className="w-full py-3 border border-gray-300 rounded px-2"
                name="genre"
                type="text"
                placeholder="Enter Book Genre"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-1/2">
              <label className="w-full mb-2 block mt-2 font-serif">Price</label>
              <input
                required
                className="w-full py-3 border border-gray-300 rounded px-2"
                name="price"
                type="number"
                placeholder="Enter Price Here"
              />
            </div>

            <div className="w-1/2">
              <label className="w-full mb-2 block mt-2 font-serif">
                Quantity
              </label>
              <input
                required
                className="w-full py-3 border border-gray-300 rounded px-2"
                name="quantity"
                type="number"
                placeholder="Enter Books Quantity"
              />
            </div>
          </div>

          <label className="w-full mb-2 block mt-2 font-serif">
            Publication Date
          </label>
          <input
            required
            className="w-full py-3 border border-gray-300 rounded px-2"
            name="publicationDate"
            type="date"
            placeholder="Enter Publication Date"
          />

          <label className="w-full mb-2 block mt-2 font-serif">
            Description
          </label>
          <textarea
            className="w-full py-3 border border-gray-300 rounded px-2"
            name="description"
            rows={4}
            placeholder="Enter Description"
          />

          <label className="w-full mb-2 block mt-2 font-serif">
            Books Image
          </label>
          <input
            required
            className="w-full py-3 border border-gray-300 rounded px-2"
            name="img"
            type="text"
            placeholder="Enter Image"
          />
          <button
            className="w-full py-3 rounded text-xl font-serif bg-[#5870f9] text-white mt-5"
            type="submit"
          >
            {isLoading ? 'Uploading...' : 'Upload Book'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewBook;

import Button from './Button';

const AddReview = () => {
  return (
    <form className="mt-8">
      <textarea
        name="review"
        placeholder="Add Review"
        className="w-full border border-gray-300 rounded p-2 mb-3"
        rows={5}
      />
      <Button title="Add Review" />
    </form>
  );
};

export default AddReview;

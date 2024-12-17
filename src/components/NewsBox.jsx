import React from "react";

const NewsBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();

    // Get the email input value from the form
    const email = event.target.elements.email.value;

    // Alert the email
    alert(`Thanks for visit our page ${email}`);
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Join manish14042002@gmail.com and get the latest scoop on new arrivals special offers
        and receive 20% off.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter you email"
          required
          name="email"
        />
        <button
          className="bg-black text-white text-xs px-10 py-4 hover:scale-110 transition-all"
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsBox;

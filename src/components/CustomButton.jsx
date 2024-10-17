const CustomButton = ({ children, footer }) => {
  return (
    <button
      className={`${
        footer ? "bg-light-grey" : "bg-bright-red"
      } py-2.5 px-8 rounded-full shadow-lg ${
        footer ? "text-bright-red" : "text-light-grey"
      } text-sm hover:opacity-80 cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default CustomButton;

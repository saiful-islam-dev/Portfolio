const RusemeButton = () => {
  const handleDownload = () => {
window.open("https://drive.google.com/u/0/uc?id=1vrZjxzqwnzHvESMHG7ZcBYeGpFFiLoBq&export=download");
  };

  return (
    <span
      className="font-semibold text-lg btns-primary"
      onClick={handleDownload}
    >
      Resume
    </span>
  );
};

export default RusemeButton;

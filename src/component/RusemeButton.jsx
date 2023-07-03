const RusemeButton = () => {
  const handleDownload = () => {
    window.open("https://drive.google.com/uc?export=download&id=1NSNBoyyYcslag-45i6D3o7SzMbebum5p");
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

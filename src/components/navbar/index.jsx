const Navbar = () => {
  return (
    <div className="nav fixed top-0 left-0 w-full flex justify-between items-center px-20 py-2 shadow-md bg-white z-50">
      <div className="logo">
        <img
          src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
          alt="Printify Logo"
          className="h-12"
        />
      </div>
      <div className="features flex justify-center space-x-10 flex-grow">
        <div className="hover:text-[#319e50] cursor-pointer">Catalog</div>
        <div className="hover:text-[#319e50] cursor-pointer">How it works</div>
        <div className="hover:text-[#319e50] cursor-pointer">Pricing</div>
        <div className="hover:text-[#319e50] cursor-pointer">Blog</div>
        <div className="hover:text-[#319e50] cursor-pointer">Services</div>
        <div className="hover:text-[#319e50] cursor-pointer">Use-cases</div>
        <div className="hover:text-[#319e50] cursor-pointer">Need help?</div>
      </div>
      <div className="auth flex space-x-4">
        <button className="px-4 py-2 border border-[#1c1c1c] rounded hover:text-[#319e50] cursor-pointer">
          Log in
        </button>
        <button className="px-4 py-2 bg-[#319e50] text-white rounded hover:bg-[#277f3f] cursor-pointer">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;

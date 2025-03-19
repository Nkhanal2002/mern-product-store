const Footer = () => {
  return (
    <footer className="bg-slate-100 shadow-md dark:bg-background dark:border-2 p-2  text-center text-lg sm:text-[1.3rem] w-[90%] mx-auto">
      <p>
        All Rights Reserved. Product Store &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;

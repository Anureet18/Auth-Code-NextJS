'use client';

const Footer: React.FC = () => {
  return (
    <footer className=" text-black py-4">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Fusha AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

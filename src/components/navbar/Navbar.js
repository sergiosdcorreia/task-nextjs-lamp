import Image from "next/image";

const Navbar = () => {
  return (
    <header>
      <Image
        src="/logo.svg"
        width={322}
        height={130}
        alt="lamp logo"
        priority="true"
      />
    </header>
  );
};

export default Navbar;

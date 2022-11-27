import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <header>
      <TypeAnimation
        sequence={[
          1250,
          "john q. herman",
          4000,
          "aspiring full-stack developer",
          7000,
          "john q. herman",
          () => {
            console.log("done");
          },
        ]}
        wrapper="h1"
        cursor={true}
      />
    </header>
  );
};

export default Header;

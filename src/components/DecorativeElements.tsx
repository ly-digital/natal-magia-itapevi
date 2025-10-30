import ornament1 from "@/assets/ornament-1.png";
import ornament2 from "@/assets/ornament-2.png";
import ornament3 from "@/assets/ornament-3.png";
import star from "@/assets/star.png";
import tree from "@/assets/tree.png";
import snowflake from "@/assets/snowflake.png";

export const DecorativeElements = () => {
  return (
    <>
      {/* Floating ornaments */}
      <img
        src={ornament1}
        alt=""
        className="absolute top-20 left-10 w-12 md:w-16 animate-float opacity-80"
        style={{ animationDelay: "0s" }}
      />
      <img
        src={ornament2}
        alt=""
        className="absolute top-40 right-20 w-10 md:w-14 animate-float opacity-70"
        style={{ animationDelay: "1s" }}
      />
      <img
        src={ornament3}
        alt=""
        className="absolute bottom-40 left-20 w-14 md:w-18 animate-float opacity-75"
        style={{ animationDelay: "2s" }}
      />
      <img
        src={star}
        alt=""
        className="absolute top-32 right-40 w-8 md:w-12 animate-sparkle"
        style={{ animationDelay: "0.5s" }}
      />
      <img
        src={tree}
        alt=""
        className="absolute bottom-20 right-10 w-16 md:w-20 opacity-60"
      />
      <img
        src={snowflake}
        alt=""
        className="absolute top-60 left-40 w-10 md:w-14 animate-sparkle opacity-50"
        style={{ animationDelay: "1.5s" }}
      />
    </>
  );
};

import { curve1, curve2 } from "../../assets";

export const RightCurve = () => {
  return (
    <div className="hidden absolute top-1/2 left-full lg:w-[6.5rem] w-[10.5rem] -mt-1 ml-10 pointer-events-none xl:block">
      <img src={curve2} width={162} height={76} alt="Curve 2" />
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div className="hidden absolute top-1/2 right-full lg:w-[29.5] md:w-[29.5rem] -mt-1 mr-10 pointer-events-none xl:block">
      <img src={curve1} width={522} height={182} alt="Curve 1" />
    </div>
  );
};

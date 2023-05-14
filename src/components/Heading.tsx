interface IHeading {
  children: string;
}
const Heading = ({ children }: IHeading) => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative inline-block ">
        <h1 className="text-3xl font-bold text-primary">{children}</h1>
        <div className="absolute w-2/4 h-1 left-2/4 -translate-x-2/4 bg-primary top-full"></div>
      </div>
    </div>
  );
};

export default Heading;

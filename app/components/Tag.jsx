const Tag = (props) => {
  const { tagname } = props;
  return (
    <div className="flex justify-center items-center h-[30px] px-8 bg-[#F7B667] rounded-3xl">
      <p className="font-opensans font-semibold text-sm text-brown tracking-wider capitalize">{tagname}</p>
    </div>
  );
};

export default Tag;

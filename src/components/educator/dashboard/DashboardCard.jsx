const DashboardCard = ({ image, number, heading }) => {
  return (
    <div className="flex max-w-60 items-center gap-2.5 rounded-md border border-[#0260FF] p-2.5 shadow-[inset_0px_0px_4px_0px_#0000001A] max-sm:min-w-44 sm:w-full sm:p-5">
      <img src={image} alt="icon" className="w-9 sm:w-14" />
      <div>
        <data
          value={number}
          className="text-fontGray text-base font-medium md:text-2xl"
        >
          {number}
        </data>
        <p className="text-ligthGray text-sm sm:text-base">{heading}</p>
      </div>
    </div>
  );
};

export default DashboardCard;

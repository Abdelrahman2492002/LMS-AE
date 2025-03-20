import Button from "../common/Button";
import FooterHeading from "../common/FooterHeading";

const FooterSubscribe = () => {
  return (
    <div className="hidden lg:block">
      <FooterHeading heading="Subscribe to our newsletter" />
      <p className="py-8 text-sm">
        The latest news, articles, and resources, sent to your inbox weekly.
      </p>
      <form className="flex items-center gap-2">
        <input
          type="text"
          className="border-ExtraLigthGray rounded-sm border px-3 py-2.5 outline-0 placeholder:text-sm"
          placeholder="Enter your email"
        />
        <Button rounded="rounded-sm" fontWeight="font-medium">
          Susbcribe
        </Button>
      </form>
    </div>
  );
};

export default FooterSubscribe;

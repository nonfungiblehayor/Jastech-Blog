import Image from "next/image";
const Loading = () => {
  return (
    <div>
      <Image src="/img/spinner.gif" alt="spinner" width={200} height={200} />
    </div>
  );
};
export default Loading;

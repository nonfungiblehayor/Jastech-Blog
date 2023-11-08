import Icons from "./icons";
import Link from "next/link";
const Social = () => {
    const smIcons = [
        {
          icon: "facebook",
          link: "",
        },
        {
          icon: "twitter",
          link: "",
        },
        {
          icon: "instagram",
          link: "",
        },
        {
          icon: "youtube",
          link: "",
        },
      ];
    return (
        <div>
            {smIcons.map((item,index)=> (
                <Link href={item.link} key={index}>
                    <Icons type={item.icon} />
                </Link>
            ))}
        </div>
    )
}
export default Social
import { Picture } from "@prisma/client";
import Link from "next/link";

const PictureItem = ({ picture }: { picture: Picture }) => {
    return (
        <Link href={`${picture.url}`} className="">
            <img src={`${picture.url}`} alt={picture.desc || ""} className="" />
            {picture.desc && <p className="picture_desc">{picture.desc}</p>} {/* Only render description if it exists */}
        </Link>
    );
};

export default PictureItem;

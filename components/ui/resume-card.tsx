import Image from "next/image";
import SkillBadge from "@/components/ui/skillbadge";
import { Briefcase, Calendar, LinkIcon, MapPin } from "lucide-react";
import Link from "next/link";

const ResumeCard = ({
    image,
    title,
    subtitle,
    company,
    location,
    date,
    description,
    link,
    linkShorthand,
}: {
    image: string;
    title: string;
    subtitle: string;
    company: string;
    location: string;
    date: string;
    description: string;
    link: string;
    linkShorthand: string;
}) => {
    return (
        <div className="p-3 bg-gray-50 rounded flex flex-col gap-3 hover:bg-gray-100 duration-200">
            <div className="flex flex-row gap-4 p-2">
                <Image
                    src={image}
                    alt={title}
                    width={48}
                    height={48}
                    className="rounded-full size-12"
                />
                <div className="flex flex-col w-full">
                    <div className="flex flex-row w-full justify-between">
                        <p className="font-medium">{title}</p>
                        <SkillBadge text={subtitle} />
                    </div>
                    <div className="flex flex-row gap-x-3 items-center text-xs flex-wrap">
                        <div className="flex flex-row items-center gap-1">
                            <Briefcase size={12} />
                            <p>{company}</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <MapPin size={12} />
                            <p>{location}</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <Calendar size={12} />
                            <p>{date}</p>
                        </div>
                    </div>
                    <p className="text-sm font-light pt-2">{description}</p>
                    <Link
                        className="flex flex-row gap-2 items-center hover:opacity-80 text-blue-800 pt-2"
                        href={link}
                        target="_blank"
                    >
                        <LinkIcon size={16} />
                        <p className="text-sm">{linkShorthand}</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ResumeCard;

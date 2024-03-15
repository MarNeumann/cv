import { Link } from "lucide-react";

const BlogCard = ({
    title,
    date,
    content,
    link,
}: {
    title: string;
    date: string;
    content: string;
    link: string;
}) => {
    return (
        <div className="p-3 bg-gray-50 rounded flex flex-col hover:bg-gray-100 duration-200 gap-1">
            <p className="text-xs">
                {new Date(date).toLocaleDateString("de-DE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </p>
            <p className="font-medium">{title}</p>
            <p className="text-sm font-light">{content}</p>
            <div className="flex flex-row gap-2 items-center hover:opacity-80 text-blue-800 pt-2">
                <Link size={16} />
                <p className="text-sm">{link}</p>
            </div>
        </div>
    );
};

export default BlogCard;

import React from "react";
import { Card } from "@/components/ui/card";

const Section = ({
    children,
    title,
}: {
    children: React.ReactNode;
    title: string;
}) => {
    return (
        <Card>
            <div className="p-2">
                <div className="flex flex-row items-center gap-2 p-2">
                    <div className="size-1.5 bg-blue-400 rounded-full" />
                    <h2 className="font-medium">{title}</h2>
                </div>
                {children}
            </div>
        </Card>
    );
};

export default Section;

import type { FC } from "react";

interface openGraphImageProps {
    title: string;
    description: string;
}

const openGraphImage: FC<openGraphImageProps> = ({
    title = "Yuri Silva — Creative Developer",
    description = "Creative Developer",
}) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                backgroundColor: "white",
            }}
        >
            <h1
                style={{
                    color: "hsl(0 0% 3.9%)",
                    fontFamily: "Helvetica",
                    textTransform: "uppercase",
                    letterSpacing: "-0.05em",
                    fontSize: "80px",
                    lineHeight: "1",
                    textAlign: "center",
                }}
            >
                {title}
            </h1>
            <p
                style={{
                    color: "hsl(0 0% 45.1%)",
                    fontSize: "56px",
                    lineHeight: "1",
                    letterSpacing: "-0.05em",
                    textAlign: "center",
                }}
            >
                {description}
            </p>
        </div>
    );
};

export default openGraphImage;

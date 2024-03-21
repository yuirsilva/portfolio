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
                    fontSize: "30px",
                    lineHeight: "36px",
                }}
            >
                {title}
            </h1>
            <p
                style={{
                    color: "hsl(0 0% 45.1%)",
                    fontSize: "16px",
                    lineHeight: "24px",
                    position: "absolute",
                    top: "90%",
                }}
            >
                {description}
            </p>
        </div>
    );
};

export default openGraphImage;

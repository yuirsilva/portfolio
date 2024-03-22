import fs from "fs/promises";
import satori from "satori";
import sharp from "sharp";

export async function SVG(component: JSX.Element) {
    return await satori(component, {
        width: 2400,
        height: 1256,
        fonts: [
            {
                name: "Helvetica",
                data: await fs.readFile("./src/assets/Helvetica.ttf"),
                weight: 400,
            },
        ],
    });
}

export async function PNG(component: JSX.Element) {
    return await sharp(Buffer.from(await SVG(component)))
        .png()
        .toBuffer();
}

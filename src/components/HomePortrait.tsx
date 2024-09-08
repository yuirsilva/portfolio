import TextMaterial from "@components/visual/shaders/home/textMaterial";

import { Text, useKTX2 } from "@react-three/drei";
import {
    Canvas,
    extend,
    type ShaderMaterialProps,
    useFrame,
    useThree,
} from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

extend({ TextMaterial });

interface Material extends ShaderMaterialProps {
    u_time?: number;
    u_pointer?: THREE.Vector2;
    u_noisetex: THREE.Texture;
}

declare module "@react-three/fiber" {
    interface ThreeElements {
        textMaterial: Material;
    }
}
const HomePortrait = ({}) => {
    return (
        <Canvas
            orthographic
            camera={{
                zoom: 100,
            }}
        >
            <Heading />
        </Canvas>
    );
};

// font size: 16px
const FONT_SIZE = 16 / 100;

const Heading = () => {
    const material = useRef<THREE.ShaderMaterial & Material>(null!);

    const noisetex = useKTX2("/images/noise-simplex-layered.ktx2");
    noisetex.wrapS = THREE.RepeatWrapping;
    noisetex.wrapT = THREE.RepeatWrapping;

    const { size } = useThree();
    const aspect = size.width / size.height;

    useFrame(({ clock, pointer }) => {
        material.current.u_time = clock.elapsedTime;
        material.current.u_pointer = pointer;
    });

    return (
        <Text
            color="black"
            font="/fonts/PPSupplyMono-Regular.woff"
            fontSize={FONT_SIZE}
            maxWidth={aspect * 0.48}
            // @ts-expect-error glyphGeometryDetail is missing here
            glyphGeometryDetail={8}
            textAlign="justify"
            anchorX="center"
            anchorY="middle"
        >
            A (CREATIVE) DEVELOPER BASED IN SÃO PAULO.
            <textMaterial
                ref={material}
                key={TextMaterial.key}
                u_noisetex={noisetex}
            />
        </Text>
    );
};

export default HomePortrait;

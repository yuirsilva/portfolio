import { gsap, SplitText } from "@/lib/gsap";
import barba from "@barba/core";
import type { ITransitionData } from "@barba/core/dist/core/src/src/defs";

import HomeCanvas from "@components/home/homeCanvas";
import Projects from "@components/projects/projectCanvas";
import { toggleTheme } from "@components/ThemeToggle";

let homeCanvas: HomeCanvas | null = null;
let projectCanvas: Projects | null = null;

const splitSplit = () => {
    new SplitText("[data-split-text]", {
        type: "words",
        wordsClass: "single-word",
    });
};

const commonLeave = (data: ITransitionData) => {
    const tl = gsap.timeline();

    tl.to("#header", {
        yPercent: -100,
    });

    tl.to(
        data.current.container,
        {
            opacity: 0,
        },
        "<"
    );

    return tl;
};

const commonOnce = (): gsap.core.Timeline => {
    const tl = gsap.timeline();

    tl.to("#reveal-text", {
        delay: 0.4,
    });

    tl.to("#reveal-text", {
        yPercent: -100,
    });

    tl.to("#reveal", {
        yPercent: -100,
    });

    return tl;
};

const home = (): gsap.core.Timeline => {
    const tl = gsap.timeline();

    tl.from("#header", {
        yPercent: -100,
    });

    tl.from(
        "[data-animation]",
        {
            yPercent: 100,
        },
        "<"
    );

    tl.call(() => {
        if (homeCanvas) {
            tl.to(homeCanvas.material.uniforms.uOpacity!, {
                value: 1,
            });
        }
    });

    return tl;
};

const about = (): gsap.core.Timeline => {
    const tl = gsap.timeline();

    tl.from("#header", {
        yPercent: -100,
    });

    tl.from(
        "[data-split-text] .single-word",
        {
            yPercent: 100,
            stagger: 0.07,
            duration: 1,
        },
        "<"
    );

    tl.from(
        "[data-animation]",
        {
            yPercent: 100,
            autoAlpha: 0,
            stagger: 0.07,
            duration: 1,
        },
        "<"
    );

    tl.from(
        "[data-link]",
        {
            yPercent: 100,
            stagger: 0.07,
            duration: 1.47,
        },
        "<"
    );

    return tl;
};

const projects = (): gsap.core.Timeline => {
    const tl = gsap.timeline({ paused: true });

    tl.from("#header", {
        yPercent: -100,
    });

    projectCanvas?.promise.then(() => {
        let z = 1;
        if (projectCanvas) {
            projectCanvas.imageStore.map((image) => {
                tl.set(image.mesh.material.uniforms.uOpacity!, {
                    value: 1,
                });

                tl.set(
                    image.mesh.position,
                    {
                        z: z,
                        delay: 0.15,
                    },
                    "<"
                );

                z += 8;
            });

            tl.to(
                projectCanvas.camera.position,
                {
                    z: projectCanvas.camera.position.z - 200,
                    duration: 0.5,
                },
                "<0.5"
            );

            const positions = projectCanvas.imageStore.map(
                (image) => image.mesh.position
            );

            tl.from(positions, {
                // multiply scalar back
                x: projectCanvas.majorGroup.position.x * -1,
                y: projectCanvas.majorGroup.position.y * -1,
            });

            tl.to(
                positions,
                {
                    z: 0,
                },
                "<"
            );

            tl.play();
        }
    });

    return tl;
};

barba.init({
    timeout: 7000,
    views: [
        {
            namespace: "Home",
            beforeEnter: () => {
                homeCanvas = new HomeCanvas({
                    dom: document.getElementById("home-container")!,
                });

                document
                    .getElementById("heading")
                    ?.addEventListener("click", () => {
                        toggleTheme();
                    });
            },
        },
        {
            namespace: "Projects",
            beforeEnter: () => {
                projectCanvas = new Projects({
                    dom: document.getElementById("projects-container")!,
                });
            },
        },
    ],
    transitions: [
        {
            name: "to-home",
            from: {},
            to: { namespace: "Home" },
            once: () => {
                const tl = commonOnce();
                tl.add(home());
            },
            enter: async () => {
                await home();
            },
            leave: async (data) => {
                await commonLeave(data);
            },
        },
        {
            name: "to-about",
            from: {},
            to: { namespace: "About" },
            once: () => {
                splitSplit();
                const tl = commonOnce();
                tl.add(about());
            },
            beforeEnter: () => {
                splitSplit();
            },
            enter: async () => {
                await about();
            },
            leave: async (data) => {
                await commonLeave(data);
            },
        },
        {
            name: "to-projects",
            from: {},
            to: { namespace: "Projects" },
            once: () => {
                const tl = commonOnce();
                tl.add(projects());
            },
            enter: async () => {
                await projects();
            },
            leave: async (data) => {
                await commonLeave(data);
            },
        },
        {
            name: "default",
            once: () => {
                commonOnce();
            },
        },
    ],
});

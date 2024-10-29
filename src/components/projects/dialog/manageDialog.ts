import { gsap } from "@/lib/gsap";
import type { ProjectData } from "@components/projects/projectCanvas";

interface DialogElements {
    title: HTMLElement | null;
    year: HTMLElement | null;
    dialog: HTMLElement | null;
    background: HTMLElement | null;
    closeButton: HTMLElement | null;
    github: HTMLAnchorElement | null;
    website: HTMLAnchorElement | null;
    image: HTMLImageElement | null;
    links: HTMLElement | null;
}

export class Dialog {
    private state: boolean;
    private elements: DialogElements;

    constructor() {
        this.state = false;

        this.elements = {
            title: document.getElementById("project-title"),
            year: document.getElementById("project-year"),
            dialog: document.getElementById("project-dialog"),
            background: document.getElementById("project-bg"),
            closeButton: document.getElementById("project-close-button"),
            github: document.getElementById(
                "project-github"
            ) as HTMLAnchorElement,
            website: document.getElementById(
                "project-website"
            ) as HTMLAnchorElement,
            image: document.getElementById("project-image") as HTMLImageElement,
            links: document.getElementById("project-links"),
        };

        this.setupEventListeners();
    }

    private setupEventListeners() {
        this.elements.background?.addEventListener("click", () => this.close());
        this.elements.closeButton?.addEventListener("click", () =>
            this.close()
        );

        document.addEventListener("keydown", (event: KeyboardEvent) => {
            if (event.key === "Escape" && this.state) {
                this.close();
            }
        });
    }

    private close() {
        this.state = false;

        this.animate();
    }

    private updateContent(data: ProjectData) {
        const { title, year, github, website, type } = data;

        if (!this.elements.title || !this.elements.year) return;

        this.elements.title.textContent = title;
        this.elements.year.textContent = year;

        if (type === "project" && github && website) {
            this.elements.github && (this.elements.github.href = github);
            this.elements.website && (this.elements.website.href = website);
        }

        this.updateImage(title);
    }

    private updateImage(title: string) {
        const sourceImage = document.querySelector<HTMLImageElement>(
            `img[title="${title}"]`
        );
        if (sourceImage && this.elements.image) {
            const clonedImage = sourceImage.cloneNode(
                false
            ) as HTMLImageElement;

            this.elements.image.replaceWith(clonedImage);
            this.elements.image = clonedImage;
        }
    }

    private animate() {
        if (!this.elements.dialog || !this.elements.closeButton) return;

        gsap.to([this.elements.dialog, this.elements.closeButton], {
            autoAlpha: this.state ? 1 : 0,
            duration: 0.2,
        });
    }

    private updateStyles(type: "image" | "project") {
        gsap.set("#project-links", {
            display: type === "image" ? "none" : "flex",
        });
    }

    public open(data: ProjectData) {
        this.state = true;

        this.updateContent(data);
        this.updateStyles(data.type);
        this.animate();
    }
}

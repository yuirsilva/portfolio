const BODY_COPY = `WHAT'S UP! I'M YURI, CREATIVE DEVELOPER BASED IN BRAZIL.`;

interface Props {
  width?: number;
  height: number;
  theme: "light" | "dark";
}

interface Attributes {
  height: string;
  "data-theme": "light" | "dark";
  [key: string]: string;
}

const attr = (obj: Record<string, string>) =>
  Object.entries(obj).reduce(
    (acc, [key, value]) => `${acc} ${key}="${value}"`,
    ""
  );

const svg = (styles: string, html: string, attributes: Attributes) => {
  if (!attributes.width) attributes.width = "100%";

  return /*html*/ `
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" ${attr(attributes)}>
		<foreignObject width="100%" height="100%">
			<div xmlns="http://www.w3.org/1999/xhtml">
				<style>${styles}</style>
				${html}
			</div>
		</foreignObject>
	</svg>
  `;
};

export const shared = /* css */ `
	@font-face {
		font-family: "helvetica";
		src: url("https://portfolio-git-dev-projects-yuri.vercel.app/readme/readme.woff2") format("woff2");
		font-display: swap;
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

    * {
        contain: content;
    }

	:root {
		--foreground-light: 0 0% 3.9%;
		--foreground-dark: 0 0% 98%;
	}

	[data-theme="dark"] {
		--color-text: var(--foreground-dark);
	}

	[data-theme="light"] {
		--color-text: var(--foreground-light);
	}
	
	.flex {
		display: flex;
	}
	.flex-col {
		flex-direction: column;
	}
	.justify-between {
		justify-content: space-between;
	}
	.items-end {
		align-items: flex-end;
	}
	.gap-4 {
		gap: 1rem;
	}
	.uppercase {
		text-transform: uppercase;
	}
	.text-foreground {
		color: hsl(var(--color-text));
	}
	.text-2xl {
		font-size: 1.5rem;
		line-height: 2rem;
	}
	.text-xs {
		font-size: 0.75rem;
		line-height: 1rem;
	}
	.italic {
		font-style: italic;
	}
	.p-4 {
		padding: 1rem;
	}
	.items-end {
		align-items: flex-end;
	}
	.w-full {
		width: 100%;
	}
	.text-end {
		text-align: end;
	}
	.text-xl {
		font-size: 1.25rem/* 20px */;
		line-height: 1.75rem/* 28px */;
	}
	.text-base {
		font-size: 1rem/* 16px */;
		line-height: 1.5rem/* 24px */;
	}
	.max-w-96 {
		max-width: 24rem/* 384px */;
	}
	.underline {
		text-decoration-line: underline;
	}
	.underline-offset-2 {
		text-underline-offset: 2px;
	}

	.wrapper {
		block-size: calc(var(--size-height) * 1px);
		container-type: inline-size;
		position: relative;
		overflow: clip;
		font-family: "helvetica";
	}

	/* Hide everything in Firefox by default – show fallback instead */
	@-moz-document url-prefix() {
		.wrapper {
			display: none;
		}
	}

	p {
		contain: content;
		margin: 0;
	}
`;

export const top = (props: Props) => {
  const styles = /* css */ `
		${shared}
		:root {
			--size-height: ${props.height};
		}
	`;

  const html = /*html*/ `
		<div class="wrapper flex justify-between uppercase text-foreground">
			<div>Links</div>
            <div>readme.md</div>
		</div>
	`;

  return svg(styles, html, {
    height: `${props.height}`,
    "data-theme": `${props.theme}`,
  });
};

export const link = (props: Props) => (label: string) => {
  const styles = /*css*/ `
		${shared}

		:root {
			--size-height: ${props.height};
			--size-width: ${props.width};
		}

		@-moz-document url-prefix() {
			/* Overwrite default, allow this to show in FF */
			.wrapper {
				display: block;
			}
		}
	`;

  const html = /*html*/ `
		<main class="wrapper">
			<a class="uppercase text-foreground">
                <div>${label}</div>
			</a>
		</main>
	`;

  return svg(styles, html, {
    width: `${props.width}`,
    height: `${props.height}`,
    "data-theme": `${props.theme}`,
  });
};

export const fallback = (props: Props & { width: number }) => {
  const styles = /* css */ `
		${shared}

		:root {
			--size-height: ${props.height};
			--size-width: ${props.width};
		}

		.wrapper {
			display: none;
		}
		@-moz-document url-prefix() {
			/* Hide everywhere but Firefox */
			.wrapper {
				display: flex;
				align-items: end;
			}
		}
	`;

  const html = /* html */ `
		<main class="wrapper">
			<div class="text-2xl">
				<p>${BODY_COPY}</p>
				<p class="text-xs italic">— I'm all for the foxy browser, but try Chrome/Safari for this one!</p>
			</div>
		</main>
	`;

  return svg(styles, html, {
    width: `${props.width}`,
    height: `${props.height}`,
    "data-theme": `${props.theme}`,
    viewbox: `0 0 ${props.width} ${props.height}`,
  });
};

export const main = (props: Props) => {
  const styles = /*css*/ `
		${shared}

		:root {
			--size-height: ${props.height};
		}
	`;

  const html = /* html */ `
		<main class="wrapper">
			<article class="text-foreground flex flex-col gap-4 items-end p-4">
                <p class="text-xl uppercase max-w-96 w-full text-end">${BODY_COPY}</p>
                <p class="text-base">shout out <a target="_blank" class="underline underline-offset-2" href="https://github.com/terkelg">Terkel</a> for this one 🪄</p>
			</article>
		</main>
	`;

  return svg(styles, html, {
    height: `${props.height}`,
    "data-theme": `${props.theme}`,
  });
};

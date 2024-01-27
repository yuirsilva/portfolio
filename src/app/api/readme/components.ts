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
            <html xmlns="http://www.w3.org/1999/xhtml">
                <head>
                    <link rel="stylesheet" href="/readme/readme.css" />
                </head>
                <body style="margin: 0; padding: 0;">
                    <div>
                        <style>${styles}</style>
                        ${html}
                    </div>
                </body>
            </html>
		</foreignObject>
	</svg>`;
};

export const shared = /* css */ `
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

    * {
        contain: content;
    }

	.wrapper {
		block-size: calc(var(--size-height) * 1px);
		container-type: inline-size;
		position: relative;
		overflow: clip;
        font-family: "__neue_65e555";
	}

	/* Hide everything in Firefox by default – show fallback instead */
	@-moz-document url-prefix() {
		.wrapper {
			display: none;
		}
	}

	.label {
		contain: content;
		font-size: 14px;
	}

	.link {
		contain: content;
		font-size: 14px;
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
			<div class="menu">Links</div>
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

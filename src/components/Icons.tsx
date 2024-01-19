import { forwardRef, SVGProps } from "react";

const Icons = {
  logo: forwardRef<SVGSVGElement, Partial<SVGProps<SVGSVGElement>>>(
    ({ ...props }, ref) => (
      <svg width="112" height="62" viewBox="0 0 112 62" ref={ref} {...props}>
        <path
          d="M15 62C6.71573 62 8.00843e-08 55.2843 1.78873e-07 47C2.77662e-07 38.7157 6.71573 32 15 32L50 32L50 45.3333C50 46.8811 50 47.6549 49.9429 48.3073C49.3085 55.559 43.559 61.3085 36.3073 61.9429C35.6549 62 34.8811 62 33.3333 62L15 62Z"
          fill="#171717"
        />
        <path
          d="M20 15C20 6.71573 26.7157 0 35 0C43.2843 0 50 6.71573 50 15V30H35C26.7157 30 20 23.2843 20 15Z"
          fill="#171717"
        />
        <path
          d="M52 20C52 15.3501 52 13.0252 52.5111 11.1177C53.8981 5.94133 57.9413 1.89812 63.1177 0.511113C65.0252 0 67.3501 0 72 0H97C105.284 0 112 6.71573 112 15C112 23.2843 105.284 30 97 30H52V20Z"
          fill="#171717"
        />
      </svg>
    )
  ),
  smLogo: forwardRef<SVGSVGElement, Partial<SVGProps<SVGSVGElement>>>(
    ({ ...props }, ref) => (
      <svg width="57" height="32" viewBox="0 0 57 32" ref={ref} {...props}>
        <path d="M7.5 32C3.35786 32 4.00421e-08 28.6421 8.94366e-08 24.5C1.38831e-07 20.3579 3.35787 17 7.5 17L25 17L25 27C25 29.7614 22.7614 32 20 32L7.5 32Z" />
        <path d="M10 7.5C10 3.35786 13.3579 0 17.5 0C21.6421 0 25 3.35786 25 7.5V15H17.5C13.3579 15 10 11.6421 10 7.5Z" />
        <path d="M27 6C27 2.68629 29.6863 0 33 0H49.5C53.6421 0 57 3.35786 57 7.5C57 11.6421 53.6421 15 49.5 15H27V6Z" />
      </svg>
    )
  ),
  topRightArrow: forwardRef<SVGSVGElement, Partial<SVGProps<SVGSVGElement>>>(
    ({ className, ...props }, ref) => (
      <svg
        ref={ref}
        {...props}
        width="20px"
        height="20px"
        viewBox="0 0 20 20"
        className={`fill-none stroke-foreground [stroke-width:1.5px] ${
          className ?? null
        }`}
      >
        <polyline points="4.657,3.64 16.304,3.64 16.304,15.287" />
        <line x1="3.77" y1="16.281" x2="16.304" y2="3.64" />
      </svg>
    )
  ),
};
Icons.logo.displayName = "Logo";
Icons.smLogo.displayName = "SmallLogo";
Icons.topRightArrow.displayName = "TopRightArrow";

export default Icons;

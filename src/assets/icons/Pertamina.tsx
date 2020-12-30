import * as React from "react";

function Pertamina(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 314 78" fill="none" {...props}>
      <path fill="#F9F9F9" d="M0 0h314v78H0z" />
      <path
        d="M59.188 35.633c0 3.828-1.133 6.789-3.399 8.883-2.25 2.078-5.453 3.117-9.61 3.117h-2.6V59H34.32V24.734h11.86c4.328 0 7.578.946 9.75 2.836 2.172 1.89 3.258 4.578 3.258 8.063zm-15.61 4.453h1.688c1.39 0 2.492-.39 3.304-1.172.828-.781 1.242-1.86 1.242-3.234 0-2.313-1.28-3.47-3.843-3.47h-2.39v7.876zM84.992 59H64.648V24.734h20.344v7.43H73.906v5.39h10.266v7.43H73.906v6.47h11.086V59zm15.258-12.469V59h-9.258V24.734h11.227c9.312 0 13.969 3.375 13.969 10.125 0 3.97-1.938 7.04-5.813 9.211L120.359 59h-10.5l-7.265-12.469h-2.344zm0-6.96h1.734c3.235 0 4.852-1.43 4.852-4.29 0-2.36-1.586-3.539-4.758-3.539h-1.828v7.828zM138.594 59h-9.258V32.305h-8.367v-7.57h25.969v7.57h-8.344V59zm34.265 0l-1.687-6.422h-11.133L158.305 59h-10.172l11.179-34.406h12.352L182.984 59h-10.125zm-3.609-14.016l-1.477-5.625c-.343-1.25-.765-2.867-1.265-4.851-.485-1.985-.805-3.406-.961-4.266-.141.797-.422 2.11-.844 3.938-.406 1.828-1.32 5.43-2.742 10.804h7.289zM186.711 59V24.734h9.258v26.79h13.195V59h-22.453zm27.937 0V24.734h9.305V59h-9.305zm31.852 0h-9.258V32.305h-8.367v-7.57h25.969v7.57H246.5V59zm33.586 0h-20.344V24.734h20.344v7.43H269v5.39h10.266v7.43H269v6.47h11.086V59z"
        fill="#00A550"
      />
    </svg>
  );
}

const MemoPertamina = React.memo(Pertamina);
export default MemoPertamina;
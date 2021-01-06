import * as React from "react";

function Pertamax(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="6em" height="6em" viewBox="0 0 314 78" fill="none" {...props}>
      <path fill="#373990" d="M0 0h314v78H0z" />
      <path
        d="M50.867 35.633c0 3.828-1.133 6.789-3.398 8.883-2.25 2.078-5.453 3.117-9.61 3.117h-2.601V59H26V24.734h11.86c4.328 0 7.578.946 9.75 2.836 2.171 1.89 3.257 4.578 3.257 8.063zm-15.61 4.453h1.688c1.39 0 2.492-.39 3.305-1.172.828-.781 1.242-1.86 1.242-3.234 0-2.313-1.281-3.47-3.844-3.47h-2.39v7.876zM76.673 59H56.328V24.734h20.344v7.43H65.586v5.39h10.266v7.43H65.586v6.47h11.086V59zM91.93 46.531V59h-9.258V24.734h11.226c9.313 0 13.969 3.375 13.969 10.125 0 3.97-1.937 7.04-5.812 9.211L112.039 59h-10.5l-7.266-12.469H91.93zm0-6.96h1.734c3.234 0 4.852-1.43 4.852-4.29 0-2.36-1.586-3.539-4.758-3.539H91.93v7.828zM130.273 59h-9.257V32.305h-8.368v-7.57h25.969v7.57h-8.344V59zm34.266 0l-1.687-6.422h-11.133L149.984 59h-10.172l11.18-34.406h12.352L174.664 59h-10.125zm-3.609-14.016l-1.477-5.625a240.96 240.96 0 01-1.265-4.851c-.485-1.985-.805-3.406-.961-4.266-.141.797-.422 2.11-.844 3.938-.406 1.828-1.321 5.43-2.742 10.804h7.289zM193.32 59l-7.008-24.68h-.21c.328 4.203.492 7.47.492 9.797V59h-8.203V24.734h12.328l7.148 24.328h.188l7.007-24.328h12.352V59h-8.508V43.977c0-.782.008-1.649.024-2.602.031-.953.14-3.29.328-7.008h-.211L202.133 59h-8.813zm52.5 0l-1.687-6.422H233L231.266 59h-10.172l11.179-34.406h12.352L255.945 59H245.82zm-3.609-14.016l-1.477-5.625c-.343-1.25-.765-2.867-1.265-4.851-.485-1.985-.805-3.406-.961-4.266-.141.797-.422 2.11-.844 3.938-.406 1.828-1.32 5.43-2.742 10.804h7.289zM290.539 59h-10.711l-6.68-10.71L266.539 59h-10.477l11.368-17.531-10.688-16.735h10.266l6.187 10.594 5.953-10.594h10.571l-10.852 17.461L290.539 59z"
        fill="#F9F9F9"
      />
    </svg>
  );
}

const MemoPertamax = React.memo(Pertamax);
export default MemoPertamax;

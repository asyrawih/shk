import * as React from "react";

function Dexlite(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="6em" height="6em" viewBox="0 0 314 78" fill="none" {...props}>
      <path fill="#82C13C" d="M0 0h314v78H0z" />
      <path
        d="M85.203 41.14c0 5.72-1.578 10.126-4.734 13.22-3.14 3.093-7.563 4.64-13.266 4.64H56.117V24.734h11.86c5.5 0 9.742 1.407 12.726 4.22 3 2.812 4.5 6.874 4.5 12.187zm-9.61.329c0-3.14-.624-5.469-1.874-6.985-1.235-1.515-3.117-2.273-5.649-2.273h-2.695v19.195h2.063c2.812 0 4.874-.812 6.187-2.437 1.313-1.64 1.969-4.14 1.969-7.5zM111.712 59H91.367V24.734h20.344v7.43h-11.086v5.39h10.266v7.43h-10.266v6.47h11.086V59zm36.867 0h-10.711l-6.679-10.71-6.61 10.71h-10.476l11.367-17.531-10.688-16.735h10.266l6.187 10.594 5.954-10.594h10.57l-10.852 17.461L148.578 59zm16.336 0V24.734h9.258v26.79h13.195V59h-22.453zm27.938 0V24.734h9.304V59h-9.304zm31.851 0h-9.258V32.305h-8.367v-7.57h25.969v7.57h-8.344V59zm33.586 0h-20.344V24.734h20.344v7.43h-11.086v5.39h10.266v7.43h-10.266v6.47h11.086V59z"
        fill="#F9F9F9"
      />
    </svg>
  );
}

const MemoDexlite = React.memo(Dexlite);
export default MemoDexlite;

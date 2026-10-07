import React from 'react';

const DrawOutlineButton = ({
  children,
  ...rest
}: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return (
    <button
      {...rest}
      className="group relative rounded-xl px-6 py-3 font-semibold text-[#111111] transition-all duration-300 hover:text-[#25D366]"
    >
      <span className="relative z-10">{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#25D366] transition-all duration-200 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#25D366] transition-all delay-100 duration-200 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#25D366] transition-all delay-200 duration-200 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#25D366] transition-all delay-300 duration-200 group-hover:h-full" />
    </button>
  );
};

export default DrawOutlineButton;

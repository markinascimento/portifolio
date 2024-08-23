export function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-x-1 max-w-[568px]">
      <section
        className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 
        after:w-[4px] after:rounded-full after:-translate-x-[3.5px] after:bg-gray-200"
      >
        <div className="relative z-10 size-7 flex justify-center items-center">
          <div className="size-3 rounded-full bg-pallet-red"></div>
        </div>
      </section>

      <section className="grow pt-0.5 pb-8">{children}</section>
    </div>
  );
}

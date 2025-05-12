type Props = {
  id: string;
  title: string;
  mode?: string;
};

const SectionHeader = (props: Props) => {
  return (
    <section
      id={props.id}
      className={`w-full h-auto flex flex-col justify-between px-10 py-5 
      ${
        props.mode === "light"
          ? "bg-base-content text-base-200"
          : "bg-base-100 text-base-content/60"
      } rounded-lg`}
    >
      <h1 className="text-[12px] font-medium text-center">{props.title}</h1>
    </section>
  );
};

export default SectionHeader;

interface ThemeButtonProps {
  navbarColor: string;
  cardColor: string;
  bottomBarColor: string;
  backgroundColor: string;
  onClick: () => void;
}

export default function ThemeButton({
  navbarColor,
  cardColor,
  bottomBarColor,
  backgroundColor,
  onClick,
}: ThemeButtonProps) {
  return (
    <button
      onClick={onClick}
      className="h-48 w-full cursor-pointer rounded-md shadow-md"
      style={{
        backgroundColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid #ccc",
        position: "relative",
        overflow: "hidden",
      }}
      title="Preview Theme"
    >
      <button
        style={{ backgroundColor }}
        className={`relative m-0 flex h-48 w-full flex-col items-center rounded-sm border-2 border-neutral-200 p-0 hover:border-neutral-500`}
      >
        {/* Navbar */}
        <div className="flex h-8 w-full items-center justify-between">
          <div
            style={{ backgroundColor: navbarColor }}
            className="m-0 ml-1 h-3 w-16 rounded-md"
          ></div>
          <div
            style={{ borderColor: navbarColor }}
            className="h-3 w-1/3 rounded-md border-2 bg-white"
          ></div>
          <div
            style={{ backgroundColor: navbarColor }}
            className="m-0 mr-1 h-3 w-16 rounded-md"
          ></div>
        </div>
        {/* Posts */}
        <div className="flex flex-grow flex-col items-center justify-center">
          <div
            style={{ backgroundColor: cardColor }}
            className="m-1 h-14 w-20 rounded-sm"
          ></div>
          <div
            style={{ backgroundColor: cardColor }}
            className="m-1 h-14 w-20 rounded-sm"
          ></div>
        </div>
        {/* Bottom bar */}
        <div className="absolute bottom-0 flex h-8 w-full items-center justify-end">
          <div
            style={{ backgroundColor: bottomBarColor }}
            className="mr-1 h-3 w-16 rounded-md"
          ></div>
        </div>
      </button>
    </button>
  );
}

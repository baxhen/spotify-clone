import { classes } from "@spotify/app/utils/classes";
import "./styles.css";

interface IconButtonProps {
  label: string;
  onClick?: () => void;
  classNames?: string;
  children: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({
  label,
  onClick,
  classNames,
  children,
}) => {
  return (
    <button
      data-testid="home-button"
      className={classes(
        "icon-button rounded-full p-2 text-white transition cursor-pointer h-12 w-12 hover:scale-[1.04]",
        classNames
      )}
      aria-label={label}
      onClick={onClick}
    >
      <span
        aria-hidden="true"
        className="flex items-center justify-center h-6 w-6 mx-auto"
      >
        {children}
      </span>
    </button>
  );
};

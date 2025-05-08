import "./styles.css";

interface SuggestionCardProps {
  title: string;
  description: string;
  buttonText: string;
}

export const SuggestionCard: React.FC<SuggestionCardProps> = ({
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="bg-[var(--background-elevated-base)] rounded-lg py-4 px-5 m-2 mt-0">
      <h2 className="text-base font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-300 mb-4">{description}</p>
      <button className="text-sm bg-white text-black font-bold py-2 px-4 rounded-full hover:scale-105 transition-transform cursor-pointer h-8 flex items-center justify-center">
        {buttonText}
      </button>
    </div>
  );
};

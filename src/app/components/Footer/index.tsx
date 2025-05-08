export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-6 text-center text-sm">
      <p>
        &copy; {new Date().getFullYear()} Spotify Clone. All rights reserved.
      </p>
    </footer>
  );
};

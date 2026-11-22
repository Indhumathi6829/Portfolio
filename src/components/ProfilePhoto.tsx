import { useState } from 'react';
import { UserRound } from 'lucide-react';

interface ProfilePhotoProps {
  src: string;
  alt: string;
  initials: string;
  className?: string;
}

export default function ProfilePhoto({ src, alt, initials, className = '' }: ProfilePhotoProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`clay relative overflow-hidden rounded-[2rem] ${className}`}>
      {failed ? (
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-surface text-foreground">
          <div className="text-center">
            <span className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-cyan-400 to-violet-500 text-3xl font-black text-slate-950 shadow-lg">
              {initials}
            </span>
            <UserRound className="mx-auto mt-4 h-6 w-6 text-muted" />
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="eager"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      )}
    </div>
  );
}

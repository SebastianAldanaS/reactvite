import { useState } from "react";

export function TwitterFollowCard({ userName, children }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClass = isFollowing
    ? "tw-followCard-button"
    : "tw-followCard-button--follow";
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/x/${userName}`}
          alt="avatar ramdon"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClass} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}

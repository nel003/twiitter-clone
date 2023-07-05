export function Twitter({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
        />
      </svg>
    </>
  );
}

export function BellFilled({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06ZM128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216Z"
        />
      </svg>
    </>
  );
}

export function Bell({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06ZM128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216Zm-80-32c7.7-13.24 16-43.92 16-80a64 64 0 1 1 128 0c0 36.05 8.28 66.73 16 80Z"
        />
      </svg>
    </>
  );
}

export function BookmarkFilled({
  className,
}: {
  className?: string;
}): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16Z"
        />
      </svg>
    </>
  );
}
export function Bookmark({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16Zm0 177.57l-51.77-32.35a8 8 0 0 0-8.48 0L72 209.57V48h112Z"
        />
      </svg>
    </>
  );
}
export function Chart({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M9 6h2v14H9zm4 2h2v12h-2zm4-4h2v16h-2zM5 12h2v8H5z"
        />
      </svg>
    </>
  );
}
export function Favorite({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m10.65 19.8l-1.725-1.575q-2.65-2.425-4.788-4.813T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.538t2.5-.562q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.575.55-1.35.55t-1.35-.55Zm.4-13.05q-.725-1.025-1.55-1.563t-2-.537q-1.5 0-2.5 1t-1 2.5q0 1.3.925 2.763t2.213 2.837q1.287 1.375 2.65 2.575T12 18.3q.85-.775 2.213-1.975t2.65-2.575q1.287-1.375 2.212-2.837T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2 .537T12.95 6.75q-.175.25-.425.375T12 7.25q-.275 0-.525-.125t-.425-.375Zm.95 4.725Z"
        />
      </svg>
    </>
  );
}
export function Feather({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M22 2s-7.64-.37-13.66 7.88C3.72 16.21 2 22 2 22l1.94-1c1.44-2.5 2.19-3.53 3.6-5c2.53.74 5.17.65 7.46-2c-2-.56-3.6-.43-5.96-.19C11.69 12 13.5 11.6 16 12l1-2c-1.8-.34-3-.37-4.78.04C14.19 8.65 15.56 7.87 18 8l1.21-1.93c-1.56-.11-2.5.06-4.29.5c1.61-1.46 3.08-2.12 5.22-2.25c0 0 1.05-1.89 1.86-2.32Z"
        />
      </svg>
    </>
  );
}
export function Gif({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M8.5 14h1q.425 0 .713-.288T10.5 13v-.5q0-.2-.15-.35T10 12q-.2 0-.35.15t-.15.35v.5h-1v-2H10q.2 0 .35-.15t.15-.35q0-.2-.15-.35T10 10H8.5q-.425 0-.713.288T7.5 11v2q0 .425.288.713T8.5 14Zm3.5 0q.2 0 .35-.15t.15-.35v-3q0-.2-.15-.35T12 10q-.2 0-.35.15t-.15.35v3q0 .2.15.35T12 14Zm2 0q.2 0 .35-.15t.15-.35v-1h1q.2 0 .35-.15T16 12q0-.2-.15-.35t-.35-.15h-1V11H16q.2 0 .35-.15t.15-.35q0-.2-.15-.35T16 10h-2q-.2 0-.35.15t-.15.35v3q0 .2.15.35T14 14Zm-9 7q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm0-2h14V5H5v14ZM5 5v14V5Z"
        />
      </svg>
    </>
  );
}
export function HomeFilled({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
          <path
            fill="currentColor"
            d="M13.228 2.688a2 2 0 0 0-2.456 0l-8.384 6.52C1.636 9.795 2.05 11 3.003 11h1.092l.82 8.199A2 2 0 0 0 6.905 21h10.19a2 2 0 0 0 1.99-1.801l.82-8.199h1.092c.952 0 1.368-1.205.615-1.791l-8.384-6.52ZM5.996 9.91a1.008 1.008 0 0 0-.37-.684L12 4.267l6.374 4.958a1.008 1.008 0 0 0-.37.684L17.095 19H6.905l-.909-9.09ZM10.5 13a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0ZM12 9.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Z"
          />
        </g>
      </svg>
    </>
  );
}
export function Home({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
          <path
            fill="currentColor"
            d="M13.228 2.688a2 2 0 0 0-2.456 0l-8.384 6.52C1.636 9.795 2.05 11 3.003 11h1.092l.82 8.199A2 2 0 0 0 6.905 21h10.19a2 2 0 0 0 1.99-1.801l.82-8.199h1.092c.952 0 1.368-1.205.615-1.791l-8.384-6.52ZM12 16a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"
          />
        </g>
      </svg>
    </>
  );
}
export function Image({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16ZM48 48h160v77.38l-24.69-24.7a16 16 0 0 0-22.62 0L53.37 208H48Zm160 160H76l96-96l36 36v60ZM96 120a24 24 0 1 0-24-24a24 24 0 0 0 24 24Zm0-32a8 8 0 1 1-8 8a8 8 0 0 1 8-8Z"
        />
      </svg>
    </>
  );
}
export function Lists({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M13 4h8v2h-8V4Zm0 7h8v2h-8v-2Zm0 7h8v2h-8v-2Zm-6.5 1a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm0 2a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM5 6v3h3V6H5ZM3 4h7v7H3V4Z"
        />
      </svg>
    </>
  );
}
export function Location({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M18 4.48a8.45 8.45 0 0 0-12 12l5.27 5.28a1 1 0 0 0 1.42 0L18 16.43a8.45 8.45 0 0 0 0-11.95ZM16.57 15L12 19.59L7.43 15a6.46 6.46 0 1 1 9.14 0ZM9 7.41a4.32 4.32 0 0 0 0 6.1a4.31 4.31 0 0 0 7.36-3a4.24 4.24 0 0 0-1.26-3.05A4.3 4.3 0 0 0 9 7.41Zm4.69 4.68a2.33 2.33 0 1 1 .67-1.63a2.33 2.33 0 0 1-.72 1.63Z"
        />
      </svg>
    </>
  );
}
export function MailFilled({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
      >
        <path
          fill="currentColor"
          d="M4 3a2 2 0 0 0-2 2v.201l6 3.231l6-3.23V5a2 2 0 0 0-2-2H4Zm10 3.337L8.237 9.44a.5.5 0 0 1-.474 0L2 6.337V11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6.337Z"
        />
      </svg>
    </>
  );
}
export function Mail({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
      >
        <path
          fill="currentColor"
          d="M2 6.038V11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v1.038ZM4 4h8a1 1 0 0 1 1 1v.74L8 8.432L3 5.74V5a1 1 0 0 1 1-1ZM3 6.876L7.763 9.44a.5.5 0 0 0 .474 0L13 6.876V11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6.876Z"
        />
      </svg>
    </>
  );
}
export function Message({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m5.124 12.114l.003.012a5.909 5.909 0 0 0 3.336 4.16L12 17.894V16h2a5 5 0 0 0 5-5v-1a5 5 0 0 0-5-5h-4a5 5 0 0 0-5 5v1c0 .38.042.748.121 1.1l.003.014ZM14 21l-6.364-2.893A7.909 7.909 0 0 1 3.17 12.54A7.024 7.024 0 0 1 3 11v-1a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v1a7 7 0 0 1-7 7v3Z"
        />
      </svg>
    </>
  );
}
export function MoreFlat({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 48 48"
      >
        <path
          fill="currentColor"
          d="M15.752 24a3.25 3.25 0 1 1-6.5 0a3.25 3.25 0 0 1 6.5 0Zm11.5 0a3.25 3.25 0 1 1-6.5 0a3.25 3.25 0 0 1 6.5 0Zm8.25 3.25a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5Z"
        />
      </svg>
    </>
  );
}
export function More({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
      >
        <path
          fill="currentColor"
          d="M3 8a5 5 0 1 1 10 0A5 5 0 0 1 3 8Zm5-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Zm0 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM5 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
        />
      </svg>
    </>
  );
}
export function NotesFilled({
  className,
}: {
  className?: string;
}): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M0 0h24v24H0z" />
          <path
            fill="currentColor"
            d="M19 2a3 3 0 0 1 2.995 2.824L22 5v14a3 3 0 0 1-2.824 2.995L19 22H5a3 3 0 0 1-2.993-2.802L2 19V5a3 3 0 0 1 2.824-2.995L5 2h14zm-6 12h-2l-.117.007a1 1 0 0 0 0 1.986L11 16h2l.117-.007a1 1 0 0 0 0-1.986L13 14zm2-3H9l-.117.007a1 1 0 0 0 0 1.986L9 13h6l.117-.007a1 1 0 0 0 0-1.986L15 11zm-1-3h-4l-.117.007a1 1 0 0 0 0 1.986L10 10h4l.117-.007a1 1 0 0 0 0-1.986L14 8z"
          />
        </g>
      </svg>
    </>
  );
}
export function Notes({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 19V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm8-4h2m-4-3h6m-5-3h4"
        />
      </svg>
    </>
  );
}
export function PersonFilled({
  className,
}: {
  className?: string;
}): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"
        />
      </svg>
    </>
  );
}
export function Person({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        />
      </svg>
    </>
  );
}
export function Retweet({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 21 21"
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m13.5 13.5l3 3l3-3" />
          <path d="M9.5 4.5h3a4 4 0 0 1 4 4v8m-9-9l-3-3l-3 3" />
          <path d="M11.5 16.5h-3a4 4 0 0 1-4-4v-8" />
        </g>
      </svg>
    </>
  );
}
export function Schedule({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M9 20H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4v3M8 2v2m7-2v2M2 8h19m-2.5 7.643l-1.5 1.5" />
          <circle cx="17" cy="17" r="5" />
        </g>
      </svg>
    </>
  );
}
export function SearchSolid({
  className,
}: {
  className?: string;
}): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11 2a9 9 0 1 0 5.618 16.032l3.675 3.675a1 1 0 0 0 1.414-1.414l-3.675-3.675A9 9 0 0 0 11 2Zm-6 9a6 6 0 1 1 12 0a6 6 0 0 1-12 0Z"
          clipRule="evenodd"
        />
      </svg>
    </>
  );
}
export function Search({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"
        />
      </svg>
    </>
  );
}
export function Upload({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 16q-.425 0-.713-.288T11 15V7.85L9.125 9.725q-.3.3-.7.3T7.7 9.7q-.3-.3-.287-.712T7.7 8.3l3.6-3.6q.15-.15.325-.212T12 4.425q.2 0 .375.063t.325.212l3.6 3.6q.3.3.288.713T16.3 9.7q-.3.3-.713.313t-.712-.288L13 7.85V15q0 .425-.288.713T12 16Zm-6 4q-.825 0-1.413-.588T4 18v-2q0-.425.288-.713T5 15q.425 0 .713.288T6 16v2h12v-2q0-.425.288-.713T19 15q.425 0 .713.288T20 16v2q0 .825-.588 1.413T18 20H6Z"
        />
      </svg>
    </>
  );
}
export function VerifiedFilled({
  className,
}: {
  className?: string;
}): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.592 3.2a5.574 5.574 0 0 1-.495.399c-.298.2-.633.338-.985.408c-.153.03-.313.043-.632.068c-.801.064-1.202.096-1.536.214a2.713 2.713 0 0 0-1.655 1.655c-.118.334-.15.735-.214 1.536a5.707 5.707 0 0 1-.068.632c-.07.352-.208.687-.408.985c-.087.13-.191.252-.399.495c-.521.612-.782.918-.935 1.238c-.353.74-.353 1.6 0 2.34c.153.32.414.626.935 1.238c.208.243.312.365.399.495c.2.298.338.633.408.985c.03.153.043.313.068.632c.064.801.096 1.202.214 1.536a2.713 2.713 0 0 0 1.655 1.655c.334.118.735.15 1.536.214c.319.025.479.038.632.068c.352.07.687.209.985.408c.13.087.252.191.495.399c.612.521.918.782 1.238.935c.74.353 1.6.353 2.34 0c.32-.153.626-.414 1.238-.935c.243-.208.365-.312.495-.399c.298-.2.633-.338.985-.408c.153-.03.313-.043.632-.068c.801-.064 1.202-.096 1.536-.214a2.713 2.713 0 0 0 1.655-1.655c.118-.334.15-.735.214-1.536c.025-.319.038-.479.068-.632c.07-.352.209-.687.408-.985c.087-.13.191-.252.399-.495c.521-.612.782-.918.935-1.238c.353-.74.353-1.6 0-2.34c-.153-.32-.414-.626-.935-1.238a5.574 5.574 0 0 1-.399-.495a2.713 2.713 0 0 1-.408-.985a5.72 5.72 0 0 1-.068-.632c-.064-.801-.096-1.202-.214-1.536a2.713 2.713 0 0 0-1.655-1.655c-.334-.118-.735-.15-1.536-.214a5.707 5.707 0 0 1-.632-.068a2.713 2.713 0 0 1-.985-.408a5.73 5.73 0 0 1-.495-.399c-.612-.521-.918-.782-1.238-.935a2.713 2.713 0 0 0-2.34 0c-.32.153-.626.414-1.238.935Zm6.781 6.663a.814.814 0 0 0-1.15-1.15l-4.85 4.85l-1.596-1.595a.814.814 0 0 0-1.15 1.15l2.17 2.17a.814.814 0 0 0 1.15 0l5.427-5.425Z"
          clipRule="evenodd"
        />
      </svg>
    </>
  );
}
export function Verified({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 4.6 9c-1 .6-1.7 1.8-1.7 3s.7 2.4 1.7 3c-.3 1.2 0 2.5 1 3.4c.8.8 2.1 1.2 3.3 1c.6 1 1.8 1.6 3 1.6s2.4-.6 3-1.7c1.2.3 2.5 0 3.4-1c.8-.8 1.2-2 1-3.3c1-.6 1.6-1.8 1.6-3s-.6-2.4-1.7-3c.3-1.2 0-2.5-1-3.4a3.7 3.7 0 0 0-3.3-1c-.6-1-1.8-1.6-3-1.6Z" />
          <path d="m9 12l2 2l4-4" />
        </g>
      </svg>
    </>
  );
}

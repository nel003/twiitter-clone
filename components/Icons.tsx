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

export function Globe({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
      >
        <path
          d="M256 48C141.124 48 48 141.125 48 256s93.124 208 208 208c114.875 0 208-93.125 208-208S370.875 48 256 48zm-21.549 384.999c-39.464-4.726-75.978-22.392-104.519-50.932C96.258 348.393 77.714 303.622 77.714 256c0-42.87 15.036-83.424 42.601-115.659.71 8.517 2.463 17.648 2.014 24.175-1.64 23.795-3.988 38.687 9.94 58.762 5.426 7.819 6.759 19.028 9.4 28.078 2.583 8.854 12.902 13.498 20.019 18.953 14.359 11.009 28.096 23.805 43.322 33.494 10.049 6.395 16.326 9.576 13.383 21.839-2.367 9.862-3.028 15.937-8.13 24.723-1.557 2.681 5.877 19.918 8.351 22.392 7.498 7.497 14.938 14.375 23.111 21.125 12.671 10.469-1.231 24.072-7.274 39.117zm147.616-50.932c-25.633 25.633-57.699 42.486-92.556 49.081 4.94-12.216 13.736-23.07 21.895-29.362 7.097-5.476 15.986-16.009 19.693-24.352 3.704-8.332 8.611-15.555 13.577-23.217 7.065-10.899-17.419-27.336-25.353-30.781-17.854-7.751-31.294-18.21-47.161-29.375-11.305-7.954-34.257 4.154-47.02-1.417-17.481-7.633-31.883-20.896-47.078-32.339-15.68-11.809-14.922-25.576-14.922-42.997 12.282.453 29.754-3.399 37.908 6.478 2.573 3.117 11.42 17.042 17.342 12.094 4.838-4.043-3.585-20.249-5.212-24.059-5.005-11.715 11.404-16.284 19.803-24.228 10.96-10.364 34.47-26.618 32.612-34.047s-23.524-28.477-36.249-25.193c-1.907.492-18.697 18.097-21.941 20.859.086-5.746.172-11.491.26-17.237.055-3.628-6.768-7.352-6.451-9.692.8-5.914 17.262-16.647 21.357-21.357-2.869-1.793-12.659-10.202-15.622-8.968-7.174 2.99-15.276 5.05-22.45 8.039 0-2.488-.302-4.825-.662-7.133a176.585 176.585 0 0145.31-13.152l14.084 5.66 9.944 11.801 9.924 10.233 8.675 2.795 13.779-12.995L282 87.929V79.59c27.25 3.958 52.984 14.124 75.522 29.8-4.032.361-8.463.954-13.462 1.59-2.065-1.22-4.714-1.774-6.965-2.623 6.531 14.042 13.343 27.89 20.264 41.746 7.393 14.801 23.793 30.677 26.673 46.301 3.394 18.416 1.039 35.144 2.896 56.811 1.788 20.865 23.524 44.572 23.524 44.572s10.037 3.419 18.384 2.228c-7.781 30.783-23.733 59.014-46.769 82.052z"
          fill="currentColor"
        />
      </svg>
    </>
  );
}
export function ArrowDown({ className }: { className?: string }): JSX.Element {
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
          d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"
        />
      </svg>
    </>
  );
}
export function Close({ className }: { className?: string }): JSX.Element {
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
          d="m18 18l-6-6m0 0L6 6m6 6l6-6m-6 6l-6 6"
        />
      </svg>
    </>
  );
}
export function Add({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
      </svg>
    </>
  );
}
export function Rocket({ className }: { className?: string }): JSX.Element {
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
          d="M6 15c-.83 0-1.58.34-2.12.88C2.7 17.06 2 22 2 22s4.94-.7 6.12-1.88A2.996 2.996 0 0 0 6 15zm.71 3.71c-.28.28-2.17.76-2.17.76s.47-1.88.76-2.17c.17-.19.42-.3.7-.3a1.003 1.003 0 0 1 .71 1.71zm10.71-5.06c6.36-6.36 4.24-11.31 4.24-11.31S16.71.22 10.35 6.58l-2.49-.5a2.03 2.03 0 0 0-1.81.55L2 10.69l5 2.14L11.17 17l2.14 5l4.05-4.05c.47-.47.68-1.15.55-1.81l-.49-2.49zM7.41 10.83l-1.91-.82l1.97-1.97l1.44.29c-.57.83-1.08 1.7-1.5 2.5zm6.58 7.67l-.82-1.91c.8-.42 1.67-.93 2.49-1.5l.29 1.44l-1.96 1.97zM16 12.24c-1.32 1.32-3.38 2.4-4.04 2.73l-2.93-2.93c.32-.65 1.4-2.71 2.73-4.04c4.68-4.68 8.23-3.99 8.23-3.99s.69 3.55-3.99 8.23zM15 11c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2z"
        />
      </svg>
    </>
  );
}
export function SquareArrowRight({
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
          d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm0 176H48V48h160ZM90.34 165.66a8 8 0 0 1 0-11.32L140.69 104H112a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8v48a8 8 0 0 1-16 0v-28.69l-50.34 50.35a8 8 0 0 1-11.32 0Z"
        />
      </svg>
    </>
  );
}
export function Money({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          d="M7 9a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm2-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2ZM3.5 4A1.5 1.5 0 0 0 2 5.5v7A1.5 1.5 0 0 0 3.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 14.5 4h-11ZM3 5.5a.5.5 0 0 1 .5-.5H5v1a1 1 0 0 1-1 1H3V5.5ZM3 8h1a2 2 0 0 0 2-2V5h6v1a2 2 0 0 0 2 2h1v2h-1a2 2 0 0 0-2 2v1H6v-1a2 2 0 0 0-2-2H3V8Zm10-3h1.5a.5.5 0 0 1 .5.5V7h-1a1 1 0 0 1-1-1V5Zm2 6v1.5a.5.5 0 0 1-.5.5H13v-1a1 1 0 0 1 1-1h1ZM5 13H3.5a.5.5 0 0 1-.5-.5V11h1a1 1 0 0 1 1 1v1Zm12-.5a2.5 2.5 0 0 1-2.5 2.5H4.085A1.5 1.5 0 0 0 5.5 16h9a3.5 3.5 0 0 0 3.5-3.5v-5a1.5 1.5 0 0 0-1-1.415V12.5Z"
        />
      </svg>
    </>
  );
}
export function Settings({ className }: { className?: string }): JSX.Element {
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
          d="M13.875 22h-3.75q-.375 0-.65-.25t-.325-.625l-.3-2.325q-.325-.125-.613-.3t-.562-.375l-2.175.9q-.35.125-.7.025t-.55-.425L2.4 15.4q-.2-.325-.125-.7t.375-.6l1.875-1.425Q4.5 12.5 4.5 12.337v-.674q0-.163.025-.338L2.65 9.9q-.3-.225-.375-.6t.125-.7l1.85-3.225q.175-.35.537-.438t.713.038l2.175.9q.275-.2.575-.375t.6-.3l.3-2.325q.05-.375.325-.625t.65-.25h3.75q.375 0 .65.25t.325.625l.3 2.325q.325.125.613.3t.562.375l2.175-.9q.35-.125.7-.025t.55.425L21.6 8.6q.2.325.125.7t-.375.6l-1.875 1.425q.025.175.025.338v.674q0 .163-.05.338l1.875 1.425q.3.225.375.6t-.125.7l-1.85 3.2q-.2.325-.563.438t-.712-.013l-2.125-.9q-.275.2-.575.375t-.6.3l-.3 2.325q-.05.375-.325.625t-.65.25Zm-1.825-6.5q1.45 0 2.475-1.025T15.55 12q0-1.45-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 1.45 1.012 2.475T12.05 15.5Zm0-2q-.625 0-1.063-.438T10.55 12q0-.625.438-1.063t1.062-.437q.625 0 1.063.438T13.55 12q0 .625-.438 1.063t-1.062.437ZM12 12Zm-1 8h1.975l.35-2.65q.775-.2 1.438-.588t1.212-.937l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12q0-.4-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587L11 20Z"
        />
      </svg>
    </>
  );
}
export function Help({ className }: { className?: string }): JSX.Element {
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
          d="M11.95 18q.525 0 .888-.363t.362-.887q0-.525-.362-.888t-.888-.362q-.525 0-.887.363t-.363.887q0 .525.363.888t.887.362Zm.05 4q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Zm.1-4.3q.625 0 1.088.4t.462 1q0 .55-.337.975t-.763.8q-.575.5-1.012 1.1t-.438 1.35q0 .35.263.588t.612.237q.375 0 .638-.25t.337-.625q.1-.525.45-.938t.75-.787q.575-.55.988-1.2t.412-1.45q0-1.275-1.038-2.087T12.1 6q-.95 0-1.812.4T8.975 7.625q-.175.3-.113.638t.338.512q.35.2.725.125t.625-.425q.275-.375.688-.575t.862-.2Z"
        />
      </svg>
    </>
  );
}
export function PieChart({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g fill="currentColor">
          <path
            fillRule="evenodd"
            d="M11.52 1.868c-.604-.4-1.194-.516-1.843-.412c-.553.089-1.153.342-1.796.614l-.067.029A10.75 10.75 0 1 0 21.9 16.186l.029-.067c.272-.643.526-1.242.614-1.796c.104-.65-.012-1.239-.412-1.842c-.43-.649-1.015-.963-1.726-1.104c-.633-.127-1.425-.127-2.335-.127H16c-.964 0-1.612-.002-2.095-.066c-.461-.063-.659-.17-.789-.3c-.13-.13-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094V5.93c0-.91 0-1.702-.126-2.335c-.142-.711-.456-1.296-1.104-1.726ZM8.398 3.48c.734-.31 1.164-.487 1.517-.543c.276-.044.485-.012.776.181c.246.164.38.36.462.77c.094.47.097 1.11.097 2.112v2.052c0 .899 0 1.648.08 2.243c.084.627.27 1.194.726 1.65c.455.455 1.022.64 1.65.725c.594.08 1.344.08 2.242.08H18c1.002 0 1.643.004 2.113.097c.409.082.606.216.769.462c.193.292.225.5.181.777c-.056.352-.233.782-.543 1.516a9.252 9.252 0 0 1-10.325 5.47A9.25 9.25 0 0 1 8.398 3.48Z"
            clipRule="evenodd"
          />
          <path d="M14.687 1.589a.75.75 0 1 0-.374 1.452a9.267 9.267 0 0 1 6.646 6.646a.75.75 0 1 0 1.452-.374a10.768 10.768 0 0 0-7.724-7.724Z" />
        </g>
      </svg>
    </>
  );
}
export function Brush({ className }: { className?: string }): JSX.Element {
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
          d="M232 32a8 8 0 0 0-8-8c-44.08 0-89.31 49.71-114.43 82.63A60 60 0 0 0 32 164c0 30.88-19.54 44.73-20.47 45.37A8 8 0 0 0 16 224h76a60 60 0 0 0 57.37-77.57C182.3 121.31 232 76.08 232 32Zm-107.58 81.55q5.14-6.66 10.09-12.55A76.23 76.23 0 0 1 155 121.49q-5.9 4.94-12.55 10.09a60.54 60.54 0 0 0-18.03-18.03Zm42.7-2.68a92.57 92.57 0 0 0-22-22c31.78-34.53 55.75-45 69.9-47.91c-2.85 14.16-13.37 38.13-47.9 69.91Z"
        />
      </svg>
    </>
  );
}
export function Access({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="7.5" r="1.5" fill="currentColor" />
        <path
          fill="currentColor"
          d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8z"
        />
        <path
          fill="currentColor"
          d="M16.5 10.5L16 9l-3 1h-2L8 9l-.5 1.5l3 1V13L9 17.25l1.5.75l1.25-3.5h.5L13.5 18l1.5-.75L13.5 13v-1.5l3-1z"
        />
      </svg>
    </>
  );
}
export function LogOut({ className }: { className?: string }): JSX.Element {
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
          d="M9 2h9c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-2h2v2h9V4H9v2H7V4c0-1.1.9-2 2-2z"
        />
        <path
          fill="currentColor"
          d="M10.09 15.59L11.5 17l5-5l-5-5l-1.41 1.41L12.67 11H3v2h9.67z"
        />
      </svg>
    </>
  );
}
export function EmojiSad({ className }: { className?: string }): JSX.Element {
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
          d="M14 8A6 6 0 1 0 2 8a6 6 0 0 0 12 0ZM3 8a5 5 0 1 1 10 0A5 5 0 0 1 3 8Zm4-1.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm3.5 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm-4.368 4.072c.925-1.096 2.81-1.096 3.736 0a.5.5 0 1 0 .764-.644c-1.325-1.57-3.94-1.57-5.264 0a.5.5 0 1 0 .764.644Z"
        />
      </svg>
    </>
  );
}
export function ChatRemove({ className }: { className?: string }): JSX.Element {
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
          d="m15.46 15.88l1.42-1.42L19 16.59l2.12-2.12l1.42 1.41L20.41 18l2.13 2.12l-1.42 1.42L19 19.41l-2.12 2.13l-1.42-1.42L17.59 18l-2.12-2.12M12 3c5.5 0 10 3.58 10 8c0 .58-.08 1.14-.22 1.68c-.59-.3-1.23-.52-1.9-.62c.08-.34.12-.7.12-1.06c0-3.31-3.58-6-8-6s-8 2.69-8 6s3.58 6 8 6l1.09-.05L13 18l.08.95L12 19c-1.19 0-2.38-.17-3.53-.5C6.64 20 4.37 20.89 2 21c2.33-2.33 2.75-3.9 2.75-4.5A7.218 7.218 0 0 1 2 11c0-4.42 4.5-8 10-8Z"
        />
      </svg>
    </>
  );
}
export function PersonAdd({ className }: { className?: string }): JSX.Element {
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
          d="M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4s4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2c2.69 0 5.78 1.28 6 2H3zm17-3v-3h3v-2h-3V7h-2v3h-3v2h3v3h2z"
        />
      </svg>
    </>
  );
}
export function PersonStar({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          d="M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8ZM6 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm-1.991 5A2.001 2.001 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18c.41 0 .816-.019 1.21-.057a5.501 5.501 0 0 1-.618-.958C9.398 16.995 9.2 17 9 17c-1.735 0-3.257-.364-4.327-1.047C3.623 15.283 3 14.31 3 13c0-.553.448-1 1.009-1h5.59c.184-.358.405-.693.658-1H4.01ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4.024-2.64a.494.494 0 0 0-.952 0l-.477 1.532H12c-.484 0-.686.647-.294.944l1.25.947l-.477 1.532c-.15.48.378.88.77.583l1.25-.947l1.25.947c.392.297.92-.103.77-.583l-.477-1.532l1.25-.947c.392-.297.19-.944-.294-.944h-1.545l-.478-1.531Z"
        />
      </svg>
    </>
  );
}
export function NotesAdd({ className }: { className?: string }): JSX.Element {
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
          d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v6.7q-.475-.225-.975-.388T19 11.075V5H5v14h6.05q.075.55.238 1.05t.387.95H5Zm0-3v1V5v6.075V11v7Zm2-1h4.075q.075-.525.238-1.025t.362-.975H7v2Zm0-4h6.1q.8-.75 1.788-1.25T17 11.075V11H7v2Zm0-4h10V7H7v2Zm11 14q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23Zm-.5-2h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5V21Z"
        />
      </svg>
    </>
  );
}
export function Mute({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 14 14"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m.5 13.5l13-13M4.5 5H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.5ZM10 4V3a1 1 0 0 0-.55-.89a1 1 0 0 0-1 .08L4.5 5m2.17 5.56l1.74 1.25a1 1 0 0 0 1 .08A1 1 0 0 0 10 11V7M4.5 9l.29.21"
        />
      </svg>
    </>
  );
}
export function DoNot({ className }: { className?: string }): JSX.Element {
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
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zM4 12c0-4.4 3.6-8 8-8c1.8 0 3.5.6 4.9 1.7L5.7 16.9C4.6 15.5 4 13.8 4 12zm8 8c-1.8 0-3.5-.6-4.9-1.7L18.3 7.1C19.4 8.5 20 10.2 20 12c0 4.4-3.6 8-8 8z"
        />
      </svg>
    </>
  );
}
export function Code({ className }: { className?: string }): JSX.Element {
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
          d="m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16"
        />
      </svg>
    </>
  );
}
export function Flag({ className }: { className?: string }): JSX.Element {
  return (
    <>
      <svg
        className={className || ""}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 28 28"
      >
        <path
          fill="currentColor"
          d="M5.5 16.5v-12h16.392l-3.527 5.6a.75.75 0 0 0 0 .8l3.527 5.6H5.5Zm0 1.5h17.75c.59 0 .95-.65.635-1.15l-3.999-6.35l3.999-6.35A.75.75 0 0 0 23.25 3H4.75a.75.75 0 0 0-.75.75v20.5a.75.75 0 0 0 1.5 0V18Z"
        />
      </svg>
    </>
  );
}

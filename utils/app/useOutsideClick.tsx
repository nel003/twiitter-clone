import { useState, useEffect } from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";

export default function useOutsideClick(allowedID: string, excempElem: any): [boolean, Dispatch<SetStateAction<boolean>>]{
    const [state, setState] = useState(false);

    useEffect(() => {
        function handleClick(e: Event) {
          const target = e.target as HTMLElement;
          if (allowedID !== target.id && !excempElem.current.contains(target)) {
            setState(false)
          }
        }
        
        window.addEventListener("click", handleClick);
        return () => {
          window.removeEventListener("click", handleClick);
        };
      }, []);

      return [state, setState];
}
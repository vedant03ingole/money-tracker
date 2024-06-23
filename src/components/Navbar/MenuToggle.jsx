import { motion } from "framer-motion";
import React from "react";

// const Button = styled.div`
//   z-index: 99;
//   cursor: pointer;
//   position: fixed;
//   top: 22px;
//   right: 30px ;
//   transition: all .3s ;

//   &:hover{
//     transform: scale(1.15);
//   }
// `;

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.3 }

export function MenuToggle({ toggleMenu, isOpen }) {
  return (
    <button onClick={toggleMenu} className="cursor-pointer transition-all hover:scale-110 bg-transparent">
      <svg style={{ top:"0px", right:"0px",width:"40px", height:"40px"}} width="23" height="50" viewBox="0 0 23 23">
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 10.5 2.6 L 20 2.5 ", stroke: "hsl(175, 66%, 51%)", strokeWidth:"2" },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(175, 66%, 51%)", strokeWidth:"2" },
          }}
          transition={transition}
        />
        <Path
          d="M 1.3 9.423 L 20 9.423"
          stroke="hsl(175, 66%, 51%)"
          strokeWidth="2" 
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 7 16.346 L 20 16.346", stroke: "hsl(175, 66%, 51%)", strokeWidth:"2" },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(175, 66%, 51%)", strokeWidth:"2" },
          }}
          transition={transition}
        />
      </svg>
    </button>
  );
}
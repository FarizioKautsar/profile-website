"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const DESCS = ["creative", "annoying", "techy", "stupid", "a fucking idiot"];

const PAUSE = 1;
const HEIGHT = "160px";

export default function DescribeMe() {
  return (
    <div>
      {DESCS.map((desc, dIdx) => (
        <motion.div
          animate={{
            height: ["0px", HEIGHT, HEIGHT, "0px"],
          }}
          transition={{
            delay: dIdx * PAUSE,
            repeatDelay: DESCS.length * PAUSE,
            times: [
              PAUSE * 0,
              PAUSE * 1,
              PAUSE * 2,
              PAUSE * 3,
              // PAUSE * 5,
            ],
            // repeatType: "reverse",
            repeat: 99999,
          }}
          key={dIdx}
          className="overflow-y-hidden font-bold"
        >
          {desc}.
        </motion.div>
      ))}
    </div>
  );
}

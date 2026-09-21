"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motionTokens } from "@/lib/motion-tokens";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTokens.duration.slow, ease: motionTokens.ease.emphasized },
  },
};

export function Hero() {
  return (
    <section className="brand-gradient-surface relative flex min-h-[100dvh] items-center overflow-hidden pt-16 sm:pt-20">
      <Container className="relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-3xl -translate-y-[9dvh] flex-col items-center text-center"
        >
          <motion.h1 variants={item}>
            <Image
              src="/images/wordmarks/mario-tome-core.png"
              alt="Mario Tomé Core"
              width={569}
              height={110}
              priority
              className="mx-auto h-auto w-full max-w-[320px] sm:max-w-[420px] md:max-w-[440px] lg:max-w-[480px]"
            />
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-2xl font-semibold text-accent-soft sm:text-3xl"
          >
            Software Developer
          </motion.p>

          <motion.p
            variants={item}
            className="mt-2 text-base tracking-wide text-white/90 sm:text-lg"
          >
            Python Backend · Web · Mobile · Desktop
          </motion.p>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary text-balance"
          >
            No me limito a escribir código, construyo productos
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/#work" variant="primary" className="w-[200px]">
              Ver proyectos
            </Button>
            <Button href="/#contact" variant="secondary" className="w-[200px]">
              Hablemos
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: motionTokens.duration.slow }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-text-muted"
        aria-hidden="true"
      >
        <ArrowDown size={18} className="animate-bounce" style={{ animationDuration: "2s" }} />
      </motion.div>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80dvh] items-center bg-background">
      <Container className="text-center">
        <p className="font-mono text-sm text-accent-soft">404</p>
        <h1 className="mt-4 font-brand text-4xl text-text-primary sm:text-5xl">
          Esta página no existe.
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          Puede que el proyecto que buscas se haya movido o nunca haya existido.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Volver al inicio</Button>
        </div>
      </Container>
    </section>
  );
}

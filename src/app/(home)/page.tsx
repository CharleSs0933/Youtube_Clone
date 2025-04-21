import { HydrateClient, trpc } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function Home() {
  const data = await trpc.hello({ text: "CharleSs" });

  return (
    <HydrateClient>
      <Suspense fallback={<p>Loading....</p>}>
        <ErrorBoundary fallback={<p>Error...</p>}></ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 font-sans">
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <h1 className="text-4xl font-bold text-center">Bem-vindo ao Grêmio Blog</h1>
      <p className="text-lg text-center max-w-prose">
        Notícias, análises e histórias do Grêmio Foot-Ball Porto Alegrense. Edite{' '}
        <code className="px-1 py-0.5 bg-black/5 dark:bg-white/10 rounded">app/page.tsx</code>{' '}
        para começar.
      </p>
    </main>
  );
}

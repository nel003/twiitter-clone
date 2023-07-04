import MainHeader from "@/components/MainHeader";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <div className="min-h-screen w-screen flex justify-center sm:px-2 md:px-12 dark:bg-black">
        <div className="max-w-[1270px] w-full bg-light dark:bg-black flex">
          <header className="flex-1 lg:flex-[2] sm:pl-5 lg:px-0 h-36 hidden sm:block sticky top-0">
            <MainHeader />
          </header>
          <main className="flex-[10] lg:flex-[9] flex sm:pr-8 lg:px-0">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}

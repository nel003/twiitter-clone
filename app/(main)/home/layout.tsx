export const metadata = {
    title: "Home"
}
export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return <>{children}</>
}

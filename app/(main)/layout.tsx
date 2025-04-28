import Header from "@/components/layout/Header";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

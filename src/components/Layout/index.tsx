import Header from './Header'

type Props = {
  children: React.ReactNode
}


const Layout = ({ children }: Props) => {
  return (
    <>
      <div>
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
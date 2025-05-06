import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 overflow-y-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

import Header from '../ui/components/Header';
import type { NextPage } from 'next';
import Nav from '../ui/components/Nav';
import Footer from '../ui/components/Footer';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Nav />
      <Footer />
    </div>
  )
};

export default Home;

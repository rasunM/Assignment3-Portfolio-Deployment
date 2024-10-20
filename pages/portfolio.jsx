import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import portfolio from './api/portfolio'
export const runtime = "experimental-edge";
const Portfolio = () => {
    return (
        <BannerLayout>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
                {portfolio?.map((data, key) => (<PortfolioCard key={key} data={data}/>))}
            </div >
            <Footer />
        </BannerLayout >
    );
};

export default Portfolio;

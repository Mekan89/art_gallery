import Card from "components/Card";
import Layout from "components/Layout";
import { data } from "data/data";
import { motion } from "framer-motion";
import type { NextPage } from "next";
// @ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Home: NextPage = () => {
    const variants = {
        inital: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1.5, type: "tween" } },
        exit: { opacity: 0, transition: { duration: 0.5 } },
    };
    return (
        <Layout title="Galleria">
            <motion.section variants={variants} exit="exit" initial="inital" animate="animate">
                <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 570: 2, 810: 3, 1100: 4 }}>
                    <Masonry gutter={30}>
                        {data.map((el, index) => (
                            <Card key={index} id={index} {...el} />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>

                <Masonry items={data} render={Card} />
            </motion.section>
        </Layout>
    );
};

export default Home;

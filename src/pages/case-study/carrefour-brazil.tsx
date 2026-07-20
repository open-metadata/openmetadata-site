import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    CARREFOUR_CUSTOMER_CHALLENGES,
    CARREFOUR_CUSTOMER_HEADER,
    CARREFOUR_CUSTOMER_HIGHLIGHTS,
    CARREFOUR_CUSTOMER_TESTIMONIAL,
} from "@/constants/CarrefourCustomer.constants";
import Head from "next/head";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
    return {
        props: {
            link: resolvedUrl,
        },
    };
}

const CarrefourCaseStudyPage = () => {
    return (
        <>
            <Head>
                <title>
                    Carrefour Brazil: Data Governance Success with OpenMetadata
                </title>
            </Head>
            <div>
                <div className="mt-20 md:mt-24">
                    <CustomerHeader
                        customerHeader={CARREFOUR_CUSTOMER_HEADER}
                        highlights={CARREFOUR_CUSTOMER_HIGHLIGHTS}
                    />
                    <CustomerTestimonial testimonial={CARREFOUR_CUSTOMER_TESTIMONIAL} />
                    <CustomerChallenges data={CARREFOUR_CUSTOMER_CHALLENGES} />
                    <div className="max-w-[800px] px-4 mx-auto font-bold mb-8 border-l-4">
                        <em>With thanks to the Carrefour Brazil data platform and governance team — Brenda Barcelos, Djeizi Erat, Jennifer Evangelista, Kelly Ponzetta, Ronnie Santos, and Vládia Beserra — whose work made this data transformation possible.</em>
                    </div>
                </div>
                <FooterDev />
            </div>
        </>
    );
};

export default CarrefourCaseStudyPage;
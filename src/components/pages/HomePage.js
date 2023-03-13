import Heading from "../sections/headingPages/Heading";
import Specials from "../sections/headingPages/Specials";
import Testimonial from "../section/headingPages/Testimonial";
import About from "../sections/headingPages/About";

export default function Homepage() {
    return (
        <>
            <Heading />
            <main>
                <Specials />
                <Testimonial />
                <About />
            </main>
        </>
    )
}
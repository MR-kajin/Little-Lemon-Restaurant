import Heading from "../sections/homePages/Heading";
import Specials from "../sections/homePages/Specials";
import Testimonial from "../section/headingPages/Testimonial";
import About from "../sections/homePages/About";

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
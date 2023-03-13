import { Star } from "../../../../assets/star.png";

export default function TestimonialCard(props) {
    return (
        <article className="testimonial-card">
            <img src={Star} alt="Delivery Icon" />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    );
}
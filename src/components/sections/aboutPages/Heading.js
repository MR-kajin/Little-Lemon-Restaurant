import HeroImage from "../../../assets/food/food4.webp";

export default function Heading() {
    return (
        <header>
            <img
                className="header-reserve"
                src={HeroImage}
                alt="Little Lemon Ingredients"
            />
            <div className="reserve-header-text">
                <h1>About us</h1>
            </div>
        </header>
    )
}
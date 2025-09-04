import { AnimationObject } from "lottie-react-native";

export interface onboardingData{
    id: number;
    animation: AnimationObject;
    title: string;
    text: string;
    textColor: string;
    backgroundColor: string;
}

const data: onboardingData[] = [
    {
        id: 1,
        animation: require("../../../Assets/animations/Couple_love.json"),
        title: 'Welcome🎉',
        text: `Surprise your favourite person by arranging the perfect event.`,
        textColor: "#4285F4",
        backgroundColor: "#ffa3ce"
    },
    {
        id: 2,
        animation: require("../../../Assets/animations/book_event_Animation.json"),
        title: 'Book Your Events🎊',
        text: 'Book your events effortlessly and get ready to celebrate with joy.',
        textColor: "#EA4335",
        backgroundColor: "#bae4fd"
    },
    {
        id: 3,
        animation: require("../../../Assets/animations/Long_Dog.json"),
        title: 'Enjoy the Moments✨',
        text: 'After booking, sit back, relax, and calmly enjoy your events.',
        textColor: "#34A853",
        backgroundColor: "#ffa3ce"
    }
]

export default data;
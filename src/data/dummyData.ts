import { BlogPost } from "../types/blogs"
import glennImage from '../assets/images/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg'; 
import runningShoes from '../assets/images/bruno-nascimento-PHIgYUGQPvU-unsplash.jpg'

export const dummyData: BlogPost[] = [
    {
        id: 1,
        title: "First post",
        text: "Hello world :)",
        image: glennImage,
        author: "Jacob Langley"
    },
    {
        id: 2, 
        title: "Choose the best running shoes", 
        text: "The top shoe for 2024 in running is this generic shoe", 
        image: runningShoes,
        author: "Timothy Scott"
    }
]
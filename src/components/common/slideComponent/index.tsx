
import { CourseType } from "@/services/courseService"
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import { Pagination } from "reactstrap"
import SlideCard from "../slideCard"

interface props {
    course: CourseType[]
}

const SlideComponent = ({course}: props) => {

    let slideCount = 0
    if(course.length > 4){
        slideCount = 4
    }else if(course){
        slideCount = course.length
    }

    return (
        <>
            <div className="d-flex flex-column align-items-center py-4">
                <Splide options={{
                    type: "loop",
                    perPage: slideCount,
                    perMove: 1,
                    width: slideCount *300,
                    pagination: false,

                    breakpoints: {
                        1200: {
                            perPage: 2,
                            width: 600
                        },
                        600:{
                            perPage: 1,
                            width: 300
                        },
                        300: {
                            perPage: 1,
                            width: 250
                        }
                    }
                }}>

                    {course?.map((course)=> (
                        <SplideSlide key={course.id}>
                            <SlideCard course={course}/>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>



        </>
    )

}

export default SlideComponent
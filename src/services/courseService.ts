import { error } from "console"
import api from "./api"

export type EpisodeType = {
    id: number
    name: string
    synopsis: string
    order: number
    videoUrl: string
    secondsLong: number
}

export type CourseType = {
id: number
name: string
thumbnailUrl: string
synopsis: string
episodes?: EpisodeType[]
}

const courseService = {

    getNewestCourses: async ()=>{
        const res = await api.get("/courses/newest").catch((err)=> {
            console.log(err.response.data.message)
            return err.response
        })

        return res
    }
}

export default courseService
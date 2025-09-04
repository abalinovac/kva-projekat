import axios from "axios";
import { scheduled } from "rxjs";
import { scheduleArray } from "rxjs/internal/scheduled/scheduleArray";

const client = axios.create({
    baseURL: 'https://flight.pequla.com/api',
    headers: {
        'Accept': 'application/json',
        'X-client-name': 'KVA/2025'
    },

    validateStatus: (status: number) => {
        return status === 200
        //samo ako je 200 vrati response
    }
})

export class CinemaService {
    static async getMovies(page: number = 0, size: number = 10) {
        return client.request({
            url:'/flight',
            method: 'GET',
            params: {
                'page': page,
                'size': size,
                'sort': 'scheduledAt,asc',
                'type': 'departure',
            }
        })
    }

    static async getMoviesById(id: number){
        return client.get('/flight/' + id)
    }
}
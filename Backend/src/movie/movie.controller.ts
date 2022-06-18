import { Controller, Req, Get, UseGuards, Post, Body } from '@nestjs/common';
import { Request } from 'express';
import { MovieDto } from './dto';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
    constructor(private movieService:  MovieService) {}
    @Get("all")
    getMovieList(@Req() req: Request) {
        return this.movieService.getAll()
    }

    @Post("add")
    createMovieList(@Body() dto: MovieDto ) {
        console.log("movie data",{dto})
        return this.movieService.addMovie(dto)
    
    }
}

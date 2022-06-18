import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { MovieDto, PaginatedMovieDto } from './dto';

@Injectable()
export class MovieService {
    constructor(
        private prisma: PrismaService,
        private config: ConfigService
    ) { }

    async addMovie(dto: MovieDto) {
        try {
            const movie = await this.prisma.movie.create({
                data: {
                    name: dto.name,
                    posterUrl: dto.posterUrl,
                    rating: dto.rating              
                },
                select: {
                    name: true,
                    createdAt: true
                }
            })
            return movie
        }
        catch (error) {
            throw error
        }
    }

    async getAll() {
        const list = await this.prisma.movie.findMany()
        return list
    }

    async getAllPaginateData(params: PaginatedMovieDto){
        const skip = +params.skip
        const take = +params.take
        const paginatedMovies = await this.prisma.movie.findMany({
            skip: skip ,
            take:take,
            
            where: {
                name: {
                    contains:  params.searchText?? ""
                }
            },
            orderBy: {
               id: "asc"
            },
            select:{
                id: true,
                name: true
            }
        })

        const count = await this.prisma.movie.count({
            where: {
                name: {
                    contains: params.searchText?? ""
                }
            }
        })

        const obj = {
            count: count,
            data: paginatedMovies
        }

        return obj
    }
}

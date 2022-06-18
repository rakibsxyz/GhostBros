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
                    description: dto.description
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
                name: 'asc'
            },
            select:{
                id: true,
                name: true
            }
        })
        return paginatedMovies
    }
}

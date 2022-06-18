import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { MovieDto } from './dto';

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
}

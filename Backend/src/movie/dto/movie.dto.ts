import { IsNotEmpty, IsNumber, IsString, isString } from "class-validator";

export class MovieDto {
   

   @IsNotEmpty()
   @IsString()
    name: string;

    @IsString()
    posterUrl: string;

    @IsNumber()
    rating: number

}

export class PaginatedMovieDto {
    @IsNumber()
    skip?: number;

    @IsNumber()
    take?: number;

    @IsString()
    searchText?: string;

    @IsString()
    order?: string
}
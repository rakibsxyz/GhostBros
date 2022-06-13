import { IsNotEmpty, IsString, isString } from "class-validator";

export class MovieDto {
   

   @IsNotEmpty()
   @IsString()
    name: string;

    @IsString()
    description: string;

}
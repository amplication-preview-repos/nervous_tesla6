/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BetUpdateManyWithoutGamesInput } from "./BetUpdateManyWithoutGamesInput";
import { ValidateNested, IsOptional, IsNumber } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GameUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BetUpdateManyWithoutGamesInput,
  })
  @ValidateNested()
  @Type(() => BetUpdateManyWithoutGamesInput)
  @IsOptional()
  @Field(() => BetUpdateManyWithoutGamesInput, {
    nullable: true,
  })
  bets?: BetUpdateManyWithoutGamesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  crashPoint?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  currentMultiplier?: number | null;
}

export { GameUpdateInput as GameUpdateInput };

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
import { BetCreateNestedManyWithoutGamesInput } from "./BetCreateNestedManyWithoutGamesInput";
import { ValidateNested, IsOptional, IsNumber } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GameCreateInput {
  @ApiProperty({
    required: false,
    type: () => BetCreateNestedManyWithoutGamesInput,
  })
  @ValidateNested()
  @Type(() => BetCreateNestedManyWithoutGamesInput)
  @IsOptional()
  @Field(() => BetCreateNestedManyWithoutGamesInput, {
    nullable: true,
  })
  bets?: BetCreateNestedManyWithoutGamesInput;

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

export { GameCreateInput as GameCreateInput };

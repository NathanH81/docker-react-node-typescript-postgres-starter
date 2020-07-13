import { Resolver, Query, Arg, ID } from "type-graphql";
import { User } from "../models";

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async getUser(@Arg("id") id: string) {
    return await User.findOne({ id });
  }
}

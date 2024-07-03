/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ProductReview } from "./ProductReview";
import { ProductReviewCountArgs } from "./ProductReviewCountArgs";
import { ProductReviewFindManyArgs } from "./ProductReviewFindManyArgs";
import { ProductReviewFindUniqueArgs } from "./ProductReviewFindUniqueArgs";
import { CreateProductReviewArgs } from "./CreateProductReviewArgs";
import { UpdateProductReviewArgs } from "./UpdateProductReviewArgs";
import { DeleteProductReviewArgs } from "./DeleteProductReviewArgs";
import { User } from "../../user/base/User";
import { ProductReviewService } from "../productReview.service";
@graphql.Resolver(() => ProductReview)
export class ProductReviewResolverBase {
  constructor(protected readonly service: ProductReviewService) {}

  async _productReviewsMeta(
    @graphql.Args() args: ProductReviewCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ProductReview])
  async productReviews(
    @graphql.Args() args: ProductReviewFindManyArgs
  ): Promise<ProductReview[]> {
    return this.service.productReviews(args);
  }

  @graphql.Query(() => ProductReview, { nullable: true })
  async productReview(
    @graphql.Args() args: ProductReviewFindUniqueArgs
  ): Promise<ProductReview | null> {
    const result = await this.service.productReview(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ProductReview)
  async createProductReview(
    @graphql.Args() args: CreateProductReviewArgs
  ): Promise<ProductReview> {
    return await this.service.createProductReview({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => ProductReview)
  async updateProductReview(
    @graphql.Args() args: UpdateProductReviewArgs
  ): Promise<ProductReview | null> {
    try {
      return await this.service.updateProductReview({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ProductReview)
  async deleteProductReview(
    @graphql.Args() args: DeleteProductReviewArgs
  ): Promise<ProductReview | null> {
    try {
      return await this.service.deleteProductReview(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: ProductReview): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

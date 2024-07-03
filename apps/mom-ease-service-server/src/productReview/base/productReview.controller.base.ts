/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ProductReviewService } from "../productReview.service";
import { ProductReviewCreateInput } from "./ProductReviewCreateInput";
import { ProductReview } from "./ProductReview";
import { ProductReviewFindManyArgs } from "./ProductReviewFindManyArgs";
import { ProductReviewWhereUniqueInput } from "./ProductReviewWhereUniqueInput";
import { ProductReviewUpdateInput } from "./ProductReviewUpdateInput";

export class ProductReviewControllerBase {
  constructor(protected readonly service: ProductReviewService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProductReview })
  async createProductReview(
    @common.Body() data: ProductReviewCreateInput
  ): Promise<ProductReview> {
    return await this.service.createProductReview({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        photoUrl: true,
        productName: true,
        rating: true,
        reviewContent: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ProductReview] })
  @ApiNestedQuery(ProductReviewFindManyArgs)
  async productReviews(
    @common.Req() request: Request
  ): Promise<ProductReview[]> {
    const args = plainToClass(ProductReviewFindManyArgs, request.query);
    return this.service.productReviews({
      ...args,
      select: {
        createdAt: true,
        id: true,
        photoUrl: true,
        productName: true,
        rating: true,
        reviewContent: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProductReview })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async productReview(
    @common.Param() params: ProductReviewWhereUniqueInput
  ): Promise<ProductReview | null> {
    const result = await this.service.productReview({
      where: params,
      select: {
        createdAt: true,
        id: true,
        photoUrl: true,
        productName: true,
        rating: true,
        reviewContent: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ProductReview })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProductReview(
    @common.Param() params: ProductReviewWhereUniqueInput,
    @common.Body() data: ProductReviewUpdateInput
  ): Promise<ProductReview | null> {
    try {
      return await this.service.updateProductReview({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          photoUrl: true,
          productName: true,
          rating: true,
          reviewContent: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ProductReview })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProductReview(
    @common.Param() params: ProductReviewWhereUniqueInput
  ): Promise<ProductReview | null> {
    try {
      return await this.service.deleteProductReview({
        where: params,
        select: {
          createdAt: true,
          id: true,
          photoUrl: true,
          productName: true,
          rating: true,
          reviewContent: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

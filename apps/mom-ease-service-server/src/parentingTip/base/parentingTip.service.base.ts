/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ParentingTip as PrismaParentingTip,
  User as PrismaUser,
} from "@prisma/client";

export class ParentingTipServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ParentingTipCountArgs, "select">
  ): Promise<number> {
    return this.prisma.parentingTip.count(args);
  }

  async parentingTips(
    args: Prisma.ParentingTipFindManyArgs
  ): Promise<PrismaParentingTip[]> {
    return this.prisma.parentingTip.findMany(args);
  }
  async parentingTip(
    args: Prisma.ParentingTipFindUniqueArgs
  ): Promise<PrismaParentingTip | null> {
    return this.prisma.parentingTip.findUnique(args);
  }
  async createParentingTip(
    args: Prisma.ParentingTipCreateArgs
  ): Promise<PrismaParentingTip> {
    return this.prisma.parentingTip.create(args);
  }
  async updateParentingTip(
    args: Prisma.ParentingTipUpdateArgs
  ): Promise<PrismaParentingTip> {
    return this.prisma.parentingTip.update(args);
  }
  async deleteParentingTip(
    args: Prisma.ParentingTipDeleteArgs
  ): Promise<PrismaParentingTip> {
    return this.prisma.parentingTip.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.parentingTip
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
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
  Milestone as PrismaMilestone,
  User as PrismaUser,
} from "@prisma/client";

export class MilestoneServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MilestoneCountArgs, "select">
  ): Promise<number> {
    return this.prisma.milestone.count(args);
  }

  async milestones(
    args: Prisma.MilestoneFindManyArgs
  ): Promise<PrismaMilestone[]> {
    return this.prisma.milestone.findMany(args);
  }
  async milestone(
    args: Prisma.MilestoneFindUniqueArgs
  ): Promise<PrismaMilestone | null> {
    return this.prisma.milestone.findUnique(args);
  }
  async createMilestone(
    args: Prisma.MilestoneCreateArgs
  ): Promise<PrismaMilestone> {
    return this.prisma.milestone.create(args);
  }
  async updateMilestone(
    args: Prisma.MilestoneUpdateArgs
  ): Promise<PrismaMilestone> {
    return this.prisma.milestone.update(args);
  }
  async deleteMilestone(
    args: Prisma.MilestoneDeleteArgs
  ): Promise<PrismaMilestone> {
    return this.prisma.milestone.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.milestone
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
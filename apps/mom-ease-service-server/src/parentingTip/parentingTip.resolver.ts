import * as graphql from "@nestjs/graphql";
import { ParentingTipResolverBase } from "./base/parentingTip.resolver.base";
import { ParentingTip } from "./base/ParentingTip";
import { ParentingTipService } from "./parentingTip.service";

@graphql.Resolver(() => ParentingTip)
export class ParentingTipResolver extends ParentingTipResolverBase {
  constructor(protected readonly service: ParentingTipService) {
    super(service);
  }
}

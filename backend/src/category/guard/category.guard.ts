import { BadRequestException, CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { InjectModel } from "nestjs-typegoose";

import { CategoryEntity } from "../category.entity";


@Injectable()
export class CategoryGuard implements CanActivate {
	constructor(private reflector: Reflector
		) {}
	canActivate(context: ExecutionContext): boolean {
		const request = context.switchToHttp().getRequest<{ category: CategoryEntity }>()
		const category = request.category

		if (!category) throw new BadRequestException('Bad request')

		return !!category
	}
}
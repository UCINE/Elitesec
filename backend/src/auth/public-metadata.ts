import { SetMetadata } from "@nestjs/common";
import { CustomDecorator } from "@nestjs/common/decorators/core/set-metadata.decorator";

export const IS_PUBLIC_KEY = "isPublic";
export const Public = (): CustomDecorator<string> =>
  SetMetadata(IS_PUBLIC_KEY, true);

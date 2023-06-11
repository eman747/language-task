import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Text, TextCreateInput } from "../../prisma/generated/type-graphql";
import { Context } from "../context";
import axios from "axios";

@Resolver(Text)
export class TextResolver {
  @Query(() => [Text])
  async texts(@Ctx() ctx: Context): Promise<Text[]> {
    return ctx.prisma.text.findMany();
  }

  @Query(() => Text)
  async text(@Arg("id") id: number, @Ctx() ctx: Context): Promise<Text> {
    return ctx.prisma.text.findFirst({
      where: {
        id,
      },
    });
  }

  @Query(() => Text)
  async translate(
    @Arg("text") text: string,
    @Arg("targetLanguage") targetLanguage: string,
    @Ctx() ctx: Context
  ): Promise<Text> {
    try {
      const response = await axios.get(
        "https://api.mymemory.translated.net/get",
        {
          params: {
            q: text,
            langpair: `en|${targetLanguage}`,
          },
        }
      );

      const translatedText = response.data.responseData.translatedText;
      return await ctx.prisma.text.create({
        data: {
          language: targetLanguage,
          translatedText: translatedText,
        },
      });
    } catch (error) {
      console.error("Translation error:", error);
      throw new Error("Failed to translate text");
    }
  }

  @Mutation(() => Text)
  async createText(
    @Arg("data") data: TextCreateInput,
    @Ctx() ctx: Context
  ): Promise<Text> {
    return await ctx.prisma.text.create({
      data: {
        ...data,
      },
    });
  }
}

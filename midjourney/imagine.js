import { Midjourney } from "midjourney";
/**
 *
 * a simple example of how to use the imagine command
 * ```
 * npx tsx example/imagine.ts
 * ```
 */
export default async () => {

  let ret;

  try {
    const client = new Midjourney({
      ServerId: '1082500871478329374',
      ChannelId: '1094892992281718894',
      SalaiToken: '"MTA4OTc4MTAwOTk4NzQxNjA2OA.G4ILp-.DMisCXyVAiUwg9CMLi7ewK_TAkR3i8_HEWgIV4"',
      Debug: true,
      Ws: false,
    });
  
    const msg = await client.Imagine(
      "Red hamster",
      (uri, progress) => {
        console.log("loading", uri, "progress", progress);
      }
    );
    console.log(JSON.stringify(msg));
    ret = msg;
  } catch (e) {
    ret = e.message;
  }

  return ret;
}

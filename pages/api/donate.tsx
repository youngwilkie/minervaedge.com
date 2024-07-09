import { Client } from "square";
import { randomUUID } from 'crypto';

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};
const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: "sandbox" as any,
});

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const totalCents = req.body.total * 100
    const bigintTotalCents = BigInt(totalCents);
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: req.body.sourceId,
      amountMoney: {
        currency: 'USD',
        amount: bigintTotalCents
      }
    })
    console.log(result);
    res.status(200).json(result);
  } else {
    res.status(500).send();
  }
}
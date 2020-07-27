const stripe = require("stripe")(
  "sk_test_51H9aL7Eh3RGAnd33wOEOiSrYGqFAZsKDiOxV2XShWub9RxqGp1ur9QL2vwDQtWDEliRxSb01BOXskN9rGmarl74O00oOipOdxg"
)

exports.handler = async function (event) {
  const { tokenId, email, name, description, amount } = JSON.parse(event.body)

  const customer = await stripe.customers.create({
    description: email,
    source: tokenId,
  })

  await stripe.charges.create({
    customer: customer.id,
    amount,
    name,
    description,
    currency: "usd",
  })
}

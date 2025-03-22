require("dotenv").config();
const express = require("express");
const stripe = require("stripe")(process.env.sk_test_51R5RPtE0NbwE151AiXydvHVCMunD4bQD0WeUmB02IEoFwsKFqlHKcPisqZxtFgstBe1dT6b6sdoUGKk9GthdMl7W00iRwexVok);
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Payment Route
app.post("/create-checkout-session", async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card", "google_pay"],
            mode: "payment",
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: "EduPrep Subscription",
                        },
                        unit_amount: 5000, // $50.00
                    },
                    quantity: 1,
                },
            ],
            success_url: "http://localhost:5500/success.html",
            cancel_url: "http://localhost:5500/cancel.html",
        });

        res.json({ url: session.url });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
  console.log("----------------");
  console.log(req.headers);

  try {
    // Create svix instance with Clerk webhook secret
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    console.log(req.headers);

    // Get headers (ensure lowercase keys when accessing headers)
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };
    console.log(headers);

    if (
      !headers["svix-id"] ||
      !headers["svix-timestamp"] ||
      !headers["svix-signature"]
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required Svix headers" });
    }

    // Verify the webhook
    const payload = JSON.stringify(req.body);
    whook.verify(payload, headers);

    const { data, type } = req.body;
    console.log("Webhook event type:", type);
    console.log("User data:", data);

    // Prepare user data
    const userData = {
      _id: data.id,
      username: `${data.first_name} ${data.last_name}`,
      email: data.email_addresses[0]?.email_address,
      image: data.image_url,
    };

    // Handle webhook events
    switch (type) {
      case "user.created":
        await User.create(userData);
        break;

      case "user.updated":
        await User.findByIdAndUpdate(data.id, userData);
        break;

      case "user.deleted":
        await User.findByIdAndDelete(data.id);
        break;

      default:
        console.log("Unhandled event type:", type);
        break;
    }

    res.json({ success: true, message: "Webhook received" });
  } catch (error) {
    console.error("Webhook error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

export default clerkWebhooks;

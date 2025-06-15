import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
  try {
    // create svix instance with clerk webhook secret
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    //    getting headers
    const header = {
      "svix-id": req.header["svix-id"],
      "svix-timestamp": req.header["svix-timestamp"],
      "svix-signature": req.header["svix-signature"],
    };
    //   verify Headers
    await whook.verify(JSON.stringify(req.body), header);
    //  geting data from request body

    const { data, type } = req.body;
    // data will store in database
    const userData = {
      _id: data.id,
      username: data.first_name + " " + data.last_name,
      email: data.email_addresses[0].email_address,
      image: data.image_url,
      //   createdAt: data.created_at,
      //   updatedAt: data.updated_at,
    };

    // switch case for different events
    switch (type) {
      case "user.created": {
        await User.create(userData);
        break;
      }

      case "user.updated": {
        await User.findbuyAndUpdate(data.id, userData);
        break;
      }
      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        break;
      }

      default:
        break;
    }
    res.json({ success: true, message: "webhook recieved" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export default clerkWebhooks;

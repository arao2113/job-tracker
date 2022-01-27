import dbConnect from "../../../utils/dbConnect";
import Jobs from "../../../models/Jobs";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const jobs = await Jobs.find({});

        res.status(200).json({ success: true, data: jobs });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const job = await Jobs.create(req.body);

        res.status(201).json({ success: true, data: job });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ succes: false });
  }
};

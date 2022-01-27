import dbConnect from "../../../utils/dbConnect";
import Jobs from "../../../models/Jobs";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const job = await Jobs.findById(id);

        if (!job) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: job });
      } catch (error) {
        res.status(400).json({ success: fale });
      }
      break;
    case "PUT":
      try {
        const job = await Jobs.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!job) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: job });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deleteJob = await Jobs.deleteOne({ _id: id });
        if (!deleteJob) {
          return res.status(400).json({ success: fale });
        }
        res.status(200).json({ success: true, data: {} });
      } catch {
        return res.status(400).json({ success: fale });
      }
      break;
    default:
      return res.status(400).json({ success: fale });
      break;
  }
};

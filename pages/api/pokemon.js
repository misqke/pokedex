import axios from "axios";

export default async function handler(req, res) {
  const num = req.query.num;
  console.log(num);
  if (req.method === "GET") {
    const data = await axios.get(`${process.env.SERVER}/api/?num=${num}`);
    console.log(data);
    res.status(200).json({ data: data.data });
  }
}

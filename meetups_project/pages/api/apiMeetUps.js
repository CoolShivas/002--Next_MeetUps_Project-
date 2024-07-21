import { MongoClient } from "mongodb";

const apiMeetUps = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://shivas2710cool00:8frqrkDg0VDOu0MK@cluster0.ncqmpot.mongodb.net/shivajiData?retryWrites=true&w=majority&appName=Cluster0"
    );

    const db = client.db();

    const meetupsCollection = db.collection("uniqueStar");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({
      message: "MeetUps inserted",
    });
  }
};

export default apiMeetUps;

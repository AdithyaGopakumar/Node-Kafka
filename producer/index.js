const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  // clientId: "my-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

const runProducer = async () => {
  await producer.connect();
  await producer.send({
    topic: "test",
    messages: [{ value: "Hello KafkaJS user!" }],
  });
  console.log("message sent");
};

setInterval(() => {
  runProducer()
}, 3000);

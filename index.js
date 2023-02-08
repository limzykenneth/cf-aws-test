import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  ListObjectsV2Command,
  DeleteObjectCommand
} from "@aws-sdk/client-s3";

const client = new S3Client({
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY
  },
  endpoint: "https://my-test-bucket.s3.us-east-1.amazonaws.com/",
  region: "us-east-1"
});

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const command  = new DeleteObjectCommand({
    Bucket: "footages",
    Key: "small.mp4"
  });

  const result = await client.send(command);

  return new Response(result);
}

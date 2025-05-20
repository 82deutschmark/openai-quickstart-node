import OpenAI from "openai";

// Initialize the OpenAI client with API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Generate images using the gpt-image-1 model
const response = await openai.images.generate({
  model: "gpt-image-1",
  prompt: process.argv[2] || "A happy strawberry running through a field of flowers",
  n: 2, // number of images to generate
  size: "1024x1024",
  quality: "high"  // high quality setting
});

// Log the URLs of the generated images
response.data.forEach((image, index) => {
  console.log(`Image ${index + 1}: ${image.url}`);
});

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";

  const apiKey = "AIzaSyDVtoG6j21G3_xbrzfrgBb3zT85WEFJfUo";
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text();
  }

  export default run;
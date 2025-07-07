const askOpenAI = async (question, codeContext) => {
  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'DevCompanion',
      },
      body: JSON.stringify({
        model: 'mistralai/mixtral-8x7b-instruct', // Use a working model
        messages: [
          {
            role: 'user',
            content: `Question: ${question}\nCode Context:\n${codeContext}`,
          },
        ],
      }),
    });

    const data = await response.json();
    console.log("Full API response:", data);

    if (!response.ok) {
      throw new Error(data.error?.message || 'Request failed');
    }

    return data.choices?.[0]?.message?.content || 'No response from AI.';
  } catch (error) {
    console.error("API call failed:", error);
    return `Error: ${error.message}`;
  }
};

export default askOpenAI;

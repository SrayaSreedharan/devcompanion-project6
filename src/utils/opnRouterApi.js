const askOpenAI = async (question, codeContext) => {
    console.log(process.env.REACT_APP_OPENROUTER_API_KEY,"msg")
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_OPENROUTER_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `Question: ${question}\nCode Context:\n${codeContext}`,
        },
      ],
    }),
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content || 'No response from AI.';
};

export default askOpenAI;




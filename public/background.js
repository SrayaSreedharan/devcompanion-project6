/* global chrome */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'askOpenAI') {
    fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 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',
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'DevCompanion',
      },
      body: JSON.stringify({
        model: 'mistralai/mixtral-8x7b-instruct',
        messages: [
          {
            role: 'user',
            content: `Question: ${request.question}\nCode Context:\n${request.codeContext}`,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        sendResponse({ result: data.choices?.[0]?.message?.content });
      })
      .catch((err) => {
        sendResponse({ error: err.message });
      });

    return true; 
  }
});



